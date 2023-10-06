import Products from "../Data.json";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./MainProducts.scss";

function MainProduct() {
  let RandomProduct = [];
  let RandomNumber = [];

  for (let a = 1; a < 61; a++) {
    RandomNumber.push(a);
  }
  console.log(RandomNumber);
  for (let b = RandomNumber.length - 1; b > 1; b--) {
    let R = Math.floor(Math.random() * b);
    let x = RandomNumber[b];
    RandomNumber[b] = RandomNumber[R];
    RandomNumber[R] = x;
  }

  for (let i = 0; i < Products.length; i++) {
    let ShowProduct = Products.filter((x) => x.ID === RandomNumber[i]);
    RandomProduct = RandomProduct.concat(ShowProduct);
  }

  return (
    <div>
      <Container>
        <Row className="mt-5 text-center">
          <h1 className="fw-bold">ALL PRODUCTS</h1>
        </Row>
        <Row>
          <div class="box">
            <select>
              <option className="box-select-option">Select</option>
              <option className="box-select-option">Price Up</option>
              <option className="box-select-option">Price Down</option>
            </select>
          </div>
        </Row>
        <Row>
          {RandomProduct.map((items, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="mt-3 mb-3 card-all-products">
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

export default MainProduct;
