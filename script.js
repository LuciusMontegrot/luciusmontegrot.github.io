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
      description: "Lucius Montegrot is rumoured to be a minor baron in a small mansion hidden in the Forests in Vashlin. He is seldom seen during daylight, but his correspondence is extensive, usually delivered by night couriers who dissolve into mist if probed with questions. He claims to be 'simply nocturnally inclined' and has a suspicious fondness for red wine served warm. He has built a few bat roosts around his mansion, 'so that they eat all those pesky insects'",
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

/**
 * Ink‑blotches effect for The Humble Historian
 */
function spawnInkBlotches() {
  const blotPaths = [
    'images/ink stain 1.png',
    'images/ink stain 2.png',
    'images/ink stain 3.png',
    'images/ink stain 4.png',
    'images/ink stain 5.png',
    'images/ink stain 6.png',
    // add more if you like
  ];

  const layer = document.getElementById('effect-layer');
  if (!layer) return;

  // bump this up to 30-40 blotches
  const count = 30 + Math.floor(Math.random() * 11);

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = blotPaths[Math.floor(Math.random() * blotPaths.length)];

    // totally random across the viewport
    img.style.position       = 'absolute';
    img.style.left           = (Math.random() * 100) + 'vw';
    img.style.top            = (Math.random() * 100) + 'vh';
    img.style.width          = (40 + Math.random() * 120) + 'px';
    img.style.pointerEvents  = 'none';
    img.style.opacity        = '0';
    img.style.transform      = `rotate(${Math.random()*360}deg) scale(${0.4+Math.random()*0.6})`;
    img.style.transition     = 'opacity 0.4s ease';

    layer.appendChild(img);

    // fade in quickly
    setTimeout(() => { img.style.opacity = '1'; }, 30);

    // fade out
    setTimeout(() => { img.style.opacity = '0'; }, 2000 + Math.random()*2000);

    // cleanup
    setTimeout(() => {
      if (img.parentNode) layer.removeChild(img);
    }, 6000 + Math.random()*2000);
  }
}

function spawnMistElfFlamingSwordPixi() {
  console.log("✨ spawnMistElfFlamingSwordPixi() fired");
  if (typeof PIXI === 'undefined') return;

  // 1) grab & prepare card
  const card = document.getElementById('persona-display');
  card.style.position = 'relative';

  // 2) wrapper behind content
  const wrapper = document.createElement('div');
  Object.assign(wrapper.style, {
    position:      'absolute',
    inset:         '0',
    pointerEvents: 'none',
    zIndex:        '0',
    background:    'none'
  });
  card.appendChild(wrapper);

  // 3) Pixi canvas
  const app = new PIXI.Application({
    width:           wrapper.clientWidth,
    height:          wrapper.clientHeight,
    transparent:     true,
    backgroundAlpha: 0,
    antialias:       true
  });
  app.view.style.background = 'none';
  wrapper.appendChild(app.view);

  // 4) sword line
  const hilt = { x: app.screen.width * 0.6, y: app.screen.height * 0.5 };
  const tip  = { x: app.screen.width * 0.3, y: app.screen.height * 0.8 };
  const dx = tip.x - hilt.x, dy = tip.y - hilt.y;

  // 5) spawn a larger pool of flames with random start‐alpha & fade rates
  const flames = [];
  const COUNT = 80;
  for (let i = 0; i < COUNT; i++) {
    const f = new PIXI.Graphics();

    // outer orange shape
    f.beginFill(0xFF6600, 0.7);
    f.drawPolygon([
       0, -6,
       4,  2,
       2,  4,
       0,  3,
      -2,  4,
      -4,  2
    ]);
    f.endFill();

    // inner yellow flicker
    f.beginFill(0xFFFF66, 0.8);
    f.drawPolygon([
       0, -4,
       2,  1,
       0,  3,
      -2,  1
    ]);
    f.endFill();

    // random initial placement along blade
    const t0 = Math.random();
    f.x = hilt.x + dx * t0;
    f.y = hilt.y + dy * t0;

    // random drift & fade
    f.vx = (Math.random() - 0.5) * 0.3;
    f.vy = 1 + Math.random() * 1.5;
    f.fadeRate = 0.005 + Math.random() * 0.02;        // each flame fades at its own speed
    f.alpha = 0.3 + Math.random() * 0.7;              // random starting opacity

    app.stage.addChild(f);
    flames.push(f);
  }

  // 6) animate
  app.ticker.add((delta) => {
    for (const f of flames) {
      f.x += f.vx * delta;
      f.y -= f.vy * delta;
      f.alpha = Math.max(0, f.alpha - f.fadeRate * delta);
      if (f.alpha <= 0) {
        // respawn at a new random spot on the blade
        const t0 = Math.random();
        f.x = hilt.x + dx * t0;
        f.y = hilt.y + dy * t0;
        f.vx = (Math.random() - 0.5) * 0.3;
        f.vy = 1 + Math.random() * 1.5;
        f.fadeRate = 0.005 + Math.random() * 0.02;
        f.alpha = 0.3 + Math.random() * 0.7;
      }
    }
  });

  // 7) cleanup
  setTimeout(() => {
    app.destroy(true, { children: true });
    wrapper.remove();
  }, 4000);
}



function spawnDungeonMasterDicePixi() {
  console.log("🎲 spawnDungeonMasterDicePixi() fired");
  if (typeof PIXI === 'undefined') return;

  const container = document.getElementById('effect-layer');

  // Only create one PIXI app for this effect
  const app = new PIXI.Application({
    resizeTo: container,
    transparent: true,
    antialias: true,
    backgroundAlpha: 0
  });

  // append canvas if not already there
  container.appendChild(app.view);
  app.view.style.position = 'absolute';
  app.view.style.top = '0';
  app.view.style.left = '0';

  const imagePaths = [
    'images/d20a.jpg',
    'images/D20b.png',
    'images/D20c.jpg',
    'images/d10a.jpg',
    'images/d20a.png'
  ];

  const loadedTextures = [];
  let loadCount = 0;

  function trySpawnDice() {
    if (loadCount < imagePaths.length) return;

    const dice = [];
    const count = 25;
    const cx = app.screen.width / 2;
    const cy = app.screen.height / 2;

    for (let i = 0; i < count; i++) {
      const texture = loadedTextures[Math.floor(Math.random() * loadedTextures.length)];
      const sprite = new PIXI.Sprite(texture);
      sprite.anchor.set(0.5);
      sprite.scale.set(0.15 + Math.random() * 0.1);
      sprite.x = cx;
      sprite.y = cy;
      sprite.vx = (Math.random() - 0.5) * 20;
      sprite.vy = (Math.random() - 0.5) * 20;
      sprite.rotationSpeed = (Math.random() - 0.5) * 0.3;
      sprite.alpha = 1;
      app.stage.addChild(sprite);
      dice.push(sprite);
    }

    app.ticker.add((delta) => {
      dice.forEach(die => {
        die.x += die.vx * delta;
        die.y += die.vy * delta;
        die.rotation += die.rotationSpeed * delta;
        die.alpha -= 0.01 * delta;
      });
    });

    setTimeout(() => {
      try {
        app.destroy(true, { children: true });
        if (container.contains(app.view)) container.removeChild(app.view);
      } catch (e) {
        console.warn("⚠️ Dice explosion cleanup skipped: ", e);
      }
    }, 5000);
  }

  // Preload all textures safely
  imagePaths.forEach(path => {
    const base = PIXI.BaseTexture.from(path);
    const tex = new PIXI.Texture(base);

    base.on('loaded', () => {
      loadedTextures.push(tex);
      loadCount++;
      trySpawnDice();
    });

    base.on('error', () => {
      console.warn(`⚠️ Could not load dice image: ${path}`);
      loadCount++;
      trySpawnDice(); // still try even if one fails
    });
  });
}










function spawnFireRoarPixi() {
  console.log("🔥 spawnFireRoarPixi() fired");
  if (typeof PIXI === 'undefined') return;

  // 1) target the #effect-layer
  const container = document.getElementById('effect-layer');

  // 2) full‑screen, truly transparent Pixi app
  const app = new PIXI.Application({
    resizeTo:        container,
    transparent:     true,
    antialias:       true,
    backgroundAlpha: 0
  });
  Object.assign(app.view.style, {
    position:      'absolute',
    top:           '0',
    left:          '0',
    pointerEvents: 'none',
    background:    'transparent'
  });
  container.appendChild(app.view);

  // 3) screen dims
  const W = app.screen.width;
  const H = app.screen.height;

  // 4) create 250 “flame” particles anywhere on screen
  const flames = [];
  for (let i = 0; i < 250; i++) {
    const g = new PIXI.Graphics();

    // outer orange tongue
    g.beginFill(0xFF6600, 0.8);
    g.moveTo(0,  0);
    g.bezierCurveTo( 4, -12,  8, -20,  0, -30);
    g.bezierCurveTo(-8, -20, -4, -12,  0,   0);
    g.endFill();

    // inner yellow flicker
    g.beginFill(0xFFFF66, 0.7);
    g.moveTo(0,   0);
    g.bezierCurveTo( 2, -8,  4, -14,  0, -22);
    g.bezierCurveTo(-4, -14, -2, -8,   0,   0);
    g.endFill();

    // random rotation & scale
    g.rotation = (Math.random() - 0.5) * 0.6;
    const s = 0.5 + Math.random() * 1.2;
    g.scale.set(s, s * (0.8 + Math.random() * 0.4));

    // **spawn anywhere**  
    g.x = Math.random() * W;
    g.y = Math.random() * H;

    // individual drift/fade
    g.vx       = (Math.random() - 0.5) * 0.4;
    g.vy       = -(0.5 + Math.random() * 1.5);
    g.fadeRate = 0.005 + Math.random() * 0.015;
    g.alpha    = 0.4 + Math.random() * 0.6;

    // glow
    g.filters = [ new PIXI.filters.BlurFilter(1.5) ];

    app.stage.addChild(g);
    flames.push(g);
  }

  // 5) animate: float up from wherever they are, fade, then respawn anywhere
  app.ticker.add((delta) => {
    for (const f of flames) {
      f.x     += f.vx * delta;
      f.y     += f.vy * delta;
      f.alpha -= f.fadeRate * delta;

      // when gone or off top, respawn randomly
      if (f.alpha <= 0 || f.y < -30) {
        f.x = Math.random() * W;
        f.y = Math.random() * H;
        f.vx       = (Math.random() - 0.5) * 0.4;
        f.vy       = -(0.5 + Math.random() * 1.5);
        f.fadeRate = 0.005 + Math.random() * 0.015;
        f.alpha    = 0.4 + Math.random() * 0.6;
      }
    }
  });

  // 6) cleanup after 4s
  setTimeout(() => {
    app.destroy(true, { children: true });
    if (container.contains(app.view)) container.removeChild(app.view);
  }, 5000);
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
function spawnShadowChainsPixi() {
  console.log("⛓️ spawnShadowChainsPixi() fired");
  if (typeof PIXI === 'undefined') return;

  const container = document.getElementById('effect-layer');

  const app = new PIXI.Application({
    resizeTo: container,
    transparent: true,
    antialias: true,
    backgroundAlpha: 0
  });
  container.appendChild(app.view);
  app.view.style.position = 'absolute';
  app.view.style.top = '0';
  app.view.style.left = '0';

  const baseTexture = PIXI.BaseTexture.from('images/chain-link.png');
  const chainTex = new PIXI.Texture(baseTexture);

  baseTexture.on('loaded', () => {
    const chain = new PIXI.TilingSprite(
      chainTex,
      app.screen.width,
      chainTex.height
    );

    chain.y = app.screen.height / 2 - chainTex.height / 2;
    app.stage.addChild(chain);

    let direction = -1;
    app.ticker.add((dt) => {
      chain.tilePosition.x += direction * 1.5 * dt;
    });

    setTimeout(() => { direction = 1; }, 2000);
    setTimeout(() => {
      app.destroy(true, { children: true });
      container.removeChild(app.view);
    }, 4000);
  });

  baseTexture.on('error', err => {
    console.error("⚠️ Chain texture failed to load:", err);
  });
}




function spawnGymWeightsPixi() {
  console.log("🏋️ spawnGymWeightsPixi() fired");
  if (typeof PIXI === 'undefined') return;

  const container = document.getElementById('effect-layer');
  const app = new PIXI.Application({
    resizeTo: container,
    transparent: true,
    antialias: true,
    backgroundAlpha: 0
  });
  container.appendChild(app.view);
  app.view.style.position = 'absolute';
  app.view.style.top = '0';
  app.view.style.left = '0';

  const textures = [
    PIXI.Texture.from('images/weight1.png'),
    PIXI.Texture.from('images/weight2.png'),
    PIXI.Texture.from('images/weight3.png')
  ];

  const weights = [];
  const count = 20;
  for (let i = 0; i < count; i++) {
    const texture = textures[Math.floor(Math.random() * textures.length)];
    const sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.scale.set(0.15 + Math.random() * 0.1);
    sprite.x = Math.random() * app.screen.width;
    sprite.y = -Math.random() * app.screen.height;
    sprite.vy = 2 + Math.random() * 3;
    sprite.vr = (Math.random() - 0.5) * 0.1;
    sprite.bounced = false;
    app.stage.addChild(sprite);
    weights.push(sprite);
  }

  const ground = app.screen.height - 20;
  app.ticker.add(() => {
    weights.forEach(w => {
      if (!w.bounced && w.y >= ground) {
        w.vy = -w.vy * 0.4; // bounce up
        w.bounced = true;
      } else {
        w.vy += 0.5; // gravity
      }

      w.y += w.vy;
      w.rotation += w.vr;
    });
  });

  setTimeout(() => {
    app.destroy(true, { children: true });
    container.removeChild(app.view);
  }, 6000);
}












function spawnAelianaSignaturePixi() {
  if (typeof PIXI === 'undefined') return;

  const container = document.getElementById('effect-layer');

  const app = new PIXI.Application({
    resizeTo: container,
    transparent: true,
    antialias: true,
    backgroundAlpha: 0
  });
  container.appendChild(app.view);
  app.view.style.position = 'absolute';
  app.view.style.top = '0';
  app.view.style.left = '0';

// 1) Create an HTML element for animated text
const signature = document.createElement('div');
signature.style.position = 'fixed'; // This is required for full-screen positioning
signature.style.top = '50%';
signature.style.left = '50%';
signature.style.transform = 'translate(-50%, -50%)';
signature.style.fontSize = '64px';
signature.style.fontFamily = '"Parisienne", cursive';
signature.style.color = '#cc2222';
signature.style.textShadow = '0 0 6px #800000';
signature.style.zIndex = '99999';
signature.style.pointerEvents = 'none';
signature.style.opacity = '0';
signature.textContent = '';
document.body.appendChild(signature);


 const name = 'Lucius Montegrot';
let i = 0;
signature.style.transition = 'opacity 0.5s ease';
setTimeout(() => { signature.style.opacity = '1'; }, 100);

const interval = setInterval(() => {
  signature.textContent += name[i];
  i++;
  if (i >= name.length) {
    clearInterval(interval);
// Fade out after a longer pause
setTimeout(() => {
  signature.style.transition = 'opacity 4s ease';
  signature.style.opacity = '0';
  setTimeout(() => signature.remove(), 4200); // full cleanup
}, 3000); // Delay before starting fade
  }
}, 100);


  // 2) Add the quill
  const quill = PIXI.Sprite.from('images/quill.png');
  quill.tint = 0xCC2222;  // a deep crimson red
  quill.anchor.set(0.05, 0.5);  // align near tip
  quill.scale.set(0.3);
  quill.alpha = 0;
  app.stage.addChild(quill);

  // 3) Create a smooth, elegant S‑curve across the screen
  const path = [];
  const startX = app.screen.width * 0.15;
  const endX = app.screen.width * 0.85;
  const midY = app.screen.height / 2;
  const amp = 40;

  for (let t = 0; t <= 1; t += 0.01) {
    const x = startX + (endX - startX) * t;
    const y = midY + Math.sin(t * Math.PI * 2) * amp;
    path.push({ x, y });
  }

  // 4) Animate the writing effect
  let frame = 0;
  const totalFrames = 160;

  app.ticker.add(() => {
    frame++;

    const progress = Math.min(1, frame / totalFrames);
    const index = Math.floor(progress * (path.length - 1));
    const pos = path[index];
    if (pos) {
      quill.x = pos.x;
      quill.y = pos.y;
      quill.rotation = Math.sin(progress * Math.PI * 2) * 0.2;
      quill.alpha = 1;
    }

    if (progress >= 1) {
      quill.alpha -= 0.02;
    }
  });

  // 5) cleanup
  setTimeout(() => {
    app.destroy(true, { children: true });
    container.removeChild(app.view);
  }, 5500);
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
  1777, // dungeon master
  1777, // sea elf
  1, // hacker
  1, // gym-forged ghostwriter
  0.05, // 🧠🔥 GYM-FORGED WRITER (RARE)
  1, // fire priest
  1, // assassin
  1, // necromancer
  1,  // paladin
  0,01, // Aeliana - Rarest!
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
  const card = document.getElementById('persona-display');
  card.classList.add('aeliana-sighting');   // 🌟 Add the magical veil
  try {
    spawnAelianaSignaturePixi();                // ✒️ The ethereal quill appears
  } catch (err) {
    console.error("Error in Aeliana effect:", err);
  }
  // Optional: remove veil after 5 seconds
  setTimeout(() => {
    card.classList.remove('aeliana-sighting');
  }, 5000);
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
      case 'mistelf-glow': spawnMistElfFlamingSwordPixi(); break;
      case 'fire-roar': spawnFireRoarPixi(); break;
      case 'dm-dice':  try {spawnDungeonMasterDicePixi(); } catch (err) {
        console.error("Gym weights error:", err);
        } break; 
      case 'muscle-flex':
          try {
        spawnGymWeightsPixi();
        } catch (err) {
        console.error("Gym weights error:", err);
        }
        break;

      case 'necromancer-wisp': spawnNecromancerWispPixi(); break;
      case 'paladin-smite':
        try {
          spawnShadowChainsPixi();
            } catch (err) {
            console.error("ShadowChains error:", err);
            }
              break;
        
        case 'historian-scroll':
        console.log("🖋️ Historian selected – spawning ink blotches…");
           try{ spawnInkBlotches();
              } catch (err) {
              console.error("InkBlotches error:", err);
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
