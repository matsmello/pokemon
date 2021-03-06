// Declaring basic variables
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const ashPokemons = document.getElementById("ashPokemons");
let x = 0,
  y = 0;

const movements = {
  N: () => y++,
  S: () => y--,
  E: () => x++,
  O: () => x--,
};

// Use set structure because we can't repeat pokemon based on old paths
const pokemonsSet = new Set();

function initialState() {
  list.innerHTML = "";
  pokemonsSet.clear();
  x = 0;
  y = 0;
}

button.addEventListener("click", () => {
  initialState();
  if (input.value.length) {
    // Transform NnSL -> ['N', 'N', 'S', 'L']
    const moves = input.value.toUpperCase().split("");
    pokemonsSet.add(`${x},${y}`);

    const totalPokemons = moveAsh(moves);

    ashPokemons.innerHTML = totalPokemons;
  }
});

const moveAsh = (moves = []) => {
  moves.forEach((move) => {
    // Create a <li> node
    const node = document.createElement("li");

    // Add bootstrap class
    node.className = "list-group-item";

    const initialText = `${move} - Atual position: (${x},${y})`;
    try {
      movements[move]();
      pokemonsSet.add(`${x},${y}`);

      const nextText = ` - Next position: (${x},${y})`;

      // Create a text node
      const textNode = document.createTextNode(`${initialText}${nextText}`);

      // Append the text to <li>
      node.appendChild(textNode);

      // Append <li> to <ul> with id="list"
      list.appendChild(node);
    } catch (error) {
      console.log(`Invalid movement: ${move}`);
    }
  });

  return pokemonsSet.size;
};
