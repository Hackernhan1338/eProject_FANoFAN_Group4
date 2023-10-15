import "./FeaturedProducts.scss";
import Products from "../Data.json";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FeaturedProducts({ Add }) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const notify = () =>
    toast.success("Product successfully added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const { id } = useParams();
  let Detail = Products.filter((x) => x.ID == id);
  Detail = Detail[0];
  return (
    <Container fluid="md" data-aos="fade-up">
      <Row className="text-center mt-5 mb-3">
        <h1 className="featuredproducts-title">Featured Products</h1>
      </Row>
      <Row>
        {Products.filter((items) => {
          if (items.Top === 1) {
            return items;
          } else {
            return null;
          }
        }).map((items, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index}>
            <Card className="mt-3 mb-3 card-products-featured">
              <NavLink
                to={`/ShowProduct/${items.ID}`}
                className=" detail-link-card"
              >
                <Card.Img
                  variant="top"
                  src={items.Img1}
                  alt={items.Name}
                  className="img-card-rpoducts"
                  data-aos="zoom-in"
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
                  onClick={() => notify(Add(items, 1))}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default FeaturedProducts;
