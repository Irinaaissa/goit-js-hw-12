import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as $,i as n,a as i}from"./assets/vendor-60485be8.js";function c(e){const a=e.map(({webformatURL:r,largeImageURL:o,tags:y,likes:u,views:h,comments:f,downloads:v})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}" >
        <img class="gallery-image" src="${r}" data-source="${o}" alt="${y}" />
      </a>
      <div class="card-info">
      <div class="field">
          <span class="label">Likes</span>
          <span class="value">${u}</span>    
      </div>
      
      <div class="field">
          <span class="label">Views</span>
          <span class="value">${h}</span>   
      </div>
      <div class="field">
          <span class="label">Comments</span>
          <span class="value">${f}</span>    
      </div>
      <div class="field">
          <span class="label">Downloads</span>
          <span class="value">${v}</span>    
      </div>
      </div>
    </li>
        `).join("");gallery.insertAdjacentHTML("beforeend",a)}const b=document.getElementById("search-form"),E=document.getElementById("search-input"),I=document.getElementById("gallery"),L=document.getElementById("load-more"),d="https://pixabay.com/api/",p="41471340-7b105b7a368edb6edd340273b",m=new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function k(){g.style.display="block"}function l(){g.style.display="none"}let t=1,s=null;b.addEventListener("submit",async e=>{if(e.preventDefault(),t=1,s=E.value.trim(),s==="")return n.error({title:"Error",message:"Sorry, there are no images matching your search"}),l();k();try{const a=await i.get(`${d}?key=${p}&page=${t}&q=${s}&per_page=40`),{data:{hits:r}}=a;I.innerHTML="",c(r),m.refresh(),B()}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l(),e.target.reset()}});L.addEventListener("click",function(){t+=1;try{const e=i.get(`${d}?key=${p}&page=${t}&q=${s}&per_page=40`),{data:{hits:a}}=e;c(a),m.refresh()}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l()}});function B(){document.getElementById("load-more").style.display="flex"}
//# sourceMappingURL=commonHelpers2.js.map
