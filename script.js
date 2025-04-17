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
    }
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

  for (let i = 0; i < 6; i++) {
    const star = document.createElementNS(svgNS, "polygon");

    // Random positions and drift
    const cx = Math.random() * 100;
    const cy = Math.random() * 100;
    const dx = cx + (Math.random() * 10 - 5);
    const dy = cy + (Math.random() * 10 - 5);
    const scale = 0.8 + Math.random() * 0.6;
    const delay = Math.random() * 0.5;

    // Basic pentagram points
    const points = [
      [0, -5], [4.75, 1.54], [2.94, 4.05],
      [-2.94, 4.05], [-4.75, 1.54]
    ].map(([x, y]) => `${x * scale + cx},${y * scale + cy}`).join(" ");

    star.setAttribute("points", points);
    star.setAttribute("fill", "none");
    star.setAttribute("stroke", "#00ccff");
    star.setAttribute("stroke-width", "0.3");
    star.setAttribute("stroke-linejoin", "round"); 
    star.setAttribute("opacity", "0.9");

    const move = document.createElementNS(svgNS, "animateTransform");
    move.setAttribute("attributeName", "transform");
    move.setAttribute("type", "translate");
    move.setAttribute("from", "0 0");
    move.setAttribute("to", `${dx - cx} ${dy - cy}`);
    move.setAttribute("dur", "3s");
    move.setAttribute("begin", `${delay}s`);
    move.setAttribute("fill", "freeze");

    const fade = document.createElementNS(svgNS, "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("from", "0.9");
    fade.setAttribute("to", "0");
    fade.setAttribute("dur", "2.5s");
    fade.setAttribute("begin", `${delay + 0.5}s`);
    fade.setAttribute("fill", "freeze");

    star.appendChild(move);
    star.appendChild(fade);
    container.appendChild(star);
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
