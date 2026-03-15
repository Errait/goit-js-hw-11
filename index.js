import{a as c,S as g,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function p(r){return c.get("",{params:{key:"55028646-8629ed6310cecdce9e4f8a275",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>{throw console.log(s),s})}const f=new g(".gallery a",{captions:!1});function y(r){const s=document.querySelector(".gallery"),i=r.map(({webformatURL:o,largeImageURL:e,tags:t,likes:l,views:u,comments:m,downloads:d})=>`<li class="gallery-item">
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
                    <p class="img-num">${l}</p>
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
        </li>`).join("");s.insertAdjacentHTML("beforeend",i),f.refresh()}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){document.querySelector(".span-loader").classList.add("loader")}function w(){document.querySelector(".span-loader").classList.remove("loader")}const x=document.querySelector("form");let n=null;x.addEventListener("submit",r=>{r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();if(i)n=i;else return;h(),L(),p(n).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits)}).catch(o=>{a.error({message:o})}).finally(()=>{w(),r.target.reset()})});
//# sourceMappingURL=index.js.map
