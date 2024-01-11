import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as b,i as s,a as $}from"./assets/vendor-c145bea9.js";function E(e){const a=e.map(({webformatURL:g,largeImageURL:l,tags:m,likes:u,views:h,comments:f,downloads:v})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}" >
        <img class="gallery-image" src="${g}" data-source="${l}" alt="${m}" />
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
        `).join("");gallery.insertAdjacentHTML("beforeend",a)}const L=document.getElementById("search-form"),I=document.getElementById("search-input"),i=document.getElementById("gallery"),o=document.getElementById("load-more"),w="https://pixabay.com/api/",B="41471340-7b105b7a368edb6edd340273b",S=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader");function k(){c.style.display="block"}function n(){c.style.display="none"}let x=500;const M=Math.ceil(x/40);let t=1,r=null;L.addEventListener("submit",async e=>{if(e.preventDefault(),t=1,r=I.value.trim(),r==="")return s.error({title:"Error",message:"Sorry, there are no images matching your search"}),n();k();try{p(),y(),i.innerHTML="",d()}catch{s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{n(),e.target.reset()}});o.addEventListener("click",async function(){t+=1;try{p(),y()}catch(e){console.log(e),s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{d(),n()}t>M&&(q(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))});function d(){o.style.display="flex"}function q(){o.style.display="none"}async function p(){const e=await $.get(`${w}?key=${B}&page=${t}&q=${r}&per_page=40`),{data:{hits:a}}=e;E(a),S.refresh()}function y(){const e=i.getBoundingClientRect().height;window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers2.js.map
