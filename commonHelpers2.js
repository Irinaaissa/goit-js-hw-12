import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                        */import{S as $,i as o,a as B}from"./assets/vendor-60485be8.js";const c=document.getElementById("search-form"),L=document.getElementById("search-input"),l=document.getElementById("gallery"),S=document.getElementById("load-more"),k="https://pixabay.com/api/",d="41471340-7b105b7a368edb6edd340273b",m=new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader");function q(){p.style.display="block"}function i(){p.style.display="none"}c.addEventListener("submit",async e=>{e.preventDefault();const a=L.value;if(a.trim()==="")return o.error({title:"Error",message:"Sorry, there are no images matching your search"}),i();q();let t=1;try{const s=await B.get(`${k}?key=${d}&q=${a}&per_page=40`),{data:{hits:y}}=s;l.innerHTML="",t+=1;const g=y.map(({webformatURL:f,largeImageURL:r,tags:h,likes:v,views:E,comments:b,downloads:I})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}" >
          <img class="gallery-image" src="${f}" data-source="${r}" alt="${h}" />
        </a>
        <div class="card-info">
        <div class="field">
            <span class="label">Likes</span>
            <span class="value">${v}</span>    
        </div>
        
        <div class="field">
            <span class="label">Views</span>
            <span class="value">${E}</span>   
        </div>
        <div class="field">
            <span class="label">Comments</span>
            <span class="value">${b}</span>    
        </div>
        <div class="field">
            <span class="label">Downloads</span>
            <span class="value">${I}</span>    
        </div>
        </div>
      </li>
          `).join("");l.insertAdjacentHTML("beforeend",g),m.refresh()}catch{o.error({title:"Error",message:"Sorry, there are no images matching your search"})}finally{i(),e.target.reset()}});m.refresh();let n=1;c.addEventListener("submit",function(e){e.preventDefault(),n=1;const a=document.getElementById("search-input").value;u(a,n)});S.addEventListener("click",function(){n++;const e=document.getElementById("search-input").value;u(e,n)});function u(e,a){setTimeout(function(){x([...Array(8)].map((t,s)=>s+a*10))},1e3)}function x(e){e.length>0?document.getElementById("load-more").style.display="flex":document.getElementById("load-more").style.display="none",e.forEach(function(a){const t=document.createElement("img");t.src="https://pixabay.com/api/"+d+".jpg",l.appendChild(t)})}
//# sourceMappingURL=commonHelpers2.js.map
