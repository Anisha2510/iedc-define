import Nav from "../components/nav"
import MainCarousel from "../components/mainCarousel"
import Carousel from "../components/carousel"
import Carousel_Tech from "../components/carousel_tech"
import Carousel_NonTech from "../components/carousel_nonTech"
import Footer from "../components/footer"
import Leaderboard from "../components/leaderboard"

export default function Home(){

    return(
      <div>
        <Nav />
        <MainCarousel />
        <div className="container">
        <h3 className="m-5">What's Hot ?</h3>
        <Carousel />
        <h3 className="m-5">Technical</h3>
        <Carousel_Tech />
        <h3 className="m-5">Non-Technical</h3>
        <Carousel_NonTech/>
        <h3 className="mt-5">Leaderboard</h3>
        <Leaderboard/>
        </div>
        <Footer />
      </div>
    );
}
