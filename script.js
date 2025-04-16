document.addEventListener('DOMContentLoaded', () => {
  const personas = [
    {
      title: "The Humble Historian",
      image: "images/historian.jpg",
      description: "Lucius Montegrot is merely the humble scribe of the events he claims to have witnessed in a vision, probably induced by too much Elven wine and pipe herb. He insists that any resemblances to real persons, gods, or liches is purely coincidental and that he’s never even heard of a phoenix the size of a cathedral roof."
    },
    {
      title: "Definitely Not a Wizard",
      image: "images/wizard.jpg",
      description: "That beard? Fashion choice. The staff? Walking aid. The glowing runes on his sleeves? Laundry accident. The mysterious door in his cellar that hums and sometimes screams in Abyssal? Nope. Nothing to see here."
    },
    {
      title: "The Vampire-Adjacent Noble",
      image: "images/vampire.jpg",
      description: "Lucius Montegrot is rumoured to be a minor baron in an obscure Transylvarthian province. He is seldom seen during daylight, but his correspondence is extensive, usually delivered by midnight couriers who dissolve into mist if tipped improperly. He claims to be 'only nocturnally inclined' and has a suspicious fondness for red wine served warm."
    },
    {
      title: "The Mist-Elven Exile",
      image: "images/mistelf.jpg",
      description: "It is whispered that Lucius is the only Mist Elf to have fled the demiplane of Sha’ar-Tel and retained his madness. His illusions are so convincing, he once sold a dream to a dragon. He spends his days disguised as a mortal author, but his prose smells faintly of starlight and betrayal."
    },
    {
      title: "The Disgruntled Dungeon Master",
      image: "images/dungeonmaster.jpg",
      description: "Lucius Montegrot is what happens when a Dungeon Master spends thirty years building a world so intricate that the gods themselves are asking for the rulebook. Tired of players licking dungeon walls and seducing mimics, he turned his notes into novels. He still wakes up at night muttering, 'You can't polymorph into a chair, Dave.'"
    },
    {
      title: "The Sea Elven Smuggler",
      image: "images/seaelf.jpg",
      description: "They say Lucius Montegrot is a Sea Elf, though there is no record of his birth and he once confused a dolphin for a shark. Nevertheless, he’s been spotted slipping through misty coves at midnight, selling contraband scrolls and illegal potions to pirates, witches, and the occasional bureaucrat. He speaks seven dialects of Elvish, five of which he made up. Do not let him near your alchemy supplies."
    }
  ];

  const imageEl = document.getElementById('persona-image');
  const titleEl = document.getElementById('persona-title');
  const descEl = document.getElementById('persona-description');
  const button = document.getElementById('reroll');

  let lastIndex = 0;

  function showRandomPersona() {
    let index;
    do {
      index = Math.floor(Math.random() * personas.length);
    } while (index === lastIndex);
    lastIndex = index;

    const persona = personas[index];

    const card = document.getElementById('persona-display');
    card.classList.add('spin');

    setTimeout(() => {
      imageEl.src = persona.image;
      imageEl.alt = persona.title;
      titleEl.textContent = persona.title;
      descEl.textContent = persona.description;
      card.classList.remove('spin');
    }, 600);
  }

  button.addEventListener('click', showRandomPersona);
});
