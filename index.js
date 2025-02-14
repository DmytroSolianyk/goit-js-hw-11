import{a as u,i as p}from"./assets/vendor-Cbhu4xvy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="48841275-5fdf514aecbb5a7f0d9901bba",f="https://pixabay.com/api/";async function y(o){try{return(await u.get(f,{params:{key:m,q:o,image_type:"photo",safesearch:!0,orientation:"horizontal"}})).data.hits??[]}catch(r){throw console.error("Помилка при виконанні запиту:",r),r}}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("search-button").addEventListener("click",async()=>{const o=document.getElementById("search-input").value,r=document.getElementById("gallery");r.innerHTML="Loading...";try{const a=await y(o);if(r.innerHTML="",a.length>0){const n=a.map(({webformatURL:e,user:t,largeImageURL:s,views:i,downloads:l,likes:c,comments:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${e}" alt="${t}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${c}</span>
            </label>

            <label>
              Views
              <span>${i}</span>
            </label>

            <label>
              Comments
              <span>${d}</span>
            </label>

            <label>
              Downloads
              <span>${l}</span>
            </label>
          </div>
        </li>
            `).join("");r.innerHTML=n}else p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(a){console.error("Помилка при виконанні запиту:",a)}})});
//# sourceMappingURL=index.js.map
