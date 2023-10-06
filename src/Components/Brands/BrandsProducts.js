import { useParams } from "react-router-dom";
import Data from "../Data.json";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./BrandsProducts.scss";
import Logo1 from "../TopBrands/img-topbrands/Amazon-Logo.png";

function BrandsProducts() {
  const { id } = useParams();
  let Show = Data.filter((item) => item.Brands == id);
  let Title = Show.slice(0, 1);
  return (
    <div>
      <div className="mt-5 text-center">
        {Title.map((item, index) => (
          <div key={index} className="fw-bold">
            {item.imgBrands}
          </div>
        ))}
      </div>
      <Container fluid="md">
        <div class="box">
          <select>
            <option className="box-select-option">Select</option>
            <option className="box-select-option">Price Up</option>
            <option className="box-select-option">Price Down</option>
          </select>
        </div>

        <Row>
          {Show.map((items, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="mt-3 mb-3 card-products-brands">
                <Card.Img
                  variant="top"
                  src={items.Img1}
                  alt={items.Name}
                  className="img-card-rpoducts"
                />
                <Card.Body className="content-card-products">
                  <NavLink
                    to={`/ShowProduct/${items.ID}`}
                    className=" detail-link-card"
                  >
                    <Card.Title className="title-card-products">
                      {items.Name1}
                    </Card.Title>
                  </NavLink>
                  <Card.Text className="price-card-products">
                    {items.Price}
                  </Card.Text>
                  <Card.Text className="star-card-products">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </Card.Text>

                  <Button className="add-products">ADD TO CART</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BrandsProducts;
