import "./Slideshow.scss";
import slide1 from "./imageSlideShow/Slide3.3.png";
import slide2 from "./imageSlideShow/Slide2.1.png";
import slide3 from "./imageSlideShow/Slide1.1.png";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function Slideshow() {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img className="slideshow-img" src={slide1} alt="slide1" />
          <Carousel.Caption>
            <div className="slideshow-content">
              <div className="slideshow-slogan">
                <p className="slogan1">Blow away the heat</p>
                <p className="slogan2">Bring in comfort</p>
              </div>
              <Button className="slideshow-details1">
                CHECK NOW <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide2} alt="slide2" />
          <Carousel.Caption className="start-5 end-100">
            <Button className="slideshow-details2 ">
              CHECK NOW <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide3} alt="slide3" />
          <Carousel.Caption className="start-5 end-100">
            <Button className="slideshow-details3 ">
              CHECK NOW <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
