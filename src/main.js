// API

/*
breeds/list/all - List of all breeds
breed/Affenpinscher/images/random  - single image
*/

const selectEl = document.querySelector("select");
const BASE_URL = `https://dog.ceo/api/`;

// Fetch gives promise (.then), otherwise not receive data (.catch)
function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((data) => data.json())
    .then((data) => {
      // Loop by keys, value, entries
      console.log(Object.keys(data.message)); // Log all breeds
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

// Function to capitalize breed name
const capitalizeArray = (array) =>
  array.charAt(0).toUpperCase() + array.slice(1);

// optional breed consolelog
function selectBreed() {
  console.log("Hello");
}

function renderOptions() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      // Capitalize breed name
      option.textContent = capitalizeArray(breed);
      option.value = breed; // Set value to the original breed name
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);

    // change - when selects a different option from the dropdown
    selectEl.addEventListener("change", selectBreed);
  });
}

renderOptions();
