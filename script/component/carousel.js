// import Info from "../../img/carousel2.jpeg";
// import info2 from "../../img/carousel.jpeg";
// import info3 from "../../img/carousel1.jpeg";

class Carousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner rounded">
      <div class="carousel-item active">
        <img class="d-block w-100" src="./assets/img/carousel.jpeg" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./assets/img/carousel1.jpeg" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./assets/img/carousel2.jpeg" alt="third slide" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;
  }
}

customElements.define("carousel-header", Carousel);
