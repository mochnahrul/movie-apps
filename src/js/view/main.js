import "../component/nav-bar.js";
import "../component/movie-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("nav-bar");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(displayMovie)
  }

  const displayMovie = () => {
    DataSource.getMovie()
      .then(renderResult)
      .catch(fallbackResult)
  }

  const renderResult = results => {
    movieListElement.movies = results;
  }

  const fallbackResult = message => {
    movieListElement.renderError(message);
  }

  searchElement.clickEvent = onButtonSearchClicked;
  displayMovie();
}

export default main;