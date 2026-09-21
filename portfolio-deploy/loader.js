/* Loading screen: two eyes wake up in the dark, look around, blink, the lights come on,
   "oh, hi." appears, then the overlay fades out. Black and white only.
   Fires document "loader:done" (and sets window.__loaderDone) when finished or skipped. */
(function(){
  "use strict";

  /* ---------- timeline (ms) ---------- */
  var T = {
    OPEN: 400,        // eyes open
    LOOK_LEFT: 1000,  // pupils look left
    LOOK_RIGHT: 1350, // pupils look right
    LOOK_CENTER: 1700,// pupils back to center (0.25s)
    BLINK: 2000,      // one blink
    BLINK_LEN: 150,
    LIT: 2300,        // lights on + "oh, hi."
    HOLD_END: 3000,   // hold, then fade
    FADE: 600,
    REDUCED_HOLD: 800 // reduced motion: open eyes + text, then fade
  };
  // true = follow the OS "reduce motion" setting (no scaling, blinking or looking around).
  // set to false to always play the full sequence.
  var RESPECT_REDUCED_MOTION = true;
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

  var eyes = el.querySelectorAll(".loader-eye");
  var pupils = el.querySelectorAll(".loader-pupil");
  var text = el.querySelector(".loader-text");
  var reduced = RESPECT_REDUCED_MOTION && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  if (reduced){
    el.classList.add("reduced", "lit");
    each(eyes, function(e){ e.classList.add("open"); });
    text.classList.add("show");
    at(T.REDUCED_HOLD, fadeWhenLoaded);
    return;
  }

  at(T.OPEN, function(){ each(eyes, function(e){ e.classList.add("open"); }); });
  at(T.LOOK_LEFT, function(){ look("-45%"); });
  at(T.LOOK_RIGHT, function(){ look("45%"); });
  at(T.LOOK_CENTER, function(){
    each(pupils, function(p){ p.style.transitionDuration = ".25s"; });
    look("0%");
  });
  at(T.BLINK, function(){ each(eyes, function(e){ e.classList.add("blink"); }); });
  at(T.BLINK + T.BLINK_LEN, function(){ each(eyes, function(e){ e.classList.remove("blink"); }); });
  at(T.LIT, function(){ el.classList.add("lit"); text.classList.add("show"); });
  at(T.HOLD_END, fadeWhenLoaded);
})();
