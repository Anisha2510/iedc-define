export default function MainCarousel(){
  return (
    <div id="carouselExampleIndicators" className="carousel mt-5 slide " data-ride="carousel">

  <div className="carousel-inner main">
    <div className="carousel-item item active">
      <img className="d-block w-100" src="images\main\Ace of Trades-min.png" alt="First slide" />
      <div className="carousel-caption d-none d-md-block ">
        <h1 className="mt-5">Ace Of Trades</h1>
        <p className="px-3">Participants will be put through a series of rounds that assess their entrepreneurial skills and traits. Top contestant acing all 5 rounds of the event will be named the ‘Ace of Trades’.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images\main\Finhack-min.png" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="mt-3">Finhack'21</h1>
        <p className="px-3">It is a 48-hour FinTech Hackathon where participants are required to solve any of the 3 problem statement given.</p>
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
