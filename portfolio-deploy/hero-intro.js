/* Hero intro: typewriter name + three interactive words ("moves", "reacts", "surprises").
   Ported from hero-intro-demo.html. script.js calls HeroIntro.init() after the home
   page is rendered and HeroIntro.destroy() before any page swap. */
(function(){
  "use strict";

  /* ---------- easy-to-edit settings ---------- */
  var PALETTE = ['#FF3D2E', '#1E5BFF', '#00A86B', '#FFB000', '#B14CFF'];
  var TYPE_MS = 110; // typewriter speed per character
  var IDLE_AFTER_MS = 4000;
  // true = follow the OS "reduce motion" setting (instant name swap, no wave/repel/idle/pop).
  // set to false to always play the full effect.
  var RESPECT_REDUCED_MOTION = false;

  var state = null;

  function init(){
    destroy();
    var root = document.querySelector("[data-hero-intro]");
    if (!root) return;

    var reduce = RESPECT_REDUCED_MOTION && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var s = state = { alive: true, raf: 0, surpTimer: 0, timeouts: [], cleanups: [] };

    function later(fn, ms){ var id = setTimeout(fn, ms); s.timeouts.push(id); return id; }
    function on(target, type, fn, opts){
      target.addEventListener(type, fn, opts);
      s.cleanups.push(function(){ target.removeEventListener(type, fn, opts); });
    }

    /* ---------- 1. typewriter name ---------- */
    var nameEl = root.querySelector(".hi-n");
    var FULL = "I’m Ishika";
    nameEl.setAttribute("aria-label", FULL);
    nameEl.textContent = "";
    var typed = document.createElement("span");
    typed.setAttribute("aria-hidden", "true");
    var caret = document.createElement("span");
    caret.className = "hi-caret"; caret.setAttribute("aria-hidden", "true");
    nameEl.appendChild(typed); nameEl.appendChild(caret);
    var ti = 0;
    function typeNext(){
      if (!s.alive) return;
      ti++;
      typed.textContent = FULL.slice(0, ti);
      if (ti < FULL.length) later(typeNext, TYPE_MS + Math.random() * 70);
      else caret.classList.add("done");
    }
    function beginTyping(){
      if (!s.alive || s.typing) return;
      s.typing = true;
      if (reduce){ typed.textContent = FULL; caret.classList.add("done"); return; }
      later(typeNext, 250);
    }

    /* ---------- 2. the three words ---------- */
    function split(el){
      var t = el.textContent; el.textContent = "";
      return Array.prototype.map.call(t, function(ch){
        var sp = document.createElement("span");
        sp.className = "hi-ch"; sp.textContent = ch; sp.setAttribute("aria-hidden", "true");
        el.appendChild(sp);
        return { el: sp, x: 0, y: 0, r: 0, s: 1 };
      });
    }
    var wMoves = root.querySelector('[data-w="moves"]');
    var wReacts = root.querySelector('[data-w="reacts"]');
    var wSurp = root.querySelector('[data-w="surprises"]');
    wMoves.setAttribute("aria-label", "move");
    wReacts.setAttribute("aria-label", "react");
    wSurp.setAttribute("aria-label", "surprise");
    var mL = split(wMoves), sL = split(wSurp).map(function(o){ return o.el; });

    var px = -999, py = -999, lastInput = performance.now();
    function point(x, y){ px = x; py = y; lastInput = performance.now(); }
    on(window, "pointermove", function(e){ point(e.clientX, e.clientY); });
    on(window, "pointerdown", function(e){ point(e.clientX, e.clientY); });
    on(window, "touchstart", function(e){ var t = e.touches[0]; if (t) point(t.clientX, t.clientY); }, { passive: true });
    on(window, "touchmove", function(e){ var t = e.touches[0]; if (t) point(t.clientX, t.clientY); }, { passive: true });
    function release(e){ if (!e || e.pointerType !== "mouse"){ px = -999; py = -999; } }
    on(window, "pointerup", release);
    on(window, "pointercancel", release);
    on(window, "touchend", function(){ px = -999; py = -999; }, { passive: true });
    on(document.documentElement, "pointerleave", function(){ px = -999; py = -999; });

    var movesHover = false, surpHover = false;
    on(wMoves, "pointerenter", function(){ movesHover = true; });
    on(wMoves, "pointerleave", function(){ movesHover = false; });

    /* surprises: bold + colour pop, reshuffles while hovered */
    var sOn = false;
    function burst(){
      var off = Math.floor(Math.random() * PALETTE.length);
      sL.forEach(function(l, i){
        l.style.transitionDelay = (i * 28) + "ms";
        l.style.fontWeight = 800;
        l.style.color = PALETTE[(i + off) % PALETTE.length];
        if (reduce) return;
        l.style.transform = "translateY(-.14em) scale(1.12)";
        later(function(){ if (sOn) l.style.transform = "none"; }, 260 + i * 28);
      });
    }
    function surpriseOn(){ if (sOn) return; sOn = true; burst(); s.surpTimer = setInterval(burst, 700); }
    function surpriseOff(){
      if (!sOn) return; sOn = false; clearInterval(s.surpTimer);
      sL.forEach(function(l, i){
        l.style.transitionDelay = (i * 18) + "ms";
        l.style.fontWeight = 800; l.style.color = ""; l.style.transform = "none";
      });
    }
    on(wSurp, "pointerenter", function(){ surpHover = true; surpriseOn(); });
    on(wSurp, "pointerleave", function(){ surpHover = false; surpriseOff(); });
    on(wSurp, "click", burst);

    /* ---------- single animation loop: moves = wave; reacts = CSS filled box ---------- */
    var idleStart = 0, wasIdle = false;
    var fsM = 0;
    function measure(){
      fsM = parseFloat(getComputedStyle(wMoves).fontSize);
    }
    measure();
    on(window, "resize", measure);

    function loop(now){
      if (!s.alive) return;
      var idle = !reduce && now - lastInput > IDLE_AFTER_MS;
      if (idle && !wasIdle) idleStart = now;
      wasIdle = idle;
      var ph = idle ? ((now - idleStart) / 1000) % 10 : -1;

      if (!reduce){
        var movesOn = movesHover || (ph >= 0 && ph < 2.6);
        mL.forEach(function(l, i){
          var t = movesOn ? 1 : 0;
          var tx = t * Math.sin(now / 300 - i * 0.6) * fsM * 0.10;
          var ty = t * Math.sin(now / 220 - i * 0.7) * fsM * 0.22;
          var tr = t * Math.sin(now / 220 - i * 0.7 + 1) * 8;
          l.x += (tx - l.x) * 0.2; l.y += (ty - l.y) * 0.2; l.r += (tr - l.r) * 0.2;
          l.el.style.transform = "translate(" + l.x.toFixed(2) + "px," + l.y.toFixed(2) + "px) rotate(" + l.r.toFixed(2) + "deg)";
        });

        wReacts.classList.toggle("is-on", ph >= 3 && ph < 5.6);

        if (idle){
          var want = ph >= 6 && ph < 8.6;
          if (want) surpriseOn(); else if (!surpHover) surpriseOff();
        } else if (!surpHover) surpriseOff();
      }

      s.raf = requestAnimationFrame(loop);
    }

    function startLoop(){ if (!reduce && !s.raf) s.raf = requestAnimationFrame(loop); }
    function stopLoop(){ cancelAnimationFrame(s.raf); s.raf = 0; }

    on(document, "visibilitychange", function(){
      if (document.hidden){
        stopLoop();
      } else {
        lastInput = performance.now();
        startLoop();
      }
    });

    startLoop();

    /* typing waits for the loading screen to finish */
    if (window.__portfolioReady){
      beginTyping();
    } else {
      on(document, "portfolio:ready", beginTyping);
    }
  }

  function destroy(){
    var s = state;
    if (!s) return;
    s.alive = false;
    cancelAnimationFrame(s.raf);
    clearInterval(s.surpTimer);
    s.timeouts.forEach(clearTimeout);
    s.cleanups.forEach(function(fn){ fn(); });
    state = null;
  }

  window.HeroIntro = { init: init, destroy: destroy };
})();
