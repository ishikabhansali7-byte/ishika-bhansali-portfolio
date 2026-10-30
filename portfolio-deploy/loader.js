/* Loading screen: a single ink drop falls, ripples out, blooms into a blob,
   a loading bar races to 99% and gets stuck on the joke, then everything
   reveals the page underneath.
   Fires document "loader:done" (and sets window.__loaderDone) when finished or skipped. */
(function(){
  "use strict";

  var STORAGE_KEY = "loaderSeen";
  var root = document.documentElement;
  var el = document.getElementById("loader");
  var timers = [];
  var raf = 0;
  var ending = false;

  function announceDone(){
    window.__loaderDone = true;
    setTimeout(function(){ document.dispatchEvent(new CustomEvent("loader:done")); }, 0);
  }

  var forced = /[?&]loader=1(&|$)/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) {}

  if (!el || (seen && !forced)){
    if (el) el.remove();
    root.classList.remove("is-loading");
    announceDone();
    return;
  }

  function at(ms, fn){ timers.push(setTimeout(fn, ms)); }

  function finish(){
    el.remove();
    root.style.overflow = "";
    root.classList.remove("is-loading");
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
    document.removeEventListener("click", skip);
    document.removeEventListener("keydown", skip);
    announceDone();
  }

  function fadeOut(fast){
    if (ending) return;
    ending = true;
    timers.forEach(clearTimeout); timers = [];
    cancelAnimationFrame(raf);
    el.classList.add("fade");
    if (fast) el.classList.add("fade-fast");
    at(fast ? 320 : 920, finish);
  }

  function skip(e){
    if (e && e.type === "keydown" && e.key !== "Escape" && e.key !== " " && e.key !== "Enter") return;
    if (e && e.type === "keydown") e.preventDefault();
    fadeOut(true);
  }
  document.addEventListener("click", skip);
  document.addEventListener("keydown", skip);

  root.style.overflow = "hidden";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced){
    at(60, function(){ fadeOut(true); });
    return;
  }

  /* ---------- build the scene ---------- */
  el.innerHTML =
    '<div class="ld-drop" id="ldDrop"></div>' +
    '<div class="ld-ripple r1" id="ldR1"></div>' +
    '<div class="ld-ripple r2" id="ldR2"></div>' +
    '<div class="ld-blob-wrap" id="ldBlobWrap"><div class="ld-blob" id="ldBlob"></div></div>' +
    '<div class="ld-panel" id="ldPanel">' +
      '<div class="ld-row"><span class="ld-label" id="ldLabel">loading</span><span class="ld-pct" id="ldPct">0%</span></div>' +
      '<div class="ld-bar" id="ldBar"><div class="ld-fill" id="ldFill"></div></div>' +
    '</div>';

  var drop = document.getElementById("ldDrop");
  var r1 = document.getElementById("ldR1");
  var r2 = document.getElementById("ldR2");
  var blobWrap = document.getElementById("ldBlobWrap");
  var blob = document.getElementById("ldBlob");
  var panel = document.getElementById("ldPanel");
  var label = document.getElementById("ldLabel");
  var pct = document.getElementById("ldPct");
  var bar = document.getElementById("ldBar");
  var fill = document.getElementById("ldFill");

  function bump(node, keyframes, dur){
    try { node.animate(keyframes, { duration: dur, easing: "ease" }); } catch (e) {}
  }

  function raceFill(duration, onDone){
    var start = null;
    function tick(now){
      if (start === null) start = now;
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3); // ease-out
      var p = Math.round(eased * 99);
      fill.style.width = p + "%";
      pct.textContent = p + "%";
      if (t < 1){ raf = requestAnimationFrame(tick); }
      else { onDone(); }
    }
    raf = requestAnimationFrame(tick);
  }

  /* ---------- 1. drop falls (.85s) ---------- */

  /* ---------- 2+3. impact: ripples + ink spread + bar race, at .85s ---------- */
  at(850, function(){
    drop.classList.add("hit");
    r1.classList.add("go");
    r2.classList.add("go");
    blob.classList.add("go");
  });

  at(950, function(){
    panel.classList.add("show");
    raceFill(1600, function(){
      stuck();
    });
  });

  /* ---------- 5. stuck at 99% ---------- */
  function wobbleAndPulse(){
    bump(bar, [
      { transform: "rotate(0deg)" },
      { transform: "rotate(-1.2deg)" },
      { transform: "rotate(.8deg)" },
      { transform: "rotate(0deg)" }
    ], 300);
    bump(blobWrap, [
      { transform: "scale(1)" },
      { transform: "scale(1.06)" },
      { transform: "scale(1)" }
    ], 300);
  }

  function stuck(){
    if (ending) return;
    label.textContent = "99%";
    wobbleAndPulse();
    at(500, function(){
      if (ending) return;
      label.textContent = "still 99%";
      wobbleAndPulse();
      at(650, function(){
        if (ending) return;
        label.textContent = "hmm.";
        wobbleAndPulse();
        at(550, function(){
          if (ending) return;
          label.textContent = "okay, fine.";
          wobbleAndPulse();
          at(450, finishBar);
        });
      });
    });
  }

  /* ---------- 6. finish ---------- */
  function finishBar(){
    fill.style.transition = "width .25s ease";
    fill.style.width = "100%";
    pct.textContent = "100%";
    label.textContent = "done.";
    at(450, reveal);
  }

  /* ---------- 7. reveal ---------- */
  function reveal(){
    panel.classList.add("out");
    blob.classList.add("finale");
    fadeOut(false);
  }
})();
