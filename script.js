document.addEventListener('DOMContentLoaded', () => {
  const personas = [
    {
      title: "The Humble Historian",
      image: "images/historian.jpg",
      description: "Lucius Montegrot is merely the humble scribe of the events he claims to have witnessed in a vision, probably induced by too much Elven wine and pipe herb. He insists that any resemblances to real persons, gods, or liches is purely coincidental and that he’s never even heard of a phoenix the size of a cathedral roof.",
      effect: "historian-scroll"
    },
    {
      title: "Definitely Not a Wizard",
      image: "images/wizard.jpg",
      description: "That beard? Fashion choice. The staff? Walking aid. The glowing runes on his sleeves? Laundry accident. The mysterious door in his cellar that hums and sometimes screams in Abyssal? Nope. Nothing to see here.",
      effect: "wizard-smoke"
    },
    {
      title: "The Vampire-Adjacent Noble",
      image: "images/vampire.jpg",
      description: "Lucius Montegrot is rumoured to be a minor baron in a tiny Transylvashlinian province. He is seldom seen during daylight, but his correspondence is extensive, usually delivered by midnight couriers who dissolve into mist if tipped improperly. He claims to be 'only nocturnally inclined' and has a suspicious fondness for red wine served warm.",
      effect: "vampire-blood"
    },
    {
      title: "The Mist-Elven Exile",
      image: "images/mistelf2.jpg",
      description: "It is whispered that Lucius is the only Mist Elf to have fled the demiplane of Mist and retained his flaming sword. His illusions are so convincing, he once sold a dream to a dragon. He spends his days disguised as a mortal author, but his prose smells faintly of starlight and betrayal.",
      effect: "mistelf-glow"
    },
    {
      title: "The Disgruntled Dungeon Master",
      image: "images/dungeonmaster3.jpg",
      description: "Lucius Montegrot is what happens when a Dungeon Master spends thirty years building a world so intricate that the gods themselves are asking for the rulebook. Tired of players licking dungeon walls and seducing mimics, he turned his notes into novels. He still wakes up at night muttering, 'You can't polymorph into a chair, Varius!'",
      effect: "dm-dice"
    },
    {
      title: "The Sea Elven Smuggler",
      image: "images/seaelf.jpg",
      description: "They say Lucius Montegrot is a Sea Elf, though there is no record of his birth and he once confused a dolphin for a shark. Nevertheless, he’s been spotted slipping through misty coves at midnight, selling contraband scrolls and illegal potions to pirates, witches, and the occasional bureaucrat. He speaks seven dialects of Elvish, five of which he made up. Do not let him near your alchemy supplies.",
      effect: "seaelf-splash"
    },
    {
      title: "The Mysterious Hacker",
      image: "images/hacker.jpg",
      description: "It is said Lucius Montegrot is a hacker with his hair half pink and half green. No one knows when he joined GitHub, only that his repositories compile themselves and his README files update during thunderstorms. He writes code in dead languages, forks his own thoughts, and claims to be debugging reality itself. Rumour has it he’s trying to restore the soul of the phoenix, one painstaking line of code after another, into a hidden branch named /ascend. If your screen flickers at midnight, it’s not coincidence. It’s Lucius. <i>They even say he coded this website himself...</i>",
      effect: "hacker-glitch"
    },
    {
      title: "The Gym-Forged Ghostwriter",
      image: "images/bodybuilder.jpg",
      description: "Some say Lucius cannot even read and write. They say he is obsessed with physical strength and wrote an entire book dictating one single prompt into some yet unknown artificial intelligence. Those who speak with him say he communicates mostly in grunts, so it is a wonder how he did it.",
      effect: "muscle-flex"
    },
        {
      title: "The Gym-Forged Writer",
      image: "images/bodybuilder2.jpg",
      description: "Some say Lucius cannot even read and write. They say he is obsessed with physical strength and wrote an entire book dictating one single prompt into some yet unknown artificial intelligence. Those who speak with him say he communicates mostly in grunts, so it is a wonder how he did it. Oops. Did we just accidentally show you his REAL picture? No. We didn't, and if we did, it was an accident. This isn't Lucius Montegrot. This picture isn't real. Nothing to see here.",
      effect: "muscle-flex2"
    },
            {
      title: "The Dwarven Priest of Fire",
      image: "images/firepriest.jpg",
      description: "Some say Lucius is a Dwarven priest of fire who witnessed first-hand the the events his book narrates. Sometime, he can be found in a tavern in Steelforge and for a goblet of mead, he'll tell you a juicy secret he hasn't recorded in the scrolls...",
      effect: "fire-roar"
    },
            {
      title: "The Dark Elven Assassin",
      image: "images/assassin.jpg",
      description: "It is rumoured that Lucius Montegrot did not write his book at all. Instead, he murdered the author in a dark alley in Umbra'El and stole the manuscript, then published it under his own name...",
      effect: "dagger-rain"
    },
                {
      title: "The Gnomish Necromancer",
      image: "images/necromancer.jpg",
      description: "Some say Lucius is a Gnomish Necromancer in service to the Equalizer goddess of Death. Like many gnomish necromancers, he spends his time mastering the secrets of death so as to keep it at bay and heal the sick and wounded in Steelforge's hospitals.",
      effect: "necromancer-wisp"
    },
    {
      title: "The Peacemaker's Paladin",
      image: "images/paladin.jpg",
      description: "They whisper that Lucius Montegrot once took holy vows before an altar the Peacemaker. Clad in onyx plate and wielding a maul the size of a tombstone, he roams the Varthian Empire's paved roads delivering “peace” one shattered victim at a time. His justice is as swift as a thunderclap and as final as the gallows‑knot that dangles from his belt. Some claim there is no man beneath the helm at all — only a spirit of cold, unblinking judgment. Others insist you can hear soft humming inside the armor, as though the Peacemaker himself were singing through Lucius’s ribs. Either way, if the black‑steel paladin blocks your path, pray your sins are few… and your neck unworthy of his rope.",
      effect: "paladin-smite"
    },
      {
      title: "The Grand Druidess",
      image: "images/aeliana.jpg",
      description: "They say Lucius Montegrot is a name, nothing more. Perhaps a mask. Perhaps a quill held by a Druidess who dared not speak her truth aloud. Perhaps a mother trying to reach her daughter by turning their world into a story. But that’s just a rumour. And rumours are nothing but whispers in the wind, aren’t they?",
      effect: "aeliana-sighting"
    }
  ];

  const imageEl = document.getElementById('persona-image');
  const titleEl = document.getElementById('persona-title');
  const descEl = document.getElementById('persona-description');
  const button = document.getElementById('reroll');
  const effectLayer = document.getElementById('effect-layer');
  const card = document.getElementById('persona-display');
  // If PIXI didn’t load, disable Pixi effects
  const _hasPixi = typeof PIXI !== 'undefined';

  function spawnBloodRain() {
    const svgNS = "http://www.w3.org/2000/svg";
    const container = document.createElementNS(svgNS, "svg");
    container.setAttribute("width", "100%");
    container.setAttribute("height", "100%");
    container.setAttribute("viewBox", "0 0 100 100");
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "10000";

    for (let i = 0; i < 25; i++) {
      const path = document.createElementNS(svgNS, "path");
      const cx = Math.random() * 100;
      const delay = Math.random() * 2;
      const scale = Math.random() * 0.6 + 0.3;
      const rotate = Math.random() * 360;

      path.setAttribute("d", "M5 0 C0 10, 10 10, 5 0");
      path.setAttribute("fill", "#8b0000");

      const g = document.createElementNS(svgNS, "g");
      g.setAttribute("transform", `translate(${cx}, -10) scale(${scale}) rotate(${rotate})`);
      g.appendChild(path);

      const anim = document.createElementNS(svgNS, "animateTransform");
      anim.setAttribute("attributeName", "transform");
      anim.setAttribute("type", "translate");
      anim.setAttribute("from", `${cx}, -10`);
      anim.setAttribute("to", `${cx}, 120`);
      anim.setAttribute("dur", "2.5s");
      anim.setAttribute("begin", `${delay}s`);
      anim.setAttribute("fill", "freeze");

      g.appendChild(anim);
      container.appendChild(g);
    }


  document.getElementById("effect-layer").appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 3500);
}
function spawnWizardEffect() {
  const svgNS = "http://www.w3.org/2000/svg";
  const container = document.createElementNS(svgNS, "svg");
  container.setAttribute("width", "100%");
  container.setAttribute("height", "100%");
  container.setAttribute("viewBox", "0 0 100 100");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.zIndex = "10000";

  // Optional glow filter
  const defs = document.createElementNS(svgNS, "defs");
  const filter = document.createElementNS(svgNS, "filter");
  filter.setAttribute("id", "glow");
  const blur = document.createElementNS(svgNS, "feGaussianBlur");
  blur.setAttribute("in", "SourceGraphic");
  blur.setAttribute("stdDeviation", "0.3");
  filter.appendChild(blur);
  defs.appendChild(filter);
  container.appendChild(defs);

  for (let i = 0; i < 6; i++) {
    const pentagram = document.createElementNS(svgNS, "path");

    // Location & movement
    const cx = Math.random() * 100;
    const cy = Math.random() * 100;
    const driftX = (Math.random() - 0.5) * 10;
    const driftY = (Math.random() - 0.5) * 10;
    const delay = Math.random() * 0.5;
    const scale = 0.4 + Math.random() * 0.5;
    const rotateStart = Math.floor(Math.random() * 360);
    const rotateEnd = rotateStart + 360;

    // Proper pentagram path (drawn by skipping every 2nd point)
const R = 5;
const points = [];
for (let j = 0; j < 5; j++) {
  const angle = ((j * 72) - 90) * Math.PI / 180;
  const x = R * Math.cos(angle);
  const y = R * Math.sin(angle);
  points.push([x, y]);
}

// Order: 0 → 2 → 4 → 1 → 3 → 0
const pentagramPath = `M${points[0][0]},${points[0][1]} 
                       L${points[2][0]},${points[2][1]} 
                       L${points[4][0]},${points[4][1]} 
                       L${points[1][0]},${points[1][1]} 
                       L${points[3][0]},${points[3][1]} Z`;

    pentagram.setAttribute("d", pentagramPath);
    pentagram.setAttribute("stroke", "#00ccff");
    pentagram.setAttribute("stroke-width", "0.8");
    pentagram.setAttribute("fill", "rgba(0, 0, 0, 0.15)");
    pentagram.setAttribute("opacity", "1");
    pentagram.setAttribute("filter", "url(#glow)");

    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("transform", `translate(${cx}, ${cy}) scale(${scale})`);
    g.appendChild(pentagram);

    // Movement animation
    const move = document.createElementNS(svgNS, "animateTransform");
    move.setAttribute("attributeName", "transform");
    move.setAttribute("type", "translate");
    move.setAttribute("from", `${cx} ${cy}`);
    move.setAttribute("to", `${cx + driftX} ${cy + driftY}`);
    move.setAttribute("dur", "3s");
    move.setAttribute("begin", `${delay}s`);
    move.setAttribute("fill", "freeze");

    // Rotation animation
    const spin = document.createElementNS(svgNS, "animateTransform");
    spin.setAttribute("attributeName", "transform");
    spin.setAttribute("type", "rotate");
    spin.setAttribute("from", `${rotateStart} ${cx} ${cy}`);
    spin.setAttribute("to", `${rotateEnd} ${cx} ${cy}`);
    spin.setAttribute("dur", "3s");
    spin.setAttribute("begin", `${delay}s`);
    spin.setAttribute("additive", "sum");
    spin.setAttribute("fill", "freeze");

    // Fade out
    const fade = document.createElementNS(svgNS, "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("from", "0.85");
    fade.setAttribute("to", "0");
    fade.setAttribute("dur", "2.5s");
    fade.setAttribute("begin", `${delay + 0.5}s`);
    fade.setAttribute("fill", "freeze");

    g.appendChild(move);
    g.appendChild(spin);
    g.appendChild(fade);
    container.appendChild(g);
  }

  document.getElementById("effect-layer").appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 4000);
}
function spawnNecromancerWispPixi() {
  if (typeof PIXI === 'undefined') return;  // guard

  // 1) full‑screen fixed container behind all content
  const container = document.createElement('div');
  Object.assign(container.style, {
    position:       'fixed',
    top:            '0',
    left:           '0',
    width:          '100vw',
    height:         '100vh',
    pointerEvents:  'none',
    zIndex:         '0',       // behind everything
    backgroundColor:'transparent'
  });
  document.body.appendChild(container);

  // 2) Pixi app that auto‑resizes to that container
  const app = new PIXI.Application({
    resizeTo:        container,
    transparent:     true,
    antialias:       true,
    backgroundAlpha: 0
  });
  container.appendChild(app.view);

  // force the <canvas> itself to be clear
  app.view.style.backgroundColor = 'transparent';

  // 3) spawn wisps with fade‑in & drift
  const wisps = [];
  for (let i = 0; i < 20; i++) {
    const g = new PIXI.Graphics()
  .beginFill(0x66ff99, 1)   // draw fully opaque shape
  .drawEllipse(0, 0, 10 + Math.random() * 15, 5 + Math.random() * 8)
  .endFill();

    g.alpha = 1;               // start fully visible
g.x = Math.random() * app.screen.width;
g.y = app.screen.height + Math.random() * 50;
g.vx = (Math.random() - 0.5) * 1.5;
g.vy = 3 + Math.random() * 2;  // now 3–5 px/tick
app.stage.addChild(g);
wisps.push(g);
  }

  // 4) animate: fade in, float up, reset
  app.ticker.add(() => {
  wisps.forEach(g => {
    // move fast
    g.y -= g.vy;
    g.x += g.vx;
    // reset only when off the *top*
    if (g.y < -20) {
      g.x = Math.random() * app.screen.width;
      g.y = app.screen.height + Math.random() * 50;
    }
  });
});


  // 5) cleanup after 7 s
  setTimeout(() => {
    app.destroy(true, { children: true });
    container.remove();
  }, 7000);
}








function spawnFireRoar() {
  const svgNS = "http://www.w3.org/2000/svg";
  const container = document.createElementNS(svgNS, "svg");
  container.setAttribute("width", "100%");
  container.setAttribute("height", "100%");
  container.setAttribute("viewBox", "0 0 100 100");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.pointerEvents = "none";
  container.style.zIndex = "10000";

  // 🔥 Main burst ring
  const ring = document.createElementNS(svgNS, "circle");
  ring.setAttribute("cx", "50");
  ring.setAttribute("cy", "50");
  ring.setAttribute("r", "2");
  ring.setAttribute("stroke", "orangered");
  ring.setAttribute("stroke-width", "0.6");
  ring.setAttribute("fill", "none");

  const ringAnim = document.createElementNS(svgNS, "animate");
  ringAnim.setAttribute("attributeName", "r");
  ringAnim.setAttribute("from", "2");
  ringAnim.setAttribute("to", "60");
  ringAnim.setAttribute("dur", "1s");
  ringAnim.setAttribute("fill", "freeze");

  const fadeAnim = document.createElementNS(svgNS, "animate");
  fadeAnim.setAttribute("attributeName", "opacity");
  fadeAnim.setAttribute("from", "1");
  fadeAnim.setAttribute("to", "0");
  fadeAnim.setAttribute("dur", "1s");
  fadeAnim.setAttribute("fill", "freeze");

  ring.appendChild(ringAnim);
  ring.appendChild(fadeAnim);
  container.appendChild(ring);

  // 🔥 Fireburst shape
  const flame = document.createElementNS(svgNS, "path");
  flame.setAttribute("d", "M50 60 Q48 52 46 50 Q44 48 47 45 Q49 43 50 47 Q51 43 53 45 Q56 48 54 50 Q52 52 50 60 Z");
  flame.setAttribute("fill", "orange");
  flame.setAttribute("stroke", "darkred");
  flame.setAttribute("stroke-width", "0.3");
  flame.setAttribute("opacity", "0.9");

  const flameFade = document.createElementNS(svgNS, "animate");
  flameFade.setAttribute("attributeName", "opacity");
  flameFade.setAttribute("from", "0.9");
  flameFade.setAttribute("to", "0");
  flameFade.setAttribute("begin", "1.2s");
  flameFade.setAttribute("dur", "1.2s");
  flameFade.setAttribute("fill", "freeze");

  flame.appendChild(flameFade);
  container.appendChild(flame);

  // 💨 Smoke curls (subtle)
  for (let i = 0; i < 3; i++) {
    const curl = document.createElementNS(svgNS, "circle");
    const cx = 45 + Math.random() * 10;
    const cy = 50 + Math.random() * 5;
    const r = 0.5 + Math.random();
    curl.setAttribute("cx", cx.toFixed(2));
    curl.setAttribute("cy", cy.toFixed(2));
    curl.setAttribute("r", r.toString());
    curl.setAttribute("stroke", "gray");
    curl.setAttribute("stroke-width", "0.2");
    curl.setAttribute("fill", "none");
    curl.setAttribute("opacity", "0.4");

    const curlRise = document.createElementNS(svgNS, "animateTransform");
    curlRise.setAttribute("attributeName", "transform");
    curlRise.setAttribute("type", "translate");
    curlRise.setAttribute("from", "0 0");
    curlRise.setAttribute("to", `0 -10`);
    curlRise.setAttribute("dur", "2.5s");
    curlRise.setAttribute("fill", "freeze");

    const curlFade = document.createElementNS(svgNS, "animate");
    curlFade.setAttribute("attributeName", "opacity");
    curlFade.setAttribute("from", "0.4");
    curlFade.setAttribute("to", "0");
    curlFade.setAttribute("dur", "2.5s");
    curlFade.setAttribute("fill", "freeze");

    curl.appendChild(curlRise);
    curl.appendChild(curlFade);
    container.appendChild(curl);
  }

  document.getElementById("effect-layer").appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 4000);
}

function spawnDaggerRain() {
  const svgNS = "http://www.w3.org/2000/svg";
  const container = document.createElementNS(svgNS, "svg");
  container.setAttribute("width", "100%");
  container.setAttribute("height", "100%");
  container.setAttribute("viewBox", "0 0 100 100");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.zIndex = "10000";

  const daggerPath = "M5,0 L6,4 L5.5,5 L5,10 L4.5,5 L4,4 Z";

  for (let i = 0; i < 12; i++) {
    const dagger = document.createElementNS(svgNS, "path");
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() * 20 - 10);
    const delay = Math.random() * 0.6;

    dagger.setAttribute("d", daggerPath);
    dagger.setAttribute("fill", "#c00");
    dagger.setAttribute("stroke", "#300");
    dagger.setAttribute("stroke-width", "0.3");
    dagger.setAttribute("opacity", "0.8");
    dagger.setAttribute("transform", `translate(${startX}, -10) rotate(0)`);

    const animateFall = document.createElementNS(svgNS, "animateTransform");
    animateFall.setAttribute("attributeName", "transform");
    animateFall.setAttribute("type", "translate");
    animateFall.setAttribute("from", `${startX}, -10`);
    animateFall.setAttribute("to", `${endX}, 120`);
    animateFall.setAttribute("dur", "2.5s");
    animateFall.setAttribute("begin", `${delay}s`);
    animateFall.setAttribute("fill", "freeze");

    const animateSpin = document.createElementNS(svgNS, "animateTransform");
    animateSpin.setAttribute("attributeName", "transform");
    animateSpin.setAttribute("type", "rotate");
    animateSpin.setAttribute("from", `0 ${startX} -10`);
    animateSpin.setAttribute("to", `720 ${startX} -10`);
    animateSpin.setAttribute("dur", "2.5s");
    animateSpin.setAttribute("begin", `${delay}s`);
    animateSpin.setAttribute("additive", "sum");
    animateSpin.setAttribute("fill", "freeze");

    const fadeOut = document.createElementNS(svgNS, "animate");
    fadeOut.setAttribute("attributeName", "opacity");
    fadeOut.setAttribute("from", "0.8");
    fadeOut.setAttribute("to", "0");
    fadeOut.setAttribute("dur", "2.5s");
    fadeOut.setAttribute("begin", `${delay + 0.5}s`);
    fadeOut.setAttribute("fill", "freeze");

    dagger.appendChild(animateFall);
    dagger.appendChild(animateSpin);
    dagger.appendChild(fadeOut);
    container.appendChild(dagger);
  }

  document.getElementById("effect-layer").appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 4000);
}

// ─────────────────────────────────────────────────────────────────────────────
// Shadow Chains with real chain‑link sprites (uses your chain-link.png)
// ─────────────────────────────────────────────────────────────────────────────
// --- overwrite your old function with this ---

function spawnShadowChainsPixi() {
  if (typeof PIXI === 'undefined') return;

  // 1) grab your existing effect-layer
  const container = document.getElementById('effect-layer');

  // 2) make it the Pixi host
  const app = new PIXI.Application({
    resizeTo:     container,
    transparent:  true,
    antialias:    true,
    backgroundAlpha: 0
  });
  container.appendChild(app.view);
  app.view.style.position = 'absolute';  // ensure full‑screen
  app.view.style.top  = '0';
  app.view.style.left = '0';

  // 3) load your chain‑link texture
  const chainTex = PIXI.Texture.from('images/chain-link.png');

  // 4) create a tiling sprite that spans the whole width, with a fixed height
  const chain = new PIXI.TilingSprite(
    chainTex,
    app.screen.width,
    chainTex.height
  );
  // place it vertically centered on the card
  // note: effect-layer is behind everything, so y = half of viewport is fine
  chain.y = app.screen.height / 2 - chainTex.height/2;
  app.stage.addChild(chain);

  // 5) animate the tileOffset so it looks like the chain is sliding in
  let direction = -1; // we’ll flip halfway
  app.ticker.add((dt) => {
    // move the texture rather than sprites (much faster)
    chain.tilePosition.x += direction * 1.5 * dt;
  });

  // 6) reverse direction at half‑time, then teardown
  setTimeout(() => { direction = 1; }, 2000);
  setTimeout(() => {
    app.destroy(true, { children: true });
    container.removeChild(app.view);
  }, 4000);
}













/**
 * Aeliana’s theatrical Pixi effect:
 * Swirling emerald motes that emanate from the card center.
 */
function spawnAelianaMagicPixi() {
  if (typeof PIXI === 'undefined') return;

  // Confine to the card and sit it behind the content
  card.style.position = 'relative';
  const wrapper = document.createElement('div');
  Object.assign(wrapper.style, {
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '-1'
  });
  card.appendChild(wrapper);

  // Create the Pixi app sized to the card
  const app = new PIXI.Application({
    width: wrapper.clientWidth,
    height: wrapper.clientHeight,
    transparent: true,
    antialias: true
  });
  wrapper.appendChild(app.view);

  const centerX = app.screen.width / 2;
  const centerY = app.screen.height / 2;
  const particles = [];

  // Create 40 motes
  for (let i = 0; i < 40; i++) {
    const g = new PIXI.Graphics()
      .beginFill(0x3bb75e, 0.8)
      .drawCircle(0, 0, 4)
      .endFill();
    g.x = centerX;
    g.y = centerY;
    // random initial velocity
    g.vx = (Math.random() - 0.5) * 4;
    g.vy = (Math.random() - 0.5) * 4;
    app.stage.addChild(g);
    particles.push(g);
  }

  app.ticker.add(() => {
    particles.forEach(p => {
      // move
      p.x += p.vx;
      p.y += p.vy;
      // pull back gently to center for swirl
      p.vx += (centerX - p.x) * 0.005;
      p.vy += (centerY - p.y) * 0.005;
      // fade out
      p.alpha -= 0.01;
      // respawn when gone
      if (p.alpha <= 0) {
        p.x = centerX;
        p.y = centerY;
        p.alpha = 1;
        p.vx = (Math.random() - 0.5) * 4;
        p.vy = (Math.random() - 0.5) * 4;
      }
    });
  });

  // Clean up after 5 s
  setTimeout(() => {
    app.destroy(true, { children: true });
    wrapper.remove();
  }, 5000);
}




  let lastIndex = 0;
  let isAnimating = false;
function spawnHackerGlitch() {
  const ns = "http://www.w3.org/2000/svg";
  const container = document.createElementNS(ns, "svg");
  container.setAttribute("width", "100%");
  container.setAttribute("height", "100%");
  container.setAttribute("viewBox", "0 0 100 100");
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.pointerEvents = "none";
  container.style.zIndex = "9999";

  // Add 100 glyphs falling down the screen
  const chars = "!@#$%^&*()_+-=[]{};:<>?/|\\ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const glyphs = [];

  for (let i = 0; i < 100; i++) {
    const text = document.createElementNS(ns, "text");
    const x = Math.random() * 100;
    const y = -Math.random() * 100;
    text.setAttribute("x", x.toFixed(2));
    text.setAttribute("y", y.toFixed(2));
    text.setAttribute("font-size", "3");
    text.setAttribute("fill", "red");
    text.setAttribute("opacity", "0.5");
    text.setAttribute("font-family", "monospace");
    text.textContent = chars[Math.floor(Math.random() * chars.length)];
    container.appendChild(text);
    glyphs.push({ el: text, x, y });
  }

  document.getElementById("effect-layer").appendChild(container);

  let ticks = 0;
  const interval = setInterval(() => {
    ticks++;
    glyphs.forEach(g => {
      g.y += 1 + Math.random() * 0.5;
      if (g.y > 110) g.y = -10;
      g.el.setAttribute("y", g.y.toFixed(2));
      g.el.textContent = chars[Math.floor(Math.random() * chars.length)];
    });

    // At ~2.5 seconds, overlay phoenix
    if (ticks === 45) {
      const phoenix = document.createElementNS(ns, "path");
      phoenix.setAttribute("d",
        "M50 60 Q48 50 40 48 Q35 47 38 43 Q42 40 44 44 Q45 38 50 42 Q55 38 56 44 Q58 40 62 43 Q65 47 60 48 Q52 50 50 60 Z"
      );
      phoenix.setAttribute("fill", "rgba(255,0,0,0.8)");
      phoenix.setAttribute("stroke", "#ff4444");
      phoenix.setAttribute("stroke-width", "0.3");
      phoenix.setAttribute("opacity", "0");
      container.appendChild(phoenix);

      const fadeIn = document.createElementNS(ns, "animate");
      fadeIn.setAttribute("attributeName", "opacity");
      fadeIn.setAttribute("from", "0");
      fadeIn.setAttribute("to", "1");
      fadeIn.setAttribute("dur", "0.4s");
      fadeIn.setAttribute("fill", "freeze");

      const fadeOut = document.createElementNS(ns, "animate");
      fadeOut.setAttribute("attributeName", "opacity");
      fadeOut.setAttribute("from", "1");
      fadeOut.setAttribute("to", "0");
      fadeOut.setAttribute("begin", "0.8s");
      fadeOut.setAttribute("dur", "0.4s");
      fadeOut.setAttribute("fill", "freeze");

      phoenix.appendChild(fadeIn);
      phoenix.appendChild(fadeOut);
    }
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    container.remove();
  }, 4000);
}

function showRandomPersona () {
  if (isAnimating) return;
  isAnimating = true;

function weightedRandomIndex(weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}

// Weights for each persona, must match order in `personas`
const personaWeights = [
  1, // historian
  1, // wizard
  1, // vampire
  1, // mist elf
  1, // dungeon master
  1, // sea elf
  1, // hacker
  1, // gym-forged ghostwriter
  0.05, // 🧠🔥 GYM-FORGED WRITER (RARE)
  1777, // fire priest
  1, // assassin
  1, // necromancer
  1,  // paladin
  0.01, // aeliana
];

let idx;
do { idx = weightedRandomIndex(personaWeights); }
while (idx === lastIndex);

  lastIndex = idx;
  const persona = personas[idx];
if (persona.effect === "muscle-flex2") {
  console.warn("🔥 RARE: Lucius (possibly real) revealed.");
}

if (persona.title === "The Grand Druidess") {
  console.warn("🌿✨ AELIANA HAS APPEARED! The veil thins. The phoenix watches.");
  try {
    spawnAelianaMagicPixi();
  } catch (err) {
    console.error("Error in Aeliana effect:", err);
  }
}


  card.classList.remove('spin');
  void card.offsetWidth;
  card.classList.add('spin');

  // TEMPORARY blackout effect
  card.classList.add('flipping');

  setTimeout(() => {
    imageEl.src = persona.image;
    imageEl.alt = persona.title;
    titleEl.textContent = persona.title;
    descEl.innerHTML = persona.description;

    effectLayer.className = '';
    switch (persona.effect) {
      case 'vampire-blood': spawnBloodRain(); break;
      case 'wizard-smoke': spawnWizardEffect(); break;
      case 'hacker-glitch': spawnHackerGlitch(); break;
      case 'dagger-rain': spawnDaggerRain(); break;
      case 'fire-roar': spawnFireRoar(); break;
      case 'necromancer-wisp': spawnNecromancerWispPixi(); break;
      case 'paladin-smite':
        try {
          spawnShadowChainsPixi();
            } catch (err) {
            console.error("ShadowChains error:", err);
            }
              break;




      default: effectLayer.classList.add(persona.effect);
    }

    card.classList.remove('flipping'); // fade back in
  }, 900);

  setTimeout(() => { isAnimating = false; }, 1800);
}


/* hook up the button */
button.addEventListener('click', showRandomPersona);

});
