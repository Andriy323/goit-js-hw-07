import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
const refs = {
  div: document.querySelector(".gallery"),
};

const galeryCards = creatGaleryImage(galleryItems);
refs.div.insertAdjacentHTML("beforeend", galeryCards);

function creatGaleryImage(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
 class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>
`;
    })
    .join("");
}

const onClick = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("galery")) return;
  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
     <img src = "${source}" width = "800" height = "600">`);

  instance.show();
};

refs.div.addEventListener("click", onClick);
