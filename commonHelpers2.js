import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as b,i as n,a as i}from"./assets/vendor-60485be8.js";const E=document.getElementById("search-form"),I=document.getElementById("search-input"),c=document.getElementById("gallery"),L=document.getElementById("load-more"),d="https://pixabay.com/api/",p="41471340-7b105b7a368edb6edd340273b",m=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function k(){g.style.display="block"}function l(){g.style.display="none"}let t=1,s=null;E.addEventListener("submit",async e=>{if(e.preventDefault(),t=1,s=I.value.trim(),s==="")return n.error({title:"Error",message:"Sorry, there are no images matching your search"}),l();k();try{const a=await i.get(`${d}?key=${p}&page=${t}&q=${s}&per_page=40`),{data:{hits:r}}=a;c.innerHTML="",y(r),m.refresh(),B()}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l(),e.target.reset()}});L.addEventListener("click",function(){t+=1;try{const e=i.get(`${d}?key=${p}&page=${t}&q=${s}&per_page=40`),{data:{hits:a}}=e;y(a),m.refresh()}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{l()}});function B(){document.getElementById("load-more").style.display="flex"}function y(e){const a=e.map(({webformatURL:r,largeImageURL:o,tags:u,likes:h,views:f,comments:v,downloads:$})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}" >
      <img class="gallery-image" src="${r}" data-source="${o}" alt="${u}" />
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
      `).join("");c.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers2.js.map
