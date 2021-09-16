class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="container">
    <div class="row" id="film-list">
      <div class="col-md-4">   
        <div class="card mb-4">
          <img src="${this._film.Poster}" class="card-img-top" height="400"/>
          <div class="card-body">
            <h5 class="card-title">${this._film.Title}</h5>
            <p class="card-text">${this._film.Year}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>  
      </div>
    </div>
  </section>
    `;
  }
}
customElements.define("film-item", FilmItem);