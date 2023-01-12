// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simplelightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGalleryMarkup(galleryItems);

function createGalleryMarkup(imagesCollections) {
  return imagesCollections
    .map(
      ({ description, original, preview }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    )
    .join('');
}

function renderGalleryMarkup(container, markup) {
  container.insertAdjacentHTML('beforeend', markup);
}

renderGalleryMarkup(galleryContainer, galleryImages);

// let gallery = $('.gallery a').simpleLightbox({
//     captions: true,
//     captionSelector: "img",
//     captionType: "attr",
//     captionsData: "alt",
//     captionPosition: "bottom",
//     captionDelay: 250,
//   });

let gallery = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: "img",
      captionType: "attr",
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });