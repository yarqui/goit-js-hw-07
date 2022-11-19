import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryItems.map((item) => {
  const { preview, original, description } = item;
  const galleryItemMarkup = `<div class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;

  galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);
});

const onGalleryItemClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const fullsizeImage = e.target.dataset.source;

  const galleryImageModal = basicLightbox.create(
    `<img src="${fullsizeImage}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  const onCloseModal = (e) => {
    if (e.code === "Escape") {
      galleryImageModal.close();
    }
  };

  galleryImageModal.show();
};

galleryRef.addEventListener("click", onGalleryItemClick);
