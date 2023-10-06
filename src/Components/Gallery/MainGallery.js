import { useState } from "react";
import Product from "../Data.json";
import { Container, Row, Col } from "react-bootstrap";
import FilterProduct from "../Categories/FilterProduct";
import ShowProduct from "../Products/ShowProduct";
import FilterGallery from "./FilterGallery";
import ShowGallery from "./ShowGallery";

const AllSelect = [
  "All",
  ...new Set(Product.map((item) => item.Spec.Efd.Name)),
];

function MainGallery() {
  const [galleryitem, setGalleryitem] = useState(Product);
  const [Selection, setSelection] = useState(AllSelect);

  function handlefilter(select) {
    if (select === "All") {
      setGalleryitem(Product);
      return;
    }
    const GalleryProduct = Product.filter(
      (item) => item.Spec.Efd.Name === select
    );
    setGalleryitem(GalleryProduct);
  }

  return (
    <div>
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <ShowGallery Selection={Selection} Selectitem={handlefilter} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FilterGallery Filterproduct={galleryitem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainGallery;
