import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as E,i as s,a as I}from"./assets/vendor-c145bea9.js";function L(e){const a=e.map(({webformatURL:m,largeImageURL:i,tags:h,likes:f,views:v,comments:b,downloads:$})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}" >
        <img class="gallery-image" src="${m}" data-source="${i}" alt="${h}" />
      </a>
      <div class="card-info">
      <div class="field">
          <span class="label">Likes</span>
          <span class="value">${f}</span>    
      </div>
      
      <div class="field">
          <span class="label">Views</span>
          <span class="value">${v}</span>   
      </div>
      <div class="field">
          <span class="label">Comments</span>
          <span class="value">${b}</span>    
      </div>
      <div class="field">
          <span class="label">Downloads</span>
          <span class="value">${$}</span>    
      </div>
      </div>
    </li>
        `).join("");gallery.insertAdjacentHTML("beforeend",a)}const w=document.getElementById("search-form"),B=document.getElementById("search-input"),c=document.getElementById("gallery"),o=document.getElementById("load-more"),S="https://pixabay.com/api/",k="41471340-7b105b7a368edb6edd340273b",x=new E(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d=document.querySelector(".loader");function M(){d.style.display="block"}function n(){d.style.display="none"}let q=500;const u=Math.ceil(q/40);let t=1,r=null;async function y(){const e=await I.get(`${S}?key=${k}&page=${t}&q=${r}&per_page=40`),{data:{hits:a}}=e;L(a),a.length<40?l():g(),x.refresh()}w.addEventListener("submit",async e=>{if(e.preventDefault(),t=1,r=B.value.trim(),r==="")return s.error({title:"Error",message:"Sorry, there are no images matching your search"}),n();t>u&&(l(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),M();try{y(),p(),c.innerHTML=""}catch{s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{n(),e.target.reset()}});o.addEventListener("click",async function(){t+=1;try{y(),p()}catch(e){console.log(e),s.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{g(),n()}t>u&&(l(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))});function g(){o.style.display="flex"}function l(){o.style.display="none"}function p(){const e=c.getBoundingClientRect().height;window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers2.js.map
