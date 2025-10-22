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
let maxPage = 42;
let page = 1;
let searchQuery = "";


// Task 1

async function fetchCharacters() {
  let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(searchQuery)}`;
  cardContainer.innerHTML = "";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  console.log(maxPage)

  data.results.forEach((result) => {
    const li = createCharacterCard(result); // Task 3
    cardContainer.append(li);
  });
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
    console.log(page);

    // let currentPage = maxPage - maxPage + page;
    // pagination.innerHTML = currentPage + "/ " + maxPage;
    // pagination.textContent = `${page} / ${maxPage}`;
    nextButton.disabled = page >= maxPage;

  }
  console.log(page);
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
    console.log(page);

    // let currentPage = maxPage - maxPage + page;
    // pagination.innerHTML = currentPage + "/ " + maxPage;
    // pagination.textContent = `${page} / ${maxPage}`;
    prevButton.disabled = page <= 1;
  }
  console.log(page);
});

//Task 5//
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data.query);

  searchQuery = data.query;
  event.target.reset();

  page = 1;

  fetchCharacters();
});
