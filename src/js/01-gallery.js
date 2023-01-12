// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import createGalleryMarkup from './createGalleryMarkup';
import renderGalleryMarkup from './renderGalleryMarkup';

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGalleryMarkup(galleryItems);

renderGalleryMarkup(galleryContainer, galleryImages);

let gallery = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: "img",
      captionType: "attr",
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });