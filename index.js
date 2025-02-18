import{a as c,S as u,i as s}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const p="48841275-5fdf514aecbb5a7f0d9901bba",d="https://pixabay.com/api/";function m(r){return c.get(d,{params:{key:p,q:r,image_type:"photo",safesearch:!0,orientation:"horizontal"}}).then(t=>t.data.hits??[]).catch(t=>{throw console.error("Помилка при виконанні запиту:",t),t})}function f(r){return r.map(({webformatURL:t,tags:o,largeImageURL:a,views:e,downloads:n,likes:i,comments:l})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${t}" alt="${o}" />
          </a>
          <div class="gallery-item-description">
            <label>
              Likes
              <span>${i}</span>
            </label>
    
            <label>
              Views
              <span>${e}</span>
            </label>
    
            <label>
              Comments
              <span>${l}</span>
            </label>
    
            <label>
              Downloads
              <span>${n}</span>
            </label>
          </div>
        </li>
      `).join("")}document.addEventListener("DOMContentLoaded",y);function y(){document.getElementById("search-form").addEventListener("submit",g)}async function g(r){r.preventDefault();const t=h();if(t===""){v();return}const o=document.getElementById("gallery");b(o);try{const a=await m(t.trim());L(o,a)}catch(a){I(a),o.innerHTML=""}}function h(){return document.getElementById("search-input").value}function b(r){r.innerHTML='<span class="loader"></span>'}function L(r,t){if(r.innerHTML="",t.length>0){const o=f(t);r.innerHTML=o,new u(".gallery a").refresh()}else E(),M()}function E(){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function v(){s.error({message:"Sorry, search input cannot be empty!",position:"topRight"})}function I(r){s.error({message:r.code,position:"topRight"})}function M(){document.getElementById("search-input").value=""}
//# sourceMappingURL=index.js.map
