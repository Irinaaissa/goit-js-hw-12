import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as E,i as a,a as I}from"./assets/vendor-c145bea9.js";function L(e){const t=e.map(({webformatURL:m,largeImageURL:l,tags:h,likes:f,views:v,comments:b,downloads:$})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}" >
        <img class="gallery-image" src="${m}" data-source="${l}" alt="${h}" />
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
        `).join("");gallery.insertAdjacentHTML("beforeend",t)}const w=document.getElementById("search-form"),B=document.getElementById("search-input"),i=document.getElementById("gallery"),o=document.getElementById("load-more"),S="https://pixabay.com/api/",k="41471340-7b105b7a368edb6edd340273b",x=new E(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader");function M(){c.style.display="block"}function n(){c.style.display="none"}let q=500;const d=Math.ceil(q/40);let s=1,r=null;async function u(){const e=await I.get(`${S}?key=${k}&page=${s}&q=${r}&per_page=40`),{data:{hits:t}}=e;L(t),y(),x.refresh()}w.addEventListener("submit",async e=>{if(e.preventDefault(),s=1,r=B.value.trim(),r==="")return a.error({title:"Error",message:"Sorry, there are no images matching your search"}),n();s>d&&(p(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),M();try{u(),g(),i.innerHTML=""}catch{a.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{n(),e.target.reset()}});o.addEventListener("click",async function(){s+=1;try{u(),g()}catch(e){console.log(e),a.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{y(),n()}s>d&&(p(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))});function y(){o.style.display="flex"}function p(){o.style.display="none"}function g(){const e=i.getBoundingClientRect().height;window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers2.js.map
