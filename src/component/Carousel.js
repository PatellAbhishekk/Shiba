export default function (imageLinks) {
  const fragment = document.createDocumentFragment();
  imageLinks.forEach((imgsrc, index) => {
    const div = document.createElement("div");
    if (index === 0) {
      div.classList.add("active");
    }
    div.classList.add("carousel-item");
    div.innerHTML = `<img src="${imgsrc}" class="d-block w-100" alt="..." />`;
    fragment.appendChild(div);
  });
  return fragment;
}
