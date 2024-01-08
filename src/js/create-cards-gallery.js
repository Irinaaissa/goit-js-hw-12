// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41471340-7b105b7a368edb6edd340273b';

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
const loader = document.querySelector('.loader');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');

// const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(images);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(images) { 
  return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}" >
      <img
        class="gallery-image"
        src="${webformatURL}"
        data-source="${largeImageURL}"
        alt="${tags}"
      />
    </a>
    <div class="card-info">
    <div class="field">
        <span class="label">Likes</span>
        <span class="value">${likes}</span>    
    </div>
    
    <div class="field">
        <span class="label">Views</span>
        <span class="value">${views}</span>   
    </div>
    <div class="field">
        <span class="label">Comments</span>
        <span class="value">${comments}</span>    
    </div>
    <div class="field">
        <span class="label">Downloads</span>
        <span class="value">${downloads}</span>    
    </div>
    </div>
  </li>
    `;
  }).join('');
}
lightbox.refresh();
