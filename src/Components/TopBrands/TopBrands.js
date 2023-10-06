import { Container } from "react-bootstrap";
import "./TopBrands.scss";
import amazon from "./img-topbrands/Amazon-Logo.png";
import dreo from "./img-topbrands/Dreo-logo.png";
import lasko from "./img-topbrands/Lasko.png";
import levoit from "./img-topbrands/Levoit-logo.png";

function TopBrands() {
  return (
    <div>
      <Container fluid="lg">
        <div class="container-fluid mb-5">
          <div class="text-center mt-5 mb-5">
            <h1 className="topbrands-title">Our Brands</h1>
          </div>
          <div className="row topbar-logo">
            <div className="col col-md-3">
              <img className="topbrands-img" src={amazon} alt="amazon" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={dreo} alt="dreo" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={lasko} alt="lasko" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={levoit} alt="levoit" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBrands;
