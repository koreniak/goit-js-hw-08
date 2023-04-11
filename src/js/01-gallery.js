// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightboxRef = document.querySelector('.gallery');
const lightboxMarkup = createLightboxItemsMarkup(galleryItems);

lightboxRef.insertAdjacentHTML('beforeend', lightboxMarkup);

function createLightboxItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});