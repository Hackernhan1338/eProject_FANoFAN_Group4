import { useParams } from "react-router-dom";
import Data from "../Data.json";
import { useEffect, useState } from "react";
import { Col, Row, Container, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MainPagination from "../Pagination/Pagination";
import _ from "lodash";
import "./FilterProducts.scss";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function FilterProduct({ Add }) {
  const { id } = useParams();
  let Show = Data.filter((item) => item.Spec.Efd.Id == id);
  let Title = Show.slice(0, 1);
  const ProPerPage = 4;
  const [Page, setPage] = useState(1);
  function HandlePage({ selected: select }) {
    setPage(select);
  }
  const cut = Page * ProPerPage;
  const PageCount = Math.ceil(Show.length / ProPerPage);
  const [SortData, setSortData] = useState(Show);

  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const HandleSort = (x) => {
    const { name, value } = x.target;
    setSort((chose) => ({ ...chose, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const Sorted = _.orderBy(Show, [sort.by], [sort.order]);
      setSortData(Sorted);
      console.log("Sort", SortData);
    }
  }, [sort]);

  const PageData = SortData.slice(cut, cut + ProPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Row>
          {Title.map((item, index) => (
            <div className="mt-3 categories-title" key={index}>
              {item.Spec.Efd.Name}
            </div>
          ))}
        </Row>
        <select
          name="by"
          id=""
          className="Sort"
          onChange={HandleSort}
          value={sort.by}
        >
          <option className="option" value="default">
            Sort By
          </option>
          <option className="option" value="Price">
            Price
          </option>
          <option className="option" value="Name">
            Name
          </option>
        </select>
        <select
          name="order"
          id=""
          className="Sort"
          onChange={HandleSort}
          value={sort.order}
        >
          <option className="option" value="asc">
            Ascending
          </option>
          <option className="option" value="desc">
            Descending
          </option>
        </select>
        <Row>
          {PageData.map((items, index) => (
            <Col xs={12} sm={6} md={6} lg={3} key={index}>
              <Card className="mt-3 mb-3 card-products-categories">
                <NavLink
                  to={`/ShowProduct/${items.ID}`}
                  className=" detail-link-card"
                >
                  <Card.Img
                    variant="top"
                    src={items.Img1}
                    alt={items.Name}
                    className="img-card-rpoducts"
                  />{" "}
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
        <Row>
          <MainPagination PageCount={PageCount} HandlePage={HandlePage} />
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default FilterProduct;
