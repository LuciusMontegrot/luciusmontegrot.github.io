document.addEventListener('DOMContentLoaded', () => {
  const personas = [
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
      description: "Lucius Montegrot is rumoured to be a minor baron in an obscure Transylvarthian province. He is seldom seen during daylight, but his correspondence is extensive, usually delivered by midnight couriers who dissolve into mist if tipped improperly. He claims to be 'only nocturnally inclined' and has a suspicious fondness for red wine served warm.",
      effect: "vampire-blood"
    },
    {
      title: "The Mist-Elven Exile",
      image: "images/mistelf.jpg",
      description: "It is whispered that Lucius is the only Mist Elf to have fled the demiplane of Sha’ar-Tel and retained his madness. His illusions are so convincing, he once sold a dream to a dragon. He spends his days disguised as a mortal author, but his prose smells faintly of starlight and betrayal.",
      effect: "mistelf-glow"
    },
    {
      title: "The Disgruntled Dungeon Master",
      image: "images/dungeonmaster.jpg",
      description: "Lucius Montegrot is what happens when a Dungeon Master spends thirty years building a world so intricate that the gods themselves are asking for the rulebook. Tired of players licking dungeon walls and seducing mimics, he turned his notes into novels. He still wakes up at night muttering, 'You can't polymorph into a chair, Dave.'",
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
      description: "It is said Lucius Montegrot is a hacker with his hair half pink and half green. No one knows when he joined GitHub, only that his repositories compile themselves and his README files update during thunderstorms. He writes code in dead languages, forks his own thoughts, and claims to be debugging reality itself. Rumour has it he’s trying to restore the soul of the phoenix, one painstaking line of code after another, into a hidden branch named /ascend. If your screen flickers at midnight, it’s not coincidence. It’s Lucius.",
      effect: "hacker-glitch"
    },
    {
      title: "The Gym-Forged Ghostwriter",
      image: "images/bodybuilder.jpg",
      description: "Some say Lucius cannot even read and write. They say he is obsessed with physical strength and wrote an entire book dictating one single prompt into some yet unknown artificial intelligence. Those who speak with him say he communicates mostly in grunts, so it is a wonder how he did it.",
      effect: "muscle-flex"
    },
        {
      title: "The Gym-Forged Ghost Writer",
      image: "images/bodybuilder2.jpg",
      description: "Some say Lucius cannot even read and write. They say he is obsessed with physical strength and wrote an entire book dictating one single prompt into some yet unknown artificial intelligence. Those who speak with him say he communicates mostly in grunts, so it is a wonder how he did it. Oops. Did we just show you his REAL picture? No, we didn't. This isn't Lucius Montegrot. This picture isn't real. Nothing to see here.",
      effect: "muscle-flex"
    },
    {
      title: "The Peacemaker's Paladin",
      image: "images/paladin.jpg",
      description: "Clad in black plate and burdened with silent judgement, Lucius Montegrot stalks the land as one of the Peacemaker’s own. He carries a silver maul and a rope coiled into a noose — not for others, but for the sins that trail him like a shadow. He rarely speaks, but when he does, cities kneel.",
      effect: "paladin-smite"
    }
  ];
});

  ];

  const imageEl = document.getElementById('persona-image');
  const titleEl = document.getElementById('persona-title');
  const descEl = document.getElementById('persona-description');
  const button = document.getElementById('reroll');
  const effectLayer = document.getElementById('effect-layer');
  const card = document.getElementById('persona-display');

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
  blur.setAttribute("stdDeviation", "0.8");
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
    pentagram.setAttribute("stroke-width", "0.4");
    pentagram.setAttribute("fill", "none");
    pentagram.setAttribute("opacity", "0.85");
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




  let lastIndex = 0;
  let isAnimating = false;

function showRandomPersona () {
  if (isAnimating) return;
  isAnimating = true;

  let idx;
  do { idx = Math.floor(Math.random() * personas.length); }
  while (idx === lastIndex);
  lastIndex = idx;
  const persona = personas[idx];

  card.classList.remove('spin');
  void card.offsetWidth;
  card.classList.add('spin');

  // TEMPORARY blackout effect
  card.classList.add('flipping');

  setTimeout(() => {
    imageEl.src = persona.image;
    imageEl.alt = persona.title;
    titleEl.textContent = persona.title;
    descEl.textContent = persona.description;

    effectLayer.className = '';
    switch (persona.effect) {
      case 'vampire-blood': spawnBloodRain(); break;
      case 'wizard-smoke': spawnWizardEffect(); break;
      default: effectLayer.classList.add(persona.effect);
    }

    card.classList.remove('flipping'); // fade back in
  }, 900);

  setTimeout(() => { isAnimating = false; }, 1800);
}


/* hook up the button */
button.addEventListener('click', showRandomPersona);

});
