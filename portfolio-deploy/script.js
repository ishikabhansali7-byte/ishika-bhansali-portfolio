(function(){
  "use strict";

  /* ---------- project data ---------- */
  var PROJECTS = [
    {
      id: "01", name: "Knoki Console", tag: "Physical Computing", span: "span-2x1",
      thumb: "knoki-thumbnail.png", ar: "1672 / 941",
      wordmark: "Knoki",
      heroImage: "knoki-thumbnail.png",
      meta: { team: "7 members", timeline: "3 weeks", tools: "Arduino IDE, AutoCAD, Blender, SketchUp" },
      tagline: "A knock-based interactive gaming console designed to bring tactile rhythm, pattern, and sensory play into a premium physical product experience.",
      sections: [
        { num: "01", heading: "Overview", body: "Knoki is a tactile product design project that turns knock patterns into playful digital interactions, rhythm games, and sensory feedback." },
        { num: "02", heading: "Concept", body: "A simple knock interface becomes a physical input system that transforms taps into sound, visuals, and learning-focused gameplay." },
        { num: "03", heading: "Problem Statement", body: "Passive screen-based learning often lacks tactile and sensory engagement. Many educational tools are expensive, solitary, or limited in interaction.", span: "span-2" },
        { num: "04", heading: "Form Exploration", body: "A focused exploration of physical form, interface placement, and tactile product structure before the final direction.", image: "knoki-iterations.png", imageAlt: "Knoki form exploration, concept exploration, 3D exploration, and ideation sketches", span: "span-4" },
        { num: "05", heading: "Prototype", body: "Testing the interaction concept through 3D modeling, physical mockups, and early tactile trials.", tags: ["3D Model", "Physical Prototype", "Interaction Testing"], span: "span-4" },
        { num: "06", heading: "Final Product", body: "A premium physical console with a clean interface, strong proportions, and an approachable industrial aesthetic.", image: "knoki-final-product.png", imageAlt: "Knoki final product — four angles of the finished purple and gold console with its accompanying cards", span: "span-4" },
        { num: "07", heading: "What I Did", body: "", tags: ["Research", "UX Design", "Interaction Design", "Concept Development", "Prototyping", "3D Modeling", "Final Product Design"], span: "span-4" }
      ]
    },
    {
      id: "02", name: "Red Spire", tag: "Logo Design", span: "span-2x1",
      thumb: "redspire-banner.png", ar: "1983 / 793",
      wordmark: "Red Spire",
      heroImage: "redspire-banner.png",
      meta: { team: "Individual", timeline: "4 days", tools: "Illustrator, Photoshop" },
      tagline: "A mascot logo and brand identity built around a croissant character — with purple, a client requirement, used as the sole brand color across packaging, apparel, and signage.",
      sections: [
        { num: "01", heading: "Concept", body: "The mascot is a croissant — a direct nod to the product that makes the brand instantly recognizable. Purple, a client requirement, is used as the sole brand color throughout, applied consistently across packaging, apparel, and signage so the identity feels cohesive rather than decorative.", span: "span-2" },
        { num: "02", heading: "The Challenge", body: "Balance “delight” and “professional” — two tones that often pull in opposite directions. The mascot needed to feel charming enough for packaging, but clean enough to embroider on staff uniforms.", span: "span-2" },
        { num: "03", heading: "Design Approach", list: [
          "Gave the croissant a chef’s hat and simple expressive face to build personality without overcomplicating the form, so it reads clearly at small sizes",
          "Built a single-color silhouette version (shown in 4 purple tones) so the mark stays legible on embroidery and other detailed applications",
          "Kept the wordmark bold and simple so the logo holds up even when the mascot is reduced to its silhouette form"
        ], span: "span-4" },
        { num: "04", heading: "Final Outcome", body: "The finished identity applied across the logo lockup, packaging, staff apparel, and signage.", image: "redspire-outcome.jpg", imageAlt: "Red Spire brand identity — logo lockup, mascot, packaging bags, silhouette color variations, box and apron applications, and signage", span: "span-4" }
      ]
    },
    {
      id: "03", name: "BookMyShow Redesign", tag: "UI/UX Design", span: "span-2x1",
      thumb: "bookmyshow-banner.png", ar: "1366 / 768",
      wordmark: "BookMyShow",
      heroImage: "bookmyshow-banner.png",
      sections: [
        { num: "01", heading: "Project Overview", body: "A UI/UX redesign of the BookMyShow homepage focused on improving usability, reducing clutter, and creating a more visually structured browsing experience.", span: "span-4" },
        { num: "02", heading: "Problems Identified", tags: ["Visual overload", "Inconsistent hierarchy", "Difficult scanning", "Overwhelming banners", "Cluttered navigation", "Poor spacing"], span: "span-2" },
        { num: "03", heading: "Design Goals", tags: ["Cleaner navigation", "Improved hierarchy", "Easier event discovery", "Modern UI", "Stronger readability"], span: "span-2" },
        { num: "04", heading: "Redesign Approach", tags: ["Wireframes", "Grids", "Typography improvements", "Spacing system", "CTA refinement"], span: "span-4" },
        { num: "05", heading: "Final UI Showcase", tags: ["Redesigned homepage", "Event discovery", "Movie listings", "Trending section", "Booking flow"],
          images: [
            { src: "bookmyshow-ui-1.webp", alt: "Redesigned BookMyShow homepage shown on three phone screens" },
            { src: "bookmyshow-ui-2.png", alt: "Redesigned BookMyShow homepage on a tilted phone" },
            { src: "bookmyshow-ui-3.webp", alt: "Six views of the redesigned BookMyShow homepage on phones" }
          ], span: "span-4" },
        { num: "06", heading: "Conclusion", body: "The redesign improves usability and creates a cleaner, more engaging entertainment browsing experience.", span: "span-4" }
      ]
    },
    {
      id: "04", name: "Lost History of Adalaj", tag: "VR Experience", span: "span-2x1",
      thumb: "adalaj-banner.webp", ar: "1366 / 768",
      wordmark: "Lost History of Adalaj",
      heroImage: "adalaj-banner.webp",
      tagline: "A VR experience set in Adalaj Stepwell, 1498. This story is imagined — Adalaj and Dada Harir ni Vav were built around the same period by different patrons; their link here is a creative premise, not a historical claim.",
      meta: { team: "5", timeline: "3 weeks", tools: "SketchUp, Blender, Unity" },
      sections: [
        { num: "01", heading: "Overview", body: [
          "Lost History of Adalaj puts you inside the stepwell at night, as a 15th-century royal architect (a Rajmistry). You have already studied the building in daylight. Tonight you return with a lantern, a compass, and a toolbox to see what only the dark can show you.",
          "There is no tutorial or intro screen. You arrive confused, find your lantern, and the story unfolds as you explore."
        ], imagePlaceholder: "Gameplay clip or GIF of the full descent, night to dawn", span: "span-4" },
        { num: "02", heading: "Concept", list: [
          "The question: What can you learn about a building when you can only see what your lantern shows?",
          "The theme: Great buildings are learned, not invented from nothing. The architect’s night of careful observation becomes the seed of the next stepwell, Dada Harir ni Vav.",
          "Why night: Daylight shows a building’s surface. At night you notice shadow, depth, silence, and how the stone feels. Darkness forces slower, more deliberate looking."
        ], span: "span-2" },
        { num: "03", heading: "Narrative", list: [
          "You play the role. You use the same tools and face the same limits as the original architect.",
          "Night is the lens. Shadow, silence, and isolation teach what daylight hides.",
          "Discovery through action. Nothing is handed to you up front. The Farman reveals who you are only as you act, and the shift from night to dawn shows time passing."
        ], span: "span-2" },
        { num: "04", heading: "Gameplay", body: "Goal: Descend from the entrance to the water level, making discoveries along the way, until dawn breaks. Each action copies something a real architect would do:", list: [
          "Roaming the space: Lets you study depth, structure, and detail at your own pace.",
          "Opening the toolbox: Sets the role. You are a working craftsman, not a tourist.",
          "Holding the lantern: Gives you control over what is seen. Exploring becomes a choice about what to light and what to leave dark.",
          "Using the compass: Lets you check symmetry and scale up close, so you notice how carefully the structure was planned."
        ], imagePlaceholder: "Close-up of the lantern, compass, and toolbox, ideally in hand", span: "span-4" },
        { num: "05", heading: "Walkthrough", list: [
          "Arrival: You enter the stepwell with no explanation. The dark is disorienting on purpose.",
          "Discovery: You find the lantern. A royal Farman (a decree) begins to play, slowly revealing who you are and why you’re here.",
          "Study: You go deeper, using your tools to examine carvings, structure, and proportions.",
          "Dawn: As you reach the lowest level, morning light arrives. Time itself tells you the night’s work is done.",
          "Ending: You close the toolbox. The Farman’s final words point to Dada Harir ni Vav, the building this night will shape."
        ], imagePlaceholders: ["Arrival (dark)", "Discovery (lantern)", "Study (tools in use)", "Dawn (light reaching the bottom)"], span: "span-4" },
        { num: "06", heading: "Why Multisensory", list: [
          "Depth over flatness: Adalaj is about depth, and a screen flattens it. In VR you feel the drop as you descend.",
          "Touch and control: Holding the lantern in your own hand means what you see depends on your choices, not the camera’s.",
          "Looking as doing: The architect’s job is looking closely. VR lets the player do the same thing physically, not just watch it happen."
        ], imagePlaceholder: "Your 3D stepwell next to a real Adalaj photo, side by side", span: "span-4" },
        { num: "07", heading: "Design Process", list: [
          "Block-out: I built the base structure in SketchUp to get proportions and depth right across every level.",
          "Detail pass: I refined geometry and carved detail in Blender.",
          "Texturing and lighting: I applied and tuned stone textures in Unity, then balanced lighting between the lantern and natural darkness.",
          "Interaction and VR testing: The team layered in tool interactions and tested the space at human scale in VR, iterating on what felt right."
        ], span: "span-2" },
        { num: "08", heading: "Environment Building", body: "The stepwell is deep and multi-layered, so the build had to hold together as one continuous space rather than a series of disconnected rooms. Level proportions were blocked out first, then carved detail, worn stone, and age marks were added to give each surface its own character without breaking consistency across walls, pillars, and smaller assets. Because the space plays out mostly by lantern light, every texture was checked under low, moving light rather than flat daylight, since that is the only condition players actually see it in.", imagePlaceholders: ["SketchUp block-out beside the final Blender model", "Raw texture beside the applied texture in Unity"], span: "span-4" },
        { num: "09", heading: "What Failed (and How We Fixed It)", list: [
          "Modelling a deep, multi-level structure — Problem: early passes felt disconnected between levels, with proportions that didn’t read as one structure. Fix: base geometry blocked out in SketchUp first for proportion, then detailed in Blender. Result: the player can descend through a space that feels continuous and real.",
          "Getting the stone to look right — Problem: generic textures broke immersion up close and didn’t respond well to lantern light. Fix: repeated texture baking and UV adjustments, tested specifically under lantern light rather than daylight. Result: walls, pillars, and small assets share one consistent look.",
          "Keeping the environment light enough for VR — Problem: dense geometry and detailed textures slowed performance. Fix: cut unnecessary geometry and balanced texture quality against performance. Result: the space stays detailed but runs smoothly.",
          "Making interactions feel real — Problem: early tool pickups felt clunky and accidental. Fix: tested Unity physics, colliders, and custom scripts, then tuned object weight, grip points, and animation triggers. Result: the lantern, compass, and toolbox behave consistently, so players can focus on exploring.",
          "Lighting a night-time heritage site — Problem: too dark and the site was unplayable, too bright and the mood disappeared. Fix: iterated on ambient light, point lights, light baking, falloff values, and post-processing. Result: the lantern makes the space feel quietly alive without losing visibility."
        ], imagePlaceholders: ["Wireframe or before/after performance comparison", "Too-dark, too-bright, and final lighting comparison"], span: "span-4" },
        { num: "10", heading: "Experience", body: "Playing it feels solitary at first — an unfamiliar space, one small light, no instructions. That unease gives way to curiosity as the tools and the Farman slowly explain what you’re doing there. By the time dawn breaks, the quiet, patient pace of the night has turned into something closer to accomplishment: a night of looking that earns you a small piece of history.", span: "span-2" },
        { num: "11", heading: "My Role", list: [
          "Built the environment: I modelled the stepwell in SketchUp and Blender, working out its depth, levels, pillars, and carved details.",
          "Textured it in Unity: I applied the stone textures and adjusted them so the worn surfaces, age marks, and colour variation felt true to Adalaj.",
          "Helped set up VR: I worked with the team to get the environment running in VR, so the space felt right at human scale."
        ], body: "Environment work matters most here, because the stepwell is the main character of the experience.", span: "span-2" },
        { num: "12", heading: "Learning", list: [
          "Small details like weight, grip, and light falloff decide whether a VR world feels believable.",
          "Good atmosphere comes from restraint. Removing light and explanation made the experience stronger.",
          "Building an environment for VR means designing for how a space feels at human scale, not just how it looks on screen."
        ], imagePlaceholder: "Final wide shot of the stepwell at dawn", span: "span-4" }
      ]
    },
    { id: "05", name: "Spotify Data Universe", tag: "Data Visualization", span: "span-2x1", soon: true },
    { id: "06", name: "Smart Plant", tag: "Augmented Reality", span: "span-2x1", soon: true }
  ];
  var OPEN_PROJECTS = PROJECTS.filter(function(p){ return !p.soon; });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme (with View Transitions API animation) ---------- */
  var theme = "light";
  var themeToggleBtn = document.getElementById("themeToggle");

  function applyTheme(){
    document.documentElement.setAttribute("data-theme", theme);
    // icon shows the mode you'd switch TO next
    if (themeToggleBtn) themeToggleBtn.textContent = theme === "dark" ? "☀" : "☾";
  }
  applyTheme();

  // Available transition variants. Change the starting index below to set the
  // default, or alt-click the toggle at runtime to cycle through them live.
  var THEME_VARIANTS = ["circle", "circle-blur", "bottom-up", "gif"];
  var themeVariantIndex = 0;
  // Optional: point this at a real .gif/.webp to use it in the "gif" variant
  // instead of the emoji placeholder.
  var THEME_GIF_URL = "";

  function updateToggleTitle(){
    if (themeToggleBtn){
      themeToggleBtn.title = "Toggle theme — transition: " + THEME_VARIANTS[themeVariantIndex] + " (alt-click to cycle)";
    }
  }
  updateToggleTitle();

  // toDark controls which layer animates and which direction it moves:
  // switching TO dark grows the new (dark) layer outward from the click point;
  // switching TO light shrinks the old (dark) layer away, revealing light underneath.
  // Route/page transitions don't have a "theme direction" so they omit toDark,
  // which defaults to the growing behaviour.
  function animateClipVariant(variant, x, y, toDark){
    if (toDark === undefined) toDark = true;
    var root = document.documentElement;
    var endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    var target = toDark ? "::view-transition-new(root)" : "::view-transition-old(root)";

    if (variant === "circle"){
      var circleFrames = toDark
        ? [
            "circle(0px at " + x + "px " + y + "px)",
            "circle(" + endRadius + "px at " + x + "px " + y + "px)"
          ]
        : [
            "circle(" + endRadius + "px at " + x + "px " + y + "px)",
            "circle(0px at " + x + "px " + y + "px)"
          ];
      root.animate(
        { clipPath: circleFrames },
        { duration: 550, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: target }
      );

    } else if (variant === "circle-blur"){
      var blurFrames = toDark
        ? [
            { clipPath: "circle(0px at " + x + "px " + y + "px)", filter: "blur(14px)" },
            { clipPath: "circle(" + (endRadius * 0.6) + "px at " + x + "px " + y + "px)", filter: "blur(4px)", offset: 0.7 },
            { clipPath: "circle(" + endRadius + "px at " + x + "px " + y + "px)", filter: "blur(0px)" }
          ]
        : [
            { clipPath: "circle(" + endRadius + "px at " + x + "px " + y + "px)", filter: "blur(0px)" },
            { clipPath: "circle(" + (endRadius * 0.6) + "px at " + x + "px " + y + "px)", filter: "blur(4px)", offset: 0.3 },
            { clipPath: "circle(0px at " + x + "px " + y + "px)", filter: "blur(14px)" }
          ];
      root.animate(blurFrames, { duration: 650, easing: "ease-out", pseudoElement: target });

    } else if (variant === "bottom-up"){
      var insetFrames = toDark
        ? ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
        : ["inset(0% 0 0 0)", "inset(100% 0 0 0)"];
      root.animate(
        { clipPath: insetFrames },
        { duration: 500, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: target }
      );
    }
  }

  function playThemeVariant(variant, x, y, toDark){
    if (variant === "gif"){
      animateClipVariant("circle", x, y, toDark);
      var icon = document.createElement("div");
      icon.className = "theme-gif-overlay";
      icon.style.left = x + "px";
      icon.style.top = y + "px";
      if (THEME_GIF_URL){
        icon.style.backgroundImage = "url('" + THEME_GIF_URL + "')";
      } else {
        icon.textContent = theme === "dark" ? "🌙" : "☀️";
      }
      document.body.appendChild(icon);
      icon.animate(
        [
          { transform: "translate(-50%,-50%) scale(0.4)", opacity: 0 },
          { transform: "translate(-50%,-50%) scale(1.25)", opacity: 1, offset: 0.5 },
          { transform: "translate(-50%,-50%) scale(0.4)", opacity: 0 }
        ],
        { duration: 600, easing: "ease-in-out" }
      ).onfinish = function(){ icon.remove(); };
    } else {
      animateClipVariant(variant, x, y, toDark);
    }
  }

  function toggleThemeAt(x, y){
    var next = theme === "light" ? "dark" : "light";
    var toDark = next === "dark";

    if (!document.startViewTransition || reduceMotion){
      theme = next;
      applyTheme();
      return;
    }

    document.documentElement.setAttribute("data-vt-dir", toDark ? "to-dark" : "to-light");
    var transition = document.startViewTransition(function(){
      theme = next;
      applyTheme();
    });
    transition.ready.then(function(){
      playThemeVariant(THEME_VARIANTS[themeVariantIndex], x, y, toDark);
    }).catch(function(){ /* transition aborted — theme already applied */ });
  }

  themeToggleBtn.addEventListener("click", function(e){
    if (e.altKey){
      themeVariantIndex = (themeVariantIndex + 1) % THEME_VARIANTS.length;
      updateToggleTitle();
      return;
    }
    var rect = themeToggleBtn.getBoundingClientRect();
    toggleThemeAt(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  /* ---------- random-letter-swap hover on header text ---------- */
  var SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomScrambleChar(){
    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
  }

  function wrapScrambleChars(el){
    var text = el.textContent;
    el.setAttribute("aria-label", text);
    el.innerHTML = "";
    var spans = [];
    text.split("").forEach(function(ch){
      var span = document.createElement("span");
      span.className = "scramble-char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.setAttribute("data-final", ch === " " ? "\u00A0" : ch);
      el.appendChild(span);
      spans.push(span);
    });
    return spans;
  }

  // reverse=true sweeps the flicker right-to-left instead of left-to-right,
  // mirroring the `reverse` prop on RandomLetterSwapForward.
  function scrambleReveal(spans, reverse){
    var order = reverse ? spans.slice().reverse() : spans;
    order.forEach(function(span, i){
      var finalChar = span.getAttribute("data-final");
      if (finalChar === "\u00A0") return;
      var flickers = 3;
      var stagger = i * 30;
      for (var k = 0; k < flickers; k++){
        setTimeout(function(){ span.textContent = randomScrambleChar(); }, stagger + k * 40);
      }
      setTimeout(function(){ span.textContent = finalChar; }, stagger + flickers * 40);
    });
  }

  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function initScrambleHover(el, reverse){
    if (reduceMotion || !canHover){
      el.setAttribute("aria-label", el.textContent);
      return;
    }
    var spans = wrapScrambleChars(el);
    el.addEventListener("mouseenter", function(){ scrambleReveal(spans, reverse); });
  }

  document.querySelectorAll("nav.primary a, .roll-hover").forEach(function(el){
    initScrambleHover(el, false);
  });

  /* ---------- mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");
  navToggle.addEventListener("click", function(){
    primaryNav.classList.toggle("open");
  });
  primaryNav.addEventListener("click", function(e){
    if (e.target.tagName === "A") primaryNav.classList.remove("open");
  });

  /* ---------- header transparency on scroll ---------- */
  var header = document.getElementById("siteHeader");
  function updateHeader(){
    var isHome = location.hash === "" || location.hash === "#/" || location.hash === "#";
    var scrolled = window.scrollY > 40;
    if (!isHome || scrolled){
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  }
  window.addEventListener("scroll", updateHeader);

  /* ---------- back to top ---------- */
  document.getElementById("backToTop").addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- resume placeholder ---------- */
  function downloadResume(){
    var a = document.createElement("a");
    a.href = "Ishika-Bhansali-Resume.pdf";
    a.download = "Ishika Bhansali Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  document.getElementById("resumeBtn").addEventListener("click", function(){
    downloadResume();
  });

  /* ---------- templates ---------- */
  function twoColShell(title, desc, meta, rightHtml){
    return (
      '<div class="page-shell">' +
        '<div class="col-left">' +
          '<div>' +
            '<h1 class="page-title">' + title + '</h1>' +
            '<p class="page-desc">' + desc + '</p>' +
          '</div>' +
          '<div class="meta-line">' + meta + '</div>' +
        '</div>' +
        '<div class="col-divider"></div>' +
        '<div class="col-right">' + rightHtml + '</div>' +
      '</div>'
    );
  }

  function heroBadgeSvg(){
    return (
      '<svg viewBox="0 0 100 100" aria-hidden="true">' +
        '<defs><path id="badgeRingPath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs>' +
        '<text font-size="7">' +
          '<textPath href="#badgeRingPath" textLength="236" lengthAdjust="spacing">PORTFOLIO ★ PORTFOLIO ★ PORTFOLIO ★ PORTFOLIO ★ </textPath>' +
        '</text>' +
      '</svg>'
    );
  }

  function homeTemplate(){
    return (
      '<section class="hero">' +
        '<canvas class="hero-dots-canvas" id="heroDotsCanvas" aria-hidden="true"></canvas>' +
        '<div class="hero-left">' +
          '<div class="hero-badge-row">' +
            '<div class="hero-badge">' +
              heroBadgeSvg() +
              '<div class="hero-badge-center">IB</div>' +
            '</div>' +
            '<div>' +
              '<div class="hero-est">Est. 2026</div>' +
              '<div class="hero-journal">a curated digital journal</div>' +
            '</div>' +
          '</div>' +
          '<div class="hero-intro" data-hero-intro>' +
            '<div class="hi-hello">' +
              '<div class="hi-g">hi,</div>' +
              '<div class="hi-n">I’m Ishika</div>' +
            '</div>' +
            '<p class="hi-line">I design things that ' +
              '<span class="hi-w" data-w="moves">move</span>, ' +
              '<span class="hi-w" data-w="reacts">react</span>, and ' +
              '<span class="hi-w hi-sp" data-w="surprises">surprise</span>.' +
            '</p>' +
          '</div>' +
        '</div>' +
        '<div class="hero-right">' +
          '<div class="hero-illustration">' +
            '<img class="illus-default" src="character-default.png" alt="Illustrated portrait of Ishika">' +
            '<img class="illus-hover" src="character-hover.png" alt="Illustrated portrait of Ishika, waving">' +
          '</div>' +
          '<p class="hero-illus-hint"><span class="hint-hover">hover around to say hi</span><span class="hint-touch">tap the illustration to say hi</span></p>' +
        '</div>' +
        '<div class="scroll-indicator"><span>Scroll</span><span class="line"></span></div>' +
      '</section>'
    );
  }

  function workTemplate(){
    var tiles = PROJECTS.map(function(p){
      var thumbHtml = p.thumb ? '<img class="tile-thumb" src="' + p.thumb + '" alt="">' : '';
      var thumbClass = p.thumb ? ' has-thumb' : '';
      return (
        '<div class="work-tile reveal ' + p.span + thumbClass + (p.soon ? ' is-soon' : '') + '"' + (p.soon ? ' aria-disabled="true"' : ' data-id="' + p.id + '"') + (p.ar ? ' style="--ar:' + p.ar + '"' : '') + '>' +
          thumbHtml +
          '<span class="index">' + p.id + '</span>' +
          (p.soon ? '<span class="soon-badge">Coming soon</span>' : '') +
          '<div class="tile-text"><div class="name">' + p.name + '</div><div class="tag">' + p.tag + '</div></div>' +
        '</div>'
      );
    }).join("");
    return twoColShell(
      "work.",
      "A small collection of ideas I had to build.",
      "3 selected projects, more coming soon.",
      '<div class="work-grid">' + tiles + '</div>'
    );
  }

  function aboutTemplate(){
    var traits = [
      { cls: "trait-1", label: "Communication" },
      { cls: "trait-2", label: "Critical Thinking" },
      { cls: "trait-3", label: "Attention to Detail" },
      { cls: "trait-4", label: "Management Skills" },
      { cls: "trait-5", label: "Digital Marketing" }
    ].map(function(t){
      return '<div class="trait ' + t.cls + ' draggable">' + t.label + '</div>';
    }).join("");

    var top = (
      '<div class="about-top">' +
        '<div class="photo-card draggable">' +
          '<div class="pc-head">' +
            '<div class="pc-avatar"></div>' +
            '<div><div class="pc-name">Ishika Bhansali</div></div>' +
          '</div>' +
          '<div class="pc-image"><img src="about-photo.jpg" alt="Portrait of Ishika Bhansali"></div>' +
          '<div class="pc-foot"><span>♡</span><span>Q</span><span>➤</span></div>' +
        '</div>' +
        '<div class="about-right">' +
          '<div class="about-bio">' +
            '<p>I design interactions, not just interfaces. I’m Ishika, an Interaction Design student exploring the relationship between people, technology, and experiences. My work moves between UI/UX, immersive experiences, creative technology, and physical interactions. I’m interested in creating experiences that feel intuitive, playful, and a little unexpected. Still learning. Still experimenting. Always making.</p>' +
            '<div class="contact-line"><span><a href="tel:+916377643638">+91 63776 43638</a></span><span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com" target="_blank" rel="noopener">ishikabhansali7@gmail.com</a></span></div>' +
          '</div>' +
          '<div class="traits-wrap">' + traits + '</div>' +
        '</div>' +
      '</div>'
    );

    var tools = [
      { name: "Figma", logo: "sw-figma.png" },
      { name: "Adobe Illustrator", logo: "sw-illustrator.png" },
      { name: "Adobe Photoshop", logo: "sw-photoshop.png" },
      { name: "Adobe InDesign", logo: "sw-indesign.png" },
      { name: "DaVinci Resolve", logo: "sw-davinci.png" },
      { name: "CorelDRAW", logo: "sw-coreldraw.jpg" },
      { name: "Blender", logo: "sw-blender.png" },
      { name: "SketchUp", logo: "sw-sketchup.jpg" },
      { name: "Unity", logo: "sw-unity.png" },
      { name: "TouchDesigner", logo: "sw-touchdesigner.png" }
    ];
    var swIcons = tools.map(function(t){
      return '<div class="sw-icon" title="' + t.name + '"><img src="' + t.logo + '" alt="' + t.name + '"></div>';
    }).join("");

    // left column: education → experience → i like making (directly under experience)
    var colLeft = (
      '<div class="about-col">' +

        '<div class="section-block reveal">' +
          '<h3>education</h3>' +
          '<ul class="timeline">' +
            '<li><span class="tl-date">2023 – 2027</span><div><strong>Bachelor of Design</strong><span class="tl-detail">Major in Interaction Design, Minor in Product Design<br>Anant National University</span></div></li>' +
          '</ul>' +
        '</div>' +

        '<div class="section-block reveal">' +
          '<h3>experience</h3>' +
          '<ul class="timeline">' +
            '<li><span class="tl-date">Dec 2020 – Present</span><div><strong>Founder</strong><span class="tl-detail">Sequence and Beads</span></div></li>' +
            '<li><span class="tl-date">Mar 2023 – Jun 2023</span><div><strong>Graphic Designer</strong><span class="tl-detail">Vinayak Print O Graphic</span></div></li>' +
            '<li><span class="tl-date">Apr 2026 – Jun 2026</span><div><strong>UI/UX Design Intern</strong><span class="tl-detail">Calip.io</span></div></li>' +
            '<li><span class="tl-date">Jun 2026 – Jul 2026</span><div><strong>Social Media Marketing Intern</strong><span class="tl-detail">Digital Darbar</span></div></li>' +
          '</ul>' +
        '</div>' +

        '<div class="section-block reveal">' +
          '<h3>i like making</h3>' +
          '<ul class="interest-list">' +
            '<li><span class="mark">✦</span>Digital experiences</li>' +
            '<li><span class="mark">✦</span>Immersive installations</li>' +
            '<li><span class="mark">✦</span>AR / VR</li>' +
            '<li><span class="mark">✦</span>Interactive spaces</li>' +
            '<li><span class="mark">✦</span>Games</li>' +
            '<li><span class="mark">✦</span>UI/UX</li>' +
            '<li><span class="mark">✦</span>Creative coding</li>' +
            '<li><span class="mark">✦</span>Interface design</li>' +
          '</ul>' +
        '</div>' +

      '</div>'
    );

    // right column: skills (design only — soft skills now live in the trait badges) → software
    var colRight = (
      '<div class="about-col">' +

        '<div class="section-block reveal">' +
          '<h3>skills</h3>' +
          '<div class="pills">' +
            '<span class="pill filled">UI/UX Design</span>' +
            '<span class="pill filled">Wireframing</span>' +
            '<span class="pill filled">Prototyping</span>' +
            '<span class="pill filled">User Research</span>' +
          '</div>' +
        '</div>' +

        '<div class="section-block reveal">' +
          '<h3>software</h3>' +
          '<div class="sw-card">' +
            '<div class="sw-head">software</div>' +
            '<div class="sw-grid">' + swIcons + '</div>' +
          '</div>' +
        '</div>' +

      '</div>'
    );

    var sections = '<div class="about-sections">' + colLeft + colRight + '</div>';

    return twoColShell(
      "about.",
      "Still learning. Still experimenting. Always making.",
      "Open to internships and collaborations.",
      top + sections
    );
  }

  function contactTemplate(){
    var noteCard = (
      '<div class="note-card reveal">' +
        '<div class="note-top">' +
          '<span>form · 001</span>' +
          '<span class="note-check">✓</span>' +
        '</div>' +
        '<h2 class="note-heading">Drop a note <span class="spark">✦</span></h2>' +
        '<form class="note-form" onsubmit="return false;">' +
          '<div class="note-row">' +
            '<div class="note-field"><label>- name -</label><input type="text"></div>' +
            '<div class="note-field"><label>- email -</label><input type="email"></div>' +
          '</div>' +
          '<div class="note-row">' +
            '<div class="note-field"><label>- phone -</label><input type="text"></div>' +
            '<div class="note-field"><label>- company -</label><input type="text"></div>' +
          '</div>' +
          '<div class="note-field note-field--full"><label>- message -</label><textarea rows="4"></textarea></div>' +
          '<button class="note-send" type="submit">Send letter →</button>' +
        '</form>' +
        '<div class="note-rev">rev · 2026-001</div>' +
      '</div>'
    );

    var links = (
      '<div class="contact-links">' +
        '<div class="finder-label">or find me here — drag these</div>' +
        '<button class="cv-banner reveal" id="cvBtn" type="button">' +
          '<span class="cv-label">- resume -</span>' +
          '<span class="cv-title">Download resume</span>' +
          '<span class="cv-arrow">↓</span>' +
        '</button>' +
        '<div class="stamp-box">' +
          '<div class="stamp-card stamp-1 draggable" data-href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com">' +
            '<span class="stamp-index">- 01 -</span>' +
            '<strong>Email</strong>' +
            '<a class="stamp-detail" href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com" target="_blank" rel="noopener">ishikabhansali7@gmail.com</a>' +
          '</div>' +
          '<div class="stamp-card stamp-2 draggable" data-href="https://www.linkedin.com/in/ishika-bhansali-7b424b262">' +
            '<span class="stamp-index">- 02 -</span>' +
            '<strong>LinkedIn</strong>' +
            '<a class="stamp-detail" href="https://www.linkedin.com/in/ishika-bhansali-7b424b262" target="_blank" rel="noopener">linkedin.com/in/ishika-bhansali-7b424b262</a>' +
          '</div>' +
          '<div class="stamp-card stamp-3 draggable" data-href="https://www.behance.net/ishikabhansali17">' +
            '<span class="stamp-index">- 03 -</span>' +
            '<strong>Behance</strong>' +
            '<a class="stamp-detail" href="https://www.behance.net/ishikabhansali17" target="_blank" rel="noopener">behance.net/ishikabhansali17</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );

    return twoColShell(
      "contact.",
      "Got an idea, a project, or just a hello? Let’s make something.",
      "I read every message.",
      '<div class="contact-layout">' + noteCard + links + '</div>'
    );
  }

  function detailTemplate(id){
    var idx = OPEN_PROJECTS.findIndex(function(p){ return p.id === id; });
    if (idx === -1) idx = 0;
    var project = OPEN_PROJECTS[idx];
    var prev = OPEN_PROJECTS[(idx - 1 + OPEN_PROJECTS.length) % OPEN_PROJECTS.length];
    var next = OPEN_PROJECTS[(idx + 1) % OPEN_PROJECTS.length];

    var heroContent = project.heroImage
      ? '<img class="detail-hero-image" src="' + project.heroImage + '" alt="' + (project.name + ' banner') + '">'
      : project.wordmark
      ? '<span class="hero-wordmark">' + project.wordmark + '</span>'
      : 'Hero media placeholder';

    var taglineHtml = project.tagline ? '<p class="case-tagline">' + project.tagline + '</p>' : '';

    var meta = project.meta || {};
    var metaFields = [
      { label: "Type", value: project.tag },
      { label: "Team", value: meta.team || "[team size]" },
      { label: "Timeline", value: meta.timeline || "[duration]" },
      { label: "Tools", value: meta.tools || "[tools]" }
    ];
    var metaRowHtml =
      '<div class="detail-meta-row reveal">' +
        metaFields.map(function(f){
          return '<div class="detail-meta-box"><span class="detail-meta-label">' + f.label + '</span><span class="detail-meta-value">' + f.value + '</span></div>';
        }).join('') +
      '</div>';

    var bodyContent;
    if (project.sections){
      bodyContent =
        '<div class="case-sections">' +
          project.sections.map(function(s){
            var tagsHtml = s.tags
              ? '<div class="case-tags">' + s.tags.map(function(t){ return '<span>' + t + '</span>'; }).join('') + '</div>'
              : '';
            var bodyParas = s.body ? (Array.isArray(s.body) ? s.body : [s.body]) : [];
            var bodyHtml = bodyParas.map(function(p){ return '<p>' + p + '</p>'; }).join('');
            var listHtml = s.list
              ? '<ul class="case-list">' + s.list.map(function(li){ return '<li>' + li + '</li>'; }).join('') + '</ul>'
              : '';
            var imageHtml = s.image
              ? '<img class="case-image" src="' + s.image + '" alt="' + (s.imageAlt || s.heading) + '">'
              : '';
            var imagesHtml = s.images
              ? s.images.map(function(im){ return '<img class="case-image" src="' + im.src + '" alt="' + im.alt + '">'; }).join('')
              : '';
            // no asset yet — a labeled dashed box marking where the real image goes
            var placeholders = s.imagePlaceholder
              ? [s.imagePlaceholder]
              : (s.imagePlaceholders || []);
            var placeholderHtml = placeholders.length
              ? '<div class="case-image-placeholders">' +
                  placeholders.map(function(t){ return '<div class="case-image-placeholder">' + t + '</div>'; }).join('') +
                '</div>'
              : '';
            return (
              '<div class="case-section reveal ' + (s.span || '') + '">' +
                '<span class="case-num">' + s.num + '</span>' +
                '<div class="case-section-body"><h4>' + s.heading + '</h4>' + bodyHtml + listHtml + imageHtml + imagesHtml + tagsHtml + placeholderHtml + '</div>' +
              '</div>'
            );
          }).join('') +
        '</div>';
    } else {
      bodyContent =
        '<div class="case-sections">' +
          '<div class="case-section reveal span-2">' +
            '<span class="case-num">01</span>' +
            '<div class="case-section-body"><h4>Overview</h4><p>Placeholder case-study paragraph. Describe the problem, approach, and outcome here once real content is ready.</p></div>' +
          '</div>' +
          '<div class="case-section reveal span-2">' +
            '<span class="case-num">02</span>' +
            '<div class="case-section-body"><h4>Process</h4><p>Placeholder paragraph two, for additional process detail or a supporting image caption.</p></div>' +
          '</div>' +
        '</div>';
    }

    return (
      '<div class="detail-hero">' + heroContent + '</div>' +
      '<div class="detail-body">' +
        '<div class="cat">' + project.tag + '</div>' +
        '<h1>' + project.name + '</h1>' +
        taglineHtml +
        metaRowHtml +
        bodyContent +
      '</div>' +
      '<div class="detail-nav">' +
        '<a href="#/work/' + prev.id + '" class="prev">' + prev.name + '</a>' +
        '<a href="#/work/' + next.id + '" class="next">' + next.name + '</a>' +
      '</div>'
    );
  }

  /* ---------- router ---------- */
  var app = document.getElementById("app");

  function hashToParts(hash){
    var h = String(hash || "").replace(/^#/, "");
    if (h === "") h = "/";
    return h.split("/").filter(Boolean);
  }

  function parseHash(){
    return hashToParts(location.hash);
  }

  function setActiveNav(routeBase){
    var links = primaryNav.querySelectorAll("a");
    links.forEach(function(a){
      a.setAttribute("data-active", a.getAttribute("data-route") === routeBase ? "true" : "false");
    });
  }

  // ---- page transition: "cinematic dolly". The outgoing page is cloned into
  // a fixed overlay so it can keep animating its exit (scale/fade/blur, plus
  // any .deco shapes drifting for a fake-parallax depth cue) completely
  // independently of the real DOM swap, which happens partway through the
  // exit so the two overlap and read as one continuous move rather than a
  // hard cut. The incoming page then plays its own settle-in.
  // Deliberately always plays in full, ignoring prefers-reduced-motion —
  // matches how every other animation on this site (badge spin, particle
  // dissolve) is set up to behave on this project, per explicit request.
  // guards against a fast repeat navigation (before a prior transition's
  // delayed callbacks have fired) leaving a stale timer that later swaps in
  // the wrong content or cancels the wrong animations — each run tags its
  // callbacks with the token that was current when it started, and any
  // in-flight overlay from a previous run is discarded immediately
  var panelToken = 0;
  var panelOverlay = null;
  var panelFirstRender = true;

  // ink-coloured curtain with a curved leading edge: rises to cover the page, the
  // new page is swapped in while covered, then the curtain lifts off the top
  function playPanelTransition(updateDOM, label){
    var myToken = ++panelToken;
    if (panelOverlay){ panelOverlay.remove(); panelOverlay = null; }
    if (panelFirstRender){ panelFirstRender = false; updateDOM(); return; }

    var COVER_MS = 600, HOLD_MS = 120, REVEAL_MS = 700;
    var OPEN_BOTTOM = "inset(100% 0 0 0 round 50% 50% 0 0 / 14vh 14vh 0 0)";
    var CLOSED = "inset(0 0 0 0 round 0 0 0 0 / 0 0 0 0)";
    var OPEN_TOP = "inset(0 0 100% 0 round 0 0 50% 50% / 0 0 14vh 14vh)";

    var overlay = document.createElement("div");
    overlay.className = "page-panel";
    overlay.innerHTML = "<span class=\"page-panel-label\"></span>";
    overlay.firstChild.textContent = label;
    overlay.style.clipPath = OPEN_BOTTOM;
    document.body.appendChild(overlay);
    panelOverlay = overlay;

    var labelEl = overlay.firstChild;
    var cover = overlay.animate(
      { clipPath: [OPEN_BOTTOM, CLOSED] },
      { duration: COVER_MS, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
    );
    labelEl.animate(
      [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: COVER_MS * 0.7, delay: COVER_MS * 0.35, easing: "cubic-bezier(.2,.7,.2,1)", fill: "both" }
    );

    cover.onfinish = function(){
      if (myToken !== panelToken) return;
      updateDOM();
      setTimeout(function(){
        if (myToken !== panelToken) return;
        var lift = overlay.animate(
          { clipPath: [CLOSED, OPEN_TOP] },
          { duration: REVEAL_MS, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" }
        );
        lift.onfinish = function(){
          overlay.remove();
          if (panelOverlay === overlay) panelOverlay = null;
        };
      }, HOLD_MS);
    };
  }

  var dollyToken = 0;
  var dollyOverlay = null;

  // torn down at the top of every render() so a stale rAF loop from a
  // previous visit to the home page never keeps animating a detached canvas
  var heroDotsCleanup = null;

  function playDollyTransition(updateDOM){
    var myToken = ++dollyToken;
    if (dollyOverlay){ dollyOverlay.remove(); dollyOverlay = null; }

    var EXIT_MS = 1000;
    var SWAP_AT_MS = 550;
    var ENTER_MS = 1000;
    var EXIT_EASE = "cubic-bezier(.4,0,.2,1)";
    var ENTER_EASE = "cubic-bezier(.2,.7,.2,1)";

    // clone the outgoing page into a fixed overlay positioned exactly over
    // the live #app, then hide the live one — the clone is what actually
    // plays the exit animation, so the real DOM swap underneath is invisible
    var rect = app.getBoundingClientRect();
    var clone = app.cloneNode(true);
    clone.removeAttribute("id");
    var overlay = document.createElement("div");
    overlay.className = "dolly-exit-layer";
    overlay.style.cssText =
      "position:fixed; left:" + rect.left + "px; top:" + rect.top + "px;" +
      "width:" + rect.width + "px; height:" + rect.height + "px;" +
      "overflow:hidden; pointer-events:none; z-index:500;";
    overlay.appendChild(clone);
    document.body.appendChild(overlay);
    dollyOverlay = overlay;
    app.style.visibility = "hidden";

    clone.animate(
      [
        { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
        { transform: "scale(1.15)", opacity: 0, filter: "blur(2px)" }
      ],
      { duration: EXIT_MS, easing: EXIT_EASE, fill: "forwards" }
    );

    // decorative shapes drift upward and scale up slightly, on a slightly
    // different timing than the main content, to fake depth/parallax
    clone.querySelectorAll(".deco").forEach(function(shape){
      var dy = -(15 + Math.random() * 10); // -15 to -25, varies per shape
      shape.animate(
        [
          { transform: "translateY(0) scale(1)" },
          { transform: "translateY(" + dy.toFixed(1) + "px) scale(1.1)" }
        ],
        { duration: Math.round(EXIT_MS * 0.9), delay: Math.round(EXIT_MS * 0.05), easing: EXIT_EASE, fill: "forwards" }
      );
    });

    // the swap happens before the exit finishes, so the incoming page's
    // enter overlaps the tail of the outgoing clone's exit
    setTimeout(function(){
      if (myToken !== dollyToken) return; // superseded by a newer navigation
      updateDOM();
      app.style.visibility = "";

      var mainEnter = app.animate(
        [
          { transform: "scale(.92)", opacity: 0, filter: "blur(2px)" },
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }
        ],
        { duration: ENTER_MS, easing: ENTER_EASE, fill: "both" }
      );

      // bigger shapes = more delay, so they feel farther back / slower to arrive
      var newDecos = Array.prototype.slice.call(app.querySelectorAll(".deco"));
      newDecos.sort(function(a, b){
        return (a.offsetWidth * a.offsetHeight) - (b.offsetWidth * b.offsetHeight);
      });
      var decoAnims = newDecos.map(function(shape, i){
        var dy = 10 + Math.random() * 5; // 10 to 15
        return shape.animate(
          [
            { transform: "translateY(" + dy.toFixed(1) + "px) scale(.95)" },
            { transform: "translateY(0) scale(1)" }
          ],
          { duration: ENTER_MS, delay: Math.round(i * (50 + Math.random() * 30)), easing: ENTER_EASE, fill: "both" }
        );
      });

      // cleanup: drop every inline effect once it's done so nothing lingers
      // on the DOM — elements fall back to their authored CSS state
      mainEnter.onfinish = function(){
        mainEnter.cancel();
        decoAnims.forEach(function(a){ a.cancel(); });
      };
    }, SWAP_AT_MS);

    // once the clone's own exit has fully played out, discard the overlay
    setTimeout(function(){
      if (myToken !== dollyToken) return; // a newer run already replaced/removed it
      overlay.remove();
      if (dollyOverlay === overlay) dollyOverlay = null;
    }, EXIT_MS + 30);
  }

  // routeParts, when passed, is rendered directly instead of trusting location.hash —
  // this keeps navigation working even in contexts where updating the URL fragment
  // is restricted (e.g. sandboxed previews) or hashchange doesn't fire.
  function render(routeParts){
    var parts = routeParts || parseHash();
    var html = "";
    var routeBase = "/";

    if (parts.length === 0){
      html = homeTemplate(); routeBase = "/";
    } else if (parts[0] === "about"){
      html = aboutTemplate(); routeBase = "/about";
    } else if (parts[0] === "work" && parts[1]){
      html = detailTemplate(parts[1]); routeBase = "/work";
    } else if (parts[0] === "work"){
      html = workTemplate(); routeBase = "/work";
    } else if (parts[0] === "contact"){
      html = contactTemplate(); routeBase = "/contact";
    } else {
      html = homeTemplate(); routeBase = "/";
    }

    function updateDOM(){
      if (heroDotsCleanup) heroDotsCleanup();
      if (window.HeroIntro) window.HeroIntro.destroy();
      app.innerHTML = html;
      setActiveNav(routeBase);
      window.scrollTo(0, 0);
      updateHeader();
      if (routeBase === "/about") bindPageInteractions();
      if (routeBase === "/contact") bindPageInteractions();
      if (routeBase === "/"){
        initHeroDots();
        if (window.HeroIntro) window.HeroIntro.init();
      }
      bindWorkTiles();
      initScrollReveal();
    }

    // "panel" = ink curtain sweeps up, swaps the page, sweeps away; "dolly" = the earlier zoom-and-fade
    var PAGE_TRANSITION = "panel";
    var PAGE_LABELS = { "/": "Home", "/about": "About", "/work": "Work", "/contact": "Contact" };
    if (PAGE_TRANSITION === "panel") playPanelTransition(updateDOM, PAGE_LABELS[routeBase] || "");
    else playDollyTransition(updateDOM);
  }

  /* ---------- draggable elements (About page: photo card + trait badges) ---------- */
  function makeDraggable(el){
    var startX = 0, startY = 0, baseX = 0, baseY = 0, dragging = false, moved = 0;

    el.addEventListener("pointerdown", function(e){
      dragging = true;
      el.classList.add("dragging");
      try { el.setPointerCapture(e.pointerId); } catch (err) {}
      startX = e.clientX; startY = e.clientY; moved = 0;
      baseX = parseFloat(el.getAttribute("data-tx") || "0");
      baseY = parseFloat(el.getAttribute("data-ty") || "0");
    });

    el.addEventListener("pointermove", function(e){
      if (!dragging) return;
      moved = Math.max(moved, Math.hypot(e.clientX - startX, e.clientY - startY));
      var nx = baseX + (e.clientX - startX);
      var ny = baseY + (e.clientY - startY);
      el.setAttribute("data-tx", nx);
      el.setAttribute("data-ty", ny);
      el.style.transform = "translate(" + nx + "px," + ny + "px)";
    });

    function stop(){
      dragging = false;
      el.classList.remove("dragging");
    }
    el.addEventListener("pointerup", function(){
      var href = el.getAttribute("data-href");
      var wasClick = dragging && moved < 5;
      stop();
      if (href && wasClick){
        window.open(href, "_blank", "noopener");
      }
    });
    el.addEventListener("pointercancel", stop);
  }

  function bindPageInteractions(){
    document.querySelectorAll("#app .draggable").forEach(makeDraggable);
    var cvBtn = document.getElementById("cvBtn");
    if (cvBtn){
      cvBtn.addEventListener("click", function(){
        downloadResume();
      });
    }
  }
  
  /* ---------- scroll interactions: parallax ---------- */
  function updateParallax(){
    if (reduceMotion) return;
    var scrolled = window.scrollY;
    
    var detailHero = document.querySelector('.detail-hero-image');
    if (detailHero) {
      detailHero.style.setProperty('--parallax-y', (scrolled * 0.3) + 'px');
    }
  }
  window.addEventListener("scroll", updateParallax, { passive: true });

  function bindWorkTiles(){
    var tiles = document.querySelectorAll(".work-tile:not(.is-soon)");
    tiles.forEach(function(t){
      t.addEventListener("click", function(e){
        navigate("#/work/" + t.getAttribute("data-id"));
      });
    });
  }

  // fade + rise each .reveal block into place as it scrolls into view,
  // staggering the first few by index so a row/column cascades in together
  function initScrollReveal(){
    var els = document.querySelectorAll("#app .reveal");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

    els.forEach(function(el, i){
      el.style.transitionDelay = (Math.min(i, 6) * 70) + "ms";
      io.observe(el);
    });
  }

  // scattered dots on the hero background that sketch a wobbly hand-drawn
  // line between any pair caught within CURSOR_RADIUS of the mouse. Dot
  // positions are rolled once (as fractions of the hero box, so they hold
  // their layout across resizes) and only the nearby-pairs list is
  // recomputed on mousemove; the rAF loop itself just re-renders that cached
  // list every frame so the wobble keeps animating smoothly in between.
  function initHeroDots(){
    var canvas = document.getElementById("heroDotsCanvas");
    var hero = canvas && canvas.closest(".hero");
    if (!canvas || !hero) return;

    var ctx = canvas.getContext("2d");
    var DOT_COUNT = 55;
    var CURSOR_RADIUS = 135;
    var MAX_LINE_DIST = 170;
    var WOBBLE_AMP = 3;

    var dots = [];
    for (var i = 0; i < DOT_COUNT; i++){
      dots.push({ fx: Math.random(), fy: Math.random(), r: 1 + Math.random() * 1.4 });
    }

    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize(){
      var rect = hero.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    var dotColor = "#888", lineFrom = "#888", lineTo = "#888";
    function readColors(){
      var style = getComputedStyle(hero);
      dotColor = style.getPropertyValue("--ink").trim() || "#888";
      lineTo = dotColor;
      lineFrom = style.getPropertyValue("--muted").trim() || dotColor;
    }
    readColors();

    var activePairs = [];
    var rafId = null;
    var running = false;

    function drawWobblyLine(a, b, opacity, phase){
      var x1 = a.fx * w, y1 = a.fy * h, x2 = b.fx * w, y2 = b.fy * h;
      var dx = x2 - x1, dy = y2 - y1;
      var len = Math.hypot(dx, dy) || 1;
      var nx = -dy / len, ny = dx / len;
      ctx.beginPath();
      var steps = 20;
      for (var i = 0; i <= steps; i++){
        var t = i / steps;
        var envelope = Math.sin(t * Math.PI); // 0 at both ends, so the line still meets the dots exactly
        var wobble = Math.sin(t * Math.PI * 2.4 + phase) * WOBBLE_AMP * envelope;
        var px = x1 + dx * t + nx * wobble;
        var py = y1 + dy * t + ny * wobble;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      var grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, lineFrom);
      grad.addColorStop(1, lineTo);
      ctx.strokeStyle = grad;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1.1;
      ctx.stroke();
    }

    function drawDots(){
      ctx.fillStyle = dotColor;
      dots.forEach(function(d){
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(d.fx * w, d.fy * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function frame(now){
      readColors();
      ctx.clearRect(0, 0, w, h);
      drawDots();
      activePairs.forEach(function(p){
        drawWobblyLine(p.a, p.b, p.opacity, p.phase + now * 0.0025);
      });
      if (running) rafId = requestAnimationFrame(frame);
    }

    function start(){
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }
    function stop(){
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      readColors();
      ctx.clearRect(0, 0, w, h);
      drawDots();
    }

    function recomputePairs(mx, my){
      var near = dots.filter(function(d){
        return Math.hypot(d.fx * w - mx, d.fy * h - my) <= CURSOR_RADIUS;
      });
      var pairs = [];
      for (var i = 0; i < near.length; i++){
        for (var j = i + 1; j < near.length; j++){
          var a = near[i], b = near[j];
          var dist = Math.hypot((a.fx - b.fx) * w, (a.fy - b.fy) * h);
          if (dist > MAX_LINE_DIST) continue;
          pairs.push({
            a: a, b: b,
            opacity: Math.max(0.08, 1 - dist / MAX_LINE_DIST),
            phase: (a.fx + b.fy) * 37 // deterministic per-pair offset so wobbles don't sync up
          });
        }
      }
      activePairs = pairs;
      if (pairs.length){ start(); } else { stop(); }
    }

    function onMouseMove(e){
      var rect = hero.getBoundingClientRect();
      recomputePairs(e.clientX - rect.left, e.clientY - rect.top);
    }
    function onMouseLeave(){
      activePairs = [];
      stop();
    }
    function onResize(){ resize(); }

    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    drawDots();

    if (heroDotsCleanup) heroDotsCleanup();
    heroDotsCleanup = function(){
      stop();
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      heroDotsCleanup = null;
    };
  }

  // Central navigation: computes the page directly from the hash string and renders
  // it immediately, then best-effort updates the visible URL. This way a click always
  // changes the page even if the browser/preview blocks the URL update itself.
  function navigate(hash){
    var parts = hashToParts(hash);
    try { history.pushState(null, "", hash); }
    catch (e1) { try { location.hash = hash; } catch (e2) { /* URL update unsupported here; render anyway */ } }
    render(parts);
  }

  // Delegate clicks on any in-page route link (nav, footer, tiles, prev/next) through navigate().
  document.addEventListener("click", function(e){
    var link = e.target.closest ? e.target.closest('a[href^="#/"]') : null;
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute("href"));
  });

  // Back/forward browser buttons still work via hashchange/popstate.
  window.addEventListener("hashchange", function(){ render(); });
  window.addEventListener("popstate", function(){ render(); });


  render();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
