function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in l)return l[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return l[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var n=i.register;n("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return l},set:function(e){return l=e},enumerable:!0,configurable:!0});var l,a=new Map;l=function(e,t){for(var l=0;l<t.length-1;l+=2)a.set(t[l],{baseUrl:e,path:t[l+1]})}}),n("2PEVg",function(e,t){e.exports=new URL("foto.88e9f0bc.jpg",import.meta.url).toString()}),n("kc5yK",function(e,t){e.exports=new URL("symbol-defs.ee796a2b.svg",import.meta.url).toString()}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["6EVkV","mylibrary.2b00ae11.js","fynZF","foto.88e9f0bc.jpg","f0tFQ","symbol-defs.ee796a2b.svg","4nPif","mylibrary.197800c7.js","1RXrn","mylibrary.runtime.a392b057.js"]'));var o=i("fSK0k"),s=i("2PEVg"),c=i("kc5yK"),d=i("ixU3C");i("dSs1Y");var u=i("rLtvl");const r={galleryQueueBox:document.querySelector(".gallery_queue-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")};let m={};const f=[];async function y(t){let l;if(t.target.classList.contains("gallery_queue-box"))return;let a=Number(t.target.closest(".card").id),i=f.find(e=>e.id===a);if(i)m=i;else{try{m=await (0,o.fetchFilmDetailsById)(a)}catch(e){console.log(e.message),console.log(e.code)}f.push(m)}r.filmModal.innerHTML="",function(t){let l=function(t){let{poster_path:l,title:a,vote_average:i,vote_count:n,popularity:o,original_title:s,genres:d,overview:u}=t,r=`https://image.tmdb.org/t/p/w500${l}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${e(c)}#icon-close"></use>
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
                >${i}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${n}</span>
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
              >${d.map(e=>e.name).join(", ")}</span
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
`}(t);r.filmModal.insertAdjacentHTML("beforeend",l)}(m);let n={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};w(n.unselectBtn),n.closeBtn.addEventListener("click",b),n.addQueueBtn.addEventListener("click",g),n.addWatchBtn.addEventListener("click",h),n.unselectBtn.addEventListener("click",v);let s=_("watched")||[],d=_("queue")||[],u=s.some(e=>e.id===m.id);d.some(e=>e.id===m.id)&&S(n.addQueueBtn),u&&S(n.addWatchBtn),r.filmModal.classList.remove("is-hidden"),l=window.innerWidth-r.body.offsetWidth+"px",r.body.classList.add("disable-scroll"),r.body.style.paddingRight=l,window.addEventListener("keydown",p)}function b(){r.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",p),r.body.classList.remove("disable-scroll"),r.body.style.paddingRight=0,(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)}function p(e){"Escape"===e.code&&b()}function v(){let e=_("watched")||[],t=_("queue")||[],l=e.some(e=>e.id===m.id);t.some(e=>e.id===m.id)&&(0,d.removeSaveQueue)(m),l&&(0,d.removeSaveWatch)(m),w(document.querySelector("[button-add-watch]")),w(document.querySelector("[button-add-queue]"))}function g({target:e}){(0,d.dataSaveQueue)(m),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("queue"),S(e),w(document.querySelector("[button-add-watch]")),w(document.querySelector("[button-unselect]"))}function h({target:e}){(0,d.dataSaveWatch)(m),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),S(e),w(document.querySelector("[button-add-queue]")),w(document.querySelector("[button-unselect]"))}function _(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function S(e){e.disabled=!0,e.classList.add("is-disabled")}function w(e){e.disabled=!1,e.classList.remove("is-disabled")}r.galleryQueueBox.addEventListener("click",y),r.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&b()}),window.loadNoPoster=function(t){t.src=e(s)};var o=i("fSK0k"),s=i("2PEVg"),c=i("kc5yK"),d=i("ixU3C");i("dSs1Y");var u=i("rLtvl");const q={galleryWatchBox:document.querySelector(".gallery_watch-box"),filmModal:document.querySelector("[data-modal]"),body:document.querySelector("body")};let L={};const B=[];async function M(t){let l;if(t.target.classList.contains("gallery_fetch-box"))return;let a=Number(t.target.closest(".card").id),i=B.find(e=>e.id===a);if(i)L=i;else{try{L=await (0,o.fetchFilmDetailsById)(a)}catch(e){console.log(e.message),console.log(e.code)}B.push(L)}q.filmModal.innerHTML="",function(t){let l=function(t){let{poster_path:l,title:a,vote_average:i,vote_count:n,popularity:o,original_title:s,genres:d,overview:u}=t,r=`https://image.tmdb.org/t/p/w500${l}`;return`
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${e(c)}#icon-close"></use>
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
                >${i}</span
              >
              <span>/</span>
              <span class="film-vote_lable">${n}</span>
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
              >${d.map(e=>e.name).join(", ")}</span
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
`}(t);q.filmModal.insertAdjacentHTML("beforeend",l)}(L);let n={closeBtn:document.querySelector("[button-modal-close]"),addQueueBtn:document.querySelector("[button-add-queue]"),addWatchBtn:document.querySelector("[button-add-watch]"),unselectBtn:document.querySelector("[button-unselect]")};Q(n.unselectBtn),n.closeBtn.addEventListener("click",E),n.addQueueBtn.addEventListener("click",R),n.addWatchBtn.addEventListener("click",P),n.unselectBtn.addEventListener("click",k);let s=W("watched")||[],d=W("queue")||[],u=s.some(e=>e.id===L.id);d.some(e=>e.id===L.id)&&$(n.addQueueBtn),u&&$(n.addWatchBtn),q.filmModal.classList.remove("is-hidden"),l=window.innerWidth-q.body.offsetWidth+"px",q.body.classList.add("disable-scroll"),q.body.style.paddingRight=l,window.addEventListener("keydown",x)}function E(){q.filmModal.classList.add("is-hidden"),window.removeEventListener("keydown",x),q.body.classList.remove("disable-scroll"),q.body.style.paddingRight=0,(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage)}function x(e){"Escape"===e.code&&E()}function k(){let e=W("watched")||[],t=W("queue")||[],l=e.some(e=>e.id===L.id);t.some(e=>e.id===L.id)&&(0,d.removeSaveQueue)(L),l&&(0,d.removeSaveWatch)(L),Q(document.querySelector("[button-add-watch]")),Q(document.querySelector("[button-add-queue]"))}function R({target:e}){(0,d.dataSaveQueue)(L),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),$(e),Q(document.querySelector("[button-add-watch]")),Q(document.querySelector("[button-unselect]"))}function P({target:e}){(0,d.dataSaveWatch)(L),window.location.pathname.includes("my-library")&&(document.querySelector(".watched-btn").classList.contains("active")?(0,u.updateMoviesGalleryByStatus)("watched",globalCurrentPage):(0,u.updateMoviesGalleryByStatus)("queue",globalCurrentPage)),(0,u.updateMoviesGalleryByStatus)("watch"),$(e),Q(document.querySelector("[button-add-queue]")),Q(document.querySelector("[button-unselect]"))}function W(e){return function(e){let t;try{t=JSON.parse(e)}catch(e){console.log("ERROR: ",e.message),console.log("ERROR CODE: ",e.code)}return t}(localStorage.getItem(e))}function $(e){e.disabled=!0,e.classList.add("is-disabled")}function Q(e){e.disabled=!1,e.classList.remove("is-disabled")}q.galleryWatchBox.addEventListener("click",M),q.filmModal.addEventListener("click",function(e){e.currentTarget===e.target&&E()}),window.loadNoPoster=function(t){t.src=e(s)};var u=i("rLtvl");const G={galleryMyLibraryWatch:document.querySelector(".gallery_watch-block"),galleryMyLibraryQueue:document.querySelector(".gallery_queue-block"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),unselectBtn:document.querySelector(".unselect-btn"),paginationMyLibraryContainer:document.querySelector(".pagination-mylibrary_container"),filmModal:document.querySelector("[data-modal]")};G.watchedBtn.addEventListener("click",function({target:e}){G.galleryMyLibraryWatch.classList.remove("is-hidden"),G.galleryMyLibraryQueue.classList.add("is-hidden"),e.classList.contains("active")||(G.watchedBtn.classList.add("active"),G.queueBtn.classList.remove("active"),(0,u.updateMoviesGalleryByStatus)(e.dataset.status))}),G.queueBtn.addEventListener("click",function({target:e}){alert("onQueueBtnClick"),G.galleryMyLibraryWatch.classList.add("is-hidden"),G.galleryMyLibraryQueue.classList.remove("is-hidden"),e.classList.contains("active")||(G.watchedBtn.classList.remove("active"),G.queueBtn.classList.add("active"),(0,u.updateMoviesGalleryByStatus)(e.dataset.status))}),i("d2y5i");
//# sourceMappingURL=mylibrary.2b00ae11.js.map
