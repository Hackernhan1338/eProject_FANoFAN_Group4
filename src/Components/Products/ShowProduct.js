import { NavLink, useParams } from "react-router-dom";
import Product from "../Data.json";
import { Row, Col, Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Product.scss";
import Footer from "../Footer/Footer";

function ShowProduct({ Add, ProductCart }) {
  const { id } = useParams();
  let Detail = Product.filter((x) => x.ID == id);
  Detail = Detail[0];

  return (
    <div>
      <Container fluid="md">
        <div className="Title text-center fw-bold">{Detail.Name}</div>
        <main>
          <Row>
            <Col xs={12} sm={9} md={4}>
              <Row>
                <img className="MainImg" src={Detail.Img1} alt={Detail.Name} />
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <img
                    className="OtherImg"
                    src={Detail.Img2}
                    alt={Detail.Name}
                  />
                </Col>
                <Col xs={6} md={6}>
                  <img
                    className="OtherImg"
                    src={Detail.Img3}
                    alt={Detail.Name}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="MainProduct">
              <div className="MainProducts-content">
                <Row className="Desc">{Detail.Description}</Row>
                <Row className="Price1">$ {Detail.Price}</Row>

                <Card.Text className="star-card-products">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </Card.Text>
                <div className="button-add-cart">
                  <Button
                    className="buttonAdd text-center"
                    onClick={() => Add(Detail)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3 "
                justify
              >
                <Tab eventKey="Spec" title="Specification" className="Spec">
                  <Row>
                    {/* <Row>Brand : {Detail.Spec.Brand}{Detail.Spec.Brand}</Row>
                      <Row>Color : {Detail.Spec.Color}</Row>
                      <Row>Category : {Detail.Spec.Efd.Name}</Row>
                      <Row>Style : {Detail.Spec.Style}</Row>
                      <Row>Power Source : {Detail.Spec.Power}</Row> */}
                    <table className="table-spec1">
                      <tr>
                        <td>Brand</td>
                        <td>{Detail.Spec.Brand}</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>{Detail.Spec.Color}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>{Detail.Spec.Efd.Name}</td>
                      </tr>
                      <tr>
                        <td>Style</td>
                        <td>{Detail.Spec.Style}</td>
                      </tr>
                      <tr>
                        <td>Power Source</td>
                        <td>{Detail.Spec.Power}</td>
                      </tr>
                      <tr>
                        <td>Product Dimensions</td>
                        <td>{Detail.Spec.Dimension}</td>
                      </tr>
                      <tr>
                        <td>Room Type</td>
                        <td>{Detail.Spec.Room}</td>
                      </tr>
                      <tr>
                        <td>Special Featured</td>
                        <td>{Detail.Spec.Feature}</td>
                      </tr>
                      <tr>
                        <td>Recommended Uses For Product</td>
                        <td>{Detail.Spec.Recommend}</td>
                      </tr>
                    </table>

                    {/* <Row>Product Dimensions : {Detail.Spec.Dimension}</Row>
                    <Row>Room Type : {Detail.Spec.Room}</Row>
                    <Row>Special Feature : {Detail.Spec.Feature}</Row>
                    <Row>
                      Recommended Uses For Product :{Detail.Spec.Recommend}
                    </Row> */}
                  </Row>
                </Tab>
                <Tab eventKey="Type" title="Type" className="Type">
                  {/* <Row>Mounting Type : {Detail.Spec.Type.Mounting}</Row>
                  <Row>Controller Type : {Detail.Spec.Type.Controller}</Row>
                  <Row>Number of Speeds : {Detail.Spec.Type.Speeds}</Row>
                  <Row>Number of Blades : {Detail.Spec.Type.Blades}</Row>
                  <Row>Material : {Detail.Spec.Type.Material}</Row> */}
                  <table className="table-spec1">
                    <tr>
                      <td>Mounting Type</td>
                      <td>{Detail.Spec.Type.Mounting}</td>
                    </tr>
                    <tr>
                      <td>Controller Type</td>
                      <td>{Detail.Spec.Type.Controller}</td>
                    </tr>
                    <tr>
                      <td>Number of Speeds</td>
                      <td>{Detail.Spec.Type.Speeds}</td>
                    </tr>
                    <tr>
                      <td>Number of Blades </td>
                      <td>{Detail.Spec.Type.Blades}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>{Detail.Spec.Power}</td>
                    </tr>
                  </table>
                </Tab>
                <Tab eventKey="download" title="Download">
                  <div className="text-center">
                    <Button
                      href={Detail.File}
                      className="text-center table-spec"
                    >
                      Download
                    </Button>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
          {/* <Button className="buttonAdd" onClick={() => Add(Detail)}>
            Add to Cart
          </Button> */}
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default ShowProduct;
