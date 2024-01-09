import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as b,i as t,a as i}from"./assets/vendor-60485be8.js";const E=document.getElementById("search-form"),I=document.getElementById("search-input"),c=document.getElementById("gallery"),L=document.getElementById("load-more"),d="https://pixabay.com/api/",p="41471340-7b105b7a368edb6edd340273b",m=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function k(){g.style.display="block"}function o(){g.style.display="none"}let s=1,r=null;E.addEventListener("submit",async e=>{if(e.preventDefault(),s=1,r=I.value.trim,r==="")return t.error({title:"Error",message:"Sorry, there are no images matching your search"}),o();k();try{const a=await i.get(`${d}?key=${p}&page=${s}&q=${r}&per_page=40`),{data:{hits:n}}=a;c.innerHTML="",y(n),m.refresh()}catch{t.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{o(),e.target.reset()}});L.addEventListener("click",function(){if(s>totalPages)return t.error({position:"topRight",message:"We're sorry, there are no more posts to load"});s+=1;try{const e=i.get(`${d}?key=${p}&page=${s}&q=${r}&per_page=40`),{data:{hits:a}}=e;y(a),m.refresh()}catch{t.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{o(),event.target.reset()}});function y(e){const a=e.map(({webformatURL:n,largeImageURL:l,tags:u,likes:h,views:f,comments:v,downloads:$})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${l}" >
      <img class="gallery-image" src="${n}" data-source="${l}" alt="${u}" />
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
