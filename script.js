document.addEventListener('DOMContentLoaded', () => {
  const personas = [
    // same persona array...
  ];

  const imageEl = document.getElementById('persona-image');
  const titleEl = document.getElementById('persona-title');
  const descEl = document.getElementById('persona-description');
  const button = document.getElementById('reroll');
  const effectLayer = document.getElementById('effect-layer');
  const card = document.getElementById('persona-display');

  let lastIndex = 0;
  let isAnimating = false;

  function showRandomPersona() {
    if (isAnimating) return;
    isAnimating = true;

    let index;
    do {
      index = Math.floor(Math.random() * personas.length);
    } while (index === lastIndex);
    lastIndex = index;

    const persona = personas[index];
    console.log(`Summoning: ${persona.title} with effect: ${persona.effect}`);

    // reset animations
    card.classList.remove('spin');
    void card.offsetWidth; // force reflow
    card.classList.add('spin');

    effectLayer.className = ""; // clear effects
    setTimeout(() => {
      imageEl.src = persona.image;
      imageEl.alt = persona.title;
      titleEl.textContent = persona.title;
      descEl.textContent = persona.description;

      effectLayer.classList.add(persona.effect);

      setTimeout(() => {
        effectLayer.className = ""; // clear effect after display
        isAnimating = false;
      }, 2500); // keep effect visible briefly
    }, 1800); // matches card spin time
  }

  button.addEventListener('click', showRandomPersona);
});
