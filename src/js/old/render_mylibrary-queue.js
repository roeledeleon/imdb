// ----- IMPORTS

//import { markupMovies } from './render_mylibrary-film-card';
import img from '../images/foto.jpg';

// ----- DECLARATIONS

const refs = {
  gallery: document.querySelector('.gallery_queue-box'),
  gallerySection: document.querySelector('.gallery_queue-block'),
  pageMyLibrary: document.querySelector('.pagination-mylibrary_container'),
};

// ----- FUNCTIONS | renderMyLibraryQueue

export function renderMyLibraryQueue(userQueue) {
  if (!userQueue || userQueue.length === 0) {
    refs.pageMyLibrary.classList.add('is-hidden');
    refs.gallerySection.classList.remove('is-hidden');
    return (refs.gallery.innerHTML = `<h1 style="font-size=80px">There are no added queue films</h1>`);
  }
  refs.gallery.innerHTML = markupMovies(userQueue);
}

// ----- FUNCTIONS | getGenres

function getGenres(genres) {
  const movieGenres = genres.map(genre => genre.name);
  if (movieGenres.length > 2) {
    const removedGenres = movieGenres.splice(0, 2);
    removedGenres.push('Other');

    return removedGenres.join(', ');
  }
  return movieGenres.join(', ');
}

// ----- FUNCTIONS | markupMovies

export function markupMovies(movies) {
  return movies
    .map(({ poster_path, title, genres, release_date, id, vote_average }) => {
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
      <li class="card" id="${id}">
        <img class="card_img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
        <div class="card_wrap">
        <p class="card_titel">
        ${title} <br />
          <span class="card_text">${getGenres(genres)} | ${date}</span>
        </p> <p class="cart_rating">${vote_average.toFixed(1)}</p> </div>
  </li>`;
      }
      return `
      <div class="card" id="${id}">
        <img class="card_img" src="${img}" alt="${title}" />
        <p class="card_titel">
        ${title} <br />
          <span class="card_text">${getGenres(genres)} | ${date}</span>
        </p> <p class="cart_rating">${vote_average.toFixed(1)}</p>
  </div>`;
    })
    .join('');
}
