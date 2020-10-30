import noPosterImg from '../../images/no-poster.jpg';

const MovieDetailsCard = ({
  poster_path,
  title,
  homepage,
  vote_average,
  genres,
  overview,
  vote_count,
}) => {
  const genresMarkup = genres
    .map(({ name }) => `<li class="movie-modal__genres-item">${name}</li>`)
    .join(' ');

  return `<div class="movie-modal js-movie-modal">
    <div class="movie-modal__overlay js-movie-modal__overlay"></div>
    <div class="movie-modal__content">
        <div class="movie-modal__top-block">
          <div class="movie-modal__image-wrapper">
            <img src=${
              poster_path !== null ? poster_path : noPosterImg
            } alt=${title}$ class="movie-modal__image"></div>
                    <div class="movie-modal__vote-block">
            <p class="movie-modal__vote-block-text">${vote_average}</span> &#8260;
                <span class="movie-modal__vote-block-count">${vote_count}</span>
            </p>
        </div>
        <h2 class="movie-modal__original-title">${title}</h2>
        <a href=${homepage} class="movie-modal__homepage" target="_blank">${homepage}</a>
        <h3 class="movie-modal__list-title">Genres:</h3>
        <ul class="movie-modal__genres">
            ${genresMarkup}
        </ul>
        </div>

        <h3 class="movie-modal__about-title">About</h3>
        <p class="movie-modal__overview">${overview}</p>
        <button class="movie-modal__close" id="close-movie-modal"></button>
        <div class="movie-trailers"> </div>
    </div>
</div>`;
};

export default MovieDetailsCard;
