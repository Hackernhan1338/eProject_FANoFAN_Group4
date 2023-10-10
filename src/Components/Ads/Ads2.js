import { Container } from "react-bootstrap";
import ads2 from "./img_ads/ads2.png";
import "./Ads2.scss";
function Ad2() {
  return (
    <Container>
      <div className="mt-5">
        <div className="button-ads2">
          CLICK HERE <i class="fa-solid fa-arrow-right"></i>
        </div>
        <img className="ads2-img" src={ads2} alt="" />
      </div>
    </Container>
  );
}

export default Ad2;
