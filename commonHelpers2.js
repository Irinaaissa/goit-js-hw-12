import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as b,i as n,a as i}from"./assets/vendor-60485be8.js";function c(e){const a=e.map(({webformatURL:t,largeImageURL:o,tags:u,likes:h,views:f,comments:v,downloads:$})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}" >
        <img class="gallery-image" src="${t}" data-source="${o}" alt="${u}" />
      </a>
      <div class="card-info">
      <div class="field">
          <span class="label">Likes</span>
          <span class="value">${h}</span>    
      </div>
      
      <div class="field">
          <span class="label">Views</span>
          <span class="value">${f}</span>   
      </div>
      <div class="field">
          <span class="label">Comments</span>
          <span class="value">${v}</span>    
      </div>
      <div class="field">
          <span class="label">Downloads</span>
          <span class="value">${$}</span>    
      </div>
      </div>
    </li>
        `).join("");gallery.insertAdjacentHTML("beforeend",a)}const E=document.getElementById("search-form"),L=document.getElementById("search-input"),I=document.getElementById("gallery"),d=document.getElementById("load-more"),p="https://pixabay.com/api/",m="41471340-7b105b7a368edb6edd340273b",g=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y=document.querySelector(".loader");function k(){y.style.display="block"}function l(){y.style.display="none"}let r=1,s=null;E.addEventListener("submit",async e=>{if(e.preventDefault(),r=1,s=L.value.trim(),s==="")return n.error({title:"Error",message:"Sorry, there are no images matching your search"}),l();k();try{const a=await i.get(`${p}?key=${m}&page=${r}&q=${s}&per_page=40`),{data:{hits:t}}=a;I.innerHTML="",c(t),g.refresh(),S()}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l(),e.target.reset()}});d.addEventListener("click",function(){r+=1;try{const e=i.get(`${p}?key=${m}&page=${r}&q=${s}&per_page=40`),{data:{hits:a}}=e;c(a),g.refresh()}catch(e){console.log(e),n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l()}});function S(){d.style.display="flex"}
//# sourceMappingURL=commonHelpers2.js.map
