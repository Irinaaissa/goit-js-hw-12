 function renderImages(hits) {
    const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}" >
        <img class="gallery-image" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" />
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
        `).join('');
        gallery.insertAdjacentHTML('beforeend', markup);
  }
  export default renderImages;