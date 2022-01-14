class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="../index.html">
            <h1 class="fs-2 fw-bold my-auto">Movies.</h1>
          </a>
          <form class="d-flex">
            <input class="form-control me-2" id="search-input" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-custom" id="search-button" type="button">Search</button>
          </form>
        </div>
      </nav>
    `;

    this.querySelector("#search-button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("nav-bar", NavBar);