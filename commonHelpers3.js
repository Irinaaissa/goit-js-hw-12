import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import"./assets/vendor-60485be8.js";const r=new SimpleLightbox(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});document.querySelector(".loader");document.getElementById("search-form");document.getElementById("search-input");const d=document.getElementById("gallery"),p=o(images);d.insertAdjacentHTML("beforeend",p);function o(s){return s.map(({webformatURL:l,largeImageURL:a,tags:e,likes:n,views:i,comments:t,downloads:c})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${a}" >
      <img
        class="gallery-image"
        src="${l}"
        data-source="${a}"
        alt="${e}"
      />
    </a>
    <div class="card-info">
    <div class="field">
        <span class="label">Likes</span>
        <span class="value">${n}</span>    
    </div>
    
    <div class="field">
        <span class="label">Views</span>
        <span class="value">${i}</span>   
    </div>
    <div class="field">
        <span class="label">Comments</span>
        <span class="value">${t}</span>    
    </div>
    <div class="field">
        <span class="label">Downloads</span>
        <span class="value">${c}</span>    
    </div>
    </div>
  </li>
    `).join("")}r.refresh();
//# sourceMappingURL=commonHelpers3.js.map
