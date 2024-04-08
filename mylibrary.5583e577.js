!function(){function e(e,t,l,a){Object.defineProperty(e,t,{get:l,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=l.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},l.parcelRequired7c6=i);var o=i.register;o("iE7OH",function(t,l){e(t.exports,"register",function(){return a},function(e){return a=e});var a,n=new Map;a=function(e,t){for(var l=0;l<t.length-1;l+=2)n.set(t[l],{baseUrl:e,path:t[l+1]})}}),o("aNJCr",function(t,l){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,n={};a=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),i("iE7OH").register(i("aNJCr").getBundleURL("2bI8P"),JSON.parse('["2bI8P","mylibrary.5583e577.js","l8b3G","symbol-defs.ee796a2b.svg","jXq3O","foto.88e9f0bc.jpg","44hys","mylibrary.57937c49.js","9shjt","mylibrary.runtime.91682477.js"]'));var s=i("8sEG4"),c={};c=i("aNJCr").getBundleURL("2bI8P")+"foto.88e9f0bc.jpg";var d={};d=i("aNJCr").getBundleURL("2bI8P")+"symbol-defs.ee796a2b.svg";var u=i("iCDYa");i("7rQOT");var r=i("lubd3");let m={galleryQueueBox:document.querySelector(".gallery_queue-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")},f={},b=[];async function y(e){let l;if(e.target.classList.contains("gallery_queue-box"))return;let a=Number(e.target.closest(".card").id),n=b.find(e=>e.id===a);if(n)f=n;else{try{f=await (0,s.fetchFilmDetailsById)(a)}catch(e){console.log(e.message),console.log(e.code)}b.push(f)}m.filmModal.innerHTML="",function(e){let l=function(e){let{poster_path:l,title:a,vote_average:n,vote_count:i,popularity:o,original_title:s,genres:c,overview:u}=e,r=`https://image.tmdb.org/t/p/w500${l}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${t(d)}#icon-close"></use>
      </svg>
    </button>
    <img
      class="film_image"
      src="${r}"
      alt="Film Image"
      onerror="loadNoPoster(this)"
    />
    <article>
      <div class="film_content">
        <h2 class="film_title">${a}</h2>

        <ul class="film-info">
          <li class="film-info_item">
            <p class="film-info_lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote_lable film-vote_lable--orange"
                >${n}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${i}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${o}</span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Original Title</p>
            <span class="film-info_text film-info_text--uppercase">
              ${s}
            </span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Genre</p>
            <span class="film-info_text"
              >${c.map(e=>e.name).join(", ")}</span
            >
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description_title">About</h3>
          <p class="film-description_text">${u}</p>
        </div>
      </div>

      <ul class="film-button">
        <li class="film-button_item" id="button-add-watch">
          <button
            class="film-button_primary"
            type="button"
            button-add-watch
          >
            Add to Watched
          </button>
        </li>

        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-add-queue>
            Add to Queue
          </button>
        </li>
        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-unselect>
            Unselect
          </button>
        </li>
      </ul>
    </article>
  </div>
`}(e);m.filmModal.insertAdjacentHTML("beforeend",l)}(f);let i={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};q(i.unselectBtn),i.closeBtn.addEventListener("click",p),i.addQueueBtn.addEventListener("click",h),i.addWatchBtn.addEventListener("click",_),i.unselectBtn.addEventListener("click",g);let o=w("watched")||[],c=w("queue")||[],u=o.some(e=>e.id===f.id);c.some(e=>e.id===f.id)&&S(i.addQueueBtn),u&&S(i.addWatchBtn),m.filmModal.classList.remove("is-hidden"),l=window.innerWidth-m.body.offsetWidth+"px",m.body.classList.add("disable-scroll"),m.body.style.paddingRight=l,window.addEventListener("keydown",v)}function p(){m.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",v),m.body.classList.remove("disable-scroll"),m.body.style.paddingRight=0,(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)}function v(e){"Escape"===e.code&&p()}function g(){let e=w("watched")||[],t=w("queue")||[],l=e.some(e=>e.id===f.id);t.some(e=>e.id===f.id)&&(0,u.removeSaveQueue)(f),l&&(0,u.removeSaveWatch)(f),q(document.querySelector("[button-add-watch]")),q(document.querySelector("[button-add-queue]"))}function h({target:e}){(0,u.dataSaveQueue)(f),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("queue"),S(e),q(document.querySelector("[button-add-watch]")),q(document.querySelector("[button-unselect]"))}function _({target:e}){(0,u.dataSaveWatch)(f),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),S(e),q(document.querySelector("[button-add-queue]")),q(document.querySelector("[button-unselect]"))}function w(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function S(e){e.disabled=!0,e.classList.add("is-disabled")}function q(e){e.disabled=!1,e.classList.remove("is-disabled")}m.galleryQueueBox.addEventListener("click",y),m.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&p()}),window.loadNoPoster=function(e){e.src=t(c)};var s=i("8sEG4"),u=i("iCDYa");i("7rQOT");var r=i("lubd3");let L={galleryWatchBox:document.querySelector(".gallery_watch-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")},B={},M=[];async function E(e){let l;if(e.target.classList.contains("gallery_fetch-box"))return;let a=Number(e.target.closest(".card").id),n=M.find(e=>e.id===a);if(n)B=n;else{try{B=await (0,s.fetchFilmDetailsById)(a)}catch(e){console.log(e.message),console.log(e.code)}M.push(B)}L.filmModal.innerHTML="",function(e){let l=function(e){let{poster_path:l,title:a,vote_average:n,vote_count:i,popularity:o,original_title:s,genres:c,overview:u}=e,r=`https://image.tmdb.org/t/p/w500${l}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${t(d)}#icon-close"></use>
      </svg>
    </button>
    <img
      class="film_image"
      src="${r}"
      alt="Film Image"
      onerror="loadNoPoster(this)"
    />
    <article>
      <div class="film_content">
        <h2 class="film_title">${a}</h2>

        <ul class="film-info">
          <li class="film-info_item">
            <p class="film-info_lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote_lable film-vote_lable--orange"
                >${n}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${i}</span>
            </div>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Popularity</p>
            <span class="film-info_text">${o}</span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Original Title</p>
            <span class="film-info_text film-info_text--uppercase">
              ${s}
            </span>
          </li>

          <li class="film-info_item">
            <p class="film-info_lable">Genre</p>
            <span class="film-info_text"
              >${c.map(e=>e.name).join(", ")}</span
            >
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description_title">About</h3>
          <p class="film-description_text">${u}</p>
        </div>
      </div>

      <ul class="film-button">
        <li class="film-button_item" id="button-add-watch">
          <button
            class="film-button_primary"
            type="button"
            button-add-watch
          >
            Add to Watched
          </button>
        </li>

        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-add-queue>
            Add to Queue
          </button>
        </li>
        <li class="film-button_item">
          <button class="film-button_primary" type="button" button-unselect>
            Unselect
          </button>
        </li>
      </ul>
    </article>
  </div>
`}(e);L.filmModal.insertAdjacentHTML("beforeend",l)}(B);let i={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};W(i.unselectBtn),i.closeBtn.addEventListener("click",R),i.addQueueBtn.addEventListener("click",$),i.addWatchBtn.addEventListener("click",C),i.unselectBtn.addEventListener("click",k);let o=G("watched")||[],c=G("queue")||[],u=o.some(e=>e.id===B.id);c.some(e=>e.id===B.id)&&P(i.addQueueBtn),u&&P(i.addWatchBtn),L.filmModal.classList.remove("is-hidden"),l=window.innerWidth-L.body.offsetWidth+"px",L.body.classList.add("disable-scroll"),L.body.style.paddingRight=l,window.addEventListener("keydown",x)}function R(){L.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",x),L.body.classList.remove("disable-scroll"),L.body.style.paddingRight=0,(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage)}function x(e){"Escape"===e.code&&R()}function k(){let e=G("watched")||[],t=G("queue")||[],l=e.some(e=>e.id===B.id);t.some(e=>e.id===B.id)&&(0,u.removeSaveQueue)(B),l&&(0,u.removeSaveWatch)(B),W(document.querySelector("[button-add-watch]")),W(document.querySelector("[button-add-queue]"))}function $({target:e}){(0,u.dataSaveQueue)(B),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),P(e),W(document.querySelector("[button-add-watch]")),W(document.querySelector("[button-unselect]"))}function C({target:e}){(0,u.dataSaveWatch)(B),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,r.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,r.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,r.updateMoviesGalleryByStatus)("watch"),P(e),W(document.querySelector("[button-add-queue]")),W(document.querySelector("[button-unselect]"))}function G(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function P(e){e.disabled=!0,e.classList.add("is-disabled")}function W(e){e.disabled=!1,e.classList.remove("is-disabled")}L.galleryWatchBox.addEventListener("click",E),L.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&R()}),window.loadNoPoster=function(e){e.src=t(c)};var r=i("lubd3");let H={galleryMyLibraryWatch:document.querySelector(".gallery_watch-block"),galleryMyLibraryQueue:document.querySelector(".gallery_queue-block"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),unselectBtn:document.querySelector(".unselect-btn"),paginationMyLibraryContainer:document.querySelector(".pagination-mylibrary_container"),filmModal:document.querySelector("[data-modal]")};H.watchedBtn.addEventListener("click",function({target:e}){H.galleryMyLibraryWatch.classList.remove("is-hidden"),H.galleryMyLibraryQueue.classList.add("is-hidden"),e.classList.contains("active")||(H.watchedBtn.classList.add("active"),H.queueBtn.classList.remove("active"),(0,r.updateMoviesGalleryByStatus)(e.dataset.status))}),H.queueBtn.addEventListener("click",function({target:e}){alert("onQueueBtnClick"),H.galleryMyLibraryWatch.classList.add("is-hidden"),H.galleryMyLibraryQueue.classList.remove("is-hidden"),e.classList.contains("active")||(H.watchedBtn.classList.remove("active"),H.queueBtn.classList.add("active"),(0,r.updateMoviesGalleryByStatus)(e.dataset.status))}),i("8IRs8")}();
//# sourceMappingURL=mylibrary.5583e577.js.map
