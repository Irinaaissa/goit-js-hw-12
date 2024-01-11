import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';
import  renderImages  from "./create-cards-gallery";
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('load-more');




const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41471340-7b105b7a368edb6edd340273b';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
const loader = document.querySelector('.loader');

function showLoadingIndicator() {
  loader.style.display = 'block';
}

function hideLoadingIndicator() {
  loader.style.display = 'none';
}
let limit = 500;
const totalPages = Math.ceil(limit/ 40);

let page = 1;
let query = null;
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  page = 1;
   query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({

      title: 'Error',
      message: 'Sorry, there are no images matching your search',
    });

    return hideLoadingIndicator();
  }

  showLoadingIndicator();
  

  try {
    sendRequest();
    smoothScrollToNextGroup();
    gallery.innerHTML = '';

    showLoadingMore();
    
  } catch (error) {

    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search',
    });
  } finally {
    hideLoadingIndicator();
    event.target.reset();
  }
  
  });



loadMoreButton.addEventListener('click', async function () {
  page += 1;
  try {
    sendRequest();
    smoothScrollToNextGroup();
    } 
    catch (error) {
      console.log(error);
       iziToast.error({
     title: 'Error', 
        message: 'Sorry, there are no images matching your search',
     });
    }
     finally {
      showLoadingMore();
      hideLoadingIndicator();
    }
     
    if  (page > totalPages) {
      hideLoadingMore();
      iziToast.info({ title: 'Info', message: "We're sorry, but you've reached the end of search results." });
  }
});


function showLoadingMore() {
  loadMoreButton.style.display = 'flex';

}
function hideLoadingMore() {
  loadMoreButton.style.display = 'none';
}



async function sendRequest(){
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&page=${page}&q=${query}&per_page=40`);
  const { data: { hits } } = response;
  renderImages(hits); 
  lightbox.refresh();
}





function smoothScrollToNextGroup() {
  const cardHeight = gallery.getBoundingClientRect().height;
  window.scrollBy(0, cardHeight * 2);
}