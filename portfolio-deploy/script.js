(function(){
  "use strict";

  /* ---------- project data ---------- */
  var PROJECTS = [
    {
      id: "01", name: "Knoki Console", tag: "Physical Computing",
      thumb: "knoki-thumbnail.png", ar: "1672 / 941",
      wordmark: "Knoki",
      heroImage: "knoki-thumbnail.png",
      meta: { team: "8", timeline: "3 weeks", tools: "Arduino IDE, AutoCAD, Blender, SketchUp" },
      tagline: "A knock-based interactive learning console for children that turns rhythmic knocking into playful mini-games — inspired by Morse code, built for hands-on learning through touch, sound, and visual feedback rather than screens.",
      sections: [
        { num: "01", heading: "Overview", body: "Knoki is a tactile product design project that turns knock patterns into playful digital interactions, rhythm games, and sensory feedback." },
        { num: "02", heading: "Concept", body: "A simple knock interface becomes a physical input system that transforms taps into sound, visuals, and learning-focused gameplay." },
        { num: "03", heading: "Problem Statement", body: "Passive screen-based learning often lacks tactile and sensory engagement. Many educational tools are expensive, solitary, or limited in interaction.", span: "span-2" },
        { num: "04", heading: "User Flow", body: "Step through the console's own flow, in order.", span: "span-4", flow: [
          { label: "Power On", body: "The user turns on the console." },
          { label: "Game Menu", body: "The LCD displays the game selection menu." },
          { label: "Select a Game", body: "The user rotates the encoder to browse games and presses it to select one." },
          { label: "Play", body: "The selected game begins with instructions and audio-visual prompts." },
          { label: "Game Over", body: "The console displays the end-of-game prompt." },
          { label: "Continue", body: "The user chooses to continue or return to the game selection menu." }
        ] },
        { num: "05", heading: "Form Exploration", body: "A focused exploration of physical form, interface placement, and tactile product structure before the final direction.", image: "knoki-iterations.png", imageAlt: "Knoki form exploration, concept exploration, 3D exploration, and ideation sketches", span: "span-4" },
        { num: "06", heading: "Prototype", body: "Testing the interaction concept through 3D modeling, physical mockups, and early tactile trials.", tags: ["3D Model", "Physical Prototype", "Interaction Testing"], span: "span-4" },
        { num: "07", heading: "Tech", body: "The hardware behind every knock, screen, and sound. Click a pin on the console to see what it does.", span: "span-4", tech: [
          { name: "Morse Code Table & Guidelines", x: 37, y: 30, body: "Engraved directly onto the console's panel, so the dot/dash reference for the Morse Code Game is always within reach, no screen required." },
          { name: "LCD", x: 43, y: 55, body: "Displays the game menu, instructions, and real-time prompts — the same screen recreated in the User Flow simulation above." },
          { name: "Rotary Encoder", x: 34, y: 70, body: "The physical dial used to browse the game menu and confirm a selection — the same rotate-and-press gesture recreated in the flow simulator above." },
          { name: "Piezo Sensor", x: 57, y: 70, body: "Mounted beneath this knock surface, it senses the force and timing of every tap and converts it into the digital tap events each game runs on." },
          { name: "LED", x: 74, y: 66, body: "Gives instant visual feedback for every tap, confirming a hit or signalling a miss, without needing to look away from your hands." },
          { name: "Buzzer", x: 73, y: 83, body: "Plays the beep sequences for Beep Boop Counter and short confirmation tones across every game, so players can rely on sound as much as sight." }
        ] },
        { num: "08", heading: "Games", body: "Four knock-based mini-games, each teaching a different skill through the same single tap input.", span: "span-4", games: [
          { name: "Red Light, Green Light", objective: "Improve attention and reaction time", body: "The LCD alternates between GREEN and RED. Players tap during GREEN and stop during RED. Tapping during RED ends the game." },
          { name: "Math Knock", objective: "Practise basic arithmetic through taps", body: "The LCD displays a maths question. Players tap the number of times matching the answer. Correct answers lead to the next question, while incorrect answers trigger a retry or game over." },
          { name: "Beep Boop Counter", objective: "Improve listening and counting skills", body: "The buzzer plays a sequence of beeps. Players count the beeps and tap the same number of times to match the sequence." },
          { name: "Morse Code Game", objective: "Learn and reproduce Morse code patterns", body: "Players refer to the Morse code table and enter sequences using taps. A single tap represents a DOT, while a double tap represents a DASH." }
        ] },
        { num: "09", heading: "Try It — Red Light, Green Light", body: "A quick browser version of the first mini-game, built with the same single-tap rule as the console.", span: "span-4", demo: "rlgl" },
        { num: "10", heading: "Final Product", body: "A premium physical console with a clean interface, strong proportions, and an approachable industrial aesthetic.", image: "knoki-final-product.png", imageAlt: "Knoki final product — four angles of the finished purple and gold console with its accompanying cards", span: "span-4" },
        { num: "11", heading: "What I Did", body: "", tags: ["Research", "UX Design", "Interaction Design", "Concept Development", "Prototyping", "3D Modeling", "Final Product Design"], span: "span-4" }
      ]
    },
    {
      id: "02", name: "Red Spire", tag: "Logo Design",
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
      id: "03", name: "BookMyShow Redesign", tag: "UI/UX Design", hidden: true,
      thumb: "bookmyshow-banner.png", ar: "1366 / 768",
      wordmark: "BookMyShow",
      heroImage: "bookmyshow-banner.png",
      meta: { team: "Individual", timeline: "1 week", tools: "Figma" },
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
      id: "04", name: "Lost History of Adalaj", tag: "VR Experience",
      thumb: "adalaj-banner.webp", ar: "1366 / 768",
      wordmark: "Lost History of Adalaj",
      heroImage: "adalaj-banner.webp",
      tagline: "A VR experience set in Adalaj Stepwell, 1498. This story is imagined — Adalaj and Dada Harir ni Vav were built around the same period by different patrons; their link here is a creative premise, not a historical claim.",
      meta: { team: "5", timeline: "3 weeks", tools: "SketchUp, Blender, Unity" },
      sections: [
        { num: "01", heading: "Overview", body: [
          "Lost History of Adalaj puts you inside the stepwell at night, as a 15th-century royal architect (a Rajmistry). You have already studied the building in daylight. Tonight you return with a lantern, a compass, and a toolbox to see what only the dark can show you.",
          "There is no tutorial or intro screen. You arrive confused, find your lantern, and the story unfolds as you explore."
        ], span: "span-4" },
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
        ], images: [
          { src: "adalaj-gameplay-lantern.jpg", alt: "The lantern the player carries through the stepwell" },
          { src: "adalaj-gameplay-toolbox.png", alt: "The craftsman's toolbox" },
          { src: "adalaj-gameplay-compass.png", alt: "The compass used to check symmetry and scale" },
          { src: "adalaj-gameplay-book.jpg", alt: "The royal Farman, closed" },
          { src: "adalaj-gameplay-farman-open.jpg", alt: "The Farman open, revealing the tale of Ruda Bai" }
        ], span: "span-4" },
        { num: "05", heading: "Walkthrough", list: [
          "Arrival: You enter the stepwell with no explanation. The dark is disorienting on purpose.",
          "Discovery: You find the lantern. A royal Farman (a decree) begins to play, slowly revealing who you are and why you’re here.",
          "Study: You go deeper, using your tools to examine carvings, structure, and proportions.",
          "Dawn: As you reach the lowest level, morning light arrives. Time itself tells you the night’s work is done.",
          "Ending: You close the toolbox. The Farman’s final words point to Dada Harir ni Vav, the building this night will shape."
        ], video: "adalaj-walkthrough.mp4", videoLabel: "the walkthrough video", span: "span-4" },
        { num: "06", heading: "Why Multisensory", list: [
          "Depth over flatness: Adalaj is about depth, and a screen flattens it. In VR you feel the drop as you descend.",
          "Touch and control: Holding the lantern in your own hand means what you see depends on your choices, not the camera’s.",
          "Looking as doing: The architect’s job is looking closely. VR lets the player do the same thing physically, not just watch it happen."
        ], span: "span-2" },
        { num: "07", heading: "Design Process", list: [
          "Block-out: I built the base structure in SketchUp to get proportions and depth right across every level.",
          "Detail pass: I refined geometry and carved detail in Blender.",
          "Texturing and lighting: I applied and tuned stone textures in Unity, then balanced lighting between the lantern and natural darkness.",
          "Interaction and VR testing: The team layered in tool interactions and tested the space at human scale in VR, iterating on what felt right."
        ], span: "span-2" },
        { num: "08", heading: "Environment Building", body: "The stepwell is deep and multi-layered, so the build had to hold together as one continuous space rather than a series of disconnected rooms. Level proportions were blocked out first, then carved detail, worn stone, and age marks were added to give each surface its own character without breaking consistency across walls, pillars, and smaller assets. Because the space plays out mostly by lantern light, every texture was checked under low, moving light rather than flat daylight, since that is the only condition players actually see it in.", images: [
          { src: "adalaj-env-plan.jpg", alt: "Top-down floor plan of the stepwell's levels" },
          { src: "adalaj-env-columns-wide.jpg", alt: "Wide cutaway view of the pillared levels" },
          { src: "adalaj-env-columns-angle.jpg", alt: "Angled interior view of the stone pillars and carved bands" },
          { src: "adalaj-env-arch-closeup.jpg", alt: "Close-up of a carved archway and pillar detail" },
          { src: "adalaj-env-vr-daylight.jpg", alt: "The finished stepwell in daylight, seen in VR" },
          { src: "adalaj-env-vr-underwater.jpg", alt: "Looking down into the water from the stepwell entrance, in VR" },
          { src: "adalaj-env-vr-compass.jpg", alt: "Using the compass among the underwater pillars, in VR" }
        ], span: "span-4" },
        { num: "09", heading: "What Failed (and How We Fixed It)", list: [
          "Modelling a deep, multi-level structure — Problem: early passes felt disconnected between levels, with proportions that didn’t read as one structure. Fix: base geometry blocked out in SketchUp first for proportion, then detailed in Blender. Result: the player can descend through a space that feels continuous and real.",
          "Getting the stone to look right — Problem: generic textures broke immersion up close and didn’t respond well to lantern light. Fix: repeated texture baking and UV adjustments, tested specifically under lantern light rather than daylight. Result: walls, pillars, and small assets share one consistent look.",
          "Keeping the environment light enough for VR — Problem: dense geometry and detailed textures slowed performance. Fix: cut unnecessary geometry and balanced texture quality against performance. Result: the space stays detailed but runs smoothly.",
          "Making interactions feel real — Problem: early tool pickups felt clunky and accidental. Fix: tested Unity physics, colliders, and custom scripts, then tuned object weight, grip points, and animation triggers. Result: the lantern, compass, and toolbox behave consistently, so players can focus on exploring.",
          "Lighting a night-time heritage site — Problem: too dark and the site was unplayable, too bright and the mood disappeared. Fix: iterated on ambient light, point lights, light baking, falloff values, and post-processing. Result: the lantern makes the space feel quietly alive without losing visibility."
        ], span: "span-4" },
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
        ], span: "span-4" }
      ]
    },
    {
      id: "06", name: "Smart Plant Friend", tag: "Augmented Reality",
      thumb: "smartplant-banner.webp", ar: "1672 / 941",
      wordmark: "Smart Plant Friend",
      heroImage: "smartplant-banner.webp",
      meta: { team: "Individual", timeline: "Oct 2026", tools: "Unity 6, AR Foundation, Unity Sentis, TestFlight" },
      tagline: "A new way for kids to learn about plants: point a phone at a book page and watch a 3D plant grow out of it, or point at a real plant and ask it questions.",
      sections: [
        {
          num: "01", heading: "The Idea",
          lead: "Plants are always doing something — drinking, growing, making food. Kids just can't see it. Smart Plant Friend makes that invisible work something you can watch, hear and tap.",
          modes: [
            { title: "Mode 1 · Scan my book", body: "Point the phone at a plant picture in a book. A 3D tomato plant grows out of it, stage by stage, with captions. Tap any part to learn what it does." },
            { title: "Mode 2 · Scan a real plant", body: "Point the phone at any plant around you. Plant Buddy names it and answers kid-sized questions, by button or by voice." }
          ]
        },
        {
          num: "02", heading: "The Problem",
          headline: "Kids pass the test on plants without ever connecting it to a real plant.",
          lead: "Plant biology reaches children second-hand: a labelled diagram, a paragraph about the stem, a fact to recall. The process stays abstract because it is invisible, slow and never tied to anything the child actually watched happen.",
          cards: [
            { color: "#36B3EB", label: "Invisible", body: "Water moving up a stem can't be seen with the naked eye." },
            { color: "#F7BA3B", label: "Slow", body: "Growth from seed to fruit takes weeks — far longer than a lesson." },
            { color: "#F36056", label: "Flat", body: "A printed diagram can label parts, but can't show them working." }
          ],
          hmw: "How might we let a child see, hear and touch what a plant is really doing — using the book and the plants already around them?"
        },
        {
          num: "03", heading: "Research",
          stats: [
            { color: "#36B3EB", stat: "g = 0.80", body: "Large effect of AR on K-12 students' motivation, across 45 experimental studies (2010–2022).", takeaway: "AR is worth it for engagement, not just novelty.", source: "Educational Technology Research & Development" },
            { color: "#F7BA3B", stat: "+41.7%", body: "Learning efficiency with an AR education tool that engages sight, sound and touch together (plus +33% pronunciation, +16.7% interest).", takeaway: "Design for several senses at once; support the teacher, don't replace them.", source: "ARET study, IJETR" },
            { color: "#1F6B33", stat: "Words + pictures", body: "Mayer's multimedia principles: people learn better from pictures with words than words alone, and spoken words beside visuals beat on-screen text.", takeaway: "Narrate each stage; keep captions to one short line.", source: "Digital Learning Institute" }
          ],
          studies: [
            { title: "Rural students & AR", body: "Rural students enjoyed the AR app and felt positive about it → it can work beyond city schools.", source: "IEEE Xplore" },
            { title: "AR manipulatives, primary school", body: "Handling AR objects raised young pupils' creative thinking and motivation → let kids tap and explore, not just watch.", source: "Journal of Computer Assisted Learning" },
            { title: "Immersive media & environment", body: "Immersive media deepens understanding of environmental topics → nature content suits AR.", source: "SVU Press" }
          ]
        },
        {
          num: "04", heading: "Who It's For",
          pair: [
            { title: "The young learner", body: "Curious, but may not read confidently yet. Short attention span; loves pointing and tapping.", so: "So: narration carries the lesson, captions stay short, buttons are big and colour-coded." },
            { title: "The parent or teacher", body: "Wants kids to learn by exploring, not memorising — using the books and plants they already have.", so: "So: the app adds to the book instead of replacing it — no extra materials." }
          ]
        },
        {
          num: "05", heading: "User Flow",
          subtitle: "One home screen, two paths, no dead ends.",
          home: "smartplant-home-screen.jpg",
          flows: [
            {
              key: "book", label: "Scan my book",
              steps: [
                { label: "Point at the book page", img: "smartplant-stage1-seed.jpg" },
                { label: "Plant grows in 5 stages", img: "smartplant-stage4-leaves.jpg" },
                { label: "Tap a part", img: "smartplant-stage6-tomatoes.jpg" },
                { label: "Info card", img: "smartplant-card-roots.jpg" },
                { label: "“Tap anywhere to close”", img: "smartplant-card-fruit.jpg" }
              ]
            },
            {
              key: "plant", label: "Scan a real plant",
              steps: [
                { label: "Point & tap SCAN", img: "smartplant-scan-camera.jpg" },
                { label: "Plant named", img: "smartplant-q-type.jpg" },
                { label: "Ask: 4 buttons or mic", img: "smartplant-q-needs.jpg" },
                { label: "Plant Buddy answers", img: "smartplant-q-eat.jpg" },
                { label: "Scan again", img: "smartplant-q-funfact.jpg" }
              ]
            }
          ],
          notes: [
            { label: "Setup", body: "A phone or tablet, plus a book or any plant. About 1 m × 1 m — wherever the child already is." },
            { label: "Length", body: "The growth sequence runs in under a minute; kids can explore parts as long as they like." },
            { label: "Reset", body: "Nothing is saved. “Home” or “Scan again” starts fresh for the next child." }
          ]
        },
        {
          num: "06", heading: "Final Outcome",
          videos: [
            { src: "smartplant-video-book.mp4", label: "Scan my book demo", caption: "Scan the book" },
            { src: "smartplant-video-realplant.mp4", label: "Scan a real plant demo", caption: "Scan the real plant" }
          ]
        },
        {
          num: "07", heading: "Multisensory Design",
          cards: [
            { label: "See it grow", body: "A 3D plant grows in stages, anchored to the real page, with a label for each stage. Built with AR Foundation image tracking and Unity animation." },
            { label: "Hear it explained", body: "Narration explains each stage in plain words, for kids who aren't reading confidently yet. The mic lets them ask out loud." },
            { label: "Hold the real thing", body: "Holding the book or standing by a real plant, and tapping parts, keeps learning tied to something physical." }
          ],
          note: "Smell and taste were left out on purpose: adding props would break the “just point at what's already there” simplicity."
        },
        {
          num: "08", heading: "Reflection & Next",
          reflections: [
            "Simpler beat smarter: each version removed something — sensors, logging, choosing up front — and each time the experience got easier for a child.",
            "Add to how kids already learn: anchoring to a real book page made the app part of learning, not a detour from it.",
            "Safety is a design decision: for kids, the answer to “can we eat it?” had to be written with care."
          ],
          next: [
            "Process mode: show water travelling up the stem, glowing",
            "Line-art redraw of the child's own plant",
            "More books, topics and plant processes",
            "Usability sessions with kids and a teacher"
          ]
        }
      ]
    },
    { id: "05", name: "Spotify Data Universe", tag: "Data Visualization", soon: true }
  ];
  var OPEN_PROJECTS = PROJECTS.filter(function(p){ return !p.soon && !p.hidden; });

  // Playground (the tulip garden) is built but switched off for now. Set to true to bring back the page and its nav link.
  var PLAYGROUND_ENABLED = true;
  if (!PLAYGROUND_ENABLED){
    var pgLink = document.querySelector('nav.primary a[data-route="/playground"]');
    if (pgLink) pgLink.remove();
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    var drop = title.replace(/[^a-z0-9]/i, "").charAt(0).toUpperCase();
    return (
      '<div class="page-shell">' +
        '<div class="page-head">' +
          '<span class="ph-drop" aria-hidden="true">' + drop + '</span>' +
          '<span class="ph-rule" aria-hidden="true"></span>' +
          '<div class="ph-copy">' +
            '<p class="ph-kicker">Ishika Bhansali — Portfolio</p>' +
            '<h1 class="page-title tilt">' + title + '</h1>' +
            '<p class="page-desc tilt">' + desc + '</p>' +
            '<div class="meta-line tilt">' + meta + '</div>' +
          '</div>' +
        '</div>' +
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
      '<section class="stage" id="st">' +
        '<div class="fold f1"></div><div class="fold f2"></div>' +

        '<div class="blob" data-f="0" style="--x:57%;--y:2%;--s:27cqw;--px:52%;--py:4%;--ps:42cqw;--ar:1/0.82;--b:22px;--d:.2s;--r:52% 48% 46% 54%/58% 52% 48% 42%"><i></i><b>AR / VR worlds</b></div>' +
        '<div class="blob" data-f="1" style="--x:3%;--y:52%;--s:15cqw;--px:3%;--py:34%;--ps:26cqw;--ar:1/0.85;--b:16px;--d:.6s;--r:58% 42% 50% 50%/55% 45% 55% 45%"><i></i><b>UI / UX</b></div>' +
        '<div class="blob" data-f="2" style="--x:23%;--y:47%;--s:10cqw;--px:33%;--py:37%;--ps:17cqw;--b:12px;--d:.9s;--r:50% 50% 46% 54%/60% 56% 44% 40%"><i></i><b>tiny games</b></div>' +
        '<div class="blob" data-f="3" style="--x:31%;--y:37%;--s:6cqw;--px:46%;--py:32%;--ps:10cqw;--b:9px;--d:1.1s;--r:60% 40% 50% 50%"><i></i><b>creative code</b></div>' +
        '<div class="blob" data-f="4" style="--x:33%;--y:62%;--s:6cqw;--px:40%;--py:46%;--ps:11cqw;--ar:1/0.8;--b:8px;--d:1.3s;--r:55% 45% 52% 48%/50% 50% 50% 50%"><i></i><b>installations</b></div>' +
        '<div class="blob half" data-f="5" style="--x:46%;--y:71%;--s:5cqw;--px:58%;--py:48%;--ps:9cqw;--ar:.8/1;--b:5px;--d:1.5s"><i></i><b>physical things</b></div>' +
        '<div class="blob" data-f="6" style="--x:88%;--y:57%;--s:7cqw;--px:84%;--py:50%;--ps:10cqw;--b:10px;--d:1.7s;--r:48% 52% 60% 40%/50% 46% 54% 50%"><i></i><b>play, always</b></div>' +

        '<span class="lw a rv w1" style="--x:9%;--y:32.5%;--px:6%;--py:25%;--d:1.2s">people</span>' +
        '<span class="pl a rv" style="--x:12.6%;--y:36.4%;--px:27%;--py:27%;--d:1.3s;translate:-50% -50%"></span>' +
        '<span class="lw a rv" style="--x:18%;--y:35.2%;--px:35%;--py:26.3%;--d:1.35s;pointer-events:none">to</span>' +
        '<span class="lw a rv w2" style="--x:4.5%;--y:40%;--px:6%;--py:29%;--d:1.4s">things</span>' +

        '<div class="hi a rv" style="--x:52%;--y:24%;--px:56%;--py:17%;--d:1.5s"><span>Somewhere between</span><span>logic and</span><b>imagination.</b></div>' +

        '<div class="cred a rv" style="--x:52%;--y:48%;--px:54%;--py:36%;--d:1.9s">Ishika Bhansali — Interaction Design<br>Portfolio 2026</div>' +

        '<div class="ph a rv" id="ph" style="--x:52%;--y:60%;--px:6%;--py:55%;--d:2.1s">' +
          '<div class="lay then"><img id="imThen" src="" alt="Ishika as a child"><em>your childhood photo</em></div>' +
          '<div class="lay now"><img id="imNow" src="" alt="Ishika today"><em>you, now</em></div>' +
          '<i class="sp"></i><span class="tl">then</span><span class="tr">now</span>' +
          '<div class="up">preview yours: <label>then<input type="file" id="fThen" accept="image/*"></label> · <label>now<input type="file" id="fNow" accept="image/*"></label></div>' +
        '</div>' +

        '<p class="nt a rv" style="--x:4%;--y:85%;--px:6%;--py:84%;--d:2.4s">est. 2023 · interaction designer</p>' +
        '<p class="nt a rv" style="--x:24%;--y:79%;--px:52%;--py:86%;--d:2.6s">drag the shapes around</p>' +
        '<p class="nt a rv" style="--x:40%;--y:89%;--px:6%;--py:92%;--d:2.8s">Made of maybes.</p>' +
        '<a class="nt a rv" href="#/contact" style="--x:86%;--y:86%;--px:66%;--py:92%;--d:3s">say hi ↗</a>' +
        '<div class="nav rv" style="--d:2.8s"><button id="snd" type="button">sound off</button></div>' +
      '</section>' +
      '<div class="cur" id="cur"><em></em></div>'
    );
  }

  function workTemplate(){
    var entries = PROJECTS.filter(function(p){ return !p.hidden; }).map(function(p, i){
      var displayNum = String(i + 1).padStart(2, "0");
      var note = p.tagline || (p.sections && p.sections[0] && p.sections[0].body) || "";
      var contentHtml = p.thumb
        ? (
            '<div class="wl-content">' +
              '<div class="wl-media" style="--ar:' + p.ar + '"><img src="' + p.thumb + '" alt=""></div>' +
              (note
                ? '<div class="wl-note"><span class="wl-note-label">/ project notes /</span><p>' + note + '</p></div>'
                : '') +
            '</div>'
          )
        : '';
      return (
        '<div class="work-tile tilt' + (p.soon ? ' is-soon' : '') + '"' +
          (p.soon ? ' aria-disabled="true"' : ' data-id="' + p.id + '" data-bubble="view project"') + '>' +
          '<div class="wl-row">' +
            '<span class="wl-num">' + displayNum + '</span>' +
            '<div class="wl-headline">' +
              '<h2 class="wl-name">' + p.name + '</h2>' +
              '<span class="wl-tag">' + p.tag + '</span>' +
            '</div>' +
            (p.soon
              ? '<span class="wl-soon">Coming soon</span>'
              : '<span class="wl-arrow" aria-hidden="true">↗</span>') +
          '</div>' +
          contentHtml +
        '</div>'
      );
    }).join("");
    return twoColShell(
      "work.",
      "A small collection of ideas I had to build.",
      OPEN_PROJECTS.length + " selected projects, more coming soon.",
      '<div class="work-list">' + entries + '</div>'
    );
  }

  // the pool of software logos the "tools i know (…)" badge cycles through —
  // see initAboutTools for the swap timer
  var ABOUT_TOOLS = [
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

  function aboutTemplate(){
    var hero = (
      '<div class="ab-hero">' +
        '<div class="ab-intro">' +
          '<p class="ab-bio tilt">I’m Ishika, an Interaction Design student exploring the relationship between people, technology, and experiences. My work moves between UI/UX, immersive experiences, creative technology, and physical interactions. I’m interested in creating experiences that feel intuitive, playful, and a little unexpected.</p>' +
          '<div class="ab-contact tilt">' +
            '<div class="ab-contact-label">contact</div>' +
            '<a href="tel:+916377643638">+91 63776 43638</a>' +
            '<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com" target="_blank" rel="noopener">ishikabhansali7@gmail.com</a>' +
          '</div>' +
          '<div class="ab-tools-row tilt">' +
            '<span>tools i know</span>' +
            '<span class="ab-paren" aria-hidden="true">(</span>' +
            '<span class="ab-tool-badge" id="toolBadge" title="' + ABOUT_TOOLS[0].name + '"><img src="' + ABOUT_TOOLS[0].logo + '" alt="' + ABOUT_TOOLS[0].name + '"></span>' +
            '<span class="ab-paren" aria-hidden="true">)</span>' +
          '</div>' +
        '</div>' +
        '<div class="ab-media">' +
          '<div class="ab-photo-wrap tilt">' +
            '<div class="ab-photo"><img src="about-photo.jpg" alt="Portrait of Ishika Bhansali"></div>' +
            '<h2 class="ab-hello">Oh hi!</h2>' +
          '</div>' +
        '</div>' +
      '</div>'
    );

    var experiences = [
      { date: "Dec 2020 – Present", role: "Founder", detail: "Sequence and Beads" },
      { date: "Mar 2023 – Jun 2023", role: "Graphic Designer", detail: "Vinayak Print O Graphic" },
      { date: "Apr 2026 – Jun 2026", role: "UI/UX Design Intern", detail: "Calip.io" },
      { date: "Jun 2026 – Jul 2026", role: "Social Media Marketing Intern", detail: "Digital Darbar" }
    ];
    var expRows = experiences.map(function(e){
      return (
        '<div class="ab-tl-row tilt">' +
          '<span class="ab-tl-dot" aria-hidden="true"></span>' +
          '<span class="ab-tl-date">' + e.date + '</span>' +
          '<span class="ab-tl-title">' + e.role + '</span>' +
          '<span class="ab-tl-detail">' + e.detail + '</span>' +
        '</div>'
      );
    }).join("");

    var timeline = (
      '<div class="ab-timeline">' +
        '<div class="ab-tl-group">' +
          '<div class="ab-tl-label tilt">education →</div>' +
          '<div class="ab-tl-rows">' +
            '<div class="ab-tl-row tilt">' +
              '<span class="ab-tl-dot" aria-hidden="true"></span>' +
              '<span class="ab-tl-date">2023 – 2027</span>' +
              '<span class="ab-tl-title">Bachelor of Design</span>' +
              '<span class="ab-tl-detail">Major in Interaction Design, Minor in Product Design — Anant National University</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="ab-tl-group">' +
          '<div class="ab-tl-label tilt">experience →</div>' +
          '<div class="ab-tl-rows">' + expRows + '</div>' +
        '</div>' +
      '</div>'
    );

    function pillBox(headLabel, items){
      var pills = items.map(function(p){ return '<span class="ab-pill tilt">' + p + '</span>'; }).join("");
      return (
        '<div class="ab-box">' +
          '<div class="ab-box-head tilt">' + headLabel + '</div>' +
          '<div class="ab-box-pills">' + pills + '</div>' +
        '</div>'
      );
    }

    var foot = (
      '<div class="ab-foot">' +
        pillBox("i like making", [
          "Digital experiences", "Immersive installations", "AR / VR", "Interactive spaces",
          "Games", "UI/UX", "Creative coding", "Interface design"
        ]) +
        pillBox("skills", [
          "User research", "Wireframing", "Prototyping", "Interaction design", "Visual design",
          "Branding", "3D modelling", "AR/VR development", "Physical computing", "Motion & video", "Social media marketing"
        ]) +
      '</div>'
    );

    // soft blurred shapes + thin crossing lines, echoing the home screen's
    // blob stage — purely decorative, sits behind the content, no interaction
    var bg = (
      '<div class="ab-blobs" aria-hidden="true">' +
        '<span class="ab-blob b1"></span>' +
        '<span class="ab-blob b2"></span>' +
        '<span class="ab-blob b3"></span>' +
        '<span class="ab-line l1"></span>' +
        '<span class="ab-line l2"></span>' +
      '</div>'
    );

    return twoColShell(
      "about.",
      "Still learning. Still experimenting. Always making.",
      "Open to internships and collaborations.",
      '<div class="about-wrap">' + bg + hero + timeline + foot + '</div>'
    );
  }

  function playgroundTemplate(){
    return (
      '<section class="pg-full">' +
        '<div class="pg-garden" id="pgGarden" role="img" aria-label="A grassy garden where visitors plant tulips">' +
          '<div class="pg-flowers" id="pgFlowers"></div>' +
          '<img class="pg-ghost" id="pgGhost" alt="" hidden>' +
        '</div>' +
        '<div class="pg-badge">playground</div>' +
        '<div class="pg-status" id="pgCount"></div>' +
        '<p class="pg-toast" id="pgToast" role="status" aria-live="polite"></p>' +
        '<div class="pg-dock">' +
          '<div class="pg-palette" id="pgPalette"></div>' +
          '<span class="pg-dock-divider" aria-hidden="true"></span>' +
          '<button class="pg-btn" id="pgUndo" type="button" disabled>Undo</button>' +
        '</div>' +
        '<p class="pg-hint" id="pgHint">Pick a tulip, then click the grass.</p>' +
        '<p class="pg-note" id="pgNote"></p>' +
      '</section>'
    );
  }

  function contactTemplate(){
    var noteCard = (
      '<div class="note-card tilt">' +
        '<div class="note-top">' +
          '<span class="note-check">✓</span>' +
        '</div>' +
        '<h2 class="note-heading">Drop a note <span class="spark">✦</span></h2>' +
        '<form class="note-form" id="noteForm" novalidate>' +
          '<div class="note-row">' +
            '<div class="note-field"><label for="nf-name">- name -</label><input id="nf-name" name="name" type="text" autocomplete="name" maxlength="80" data-bubble="type"></div>' +
            '<div class="note-field"><label for="nf-email">- email -</label><input id="nf-email" name="email" type="email" autocomplete="email" maxlength="120" required data-bubble="type"></div>' +
          '</div>' +
          '<div class="note-row">' +
            '<div class="note-field"><label for="nf-phone">- phone -</label><input id="nf-phone" name="phone" type="text" autocomplete="tel" maxlength="30" data-bubble="type"></div>' +
            '<div class="note-field"><label for="nf-company">- company -</label><input id="nf-company" name="company" type="text" autocomplete="organization" maxlength="80" data-bubble="type"></div>' +
          '</div>' +
          '<div class="note-field note-field--full"><label for="nf-message">- message -</label><textarea id="nf-message" name="message" rows="4" maxlength="2000" required data-bubble="type"></textarea></div>' +
          '<input class="note-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">' +
          '<button class="note-send" type="submit" data-bubble="send">Send letter →</button>' +
          '<p class="note-status" id="noteStatus" role="status" aria-live="polite"></p>' +
        '</form>' +
      '</div>'
    );

    var links = (
      '<div class="contact-links">' +
        '<div class="finder-label">or find me here — drag these</div>' +
        '<button class="cv-banner tilt" id="cvBtn" type="button" data-bubble="download">' +
          '<span class="cv-label">- resume -</span>' +
          '<span class="cv-title">Download resume</span>' +
          '<span class="cv-arrow">↓</span>' +
        '</button>' +
        '<div class="stamp-box">' +
          '<div class="stamp-card stamp-1 draggable" data-href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com" data-bubble="drag">' +
            '<span class="stamp-index">- 01 -</span>' +
            '<strong>Email</strong>' +
            '<a class="stamp-detail" href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikabhansali7@gmail.com" target="_blank" rel="noopener">ishikabhansali7@gmail.com</a>' +
          '</div>' +
          '<div class="stamp-card stamp-2 draggable" data-href="https://www.linkedin.com/in/ishika-bhansali-7b424b262" data-bubble="drag">' +
            '<span class="stamp-index">- 02 -</span>' +
            '<strong>LinkedIn</strong>' +
            '<a class="stamp-detail" href="https://www.linkedin.com/in/ishika-bhansali-7b424b262" target="_blank" rel="noopener">linkedin.com/in/ishika-bhansali-7b424b262</a>' +
          '</div>' +
          '<div class="stamp-card stamp-3 draggable" data-href="https://www.behance.net/ishikabhansali17" data-bubble="drag">' +
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

  // Adalaj's own hand-fit layout: two paired columns, a numbered grid, a
  // bullet list, a horizontal step tracker, and a tabbed problem/fix/result
  // breakdown — all built from the same fonts and sizes as every other
  // project, just laid out differently section by section
  function adalajRowsHtml(project){
    var s = project.sections;
    function fbId(num){ return "fb-" + project.id + "-" + num; }
    function rowHead(num, label){
      return '<div class="pd-row-head"><span class="pd-row-num">' + num + '</span><span class="pd-row-label">' + label + '</span></div>';
    }
    // most of Adalaj's list items are their own "Lead: rest" or "Lead. rest" —
    // split at the first colon or period so the lead-in can be set bold
    function splitLead(text){
      var m = text.match(/^([^:.]*[:.])\s*([\s\S]*)$/);
      return m ? { lead: m[1].replace(/[:.]$/, ""), rest: m[2] } : { lead: "", rest: text };
    }
    function leadListHtml(items){
      return '<ol class="ad-lead-list">' +
        items.map(function(t, i){
          var p = splitLead(t);
          return '<li><span class="ad-lead-num">0' + (i + 1) + '</span><div><strong>' + p.lead + ':</strong> ' + p.rest + '</div></li>';
        }).join('') +
      '</ol>';
    }
    function monoListHtml(items){
      return '<div class="ad-mono-list">' +
        items.map(function(t, i){
          var p = splitLead(t);
          return '<div class="aml-item"><span class="aml-num">0' + (i + 1) + '</span><div><strong>' + p.lead + ':</strong> ' + p.rest + '</div></div>';
        }).join('') +
      '</div>';
    }
    function galleryHtml(images){
      return '<div class="vcarousel" data-vcarousel' + (images.length >= 6 ? ' data-loop' : '') + ' role="region" aria-label="Project images" tabindex="0">' +
          '<button type="button" class="vcarousel-arrow vcarousel-up" aria-label="Previous image" data-bubble="up"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15l7-7 7 7"/></svg></button>' +
          '<div class="vcarousel-viewport draggable" data-bubble="drag"><div class="vcarousel-container">' +
            images.map(function(im, i){
              return '<div class="vcarousel-slide"><button type="button" class="vcarousel-img-btn" data-index="' + i + '" data-src="' + im.src + '" data-alt="' + im.alt + '" aria-label="Open ' + im.alt + '" data-bubble="expand"><img class="vcarousel-img" src="' + im.src + '" alt="' + im.alt + '" loading="lazy"></button></div>';
            }).join('') +
          '</div></div>' +
          '<button type="button" class="vcarousel-arrow vcarousel-down" aria-label="Next image" data-bubble="down"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9l7 7 7-7"/></svg></button>' +
        '</div>';
    }
    function videoHtml(src, label){
      return '<div class="case-video-wrap">' +
          '<video class="case-video" preload="none" playsinline controls><source src="' + src + '" type="video/mp4"></video>' +
          '<button class="case-video-play" type="button" aria-label="Play ' + label + '" data-bubble="play"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5"/><path d="M9.5 7.5l8 4.5-8 4.5z"/></svg></button>' +
        '</div>';
    }

    var r01 =
      '<div class="pd-row ad-centered tilt" id="' + fbId("01") + '">' +
        rowHead(s[0].num, s[0].heading) +
        '<div class="pd-row-text ad-center-text">' + s[0].body.map(function(p){ return '<p>' + p + '</p>'; }).join('') + '</div>' +
      '</div>';

    var r0203 =
      '<div class="pd-row tilt" id="' + fbId("02") + '">' +
        '<div class="ad-pair-grid">' +
          '<div class="ad-pair-col">' + rowHead(s[1].num, s[1].heading) + leadListHtml(s[1].list) + '</div>' +
          '<div class="ad-pair-col" id="' + fbId("03") + '">' + rowHead(s[2].num, s[2].heading) + leadListHtml(s[2].list) + '</div>' +
        '</div>' +
      '</div>';

    var r04 =
      '<div class="pd-row tilt" id="' + fbId("04") + '">' +
        rowHead(s[3].num, s[3].heading) +
        '<div class="pd-row-body is-paired ad-reverse">' +
          '<div class="pd-row-text"><p>' + s[3].body + '</p>' + leadListHtml(s[3].list) + '</div>' +
          '<div class="ad-media">' + galleryHtml(s[3].images) + '</div>' +
        '</div>' +
      '</div>';

    var r05 =
      '<div class="pd-row tilt" id="' + fbId("05") + '">' +
        rowHead(s[4].num, s[4].heading) +
        '<div class="ad-stepper" id="adStepper">' +
          s[4].list.map(function(t){
            var p = splitLead(t);
            return '<span class="as-step-data" data-label="' + p.lead + '" data-body="' + p.rest + '" hidden></span>';
          }).join('') +
          '<div class="as-content"><h5 id="asTitle"></h5><p id="asBody"></p></div>' +
          '<div class="as-track">' +
            s[4].list.map(function(t, i){
              return '<button type="button" class="as-dot' + (i === 0 ? ' is-active' : '') + '" data-index="' + i + '" aria-label="Step ' + (i + 1) + '"></button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="pd-row-wide">' + videoHtml(s[4].video, s[4].videoLabel) + '</div>' +
      '</div>';

    var r06 =
      '<div class="pd-row tilt" id="' + fbId("06") + '">' +
        rowHead(s[5].num, s[5].heading) +
        '<div class="ad-grid">' +
          s[5].list.map(function(t, i){
            var p = splitLead(t);
            return '<div class="ad-grid-item"><span class="ad-grid-num">0' + (i + 1) + '</span><h5>' + p.lead + '</h5><p>' + p.rest + '</p></div>';
          }).join('') +
        '</div>' +
      '</div>';

    var r07 =
      '<div class="pd-row tilt" id="' + fbId("07") + '">' +
        rowHead(s[6].num, s[6].heading) +
        '<ul class="ad-bullet-list">' +
          s[6].list.map(function(t){
            var p = splitLead(t);
            return '<li><span class="ad-bullet" aria-hidden="true"></span><div><h5>' + p.lead + '</h5><p>' + p.rest + '</p></div></li>';
          }).join('') +
        '</ul>' +
      '</div>';

    var r08 =
      '<div class="pd-row tilt" id="' + fbId("08") + '">' +
        rowHead(s[7].num, s[7].heading) +
        '<div class="pd-row-body is-paired">' +
          '<div class="pd-row-text"><p>' + s[7].body + '</p></div>' +
          '<div class="ad-media">' + galleryHtml(s[7].images) + '</div>' +
        '</div>' +
      '</div>';

    // "Title — Problem: ... Fix: ... Result: ..." splits cleanly into its four parts
    function parseFailure(entry){
      var dashSplit = entry.split(" — ");
      var title = dashSplit[0];
      var rest = dashSplit.slice(1).join(" — ");
      var problem = rest.match(/Problem:\s*([\s\S]*?)\s*Fix:/);
      var fix = rest.match(/Fix:\s*([\s\S]*?)\s*Result:/);
      var result = rest.match(/Result:\s*([\s\S]*)/);
      return {
        title: title,
        problem: problem ? problem[1].trim() : "",
        fix: fix ? fix[1].trim() : "",
        result: result ? result[1].trim() : ""
      };
    }
    var r09 =
      '<div class="pd-row ad-centered tilt" id="' + fbId("09") + '">' +
        rowHead(s[8].num, s[8].heading) +
        '<div class="ad-failures" id="adFailures">' +
          s[8].list.map(function(t){
            var f = parseFailure(t);
            return '<span class="af-item-data" data-title="' + f.title + '" data-problem="' + f.problem + '" data-fix="' + f.fix + '" data-result="' + f.result + '" hidden></span>';
          }).join('') +
          '<div class="af-tabs">' +
            s[8].list.map(function(t, i){
              return '<button type="button" class="af-tab' + (i === 0 ? ' is-active' : '') + '" data-index="' + i + '" aria-label="Failure ' + (i + 1) + '">' + (i + 1) + '</button>';
            }).join('') +
          '</div>' +
          '<h5 class="af-title" id="afTitle"></h5>' +
          '<div class="af-block"><span class="af-label">Problem</span><p id="afProblem"></p></div>' +
          '<div class="af-block"><span class="af-label">Fix</span><p id="afFix"></p></div>' +
          '<div class="af-block"><span class="af-label">Result</span><p id="afResult"></p></div>' +
        '</div>' +
      '</div>';

    var r10 =
      '<div class="pd-row ad-centered tilt" id="' + fbId("10") + '">' +
        rowHead(s[9].num, s[9].heading) +
        '<div class="pd-row-text ad-center-text"><p>' + s[9].body + '</p></div>' +
      '</div>';

    var r1112 =
      '<div class="pd-row tilt" id="' + fbId("11") + '">' +
        '<div class="ad-pair-grid">' +
          '<div class="ad-pair-col">' +
            rowHead(s[10].num, s[10].heading) +
            '<div class="pd-row-text" style="margin-bottom:24px"><p>' + s[10].body + '</p></div>' +
            monoListHtml(s[10].list) +
          '</div>' +
          '<div class="ad-pair-col" id="' + fbId("12") + '">' +
            rowHead(s[11].num, s[11].heading) +
            monoListHtml(s[11].list) +
          '</div>' +
        '</div>' +
      '</div>';

    return r01 + r0203 + r04 + r05 + r06 + r07 + r08 + r09 + r10 + r1112;
  }

  // Red Spire's own hand-fit layout: a big serif concept statement, a
  // draggable "delight vs professional" balance slider, a scale-legibility
  // tester, and a filterable mosaic of the finished identity — all in the
  // same fonts and sizes as every other project
  function redSpireRowsHtml(project){
    var s = project.sections;
    function fbId(num){ return "fb-" + project.id + "-" + num; }
    function rowHead(num, label){
      return '<div class="pd-row-head"><span class="pd-row-num">' + num + '</span><span class="pd-row-label">' + label + '</span></div>';
    }

    var r01 =
      '<div class="pd-row tilt" id="' + fbId("01") + '">' +
        rowHead(s[0].num, s[0].heading) +
        '<div class="pd-row-text"><p>' + s[0].body + '</p></div>' +
      '</div>';

    var r02 =
      '<div class="pd-row tilt" id="' + fbId("02") + '">' +
        rowHead(s[1].num, s[1].heading) +
        '<div class="pd-row-body is-paired">' +
          '<div class="pd-row-text"><p>' + s[1].body + '</p></div>' +
          '<div class="rs-balance" id="rsBalance">' +
            '<div class="rs-balance-labels"><em>delight</em><span>professional</span></div>' +
            '<p class="rs-balance-hint">Drag to find the balance</p>' +
            '<input type="range" class="rs-balance-slider" id="rsBalanceSlider" min="0" max="100" value="68" aria-label="Balance between delight and professional">' +
            '<p class="rs-balance-caption">Charming enough for packaging, clean enough for staff uniforms.</p>' +
          '</div>' +
        '</div>' +
      '</div>';

    var swatches = [
      { color: "#5E3F73", img: "redspire-mascot-1.png", name: "deepest" },
      { color: "#8467A0", img: "redspire-mascot-2.png", name: "medium" },
      { color: "#B9A6D0", img: "redspire-mascot-3.png", name: "light" },
      { color: "#DCD2E8", img: "redspire-mascot-4.png", name: "palest" }
    ];
    var r03 =
      '<div class="pd-row tilt" id="' + fbId("03") + '">' +
        rowHead(s[2].num, s[2].heading) +
        '<div class="pd-row-body is-paired">' +
          '<div class="pd-row-text">' +
            '<ol class="pd-list">' + s[2].list.map(function(li){ return '<li>' + li + '</li>'; }).join('') + '</ol>' +
          '</div>' +
          '<div class="rs-swatches-wrap">' +
            '<div class="rs-swatches" id="rsSwatches">' +
              swatches.map(function(c, i){
                return '<button type="button" class="rs-swatch' + (i === 0 ? ' is-active' : '') + '" style="background:' + c.color + '" data-mascot="' + c.img + '" data-alt="The silhouette mark in its ' + c.name + ' purple tone" aria-label="Show the ' + c.name + ' purple mascot"></button>';
              }).join('') +
            '</div>' +
            '<img class="pd-image" id="rsMascotStage" src="' + swatches[0].img + '" alt="The silhouette mark in its deepest purple tone">' +
          '</div>' +
        '</div>' +
        '<div class="rs-scale" id="rsScale">' +
          '<p class="rs-scale-label">Scale test — does it still read small?</p>' +
          '<div class="rs-scale-tabs">' +
            '<button type="button" class="rs-scale-tab is-active" data-size="100">100%</button>' +
            '<button type="button" class="rs-scale-tab" data-size="50">50%</button>' +
            '<button type="button" class="rs-scale-tab" data-size="25">25%</button>' +
            '<button type="button" class="rs-scale-tab" data-size="10">10%</button>' +
          '</div>' +
          '<div class="rs-scale-stage"><img id="rsScaleImg" src="redspire-logo.png" alt="Red Spire logo, shown at a reduced scale"></div>' +
          '<p class="rs-scale-caption">Checking the mark still reads at a glance, reduced for packaging or signage.</p>' +
        '</div>' +
        '<p class="rs-approach-tags">Personality &middot; Silhouette &middot; Wordmark</p>' +
      '</div>';

    var tiles = [
      { cat: "logo", src: "redspire-final-logo-lockup.png", label: "Logo lockup" },
      { cat: "logo", src: "redspire-final-mascot-dark.png", label: "Mascot mark" },
      { cat: "packaging", src: "redspire-final-packaging-bags.png", label: "Packaging bags" },
      { cat: "logo", src: "redspire-final-tones-row.png", label: "Silhouette, four tones" },
      { cat: "packaging", src: "redspire-final-gift-box.png", label: "Gift box" },
      { cat: "packaging", src: "redspire-final-cup-and-box.png", label: "Cup and bakery box" },
      { cat: "apparel", src: "redspire-final-apron.png", label: "Staff apron" },
      { cat: "signage", src: "redspire-final-signage.png", label: "Hanging signage" },
      { cat: "all", src: "redspire-final-mascot-flour.png", label: "Mascot in the kitchen" },
      { cat: "packaging", src: "redspire-final-pastry-box.png", label: "Pastry box" }
    ];
    var filters = ["All", "Logo", "Packaging", "Apparel", "Signage"];
    var r04 =
      '<div class="pd-row tilt" id="' + fbId("04") + '">' +
        rowHead(s[3].num, s[3].heading) +
        '<div class="rs-outcome-head">' +
          '<div class="pd-row-text"><p>' + s[3].body + '</p></div>' +
          '<div class="rs-filters" id="rsFilters">' +
            filters.map(function(f, i){
              return '<button type="button" class="rs-filter' + (i === 0 ? ' is-active' : '') + '" data-filter="' + f.toLowerCase() + '">' + f + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="rs-mosaic" id="rsMosaic">' +
          tiles.map(function(t){
            return '<div class="rs-tile" data-cat="' + t.cat + '">' +
                '<img src="' + t.src + '" alt="' + t.label + '" loading="lazy">' +
                '<span class="rs-tile-label">' + t.label + '</span>' +
              '</div>';
          }).join('') +
        '</div>' +
      '</div>';

    return r01 + r02 + r03 + r04;
  }

  // Smart Plant Friend's own hand-fit layout: a stage-by-stage growth
  // stepper for the book mode and a colour-coded Q&A demo for the real-
  // plant mode, in the same fonts and sizes as every other project
  function smartPlantRowsHtml(project){
    var s = project.sections;
    function fbId(num){ return "fb-" + project.id + "-" + num; }
    function rowHead(num, label){
      return '<div class="pd-row-head"><span class="pd-row-num">' + num + '</span><span class="pd-row-label">' + label + '</span></div>';
    }
    function splitLead(text){
      var m = text.match(/^([^:.]*[:.])\s*([\s\S]*)$/);
      return m ? { lead: m[1].replace(/[:.]$/, ""), rest: m[2] } : { lead: "", rest: text };
    }
    function leadListHtml(items){
      return '<ol class="ad-lead-list">' +
        items.map(function(t, i){
          var p = splitLead(t);
          return '<li><span class="ad-lead-num">0' + (i + 1) + '</span><div><strong>' + p.lead + ':</strong> ' + p.rest + '</div></li>';
        }).join('') +
      '</ol>';
    }

    var r01 =
      '<div class="pd-row tilt" id="' + fbId("01") + '">' +
        rowHead(s[0].num, s[0].heading) +
        '<h3 class="sp-idea-lead">' + s[0].lead + '</h3>' +
        '<div class="sp-modes">' +
          s[0].modes.map(function(m, i){
            return '<div class="sp-mode-col ' + (i === 0 ? 'is-book' : 'is-plant') + '"><h5>' + m.title + '</h5><p>' + m.body + '</p></div>';
          }).join('') +
        '</div>' +
      '</div>';

    var r02 =
      '<div class="pd-row tilt" id="' + fbId("02") + '">' +
        rowHead(s[1].num, s[1].heading) +
        '<h3 class="sp-problem-head">' + s[1].headline + '</h3>' +
        '<p class="sp-problem-lead">' + s[1].lead + '</p>' +
        '<div class="sp-problem-cards">' +
          s[1].cards.map(function(c, i){
            return '<div class="sp-problem-card"><span class="sp-problem-num" style="background:' + c.color + '">0' + (i + 1) + '</span><h5>' + c.label + '</h5><p>' + c.body + '</p></div>';
          }).join('') +
        '</div>' +
        '<p class="sp-problem-hmw">' + s[1].hmw + '</p>' +
      '</div>';

    var r03 =
      '<div class="pd-row tilt" id="' + fbId("03") + '">' +
        rowHead(s[2].num, s[2].heading) +
        '<div class="sp-research" id="spResearch">' +
          s[2].stats.map(function(st){
            return '<span class="sp-research-data" data-stat="' + st.stat + '" data-body="' + st.body + '" data-takeaway="' + st.takeaway + '" data-source="' + st.source + '" hidden></span>';
          }).join('') +
          '<div class="sp-research-tabs">' +
            s[2].stats.map(function(st, i){
              return '<button type="button" class="sp-research-tab' + (i === 0 ? ' is-active' : '') + '" data-index="' + i + '" style="--tc:' + st.color + '">' + st.stat + '</button>';
            }).join('') +
          '</div>' +
          '<div class="sp-research-panel">' +
            '<p class="sp-research-num" id="spResearchStat">' + s[2].stats[0].stat + '</p>' +
            '<div class="sp-research-text">' +
              '<p id="spResearchBody">' + s[2].stats[0].body + '</p>' +
              '<p class="sp-research-takeaway" id="spResearchTakeaway">→ ' + s[2].stats[0].takeaway + '</p>' +
              '<p class="sp-research-source" id="spResearchSource">' + s[2].stats[0].source + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="sp-studies">' +
          s[2].studies.map(function(st){
            return '<div class="sp-study"><h5>' + st.title + '</h5><p>' + st.body + '</p><span class="sp-study-source">' + st.source + '</span></div>';
          }).join('') +
        '</div>' +
      '</div>';

    var r04 =
      '<div class="pd-row tilt" id="' + fbId("04") + '">' +
        rowHead(s[3].num, s[3].heading) +
        '<div class="sp-who">' +
          s[3].pair.map(function(p){
            return '<div class="sp-who-card"><h5>' + p.title + '</h5><p>' + p.body + '</p><p class="sp-who-so">' + p.so + '</p></div>';
          }).join('') +
        '</div>' +
      '</div>';

    var r05 =
      '<div class="pd-row ad-centered tilt" id="' + fbId("05") + '">' +
        rowHead(s[4].num, s[4].heading) +
        '<h3 class="sp-flow-title">User Flow</h3>' +
        '<p class="sp-flow-subtitle">' + s[4].subtitle + '</p>' +
        '<div class="sp-flow-tabs">' +
          s[4].flows.map(function(f, fi){
            return '<button type="button" class="sp-flow-tab' + (fi === 0 ? ' is-active' : '') + ' is-' + f.key + '" data-flow="' + fi + '">' + f.label + '</button>';
          }).join('') +
        '</div>' +
        '<div class="sp-flow-body" id="spFlow">' +
          '<div class="sp-flow-stage"><img id="spFlowImg" src="' + s[4].home + '" alt="Smart Plant Friend home screen"></div>' +
          '<div class="sp-flow-lists">' +
            s[4].flows.map(function(f, fi){
              return '<ol class="sp-flow-steps' + (fi === 0 ? ' is-active' : '') + '" data-flow="' + fi + '">' +
                f.steps.map(function(st, si){
                  return '<li><button type="button" class="sp-flow-step-btn" data-img="' + st.img + '" data-alt="' + st.label + '"><span class="sp-flow-step-num">' + (si + 1) + '</span><span class="sp-flow-step-label">' + st.label + '</span></button></li>';
                }).join('') +
              '</ol>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<ul class="ad-bullet-list sp-flow-notes">' +
          s[4].notes.map(function(n){
            return '<li><span class="ad-bullet" aria-hidden="true"></span><div><h5>' + n.label + '</h5><p>' + n.body + '</p></div></li>';
          }).join('') +
        '</ul>' +
      '</div>';

    var r06 =
      '<div class="pd-row tilt" id="' + fbId("06") + '">' +
        rowHead(s[5].num, s[5].heading) +
        '<div class="sp-outcome-videos">' +
          s[5].videos.map(function(v){
            return '<div class="sp-outcome-item">' +
              '<div class="case-video-wrap sp-outcome-video">' +
                '<video class="case-video" preload="none" playsinline controls><source src="' + v.src + '" type="video/mp4"></video>' +
                '<button class="case-video-play" type="button" aria-label="Play ' + v.label + '" data-bubble="play"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5"/><path d="M9.5 7.5l8 4.5-8 4.5z"/></svg></button>' +
              '</div>' +
              '<p class="sp-outcome-caption">' + v.caption + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';

    var r07 =
      '<div class="pd-row tilt" id="' + fbId("07") + '">' +
        rowHead(s[6].num, s[6].heading) +
        '<div class="ad-grid">' +
          s[6].cards.map(function(c, i){
            return '<div class="ad-grid-item"><span class="ad-grid-num">0' + (i + 1) + '</span><h5>' + c.label + '</h5><p>' + c.body + '</p></div>';
          }).join('') +
        '</div>' +
        '<div class="pd-row-text" style="margin-top:28px"><p>' + s[6].note + '</p></div>' +
      '</div>';

    var r08 =
      '<div class="pd-row tilt" id="' + fbId("08") + '">' +
        '<div class="ad-pair-grid">' +
          '<div class="ad-pair-col">' + rowHead(s[7].num, s[7].heading) + leadListHtml(s[7].reflections) + '</div>' +
          '<div class="ad-pair-col">' +
            '<div class="sp-next-box"><h5>Next</h5><ul class="pd-list">' + s[7].next.map(function(n){ return '<li>' + n + '</li>'; }).join('') + '</ul></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    return r01 + r02 + r03 + r04 + r05 + r06 + r07 + r08;
  }

  function detailTemplate(id){
    var idx = OPEN_PROJECTS.findIndex(function(p){ return p.id === id; });
    if (idx === -1) idx = 0;
    var project = OPEN_PROJECTS[idx];
    var prev = OPEN_PROJECTS[(idx - 1 + OPEN_PROJECTS.length) % OPEN_PROJECTS.length];
    var next = OPEN_PROJECTS[(idx + 1) % OPEN_PROJECTS.length];
    var sections = project.sections || [];
    var meta = project.meta || {};

    function fbId(s){ return "fb-" + project.id + "-" + s.num; }

    /* ---- header: a plain project photo beside the title, a short line, and a meta row ---- */
    var metaFields = [
      { label: "Team", value: meta.team || "—" },
      { label: "Timeline", value: meta.timeline || "—" },
      { label: "Tools", value: meta.tools || "—" }
    ];
    var headerHtml =
      '<div class="pd-header">' +
        '<div class="pd-header-media tilt"><img src="' + project.heroImage + '" alt="' + project.name + '"></div>' +
        '<div class="pd-header-text">' +
          '<p class="pd-kicker tilt">' + project.tag + '</p>' +
          '<h1 class="pd-title tilt">' + project.name + '</h1>' +
          (project.tagline ? '<p class="pd-desc tilt">' + project.tagline + '</p>' : '') +
          '<div class="pd-meta tilt">' +
            metaFields.map(function(f){
              return '<div class="pd-meta-field"><span class="pd-meta-label">' + f.label + '</span><span class="pd-meta-value">' + f.value + '</span></div>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';

    /* ---- rows: every section, numbered and labeled. a section with exactly
       one plain image sits side by side with its write-up; a list, a line
       of tags, or a wider interactive piece (flow, tech, games, demo, a
       gallery, video) runs its write-up full width, with the piece itself
       underneath ---- */
    var rowSrc = sections.length
      ? sections
      : [{ num: "01", heading: "Overview", body: "Placeholder case-study paragraph. Describe the problem, approach, and outcome here once real content is ready." }];
    var rowsHtml = project.id === "04" ? adalajRowsHtml(project) : project.id === "02" ? redSpireRowsHtml(project) : project.id === "06" ? smartPlantRowsHtml(project) : rowSrc.map(function(s){
      var tagsHtml = s.tags
        ? '<div class="pd-tags">' + s.tags.map(function(t){ return '<span>' + t + '</span>'; }).join('') + '</div>'
        : '';
      var bodyParas = s.body ? (Array.isArray(s.body) ? s.body : [s.body]) : [];
      // the tech section calls out its own click-a-pin hint inline
      var bodyHtml = bodyParas.map(function(p){
        var text = s.tech ? p.replace("Click a pin", "<u>Click a pin</u>") : p;
        return '<p>' + text + '</p>';
      }).join('');
      var listHtml = s.list
        ? '<ol class="pd-list">' + s.list.map(function(li){ return '<li>' + li + '</li>'; }).join('') + '</ol>'
        : '';
      var flowHtml = s.flow
        ? '<div class="knoki-console" id="knokiFlow" role="group" aria-label="User flow simulation — rotate the dial or use arrow keys" tabindex="0">' +
            s.flow.map(function(step){
              return '<span class="kc-step-data" data-label="' + step.label + '" data-body="' + step.body + '" hidden></span>';
            }).join('') +
            '<div class="kc-screen">' +
              '<span class="kc-step-count" id="flowStepCount">1 / ' + s.flow.length + '</span>' +
              '<h5 id="flowStepTitle">' + s.flow[0].label + '</h5>' +
              '<p id="flowStepBody">' + s.flow[0].body + '</p>' +
            '</div>' +
            '<button type="button" class="kc-dial draggable" id="knokiDial" aria-label="Rotate to browse, press to select the next step" data-bubble="turn">' +
              '<span class="kc-dial-notch" aria-hidden="true"></span>' +
            '</button>' +
            '<p class="kc-hint">Drag the dial to browse, press to select — or use ← →</p>' +
          '</div>'
        : '';
      var gamesHtml = s.games
        ? '<div class="knoki-games">' +
            s.games.map(function(g, i){
              return (
                '<div class="knoki-game-card">' +
                  '<span class="knoki-game-num">0' + (i + 1) + '</span>' +
                  '<h5>' + g.name + '</h5>' +
                  '<p class="knoki-game-objective">' + g.objective + '</p>' +
                  '<p class="knoki-game-body">' + g.body + '</p>' +
                '</div>'
              );
            }).join('') +
          '</div>'
        : '';
      var techHtml = s.tech
        ? '<div class="knoki-tech" id="knokiTech">' +
            '<div class="kt-photo">' +
              '<div class="kt-photo-inner">' +
                '<img src="knoki-tech-photo.png" alt="The Knoki console, with each hardware part marked by a numbered pin" class="kt-photo-img">' +
                s.tech.map(function(t, i){
                  return (
                    '<button type="button" class="kt-pin' + (i === 0 ? ' is-active' : '') + '" style="left:' + t.x + '%;top:' + t.y + '%" ' +
                      'data-index="' + i + '" data-name="' + t.name + '" data-body="' + t.body + '" aria-label="' + t.name + '" data-bubble="view">' +
                      (i + 1) +
                    '</button>'
                  );
                }).join('') +
              '</div>' +
            '</div>' +
            '<div class="kt-detail">' +
              '<span class="kt-detail-num" id="ktDetailNum">01 / ' + (s.tech.length < 10 ? '0' : '') + s.tech.length + '</span>' +
              '<h5 id="ktDetailName">' + s.tech[0].name + '</h5>' +
              '<p id="ktDetailBody">' + s.tech[0].body + '</p>' +
              '<div class="kt-detail-nav">' +
                '<button type="button" id="ktPrev" aria-label="Previous part">← prev</button>' +
                '<button type="button" id="ktNext" aria-label="Next part">next →</button>' +
              '</div>' +
            '</div>' +
          '</div>'
        : '';
      var demoHtml = s.demo === "rlgl"
        ? '<div class="knoki-demo" id="knokiDemo">' +
            '<button type="button" class="knoki-demo-light" id="knokiLight" data-state="idle" data-bubble="tap" aria-label="Tap the light">' +
              '<span id="knokiLightLabel">Tap to start</span>' +
            '</button>' +
            '<div class="knoki-demo-info">' +
              '<div class="kd-score-row">' +
                '<span class="kd-score-label">Score</span>' +
                '<div class="kd-score-main">' +
                  '<span id="knokiScoreBig">0</span>' +
                  '<span class="kd-score-best">best — <span id="knokiBest">0</span></span>' +
                '</div>' +
              '</div>' +
              '<p class="knoki-demo-hint">Tap the circle to start. Tap while it is green, stop when it turns red.</p>' +
              '<div class="knoki-demo-status" id="knokiStatus" role="status" aria-live="polite" hidden></div>' +
            '</div>' +
          '</div>'
        : '';
      var hasMultiImages = s.images && s.images.length > 1;
      var galleryHtml = s.images
        ? (hasMultiImages
            ? '<div class="vcarousel" data-vcarousel' + (s.images.length >= 6 ? ' data-loop' : '') + ' role="region" aria-label="Project images" tabindex="0">' +
                '<button type="button" class="vcarousel-arrow vcarousel-up" aria-label="Previous image" data-bubble="up">' +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15l7-7 7 7"/></svg>' +
                '</button>' +
                '<div class="vcarousel-viewport draggable" data-bubble="drag">' +
                  '<div class="vcarousel-container">' +
                    s.images.map(function(im, i){
                      return (
                        '<div class="vcarousel-slide">' +
                          '<button type="button" class="vcarousel-img-btn" data-index="' + i + '" data-src="' + im.src + '" data-alt="' + im.alt + '" aria-label="Open ' + im.alt + '" data-bubble="expand">' +
                            '<img class="vcarousel-img" src="' + im.src + '" alt="' + im.alt + '" loading="lazy">' +
                          '</button>' +
                        '</div>'
                      );
                    }).join('') +
                  '</div>' +
                '</div>' +
                '<button type="button" class="vcarousel-arrow vcarousel-down" aria-label="Next image" data-bubble="down">' +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9l7 7 7-7"/></svg>' +
                '</button>' +
              '</div>'
            : s.images.map(function(im){ return '<img class="pd-image" src="' + im.src + '" alt="' + im.alt + '">'; }).join(''))
        : '';
      var videoHtml = s.video
        ? '<div class="case-video-wrap">' +
            '<video class="case-video" preload="none" playsinline controls' + (s.videoPoster ? ' poster="' + s.videoPoster + '"' : '') + '>' +
              '<source src="' + s.video + '" type="video/mp4">' +
            '</video>' +
            '<button class="case-video-play" type="button" aria-label="Play ' + (s.videoLabel || s.heading) + '" data-bubble="play">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5"/><path d="M9.5 7.5l8 4.5-8 4.5z"/></svg>' +
            '</button>' +
          '</div>'
        : '';
      // no asset yet — a labeled dashed box marking where the real image goes
      var placeholders = s.imagePlaceholder ? [s.imagePlaceholder] : (s.imagePlaceholders || []);
      var placeholderHtml = placeholders.length
        ? '<div class="case-image-placeholders">' +
            placeholders.map(function(t){ return '<div class="case-image-placeholder">' + t + '</div>'; }).join('') +
          '</div>'
        : '';

      var singleImageHtml = (s.image && !hasMultiImages)
        ? '<img class="pd-image" src="' + s.image + '" alt="' + (s.imageAlt || s.heading) + '">'
        : '';
      var wideVisualHtml = flowHtml + galleryHtml + videoHtml + techHtml + gamesHtml + demoHtml;
      var isPaired = !!singleImageHtml;
      // a heading like "Try It — Red Light, Green Light" keeps only its
      // short lead-in as the eyebrow label; the rest lives in the body copy
      var eyebrowLabel = s.heading.split(" — ")[0];

      return (
        '<div class="pd-row tilt" id="' + fbId(s) + '">' +
          '<div class="pd-row-head">' +
            '<span class="pd-row-num">' + s.num + '</span>' +
            '<span class="pd-row-label">' + eyebrowLabel + '</span>' +
          '</div>' +
          '<div class="pd-row-body' + (isPaired ? ' is-paired' : '') + '">' +
            '<div class="pd-row-text">' + bodyHtml + listHtml + tagsHtml + placeholderHtml + '</div>' +
            singleImageHtml +
          '</div>' +
          (wideVisualHtml ? '<div class="pd-row-wide">' + wideVisualHtml + '</div>' : '') +
        '</div>'
      );
    }).join('');

    return (
      headerHtml +
      '<div class="pd-rows">' + rowsHtml + '</div>' +
      '<div class="pd-foot">' +
        '<a href="#/work/' + prev.id + '" class="tilt" data-bubble="open">← ' + prev.name + '</a>' +
        '<a href="#/work" class="tilt" data-bubble="open">All Projects</a>' +
        '<a href="#/work/' + next.id + '" class="tilt" data-bubble="open">' + next.name + ' →</a>' +
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
  // in-flight animation from a previous run is superseded immediately
  var fadeToken = 0;
  var fadeFirstRender = true;

  // torn down at the top of every render() so a stale rAF loop from a
  // previous visit to the home page never keeps animating a detached canvas
  var heroDotsCleanup = null;
  var homeStageCleanup = null;
  var aboutToolsCleanup = null;
  var knokiDemoTimer = 0;

  // quick crossfade: the outgoing page fades up and out, the page swaps
  // underneath, then the incoming page fades up and in from just below
  function playFadeTransition(updateDOM){
    var myToken = ++fadeToken;
    if (fadeFirstRender){ fadeFirstRender = false; updateDOM(); return; }

    var OUT_MS = 180, IN_MS = 260;
    var OUT_EASE = "cubic-bezier(.4,0,1,1)";
    var IN_EASE = "cubic-bezier(0,0,.2,1)";

    var out = app.animate(
      [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-10px)" }],
      { duration: OUT_MS, easing: OUT_EASE, fill: "forwards" }
    );
    out.onfinish = function(){
      if (myToken !== fadeToken) return;
      out.cancel();
      updateDOM();
      var into = app.animate(
        [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: IN_MS, easing: IN_EASE, fill: "both" }
      );
      into.onfinish = function(){
        if (myToken !== fadeToken) return;
        into.cancel(); // let the authored CSS take back over once it's settled
      };
    };
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
    } else if (parts[0] === "playground" && PLAYGROUND_ENABLED){
      html = playgroundTemplate(); routeBase = "/playground";
    } else if (parts[0] === "contact"){
      html = contactTemplate(); routeBase = "/contact";
    } else {
      html = homeTemplate(); routeBase = "/";
    }

    function updateDOM(){
      if (homeStageCleanup) homeStageCleanup();
      if (aboutToolsCleanup) aboutToolsCleanup();
      if (window.Playground) window.Playground.destroy();
      clearTimeout(knokiDemoTimer); // the demo's light-cycle loop is about to lose its DOM
      closeLightbox(); // the page behind it is about to be replaced
      if (window.CursorBubble) window.CursorBubble.reset(); // the hovered element is about to be removed without a pointerout
      app.innerHTML = html;
      setActiveNav(routeBase);
      document.body.classList.remove("figma-bg"); // every page now shares the home screen's plain background
      // the playground is a single pinned screen, not a scrolling page — the shared site footer would otherwise add extra height below it
      document.body.classList.toggle("no-footer", routeBase === "/playground");
      // Knoki keeps its own purple-and-white branding, distinct from the rest of the site
      document.body.classList.toggle("theme-purple", routeBase === "/work" && parts[1] === "01");
      // Adalaj's case study runs on its own warm, dark night-time palette
      document.body.classList.toggle("theme-adalaj", routeBase === "/work" && parts[1] === "04");
      // Red Spire gets its own pale-lavender case study, distinct from the rest of the site
      document.body.classList.toggle("theme-redspire", routeBase === "/work" && parts[1] === "02");
      // Smart Plant Friend gets its own cream-and-leaf-green case study, matching its kids'-app branding
      document.body.classList.toggle("theme-smartplant", routeBase === "/work" && parts[1] === "06");
      window.scrollTo(0, 0);
      updateHeader();
      if (routeBase === "/about") { bindPageInteractions(); initAboutTools(); }
      if (routeBase === "/contact") bindPageInteractions();
      if (routeBase === "/playground" && window.Playground) window.Playground.init();
      if (routeBase === "/") requestAnimationFrame(function(){ requestAnimationFrame(initHomeStage); }); // let the loading screen get its first paint before the blob measuring/rAF setup runs
      bindWorkTiles();
      bindCaseVideos();
      initVerticalCarousels();
      initKnokiDemo();
      initKnokiFlow();
      initKnokiTech();
      initAdalajStepper();
      initAdalajFailures();
      initRedSpireBalance();
      initRedSpireMascot();
      initRedSpireScale();
      initRedSpireFilters();
      initSmartPlantFlow();
      initSmartPlantResearch();
      initTiltReveal();
    }

    playFadeTransition(updateDOM);
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

  /* ---------- contact form: delivers each note to my inbox via FormSubmit ---------- */
  var NOTE_ENDPOINT = "https://formsubmit.co/ajax/ishikabhansali7@gmail.com";
  var NOTE_COOLDOWN_MS = 30000;

  function bindContactForm(){
    var form = document.getElementById("noteForm");
    if (!form) return;
    var status = document.getElementById("noteStatus");
    var sendBtn = form.querySelector(".note-send");
    var check = document.querySelector(".note-check");
    var busy = false;

    function say(msg){ status.textContent = msg; }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (busy) return;

      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(email)){ say("Please add a valid email so I can reply."); form.elements.email.focus(); return; }
      if (!message){ say("Write a message first."); form.elements.message.focus(); return; }
      if (form.elements._honey.value) return;

      var last = 0;
      try { last = Number(localStorage.getItem("noteSentAt")) || 0; } catch (err) {}
      if (Date.now() - last < NOTE_COOLDOWN_MS){ say("You just sent one. Give it a moment before sending another."); return; }

      busy = true;
      sendBtn.disabled = true;
      sendBtn.textContent = "Sending…";
      say("");

      fetch(NOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.elements.name.value.trim(),
          email: email,
          phone: form.elements.phone.value.trim(),
          company: form.elements.company.value.trim(),
          message: message,
          _subject: "New note from your portfolio",
          _replyto: email,
          _template: "table",
          _captcha: "false"
        })
      }).then(function(r){
        if (!r.ok) throw new Error("send failed");
        return r.json();
      }).then(function(data){
        if (data && String(data.success) === "false") throw new Error(data.message || "send failed");
        try { localStorage.setItem("noteSentAt", String(Date.now())); } catch (err) {}
        form.reset();
        if (check) check.classList.add("is-sent");
        say("Sent. Thank you, I read every message.");
      }).catch(function(){
        say("Couldn’t send right now. You can email me at ishikabhansali7@gmail.com.");
      }).then(function(){
        busy = false;
        sendBtn.disabled = false;
        sendBtn.textContent = "Send letter →";
      });
    });
  }

  // About page's software grid: every few seconds, two random cells swap
  // which tool they show (a brief fade hides the content swap), so the
  // grid stays the same set of logos but keeps quietly reshuffling itself.
  // the "tools i know ( … )" badge cycles through a different software
  // logo every few seconds, fading out/in across the swap
  function initAboutTools(){
    var badge = document.getElementById("toolBadge");
    if (!badge) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var i = 0;
    function next(){
      badge.classList.add("is-flip");
      setTimeout(function(){
        i = (i + 1) % ABOUT_TOOLS.length;
        var t = ABOUT_TOOLS[i];
        var img = badge.querySelector("img");
        img.src = t.logo; img.alt = t.name;
        badge.title = t.name;
      }, 180);
      setTimeout(function(){
        badge.classList.remove("is-flip");
      }, 380);
    }

    var timer = setInterval(next, 2200);
    aboutToolsCleanup = function(){
      clearInterval(timer);
      aboutToolsCleanup = null;
    };
  }

  function bindPageInteractions(){
    document.querySelectorAll("#app .draggable").forEach(makeDraggable);
    bindContactForm();
    var cvBtn = document.getElementById("cvBtn");
    if (cvBtn){
      cvBtn.addEventListener("click", function(){
        downloadResume();
      });
    }
  }

  function bindWorkTiles(){
    var tiles = document.querySelectorAll(".work-tile:not(.is-soon)");
    tiles.forEach(function(t){
      t.addEventListener("click", function(e){
        navigate("#/work/" + t.getAttribute("data-id"));
      });
    });
  }

  // a case-study video: native controls, plus a big custom play button over the
  // top until it's first played (the video itself only loads once played, so a
  // large file never downloads unless the visitor actually presses play)
  function bindCaseVideos(){
    var wraps = document.querySelectorAll(".case-video-wrap");
    wraps.forEach(function(wrap){
      var video = wrap.querySelector(".case-video");
      var btn = wrap.querySelector(".case-video-play");
      if (!video || !btn) return;
      btn.addEventListener("click", function(){ video.play(); });
      video.addEventListener("play", function(){ wrap.classList.add("is-playing"); });
      video.addEventListener("pause", function(){ wrap.classList.remove("is-playing"); });
      video.addEventListener("ended", function(){ wrap.classList.remove("is-playing"); });
    });
  }

  // a tiny playable version of Knoki's "Red Light, Green Light" mini-game: tap
  // the light while it's green, tapping while it's red ends the game
  function initKnokiDemo(){
    var light = document.getElementById("knokiLight");
    if (!light) return;
    var label = document.getElementById("knokiLightLabel");
    var status = document.getElementById("knokiStatus");
    var scoreBig = document.getElementById("knokiScoreBig");
    var bestEl = document.getElementById("knokiBest");
    var playing = false, score = 0, best = 0;

    function schedule(){
      var toGreen = light.getAttribute("data-state") !== "green";
      var delay = toGreen ? (900 + Math.random() * 900) : (700 + Math.random() * 900);
      knokiDemoTimer = setTimeout(function(){
        if (!playing) return;
        light.setAttribute("data-state", toGreen ? "green" : "red");
        label.textContent = toGreen ? "Tap!" : "Wait…";
        schedule();
      }, delay);
    }

    function startGame(){
      playing = true; score = 0;
      scoreBig.textContent = "0";
      light.setAttribute("data-state", "green");
      label.textContent = "Tap!";
      schedule();
    }

    function endGame(){
      playing = false;
      clearTimeout(knokiDemoTimer);
      light.setAttribute("data-state", "over");
      label.textContent = "Tap to retry";
      status.textContent = "Game over — score: " + score;
    }

    light.addEventListener("click", function(){
      if (!playing){ startGame(); return; }
      var state = light.getAttribute("data-state");
      if (state === "green"){
        score++;
        scoreBig.textContent = String(score);
        if (score > best){ best = score; bestEl.textContent = String(best); }
        light.classList.remove("is-pulse");
        void light.offsetWidth; // restart the pulse animation on every tap
        light.classList.add("is-pulse");
      } else if (state === "red"){
        endGame();
      }
    });
  }

  // a tiny recreation of Knoki's own LCD + rotary dial: drag the dial to
  // rotate through the flow (one step per ~28deg of real rotation), press it
  // to select the next step, or use the left/right arrow keys
  function initKnokiFlow(){
    var root = document.getElementById("knokiFlow");
    if (!root) return;
    var steps = Array.prototype.slice.call(root.querySelectorAll(".kc-step-data"));
    var title = document.getElementById("flowStepTitle");
    var body = document.getElementById("flowStepBody");
    var count = document.getElementById("flowStepCount");
    var dial = document.getElementById("knokiDial");
    var notch = dial.querySelector(".kc-dial-notch");
    var active = 0;
    var ANGLE_SPAN = 150, STEP_DEG = ANGLE_SPAN / (steps.length - 1), DRAG_DEG_PER_STEP = 28;

    function render(){
      title.textContent = steps[active].getAttribute("data-label");
      body.textContent = steps[active].getAttribute("data-body");
      count.textContent = (active + 1) + " / " + steps.length;
      notch.style.transform = "rotate(" + (-ANGLE_SPAN / 2 + active * STEP_DEG) + "deg)";
    }
    function go(i){ active = (i + steps.length) % steps.length; render(); }
    render();

    var dragging = false, moved = false, centerX = 0, centerY = 0, lastAngle = 0, accum = 0;
    function angleAt(x, y){ return Math.atan2(y - centerY, x - centerX) * 180 / Math.PI; }

    dial.addEventListener("pointerdown", function(e){
      var r = dial.getBoundingClientRect();
      centerX = r.left + r.width / 2; centerY = r.top + r.height / 2;
      lastAngle = angleAt(e.clientX, e.clientY);
      accum = 0; moved = false; dragging = true;
      try { dial.setPointerCapture(e.pointerId); } catch (err) {}
    });
    dial.addEventListener("pointermove", function(e){
      if (!dragging) return;
      var a = angleAt(e.clientX, e.clientY);
      var delta = a - lastAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      lastAngle = a;
      accum += delta;
      if (Math.abs(delta) > 0.5) moved = true;
      while (accum >= DRAG_DEG_PER_STEP){ go(active + 1); accum -= DRAG_DEG_PER_STEP; }
      while (accum <= -DRAG_DEG_PER_STEP){ go(active - 1); accum += DRAG_DEG_PER_STEP; }
    });
    function endDrag(){ dragging = false; }
    dial.addEventListener("pointerup", endDrag);
    dial.addEventListener("pointercancel", endDrag);

    dial.addEventListener("click", function(){
      if (moved) return; // a drag that just ended still fires a click — ignore it
      go(active + 1);
    });

    root.addEventListener("keydown", function(e){
      if (e.key === "ArrowRight"){ e.preventDefault(); go(active + 1); }
      else if (e.key === "ArrowLeft"){ e.preventDefault(); go(active - 1); }
    });
  }

  // numbered pins placed directly on Knoki's product photo: click one to
  // load its name and description into the detail card beside the image
  function initKnokiTech(){
    var root = document.getElementById("knokiTech");
    if (!root) return;
    var pins = Array.prototype.slice.call(root.querySelectorAll(".kt-pin"));
    var num = document.getElementById("ktDetailNum");
    var name = document.getElementById("ktDetailName");
    var body = document.getElementById("ktDetailBody");
    var prevBtn = document.getElementById("ktPrev");
    var nextBtn = document.getElementById("ktNext");
    var pad2 = function(n){ return (n < 10 ? "0" : "") + n; };
    var active = 0;

    function show(i){
      active = i;
      pins.forEach(function(p, idx){ p.classList.toggle("is-active", idx === i); });
      num.textContent = pad2(i + 1) + " / " + pad2(pins.length);
      name.textContent = pins[i].getAttribute("data-name");
      body.textContent = pins[i].getAttribute("data-body");
    }
    pins.forEach(function(p, i){
      p.addEventListener("click", function(){ show(i); });
    });
    prevBtn.addEventListener("click", function(){ show((active - 1 + pins.length) % pins.length); });
    nextBtn.addEventListener("click", function(){ show((active + 1) % pins.length); });
  }

  // Adalaj's walkthrough stepper: a row of dots standing in for the
  // night's five beats — click one (or the dots step through in order)
  // to read that beat's title and description above
  function initAdalajStepper(){
    var root = document.getElementById("adStepper");
    if (!root) return;
    var steps = Array.prototype.slice.call(root.querySelectorAll(".as-step-data"));
    var title = document.getElementById("asTitle");
    var body = document.getElementById("asBody");
    var dots = Array.prototype.slice.call(root.querySelectorAll(".as-dot"));

    function show(i){
      dots.forEach(function(d, idx){ d.classList.toggle("is-active", idx === i); });
      title.textContent = steps[i].getAttribute("data-label");
      body.textContent = steps[i].getAttribute("data-body");
    }
    dots.forEach(function(d, i){
      d.addEventListener("click", function(){ show(i); });
    });
    show(0);
  }

  // Adalaj's "what failed" breakdown: numbered tabs switch between the
  // five problem/fix/result write-ups
  function initAdalajFailures(){
    var root = document.getElementById("adFailures");
    if (!root) return;
    var items = Array.prototype.slice.call(root.querySelectorAll(".af-item-data")).map(function(el){
      return {
        title: el.getAttribute("data-title"), problem: el.getAttribute("data-problem"),
        fix: el.getAttribute("data-fix"), result: el.getAttribute("data-result")
      };
    });
    var tabs = Array.prototype.slice.call(root.querySelectorAll(".af-tab"));
    var title = document.getElementById("afTitle");
    var problem = document.getElementById("afProblem");
    var fix = document.getElementById("afFix");
    var result = document.getElementById("afResult");

    function show(i){
      tabs.forEach(function(t, idx){ t.classList.toggle("is-active", idx === i); });
      title.textContent = items[i].title;
      problem.textContent = items[i].problem;
      fix.textContent = items[i].fix;
      result.textContent = items[i].result;
    }
    tabs.forEach(function(t, i){
      t.addEventListener("click", function(){ show(i); });
    });
    show(0);
  }

  // Red Spire's delight/professional balance slider: as it moves, the label
  // it's leaning toward lights up, so dragging it visibly does something
  function initRedSpireBalance(){
    var slider = document.getElementById("rsBalanceSlider");
    if (!slider) return;
    // range inputs don't fill themselves — paint the filled portion as the
    // input's own background, a hard-stop gradient at the current value
    function render(){
      var v = slider.value;
      slider.style.background = "linear-gradient(to right, var(--accent) " + v + "%, var(--line) " + v + "%)";
    }
    slider.addEventListener("input", render);
    render();
  }

  // Red Spire's four purple tones: tap a swatch, that tone's mascot opens
  function initRedSpireMascot(){
    var root = document.getElementById("rsSwatches");
    var stage = document.getElementById("rsMascotStage");
    if (!root || !stage) return;
    var swatches = Array.prototype.slice.call(root.querySelectorAll(".rs-swatch"));
    swatches.forEach(function(sw){
      sw.addEventListener("click", function(){
        swatches.forEach(function(x){ x.classList.remove("is-active"); });
        sw.classList.add("is-active");
        stage.src = sw.getAttribute("data-mascot");
        stage.alt = sw.getAttribute("data-alt");
      });
    });
  }

  // Red Spire's scale-legibility tester: shrinks the mark to the clicked percentage
  function initRedSpireScale(){
    var root = document.getElementById("rsScale");
    if (!root) return;
    var tabs = Array.prototype.slice.call(root.querySelectorAll(".rs-scale-tab"));
    var img = document.getElementById("rsScaleImg");
    var BASE_WIDTH = 180; // the logo's "100%" reference size, in px
    tabs.forEach(function(t){
      t.addEventListener("click", function(){
        tabs.forEach(function(x){ x.classList.remove("is-active"); });
        t.classList.add("is-active");
        // a plain % width is relative to the stage's own (much wider) box, so
        // it kept getting clamped back down by the image's max-width — work
        // in px against the 100% reference size instead, so every step is
        // visibly smaller than the last
        var pct = parseInt(t.getAttribute("data-size"), 10);
        img.style.width = Math.round(BASE_WIDTH * pct / 100) + "px";
      });
    });
  }

  // Red Spire's outcome mosaic: filters tiles by which part of the identity they show
  function initRedSpireFilters(){
    var root = document.getElementById("rsFilters");
    var mosaic = document.getElementById("rsMosaic");
    if (!root || !mosaic) return;
    var btns = Array.prototype.slice.call(root.querySelectorAll(".rs-filter"));
    var tiles = Array.prototype.slice.call(mosaic.querySelectorAll(".rs-tile"));
    btns.forEach(function(b){
      b.addEventListener("click", function(){
        btns.forEach(function(x){ x.classList.remove("is-active"); });
        b.classList.add("is-active");
        var f = b.getAttribute("data-filter");
        tiles.forEach(function(tile){
          tile.hidden = !(f === "all" || tile.getAttribute("data-cat") === f);
        });
      });
    });
  }

  // Smart Plant Friend's user-flow widget: a Scan my book / Scan a real
  // plant tab switches which five steps are listed, and tapping a step
  // swaps the phone mockup to that step's screen
  function initSmartPlantFlow(){
    var root = document.getElementById("spFlow");
    if (!root) return;
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".sp-flow-tab"));
    var lists = Array.prototype.slice.call(root.querySelectorAll(".sp-flow-steps"));
    var img = document.getElementById("spFlowImg");
    var homeSrc = img.getAttribute("src");
    var homeAlt = img.getAttribute("alt");

    function showFlow(fi){
      tabs.forEach(function(t, idx){ t.classList.toggle("is-active", idx === fi); });
      lists.forEach(function(l, idx){ l.classList.toggle("is-active", idx === fi); });
      img.src = homeSrc;
      img.alt = homeAlt;
    }
    tabs.forEach(function(t, i){
      t.addEventListener("click", function(){ showFlow(i); });
    });
    lists.forEach(function(list){
      var btns = Array.prototype.slice.call(list.querySelectorAll(".sp-flow-step-btn"));
      btns.forEach(function(b){
        b.addEventListener("click", function(){
          btns.forEach(function(x){ x.closest("li").classList.remove("is-active"); });
          b.closest("li").classList.add("is-active");
          img.src = b.getAttribute("data-img");
          img.alt = b.getAttribute("data-alt");
        });
      });
    });
  }

  // Smart Plant Friend's research tabs: g = 0.80 / +41.7% / Words + pictures
  // swap the big stat, its write-up, takeaway, and source below
  function initSmartPlantResearch(){
    var root = document.getElementById("spResearch");
    if (!root) return;
    var items = Array.prototype.slice.call(root.querySelectorAll(".sp-research-data"));
    var tabs = Array.prototype.slice.call(root.querySelectorAll(".sp-research-tab"));
    var num = document.getElementById("spResearchStat");
    var body = document.getElementById("spResearchBody");
    var takeaway = document.getElementById("spResearchTakeaway");
    var source = document.getElementById("spResearchSource");

    function show(i){
      tabs.forEach(function(t, idx){ t.classList.toggle("is-active", idx === i); });
      num.textContent = items[i].getAttribute("data-stat");
      body.textContent = items[i].getAttribute("data-body");
      takeaway.textContent = "→ " + items[i].getAttribute("data-takeaway");
      source.textContent = items[i].getAttribute("data-source");
    }
    tabs.forEach(function(t, i){
      t.addEventListener("click", function(){ show(i); });
    });
  }

  // ---------- expandable hover gallery + shared lightbox ----------
  // every .xg-gallery (data-gallery) on the page shares ONE lightbox element,
  // appended once to <body> so it survives route swaps of #app
  var xg = { open: false, images: [], index: 0, triggerEl: null, prevOverflow: "", touchStartX: null };

  function xgReduceMotion(){ return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

  function ensureLightbox(){
    var el = document.getElementById("xgLightbox");
    if (el) return el;
    el = document.createElement("div");
    el.id = "xgLightbox";
    el.className = "xg-lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Image viewer");
    el.hidden = true;
    el.innerHTML =
      '<button type="button" class="xg-close" aria-label="Close" data-bubble="close">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '</button>' +
      '<button type="button" class="xg-nav xg-prev" aria-label="Previous image" data-bubble="prev">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>' +
      '</button>' +
      '<div class="xg-stage"><img class="xg-stage-img" alt=""></div>' +
      '<button type="button" class="xg-nav xg-next" aria-label="Next image" data-bubble="next">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>' +
      '</button>' +
      '<div class="xg-counter" aria-hidden="true"></div>';
    document.body.appendChild(el);

    var stage = el.querySelector(".xg-stage");
    var prevBtn = el.querySelector(".xg-prev");
    var nextBtn = el.querySelector(".xg-next");

    el.addEventListener("click", closeLightbox); // backdrop (and the close button, which bubbles here)
    stage.addEventListener("click", function(e){ e.stopPropagation(); }); // clicking the image itself shouldn't close it
    prevBtn.addEventListener("click", function(e){ e.stopPropagation(); xgStep(-1); });
    nextBtn.addEventListener("click", function(e){ e.stopPropagation(); xgStep(1); });

    // swipe to navigate on touch devices
    el.addEventListener("touchstart", function(e){
      xg.touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    el.addEventListener("touchend", function(e){
      if (xg.touchStartX === null) return;
      var dx = e.changedTouches[0].clientX - xg.touchStartX;
      xg.touchStartX = null;
      if (Math.abs(dx) > 40) xgStep(dx < 0 ? 1 : -1);
    }, { passive: true });

    document.addEventListener("keydown", function(e){
      if (!xg.open) return;
      if (e.key === "Escape"){ closeLightbox(); }
      else if (e.key === "ArrowLeft"){ xgStep(-1); }
      else if (e.key === "ArrowRight"){ xgStep(1); }
      else if (e.key === "Tab"){
        // a minimal focus trap: cycle between the lightbox's own controls
        var focusable = Array.prototype.filter.call(el.querySelectorAll("button"), function(b){ return !b.hidden; });
        if (!focusable.length) return;
        var i = focusable.indexOf(document.activeElement);
        e.preventDefault();
        var next = e.shiftKey ? (i <= 0 ? focusable.length - 1 : i - 1) : (i === focusable.length - 1 ? 0 : i + 1);
        focusable[next].focus();
      }
    });

    return el;
  }

  function xgRender(){
    var el = document.getElementById("xgLightbox");
    if (!el) return;
    var img = xg.images[xg.index];
    var imgEl = el.querySelector(".xg-stage-img");
    var multi = xg.images.length > 1;
    function swapImage(){
      imgEl.src = img.src;
      imgEl.alt = img.alt || "";
    }
    if (xgReduceMotion()){
      swapImage();
    } else {
      imgEl.classList.remove("is-settled");
      swapImage();
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ imgEl.classList.add("is-settled"); }); });
    }
    el.querySelector(".xg-counter").textContent = (xg.index + 1) + " / " + xg.images.length;
    el.querySelector(".xg-prev").hidden = !multi;
    el.querySelector(".xg-next").hidden = !multi;
  }

  function xgStep(dir){
    if (xg.images.length < 2) return;
    xg.index = (xg.index + dir + xg.images.length) % xg.images.length;
    xgRender();
  }

  function openLightbox(images, index, triggerEl){
    var el = ensureLightbox();
    xg.images = images; xg.index = index; xg.triggerEl = triggerEl || null; xg.open = true;
    el.hidden = false;
    xgRender();
    xg.prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function(){ el.classList.add("is-open"); });
    el.querySelector(".xg-close").focus();
  }

  function closeLightbox(){
    if (!xg.open) return;
    var el = document.getElementById("xgLightbox");
    xg.open = false;
    if (el){
      el.classList.remove("is-open");
      var done = function(){ el.hidden = true; };
      if (xgReduceMotion()) done(); else setTimeout(done, 220);
    }
    document.body.style.overflow = xg.prevOverflow || "";
    var toFocus = xg.triggerEl;
    xg.triggerEl = null;
    if (toFocus && document.body.contains(toFocus)) toFocus.focus();
  }

  // builds every [data-vcarousel] on the current page: a vertical Embla carousel
  // (drag/swipe/wheel/arrow-key all native to the axis:"y" instance), up/down
  // arrow buttons, and click/Enter on a slide opens the shared lightbox
  function initVerticalCarousels(){
    if (typeof EmblaCarousel === "undefined") return;
    var reduce = xgReduceMotion();

    document.querySelectorAll("[data-vcarousel]").forEach(function(root){
      var viewport = root.querySelector(".vcarousel-viewport");
      var upBtn = root.querySelector(".vcarousel-up");
      var downBtn = root.querySelector(".vcarousel-down");
      var slides = Array.prototype.slice.call(root.querySelectorAll(".vcarousel-slide"));
      var buttons = Array.prototype.slice.call(root.querySelectorAll(".vcarousel-img-btn"));
      var images = buttons.map(function(btn){ return { src: btn.getAttribute("data-src"), alt: btn.getAttribute("data-alt") }; });
      var loop = root.hasAttribute("data-loop");

      function layout(){
        var mobile = window.matchMedia("(max-width: 768px)").matches;
        var visible = mobile ? 1.5 : 2;
        var gap = 8;
        var slideH = viewport.clientWidth / 2; // slides default to a 2:1 landscape ratio
        viewport.style.height = Math.round(slideH * visible + gap * (visible - 1)) + "px";
        slides.forEach(function(s){ s.style.flexBasis = (100 / visible) + "%"; });
      }
      layout();

      var api = EmblaCarousel(viewport, { axis: "y", align: "start", loop: loop, duration: reduce ? 1 : 20 });

      function updateArrows(){
        if (loop) return;
        upBtn.disabled = !api.canScrollPrev();
        downBtn.disabled = !api.canScrollNext();
      }
      updateArrows();
      api.on("select", updateArrows);
      api.on("reInit", updateArrows);

      upBtn.addEventListener("click", function(){ api.scrollPrev(reduce); });
      downBtn.addEventListener("click", function(){ api.scrollNext(reduce); });

      root.addEventListener("keydown", function(e){
        if (e.key === "ArrowDown"){ e.preventDefault(); api.scrollNext(reduce); }
        else if (e.key === "ArrowUp"){ e.preventDefault(); api.scrollPrev(reduce); }
      });

      // step one slide per wheel tick, but release to normal page scroll once
      // the first/last slide is reached instead of hijacking the scroll
      var wheelLock = false;
      viewport.addEventListener("wheel", function(e){
        var goingDown = e.deltaY > 0;
        if (!loop){
          if (goingDown && !api.canScrollNext()) return;
          if (!goingDown && !api.canScrollPrev()) return;
        }
        e.preventDefault();
        if (wheelLock) return;
        wheelLock = true;
        if (goingDown) api.scrollNext(reduce); else api.scrollPrev(reduce);
        setTimeout(function(){ wheelLock = false; }, 250);
      }, { passive: false });

      buttons.forEach(function(btn, i){
        btn.addEventListener("click", function(){ openLightbox(images, i, btn); });
      });

      if ("ResizeObserver" in window){
        new ResizeObserver(function(){ layout(); api.reInit(); }).observe(root);
      }
    });
  }

  // "tilt up" scroll reveal: each .tilt element tips upright + fades in once,
  // the first time it crosses into view. The stagger delay (--d) resets per
  // parent element, so each little group — a row of pills, a list of timeline
  // rows, a section's heading+paragraph — cascades on its own instead of the
  // delay climbing the whole way down the page.
  function initTiltReveal(){
    var els = document.querySelectorAll("#app .tilt");
    if (!els.length) return;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("in"); });
      return;
    }

    els.forEach(function(el){
      var parent = el.parentElement;
      var n = parent.hasAttribute("data-tilt-n") ? parseInt(parent.getAttribute("data-tilt-n"), 10) : 0;
      el.style.setProperty("--d", Math.min(n * 0.07, 0.4) + "s");
      parent.setAttribute("data-tilt-n", n + 1);
    });

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -12% 0px" });

    els.forEach(function(el){ io.observe(el); });
  }

  // the home page's "exhibition poster": draggable soft blobs that react to
  // the cursor, a crosshair cursor-follower, word-cycling, a then/now photo
  // slider, and a tiny ambient tone per blob. Window/document-level listeners
  // and the rAF loop are the only things that need explicit teardown — every
  // other listener lives on an element inside #app and is GC'd with it.
  function initHomeStage(){
    var st = document.getElementById("st");
    if (!st) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var P = { x: -999, y: -999, in: false };
    var blobs = Array.prototype.slice.call(st.querySelectorAll(".blob")).map(function(el, i){
      return { el: el, i: i, ox: 0, oy: 0, dx: 0, dy: 0, ph: i * 1.7, bx: 0, by: 0, r: 0 };
    });
    function measure(){
      blobs.forEach(function(b){
        b.bx = b.el.offsetLeft + b.el.offsetWidth / 2;
        b.by = b.el.offsetTop + b.el.offsetHeight / 2;
        b.r = b.el.offsetWidth / 2;
      });
    }

    // ambient tone per blob — silent until the visitor opts in via the button
    var AC = null, sound = false;
    var notes = [261.6, 293.7, 329.6, 392, 440, 523.3, 587.3];
    function tone(f){
      if (!sound || !AC) return;
      try {
        var o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime;
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(.0001, t);
        g.gain.exponentialRampToValueAtTime(.07, t + .35);
        g.gain.exponentialRampToValueAtTime(.0001, t + 2.4);
        o.connect(g).connect(AC.destination);
        o.start(t); o.stop(t + 2.5);
      } catch (e) {}
    }
    var sndBtn = document.getElementById("snd");
    if (sndBtn) sndBtn.addEventListener("click", function(e){
      try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); AC.resume(); } catch (_) {}
      sound = !sound;
      e.target.textContent = sound ? "sound on" : "sound off";
      if (sound) tone(392);
    });

    // custom crosshair cursor + coordinate readout, scoped to this stage only
    var cur = document.getElementById("cur");
    var curT = cur ? cur.querySelector("em") : null;
    if (window.matchMedia("(pointer: fine)").matches) document.documentElement.classList.add("fine");
    function rel(e){ var r = st.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
    var drag = null;
    st.addEventListener("pointermove", function(e){
      var xy = rel(e), x = xy[0], y = xy[1];
      P.x = x; P.y = y; P.in = true;
      if (cur){
        cur.style.transform = "translate(" + (e.clientX - cur.offsetWidth / 2) + "px," + (e.clientY - cur.offsetHeight / 2) + "px)";
        if (curT) curT.textContent = "x " + (x / st.clientWidth).toFixed(2) + "  y " + (y / st.clientHeight).toFixed(2);
        cur.classList.toggle("big", !!e.target.closest(".blob,.ph,.lw,.hi,a,button,label"));
      }
      if (drag){ drag.b.ox = drag.ox + (x - drag.x); drag.b.oy = drag.oy + (y - drag.y); }
    });
    st.addEventListener("pointerleave", function(){ P.in = false; });
    st.addEventListener("pointerdown", function(e){
      var el = e.target.closest(".blob");
      if (!el) return;
      var b = blobs.filter(function(q){ return q.el === el; })[0];
      var xy = rel(e), x = xy[0], y = xy[1];
      drag = { b: b, x: x, y: y, ox: b.ox, oy: b.oy };
      el.classList.add("drag");
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      tone(notes[b.i] * .5);
    });
    function onPointerUp(){ if (drag) drag.b.el.classList.remove("drag"); drag = null; }
    window.addEventListener("pointerup", onPointerUp);

    // "people to things" word-cycling
    function cyc(el, list){
      if (!el) return;
      var k = 0, busy = false;
      el.addEventListener("pointerenter", go);
      el.addEventListener("click", go);
      function go(){
        if (busy) return;
        busy = true;
        el.classList.add("out");
        setTimeout(function(){ k = (k + 1) % list.length; el.textContent = list[k]; el.classList.remove("out"); busy = false; }, 250);
      }
    }
    cyc(st.querySelector(".w1"), ["people", "ideas", "stories", "hands"]);
    cyc(st.querySelector(".w2"), ["things", "screens", "spaces", "games"]);
    var pl = st.querySelector(".pl");
    var plr = 0;
    Array.prototype.forEach.call(st.querySelectorAll(".w1,.w2"), function(el){
      el.addEventListener("pointerenter", function(){ plr += 90; if (pl) pl.style.rotate = plr + "deg"; });
    });

    // then / now photo slider — drag across the frame, or upload your own to preview
    var ph = document.getElementById("ph");
    var split = 50, tSplit = 50;
    if (ph){
      ph.addEventListener("pointermove", function(e){
        var r = ph.getBoundingClientRect();
        tSplit = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100));
      });
      ph.addEventListener("pointerleave", function(){ tSplit = 50; });
    }
    [["fThen", "imThen"], ["fNow", "imNow"]].forEach(function(pair){
      var f = document.getElementById(pair[0]), i = document.getElementById(pair[1]);
      if (!f || !i) return;
      f.addEventListener("change", function(e){
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        i.src = URL.createObjectURL(file);
        if (i.nextElementSibling) i.nextElementSibling.hidden = true;
      });
    });

    // big crosshair magnet
    var cross = document.getElementById("cross");
    var cxo = 0, cyo = 0;

    var hovB = null, raf = 0;
    function loop(now){
      var t = now / 1000;
      blobs.forEach(function(b){
        var k = b.r / 60;
        var fx = reduce ? 0 : Math.sin(t * .32 + b.ph) * 5 * k;
        var fy = reduce ? 0 : Math.cos(t * .26 + b.ph * 1.3) * 7 * k;
        var tx = 0, ty = 0;
        var cx = b.bx + b.ox + b.dx, cy = b.by + b.oy + b.dy;
        if (P.in && (!drag || drag.b !== b)){
          var vx = cx - P.x, vy = cy - P.y, d = Math.hypot(vx, vy) || 1, R = b.r * 1.15 + 60;
          if (d < R){ var f = (1 - d / R) * 28; tx = vx / d * f; ty = vy / d * f; }
        }
        b.dx += (tx - b.dx) * .06; b.dy += (ty - b.dy) * .06;
        b.el.style.transform = "translate(" + (b.ox + b.dx + fx).toFixed(1) + "px," + (b.oy + b.dy + fy).toFixed(1) + "px)";
      });
      var h = null;
      if (P.in){
        var bd = 1e9;
        blobs.forEach(function(b){
          var d = Math.hypot(b.bx + b.ox + b.dx - P.x, b.by + b.oy + b.dy - P.y);
          if (d < b.r * .75 + 20 && d < bd){ bd = d; h = b; }
        });
      }
      if (drag) h = drag.b;
      if (h !== hovB){
        if (hovB) hovB.el.classList.remove("hov");
        if (h){ h.el.classList.add("hov"); if (!drag) tone(notes[h.i]); }
        hovB = h;
      }
      if (cross){
        var ccx = cross.offsetLeft + cross.offsetWidth / 2, ccy = cross.offsetTop + cross.offsetHeight / 2;
        var dd = Math.hypot(P.x - ccx, P.y - ccy), near = P.in && dd < cross.offsetWidth * 1.4;
        cross.classList.toggle("near", near);
        cxo += ((near ? (P.x - ccx) * .18 : 0) - cxo) * .1;
        cyo += ((near ? (P.y - ccy) * .18 : 0) - cyo) * .1;
        cross.style.translate = cxo.toFixed(1) + "px " + cyo.toFixed(1) + "px";
      }
      if (ph){
        split += (tSplit - split) * .15;
        ph.style.setProperty("--split", split.toFixed(2) + "%");
      }
      raf = requestAnimationFrame(loop);
    }
    measure();
    raf = requestAnimationFrame(loop);
    var rt;
    function onResize(){ clearTimeout(rt); rt = setTimeout(measure, 150); }
    window.addEventListener("resize", onResize);

    homeStageCleanup = function(){
      cancelAnimationFrame(raf);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("fine");
      homeStageCleanup = null;
    };
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
