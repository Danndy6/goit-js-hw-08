// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery() {
    return galleryItems.map(({ preview, original, description }) => (`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)).join('');
};

const marcup = createGallery()

gallery.insertAdjacentHTML('beforeend', marcup)

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});