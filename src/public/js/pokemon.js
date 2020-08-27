const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
let x = 0,
  y = 0;

let movements = {
  N: () => y++,
  S: () => y--,
  E: () => x++,
  O: () => x--,
};

button.addEventListener("click", () => {
  if (input.value.length) {
    const moves = input.value.toUpperCase().split("");

    moves.forEach((move) => {
      const node = document.createElement("li"); // Create a <li> node
      const initialText = `${move} - Atual position: (${x},${y})`;

      movements[move]();
      const nextText = ` - Next position: (${x},${y})`;

      const textNode = document.createTextNode(`${initialText}${nextText}`); // Create a text node
      node.appendChild(textNode); // Append the text to <li>
      list.appendChild(node); // Append <li> to <ul> with id="list"
    });
  } else {
  }
});
