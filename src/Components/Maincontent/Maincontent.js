import { Container } from "react-bootstrap";
import BestSeller from "../BestSeller/BestSeller";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Priority from "../Priority/Priority";
import TopBrands from "../TopBrands/TopBrands";
import "./Maincontent.scss";

function Maincontent() {
  return (
    <div>
      <Container fluid>
        <BestSeller />
        <FeaturedProducts />
        <Priority />
        <TopBrands />
      </Container>
    </div>
  );
}

export default Maincontent;
