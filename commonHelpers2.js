import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as v,i as s,a as b}from"./assets/vendor-60485be8.js";function $(e){const a=e.map(({webformatURL:y,largeImageURL:l,tags:g,likes:m,views:u,comments:h,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}" >
        <img class="gallery-image" src="${y}" data-source="${l}" alt="${g}" />
      </a>
      <div class="card-info">
      <div class="field">
          <span class="label">Likes</span>
          <span class="value">${m}</span>    
      </div>
      
      <div class="field">
          <span class="label">Views</span>
          <span class="value">${u}</span>   
      </div>
      <div class="field">
          <span class="label">Comments</span>
          <span class="value">${h}</span>    
      </div>
      <div class="field">
          <span class="label">Downloads</span>
          <span class="value">${f}</span>    
      </div>
      </div>
    </li>
        `).join("");gallery.insertAdjacentHTML("beforeend",a)}const E=document.getElementById("search-form"),L=document.getElementById("search-input"),i=document.getElementById("gallery"),o=document.getElementById("load-more"),I="https://pixabay.com/api/",w="41471340-7b105b7a368edb6edd340273b",B=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader");function S(){c.style.display="block"}function n(){c.style.display="none"}let k=500;const x=Math.ceil(500/k);let t=1,r=null;E.addEventListener("submit",async e=>{if(e.preventDefault(),t=1,r=L.value.trim(),r==="")return s.error({title:"Error",message:"Sorry, there are no images matching your search"}),n();S();try{d(),p(),i.innerHTML="",M()}catch{s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{n(),e.target.reset()}});o.addEventListener("click",async function(){t+=1;try{d(),p()}catch(e){console.log(e),s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{n()}t>x&&(q(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))});function M(){o.style.display="flex"}function q(){o.style.display="none"}async function d(){const e=await b.get(`${I}?key=${w}&page=${t}&q=${r}&per_page=40`),{data:{hits:a}}=e;$(a),B.refresh()}function p(){const e=i.getBoundingClientRect().height;window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers2.js.map
