import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryItems.map((item) => {
  const { preview, original, description } = item;

  const galleryItemMarkup = `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;

  galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.show();
