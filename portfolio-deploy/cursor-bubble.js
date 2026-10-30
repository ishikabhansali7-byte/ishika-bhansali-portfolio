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

  // small hand-drawn line icons for the nav links (data-bubble-icon="home" etc.)
  var ICONS = {
    home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/><path d="M10.3 19.5v-5.2c0-.9.7-1.3 1.7-1.3s1.7.4 1.7 1.3v5.2"/>',
    about: '<circle cx="12" cy="8.3" r="3.3"/><path d="M5.5 19.5c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6"/>',
    work: '<path d="M9 7.3V6c0-1 .8-1.6 1.8-1.6h2.4c1 0 1.8.6 1.8 1.6v1.3"/><rect x="4" y="7.3" width="16" height="11.2" rx="1.8"/><path d="M4 12.6h16"/>',
    playground: '<path d="M12 13v6.5"/><path d="M12 13c-2.6 0-4-1.8-4-4.3 0-.1 1.9.3 3 1.3-.3-1.7.1-3.4 1-4.5.9 1.1 1.3 2.8 1 4.5 1.1-1 3-1.4 3-1.3 0 2.5-1.4 4.3-4 4.3Z"/>',
    contact: '<rect x="3.5" y="6" width="17" height="12" rx="1.6"/><path d="M4 7.2 12 13l8-5.8"/>'
  };

  var bubble = document.createElement("div");
  bubble.className = "cursor-bubble";
  bubble.setAttribute("aria-hidden", "true");
  bubble.innerHTML = '<svg class="cb-icon" viewBox="0 0 24 24"></svg><span class="cb-text"></span>';
  var bubbleIcon = bubble.querySelector(".cb-icon");
  var bubbleText = bubble.querySelector(".cb-text");
  document.body.appendChild(bubble);

  var xTo = gsap.quickTo(bubble, "x", { duration: 0.5, ease: "power3" });
  var yTo = gsap.quickTo(bubble, "y", { duration: 0.5, ease: "power3" });
  gsap.set(bubble, { rotation: -30, scale: 0, opacity: 0, x: -999, y: -999 });

  var current = null;   // the matched [data-bubble] element currently under the pointer
  var dragging = false;

  function setText(label, iconKey){
    bubbleText.textContent = label;
    bubble.classList.toggle("is-drag", label === "drag" || label === "dragging");
    var icon = iconKey && ICONS[iconKey];
    bubbleIcon.innerHTML = icon || "";
    bubble.classList.toggle("has-icon", !!icon);
  }

  function show(label, iconKey){
    if (!label) { hide(); return; }
    setText(label, iconKey);
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
    if (!dragging) show(el.getAttribute("data-bubble"), el.getAttribute("data-bubble-icon"));
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
    if (current) show(current.getAttribute("data-bubble"), current.getAttribute("data-bubble-icon"));
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
