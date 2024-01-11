import axios from 'axios';
import  renderImages  from "./create-cards-gallery";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41471340-7b105b7a368edb6edd340273b';
let page = 1;
let query = null;

const lightbox = new SimpleLightbox('.gallery a', {

    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });


async function sendRequest(){
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&page=${page}&q=${query}&per_page=40`);
    const { data: { hits } } = response;
    renderImages(hits); 
    lightbox.refresh();
  }
  export default sendRequest;