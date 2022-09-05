import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
            <div>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </div>
            `;
    })
    .join('');
}

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
