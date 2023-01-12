export default function createGalleryMarkup(imagesCollections) {
  return imagesCollections
    .map(
      ({ description, original, preview }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    )
    .join('');
}
