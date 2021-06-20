export default function MainCarousel(){
  return (
    <div id="carouselExampleIndicators" className="carousel mt-5 slide " data-ride="carousel">
    {/* <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="images/Now-You-See-Me-2.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h1>Ace Of Trades</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/Now-You-See-Me-2.jpg" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
        <h1>Define 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/Now-You-See-Me-2.jpg" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
        <h1>Define 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  );
}
