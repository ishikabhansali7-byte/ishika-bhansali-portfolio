/* Loading screen: a red typewriter types "welcome to my little corner", then the overlay fades out.
   Fires document "loader:done" (and sets window.__loaderDone) when finished or skipped. */
(function(){
  "use strict";

  /* ---------- timeline (ms) ---------- */
  var T = {
    START: 250,        // first key press
    TYPE_MS: 55,       // per character
    HOLD_AFTER: 350,   // hold after the last letter, then fade
    FADE: 350,
    REDUCED_HOLD: 500
  };
  // true = follow the OS "reduce motion" setting (no scaling, blinking or looking around).
  // set to false to always play the full sequence.
  var RESPECT_REDUCED_MOTION = false;
  var STORAGE_KEY = "loaderSeen";

  var root = document.documentElement;
  var el = document.getElementById("loader");
  var timers = [];
  var ending = false;
  var loadHandler = null;

  function announceDone(){
    window.__loaderDone = true;
    setTimeout(function(){ document.dispatchEvent(new CustomEvent("loader:done")); }, 0);
  }

  var forced = /[?&]loader=1(&|$)/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) {}

  if (!el || (seen && !forced)){
    if (el) el.remove();
    announceDone();
    return;
  }

  var LINES = ["welcome to", "my little", "corner"];
  var reduced = RESPECT_REDUCED_MOTION && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // a flat red typewriter that types the welcome line onto its paper
  function typewriterHtml(){
    var keys = "";
    function row(y, x0, count, yellowLast){
      for (var i = 0; i < count; i++){
        var fill = (yellowLast && i === count - 1) ? "#F3BF2E" : "#F5EEDB";
        keys += '<circle class="tw-key" cx="' + (x0 + i * 21.5) + '" cy="' + y + '" r="8" fill="' + fill + '"/>';
      }
    }
    row(287, 78, 13, false);
    row(307, 88.5, 12, false);
    row(327, 78, 13, true);
    return (
      '<div class="tw" aria-hidden="true">' +
        '<svg class="tw-svg" viewBox="0 0 420 384" aria-hidden="true">' +
          '<rect x="98" y="8" width="224" height="194" rx="2" fill="#FAF6EA"/>' +
          '<rect x="98" y="8" width="224" height="194" rx="2" fill="none" stroke="rgba(0,0,0,.07)"/>' +
          '<path d="M76 190 h20 v26 h-20 z M324 190 h20 v26 h-20 z" fill="#C93A45"/>' +
          '<rect x="46" y="184" width="328" height="15" rx="4" fill="#F4ECD8"/>' +
          '<rect x="46" y="184" width="50" height="15" rx="4" fill="#2F2F2F"/>' +
          '<rect x="324" y="184" width="50" height="15" rx="4" fill="#2F2F2F"/>' +
          '<rect x="26" y="174" width="20" height="36" rx="3" fill="#2A2A2A"/>' +
          '<rect x="374" y="174" width="20" height="36" rx="3" fill="#2A2A2A"/>' +
          '<path d="M31 178v28M36 178v28M41 178v28M379 178v28M384 178v28M389 178v28" stroke="#555" stroke-width="1.2"/>' +
          '<path d="M198 199h24v24h-24z" fill="#8FCBC0"/><rect x="204" y="196" width="12" height="10" fill="#5FA99C"/>' +
          '<path d="M66 214 Q210 196 354 214 Q376 218 380 242 L398 338 Q210 354 22 338 L40 242 Q44 218 66 214 Z" fill="#E4474F"/>' +
          '<path d="M44 262 Q210 246 376 262 L394 338 Q210 352 26 338 Z" fill="#D8414B"/>' +
          '<path d="M58 212 Q30 252 26 304 Q33 311 42 303 Q54 254 76 220 Z" fill="#8FCBC0"/>' +
          '<path d="M170 226 Q210 208 250 226 L244 234 Q210 222 176 234 Z" fill="#CFE8E3"/>' +
          '<path d="M146 230 Q210 220 274 230 L268 246 Q210 256 152 246 Z" fill="#33272A"/>' +
          '<path d="M52 350 Q210 366 368 350 L362 378 Q210 390 58 378 Z" fill="#C93A45"/>' +
          '<rect x="56" y="268" width="308" height="90" rx="14" fill="#3A2B29"/>' +
          keys +
          '<rect class="tw-key" x="132" y="341" width="156" height="10" rx="5" fill="#F5EEDB"/>' +
        '</svg>' +
        '<div class="tw-paper" aria-hidden="true"><div class="tw-l"></div><div class="tw-l"></div><div class="tw-l"></div></div>' +
      '</div>'
    );
  }

  el.innerHTML = typewriterHtml();
  var lineEls = el.querySelectorAll(".tw-l");
  var keyEls = el.querySelectorAll(".tw-key");

  root.style.overflow = "hidden";

  function at(ms, fn){ timers.push(setTimeout(fn, ms)); }
  function each(list, fn){ Array.prototype.forEach.call(list, fn); }
  function look(v){ each(pupils, function(p){ p.style.setProperty("--px", v); }); }

  function finish(){
    el.remove();
    root.style.overflow = "";
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
    document.removeEventListener("click", skip);
    document.removeEventListener("keydown", skip);
    announceDone();
  }

  function fadeOut(){
    if (ending) return;
    ending = true;
    timers.forEach(clearTimeout); timers = [];
    if (loadHandler){ window.removeEventListener("load", loadHandler); loadHandler = null; }
    el.classList.add("fade");
    setTimeout(finish, T.FADE + 50);
  }

  function skip(e){
    if (e && e.type === "keydown" && e.key === "Escape") e.preventDefault();
    fadeOut();
  }
  document.addEventListener("click", skip);
  document.addEventListener("keydown", skip);

  function fadeWhenLoaded(){
    if (document.readyState === "complete"){ fadeOut(); return; }
    loadHandler = fadeOut;
    window.addEventListener("load", loadHandler, { once: true });
  }

  function pressKey(){
    var k = keyEls[Math.floor(Math.random() * keyEls.length)];
    k.classList.add("down");
    at(0, function(){ setTimeout(function(){ k.classList.remove("down"); }, 90); });
  }

  if (reduced){
    each(lineEls, function(n, i){ n.textContent = LINES[i]; });
    at(T.REDUCED_HOLD, fadeWhenLoaded);
    return;
  }

  // type the lines one character at a time
  var li = 0, ci = 0, span = null;
  var caret = document.createElement("span");
  caret.className = "tw-caret";
  function next(){
    if (ending) return;
    if (!span){ span = document.createElement("span"); lineEls[li].appendChild(span); lineEls[li].appendChild(caret); }
    ci++;
    span.textContent = LINES[li].slice(0, ci);
    pressKey();
    if (ci < LINES[li].length){ timers.push(setTimeout(next, T.TYPE_MS + Math.random() * 25)); }
    else if (li < LINES.length - 1){ li++; ci = 0; span = null; timers.push(setTimeout(next, 180)); }
    else { at(T.HOLD_AFTER, fadeWhenLoaded); }
  }
  at(T.START, next);
})();
