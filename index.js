//Task 2

import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
//------

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

// Task 1

async function fetchCharacters() {
  let url = `https://rickandmortyapi.com/api/character?page=${page}`;
  cardContainer.innerHTML = "";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.results.forEach((result) => {
    const li = createCharacterCard(result); // Task 3
    cardContainer.append(li);
  });
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  page++;

  fetchCharacters();
  console.log(page);
  let currentPage = maxPage - maxPage + page;
  pagination.innerHTML = currentPage + " / " + maxPage;

  // for (let pagination = 1; pagination <= 42; pagination++) {
  //   console.log(pagination);

  // }
});

/* const li = createCharacterCard();
cardContainer.append(li); */

/* Task 4 */

// ?page=page in url mit backticks und dann funktion mit fetch im EventListener ausführen
