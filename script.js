async function getPokemonData(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();
  return data;
}

function displayPokemonData(pokemonData) {
  const container = document.querySelector(".pokemonContainer");
  container.innerHTML = "";

  const nameElement = document.createElement("h2");
  nameElement.textContent = pokemonData.name;
  container.appendChild(nameElement);

  const imageElement = document.createElement("img");
  imageElement.src = pokemonData.sprites.front_default;
  container.appendChild(imageElement);

  const typesElement = document.createElement("p");
  typesElement.textContent =
    "Types: " + pokemonData.types.map((type) => type.type.name).join(", ");
  container.appendChild(typesElement);

  const movesElement = document.createElement("p");
  movesElement.textContent =
    "Moves: " + pokemonData.moves.map((move) => move.move.name).join(", ");
  container.appendChild(movesElement);
}

async function init() {
  const pokemonData = await getPokemonData("pikachu");
  displayPokemonData(pokemonData);
}

init();
