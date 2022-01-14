const imageUrl = "https://image.tmdb.org/t/p/w500";

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card text-white bg-dark">
          <img src="${imageUrl + this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
          <div class="card-body">
            <div class="card-info">
              <h5 class="card-title my-auto">${this._movie.title}</h5>
              <span class="${this.getColor(this._movie.vote_average)} my-auto">${this._movie.vote_average}</span>
            </div>
            <p class="my-auto">${this._movie.release_date}</p>
          </div>
          <div class="overview">
            <h5 class="fw-bold">Overview</h5>
            <p>${this._movie.overview}</p>
          </div>
        </div>
    `;
  }

  getColor(vote) {
    if(vote >= 8) {
      return "green";
    } else if(vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
}

customElements.define("movie-item", MovieItem);