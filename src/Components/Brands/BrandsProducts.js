import { useParams } from "react-router-dom";
import Data from "../Data.json";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./BrandsProducts.scss";
import { motion } from "framer-motion";

function BrandsProducts({ Add }) {
  const { id } = useParams();
  let Show = Data.filter((item) => item.Brands == id);
  let Title = Show.slice(0, 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-4 mb-3 text-center">
        {Title.map((item, index) => (
          <div key={index} className="fw-bold">
            <img className="img-brands" src={item.imgBrands} alt="" />
          </div>
        ))}
      </div>
      <Container fluid="md">
        <Row>
          {Show.map((items, index) => (
            <Col xs={12} sm={6} md={6} lg={3} key={index}>
              <Card className="mt-3 mb-3 card-products-brands">
                <NavLink
                  to={`/ShowProduct/${items.ID}`}
                  className=" detail-link-card"
                >
                  <Card.Img
                    variant="top"
                    src={items.Img1}
                    alt={items.Name}
                    className="img-card-rpoducts"
                  />
                </NavLink>
                <Card.Body className="content-card-products">
                  <NavLink
                    to={`/ShowProduct/${items.ID}`}
                    className=" detail-link-card"
                  >
                    <Card.Title className="title-card-products">
                      {items.Name1}
                    </Card.Title>

                    <Card.Text className="price-card-products">
                      ${items.Price}
                    </Card.Text>
                    <Card.Text className="star-card-products">
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </Card.Text>
                  </NavLink>
                  <Button
                    className="add-products"
                    onClick={() => {
                      Add(items, 1);
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default BrandsProducts;
