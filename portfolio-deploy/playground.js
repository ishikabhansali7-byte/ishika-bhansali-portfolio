/* Playground: a shared tulip garden. Visitors pick a tulip and plant it on the grass.
   script.js calls Playground.init() after the page renders and Playground.destroy() when leaving.

   ---- MAKING THE GARDEN SHARED (so every visitor sees every tulip, forever) ----
   A static site can't store data by itself, so tulips are saved in a free Firebase Realtime Database:
   1. console.firebase.google.com -> Add project -> Build -> Realtime Database -> Create database.
   2. Paste the database URL below (looks like https://your-project-default-rtdb.firebaseio.com).
   3. In the database's Rules tab, paste the rules from the block at the bottom of this comment.
   Until DB_URL is set, tulips are only saved in the visitor's own browser (preview mode).

   Rules (visitors can read and add tulips, but nobody can edit or delete one):
   {
     "rules": {
       "flowers": {
         ".read": true,
         "$id": {
           ".write": "!data.exists()",
           ".validate": "newData.hasChildren(['t','x','y','ts']) && newData.child('t').isNumber() && newData.child('t').val() >= 0 && newData.child('t').val() <= 5 && newData.child('x').isNumber() && newData.child('y').isNumber() && (!newData.hasChild('n') || (newData.child('n').isString() && newData.child('n').val().length <= 20)) && newData.child('ts').isNumber()",
           "$other": { ".validate": false }
         }
       }
     }
   }
*/
(function(){
  "use strict";

  var DB_URL = "https://ishika-bhansali-portfolio-default-rtdb.firebaseio.com"; // <- paste your Firebase Realtime Database URL here

  var TULIPS = [
    { name: "pink",   src: "tulip-1.png?v=5" },
    { name: "yellow", src: "tulip-2.png?v=5" },
    { name: "purple", src: "tulip-3.png?v=5" },
    { name: "orange", src: "tulip-4.png?v=5" },
    { name: "cream",  src: "tulip-5.png?v=5" },
    { name: "red",    src: "tulip-6.png?v=5" }
  ];
  var GRASS_TOP = 69;      // % from the top of the garden picture where the open grass starts (below the path/hills)
  var GRASS_BOTTOM = 99;
  var TULIP_MAX_PCT = 15;  // a planted tulip's height, as % of the garden's own height, at its largest (closest to the viewer)
  var MAX_FLOWERS = 500;
  var POLL_MS = 15000;
  var LOCAL_KEY = "gardenFlowers";
  var MINE_KEY = "gardenPlanted";
  var HIDDEN_KEY = "gardenHidden"; // ids this browser has "cleared" — the shared DB's write rules don't allow real deletes, so a cleared tulip is just hidden from this browser

  var state = null;

  function clamp(v, a, b){ return Math.min(b, Math.max(a, v)); }
  function base(){ return DB_URL.replace(/\/+$/, ""); }

  /* ---------- storage ---------- */
  function cleanFlower(id, f){
    if (!f || typeof f !== "object") return null;
    var t = Math.round(Number(f.t)), x = Number(f.x), y = Number(f.y);
    if (!isFinite(t) || !isFinite(x) || !isFinite(y)) return null;
    return {
      id: String(id),
      t: clamp(t, 0, TULIPS.length - 1),
      x: clamp(x, 3, 97),
      y: clamp(y, GRASS_TOP, GRASS_BOTTOM),
      n: typeof f.n === "string" ? f.n.replace(/[\u0000-\u001f<>]/g, "").slice(0, 20) : "",
      ts: Number(f.ts) || 0
    };
  }

  function loadFlowers(){
    if (base()){
      return fetch(base() + "/flowers.json").then(function(r){
        if (!r.ok) throw new Error("load failed");
        return r.json();
      }).then(function(data){
        var out = [];
        Object.keys(data || {}).forEach(function(k){
          var f = cleanFlower(k, data[k]);
          if (f) out.push(f);
        });
        return out;
      });
    }
    var list = [];
    try { list = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]"); } catch (e) {}
    return Promise.resolve(list.map(function(f, i){ return cleanFlower("l" + i, f); }).filter(Boolean));
  }

  function saveFlower(f){
    var payload = { t: f.t, x: +f.x.toFixed(2), y: +f.y.toFixed(2), n: f.n, ts: f.ts };
    if (base()){
      return fetch(base() + "/flowers.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function(r){
        if (!r.ok) throw new Error("save failed");
        return r.json();
      }).then(function(res){ return res && res.name ? res.name : f.id; });
    }
    var list = [];
    try { list = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]"); } catch (e) {}
    list.push(payload);
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(list)); } catch (e) {}
    return Promise.resolve("l" + (list.length - 1));
  }

  function alreadyPlanted(){
    try { return !!localStorage.getItem(MINE_KEY); } catch (e) { return false; }
  }
  function markPlanted(id){
    try { localStorage.setItem(MINE_KEY, String(id)); } catch (e) {}
  }
  function getHidden(){
    try { return JSON.parse(localStorage.getItem(HIDDEN_KEY) || "[]"); } catch (e) { return []; }
  }
  function hideId(id){
    var h = getHidden();
    if (h.indexOf(id) === -1){ h.push(id); try { localStorage.setItem(HIDDEN_KEY, JSON.stringify(h)); } catch (e) {} }
  }

  /* ---------- page ---------- */
  function init(){
    destroy();
    var garden = document.getElementById("pgGarden");
    if (!garden) return;

    var layer = document.getElementById("pgFlowers");
    var ghost = document.getElementById("pgGhost");
    var palette = document.getElementById("pgPalette");
    var toast = document.getElementById("pgToast");
    var count = document.getElementById("pgCount");
    var note = document.getElementById("pgNote");
    var hint = document.getElementById("pgHint");
    var undoBtn = document.getElementById("pgUndo");

    var s = state = { alive: true, selected: null, planted: alreadyPlanted(), pending: null, els: {}, poll: 0, toastTimer: 0, cleanups: [] };

    function on(target, type, fn){
      target.addEventListener(type, fn);
      s.cleanups.push(function(){ target.removeEventListener(type, fn); });
    }
    function say(msg){
      toast.textContent = msg;
      clearTimeout(s.toastTimer);
      s.toastTimer = setTimeout(function(){ toast.textContent = ""; }, 3500);
    }

    if (!base()) note.textContent = "Preview mode: tulips are saved only in this browser until the shared garden is connected.";

    /* name card that opens after a click on the grass */
    var pop = document.createElement("form");
    pop.className = "pg-pop";
    pop.hidden = true;
    pop.innerHTML =
      '<label class="pg-pop-title" for="pgPopName">Add your name (optional)</label>' +
      '<input class="pg-name" id="pgPopName" type="text" maxlength="20" autocomplete="off" placeholder="your name">' +
      '<div class="pg-pop-actions"><button class="pg-pop-plant" type="submit">Plant it</button><button class="pg-pop-cancel" type="button">Cancel</button></div>';
    garden.appendChild(pop);
    var popInput = pop.querySelector("input");

    function openPop(p){
      s.pending = p;
      var scale = 0.5 + ((p.y - GRASS_TOP) / (GRASS_BOTTOM - GRASS_TOP)) * 0.75;
      ghost.src = TULIPS[s.selected].src;
      ghost.style.left = p.x + "%";
      ghost.style.top = p.y + "%";
      ghost.style.height = (TULIP_MAX_PCT * scale) + "%";
      ghost.classList.add("is-preview");
      ghost.hidden = false;
      pop.hidden = false;
      popInput.value = "";
      popInput.focus();
    }
    function closePop(){
      s.pending = null;
      pop.hidden = true;
      ghost.classList.remove("is-preview");
      ghost.hidden = true;
    }
    on(pop, "click", function(e){ e.stopPropagation(); });
    on(pop.querySelector(".pg-pop-cancel"), "click", closePop);
    on(pop, "keydown", function(e){ if (e.key === "Escape") closePop(); });

    /* palette */
    TULIPS.forEach(function(t, i){
      var b = document.createElement("button");
      b.type = "button"; b.className = "pg-pick";
      b.setAttribute("aria-label", "Choose the " + t.name + " tulip");
      b.setAttribute("aria-pressed", "false");
      var im = document.createElement("img");
      im.src = t.src; im.alt = ""; im.draggable = false;
      b.appendChild(im);
      on(b, "click", function(){ select(i); });
      palette.appendChild(b);
    });

    function select(i){
      if (s.planted) return;
      s.selected = i;
      Array.prototype.forEach.call(palette.children, function(b, j){
        b.classList.toggle("is-on", j === i);
        b.setAttribute("aria-pressed", j === i ? "true" : "false");
      });
      ghost.src = TULIPS[i].src;
      hint.textContent = "Now click the grass where you want it to grow.";
    }

    function setPlantedUI(){
      palette.classList.add("is-done");
      Array.prototype.forEach.call(palette.children, function(b){ b.disabled = true; b.classList.remove("is-on"); });
      closePop();
      ghost.hidden = true;
      hint.textContent = "Your tulip is in the garden. Thanks for visiting.";
    }
    if (s.planted) setPlantedUI();
    if (undoBtn) undoBtn.disabled = !s.planted;
    // in the shared garden a planted tulip stays for good, so there is nothing to undo
    if (base() && undoBtn){
      undoBtn.hidden = true;
      var divider = undoBtn.parentNode.querySelector(".pg-dock-divider");
      if (divider) divider.hidden = true;
    }

    /* "Undo" removes your tulip (whenever you have one) so you can plant a different one. The shared
       garden's write rules don't allow real deletes, so once a tulip is saved to the shared database
       it can only be hidden from this browser, not erased for everyone — in preview mode (no shared
       database yet) it's removed for good. */
    function removeMine(){
      var id; try { id = localStorage.getItem(MINE_KEY); } catch (e) { id = null; }
      if (!id) return;
      var el = s.els[id];
      if (el && el.parentNode) el.parentNode.removeChild(el);
      delete s.els[id];
      if (base()) hideId(id);
      else try { localStorage.setItem(LOCAL_KEY, "[]"); } catch (e) {}
      try { localStorage.removeItem(MINE_KEY); } catch (e) {}
      s.planted = false;
      s.selected = null;
      palette.classList.remove("is-done");
      Array.prototype.forEach.call(palette.children, function(b){
        b.disabled = false; b.classList.remove("is-on"); b.setAttribute("aria-pressed", "false");
      });
      if (undoBtn) undoBtn.disabled = true;
      hint.textContent = "Pick a tulip, then click the grass.";
      updateCount();
      say("Removed. Pick a new tulip whenever you're ready.");
    }
    if (undoBtn) on(undoBtn, "click", removeMine);

    /* flowers */
    function addFlower(f, opts){
      if (s.els[f.id]) return;
      var wrap = document.createElement("div");
      wrap.className = "pg-plant" + (opts && opts.grow ? " is-growing" : "") + (opts && opts.mine ? " is-mine" : "");
      var scale = 0.5 + ((f.y - GRASS_TOP) / (GRASS_BOTTOM - GRASS_TOP)) * 0.75;
      wrap.style.left = f.x + "%";
      wrap.style.top = f.y + "%";
      wrap.style.height = (TULIP_MAX_PCT * scale) + "%";
      wrap.style.zIndex = String(Math.round(f.y * 10));
      wrap.style.setProperty("--sway-d", (3 + Math.random() * 2.5).toFixed(2) + "s");
      wrap.style.setProperty("--sway-o", (-Math.random() * 4).toFixed(2) + "s");
      wrap.title = (opts && opts.mine ? "Your tulip" : f.n ? "Planted by " + f.n : "A visitor’s tulip");
      var im = document.createElement("img");
      im.src = TULIPS[f.t].src; im.alt = ""; im.draggable = false;
      wrap.appendChild(im);
      layer.appendChild(wrap);
      s.els[f.id] = wrap;
      return wrap;
    }
    function updateCount(){
      var n = Object.keys(s.els).length;
      count.textContent = n === 0 ? "No tulips yet. Be the first." : n + (n === 1 ? " tulip" : " tulips") + " planted";
    }

    var firstLoad = true;
    function refresh(){
      loadFlowers().then(function(list){
        if (!s.alive) return;
        var hidden = getHidden();
        list.sort(function(a, b){ return a.ts - b.ts; }).slice(-MAX_FLOWERS).forEach(function(f){
          // tulips other visitors plant while this page is open grow into place; the ones already there just appear
          if (hidden.indexOf(f.id) === -1) addFlower(f, { grow: !firstLoad });
        });
        firstLoad = false;
        updateCount();
        if (base()) note.textContent = "";
      }).catch(function(){
        if (s.alive) note.textContent = "Couldn’t reach the garden right now. Try again in a moment.";
      });
    }
    refresh();
    if (base()){
      // shared garden: keep it fresh while the page is open, and again whenever the tab comes back into view
      s.poll = setInterval(refresh, POLL_MS);
      on(document, "visibilitychange", function(){ if (!document.hidden) refresh(); });
    }

    /* planting */
    function point(e){
      var r = garden.getBoundingClientRect();
      return {
        x: clamp((e.clientX - r.left) / r.width * 100, 3, 97),
        y: clamp((e.clientY - r.top) / r.height * 100, 0, GRASS_BOTTOM)
      };
    }

    on(garden, "pointermove", function(e){
      if (s.selected === null || s.planted || s.pending || e.pointerType !== "mouse") return;
      var p = point(e);
      if (p.y < GRASS_TOP){ ghost.hidden = true; return; }
      var scale = 0.5 + ((p.y - GRASS_TOP) / (GRASS_BOTTOM - GRASS_TOP)) * 0.75;
      ghost.hidden = false;
      ghost.style.left = p.x + "%";
      ghost.style.top = p.y + "%";
      ghost.style.height = (TULIP_MAX_PCT * scale) + "%";
    });
    on(garden, "pointerleave", function(){ if (!s.pending) ghost.hidden = true; });

    on(garden, "click", function(e){
      if (s.planted) return;
      if (s.selected === null){ say("Pick a tulip first."); return; }
      var pt = point(e);
      if (pt.y < GRASS_TOP){ say("Plant it on the grass."); return; }
      openPop(pt);
    });

    on(pop, "submit", function(e){
      e.preventDefault();
      if (s.planted || !s.pending) return;
      var pt = s.pending;
      var f = {
        id: "pending-" + Date.now(),
        t: s.selected, x: pt.x, y: pt.y,
        n: popInput.value.replace(/[\u0000-\u001f<>]/g, "").trim().slice(0, 20),
        ts: Date.now()
      };
      s.planted = true;
      ghost.hidden = true;
      var el = addFlower(f, { grow: true, mine: true });
      updateCount();
      setPlantedUI();
      if (undoBtn) undoBtn.disabled = false;

      saveFlower(f).then(function(realId){
        markPlanted(realId);
        delete s.els[f.id];
        if (s.els[realId] && s.els[realId] !== el && s.els[realId].parentNode) s.els[realId].parentNode.removeChild(s.els[realId]);
        s.els[realId] = el;
        say("Planted. It will stay here.");
      }).catch(function(){
        if (el && el.parentNode) el.parentNode.removeChild(el);
        delete s.els[f.id];
        s.planted = false;
        palette.classList.remove("is-done");
        Array.prototype.forEach.call(palette.children, function(b){ b.disabled = false; });
        if (undoBtn) undoBtn.disabled = true;
        hint.textContent = "Pick a tulip, then click the grass.";
        updateCount();
        say("Couldn’t save your tulip. Please try again.");
      });
    });
  }

  function destroy(){
    var s = state;
    if (!s) return;
    s.alive = false;
    clearInterval(s.poll);
    clearTimeout(s.toastTimer);
    s.cleanups.forEach(function(fn){ fn(); });
    state = null;
  }

  window.Playground = { init: init, destroy: destroy };
})();
