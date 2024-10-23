// API

/*
breeds/list/all - List of all breeds
breed/Affenpinscher/images/random  - single image
*/
const selectEl = document.querySelector("select");
const BASE_URL = `https://dog.ceo/api/`;
// fetch gives promise(.then) otherwise not receive data(.catch)
function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((data) => data.json())
    .then((data) => {
      // loop by keys,value,enteris
      console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

function renderOptions() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = breed;
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);
  });
}
renderOptions();
