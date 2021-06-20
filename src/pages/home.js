import Nav from "../components/nav"
import MainCarousel from "../components/mainCarousel"
import Carousel from "../components/carousel"
export default function Home(){

    return(
      <div>
        <Nav />
        <MainCarousel />
        <div className="container">
        <h3 className="m-5">What's Hot ?</h3>
        <Carousel />
        <h3 className="m-5">Technical</h3>
        <Carousel />
        <h3 className="m-5">Non-Technical</h3>
        <Carousel />
        </div>
      </div>
    );
}
