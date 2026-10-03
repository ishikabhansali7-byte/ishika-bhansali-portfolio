/* Cursor bubble: a small pill that follows the cursor and names the action under it.
   Targets are marked with data-bubble="label" anywhere in the page (including markup
   rendered later by script.js/playground.js) — this file uses event delegation on
   document so new elements work automatically, no re-binding needed per route.

   An element with data-bubble="" (empty) is a boundary: it blocks the label from
   falling back to an outer labeled ancestor (used for the playground's name popup,
   which sits inside the "plant" grass area but shouldn't inherit that label on its
   own blank space). */
(function(){
  "use strict";

  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof gsap === "undefined") return;

  var OFFSET_X = 18, OFFSET_Y = -44;

  var bubble = document.createElement("div");
  bubble.className = "cursor-bubble";
  bubble.setAttribute("aria-hidden", "true");
  document.body.appendChild(bubble);

  var xTo = gsap.quickTo(bubble, "x", { duration: 0.5, ease: "power3" });
  var yTo = gsap.quickTo(bubble, "y", { duration: 0.5, ease: "power3" });
  gsap.set(bubble, { rotation: -30, scale: 0, opacity: 0, x: -999, y: -999 });

  var current = null;   // the matched [data-bubble] element currently under the pointer
  var dragging = false;

  function setText(label){
    bubble.textContent = label;
    bubble.classList.toggle("is-drag", label === "drag" || label === "dragging");
  }

  function show(label){
    if (!label) { hide(); return; }
    setText(label);
    gsap.killTweensOf(bubble, "scale,rotation,opacity");
    gsap.to(bubble, { duration: 0.9, delay: 0.05, ease: "elastic.out(1, 0.5)", scale: 1, rotation: 0, opacity: 1 });
  }

  function hide(){
    gsap.killTweensOf(bubble, "scale,rotation,opacity");
    gsap.to(bubble, { duration: 0.3, ease: "sine.inOut", scale: 0, rotation: -30, opacity: 0 });
  }

  window.addEventListener("pointermove", function(e){
    xTo(e.clientX + OFFSET_X);
    yTo(e.clientY + OFFSET_Y);
  });

  document.addEventListener("pointerover", function(e){
    if (e.pointerType && e.pointerType !== "mouse") return;
    var el = e.target.closest("[data-bubble]");
    if (!el || el === current) return;
    current = el;
    if (!dragging) show(el.getAttribute("data-bubble"));
  });

  document.addEventListener("pointerout", function(e){
    var el = e.target.closest("[data-bubble]");
    if (!el || el !== current) return;
    var to = e.relatedTarget;
    if (to && el.contains(to)) return;
    current = null;
    if (!dragging) hide();
  });

  // dragging: anything with both .draggable and data-bubble switches its label
  // to "dragging" for the duration of the drag, then reverts on release
  document.addEventListener("pointerdown", function(e){
    var el = e.target.closest(".draggable[data-bubble]");
    if (!el) return;
    dragging = true;
    show("dragging");
  });
  function endDrag(){
    if (!dragging) return;
    dragging = false;
    if (current) show(current.getAttribute("data-bubble"));
    else hide();
  }
  document.addEventListener("pointerup", endDrag);
  document.addEventListener("pointercancel", endDrag);

  // hide instantly (no shrink animation) if the page is hidden/navigated away mid-hover
  document.addEventListener("visibilitychange", function(){
    if (document.hidden){ current = null; dragging = false; gsap.set(bubble, { scale: 0, opacity: 0 }); }
  });

  // script.js calls this right before swapping #app's innerHTML on a route change.
  // Without it, clicking a target (e.g. a work tile or "next project" link) removes
  // the hovered element from the DOM without ever firing pointerout, so the bubble
  // would otherwise stay frozen on screen showing the old label.
  window.CursorBubble = {
    reset: function(){
      current = null; dragging = false;
      gsap.killTweensOf(bubble, "scale,rotation,opacity");
      gsap.set(bubble, { scale: 0, opacity: 0, rotation: -30 });
    }
  };
})();
