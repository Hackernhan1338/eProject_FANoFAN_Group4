import { Container } from "react-bootstrap";
import ads1 from "./img_ads/Tower fan_ads.png";
import "./Ads1.scss";
function Ad1() {
  return (
    <Container>
      <div className="mt-5">
        <div className="button-ads1">
          CLICK HERE <i class="fa-solid fa-arrow-right"></i>
        </div>
        <img className="ads1-img" src={ads1} alt="" />
      </div>
    </Container>
  );
}

export default Ad1;
