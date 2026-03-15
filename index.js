import{a as c,S as p,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function g(r){return c.get("",{params:{key:"55028646-8629ed6310cecdce9e4f8a275",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>{throw console.log(s),s})}function f(r){const s=document.querySelector(".gallery"),a=r.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:u,comments:m,downloads:d})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${o}"
                    alt="${t}"
                />
            </a>
            <ul class="img-text">
                <li class="img-text-item">
                    <p class="img-word">Likes</p>
                    <p class="img-num">${i}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Views</p>
                    <p class="img-num">${u}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Comments</p>
                    <p class="img-num">${m}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Downloads</p>
                    <p class="img-num">${d}</p>
                </li>
            </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",a),new p(".gallery a",{captions:!1,captionsData:"alt",captionDelay:250})}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function h(){document.querySelector(".span-loader").classList.add("loader")}function L(){document.querySelector(".span-loader").classList.remove("loader")}const w=document.querySelector("form");let n=null;w.addEventListener("submit",r=>{r.preventDefault();const a=r.currentTarget.elements["search-text"].value.trim();if(a)n=a;else return;y(),h(),g(n).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o.hits)}).catch(o=>{l.error({message:o})}).finally(()=>{L(),r.target.reset()})});
//# sourceMappingURL=index.js.map
