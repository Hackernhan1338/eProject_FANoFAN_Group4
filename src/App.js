import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import BrandsProducts from "./Components/Brands/BrandsProducts";
import Feedback from "./Components/Feedback/Feedback";
import Customer from "./Components/Customer/Customer";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "react-bootstrap";
import ShowProduct from "./Components/Products/ShowProduct";
import MainProduct from "./Components/Products/MainProduct";
import FilterProduct from "./Components/Categories/FilterProduct";
import MainMenu from "./Components/MainMenu/MainMenu";
import MainGallery from "./Components/Gallery/MainGallery";

import { AnimatePresence } from "framer-motion";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Data.json";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCart = [];

function App() {
  const location = useLocation();
  const HandleCart = (Data) => {
    const AddData = Product.filter((x) => x.ID === Data.ID);
    ProductCart.push(AddData);
  };
  return (
    <div className="App">
      <div className="sec1">
        <Header />
      </div>
      <div>
        <MainMenu />
      </div>
      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage Add={HandleCart} />} />
            <Route
              path="/products"
              element={<MainProduct Add={HandleCart} />}
            />
            <Route
              path="/Category/:id"
              element={<FilterProduct Add={HandleCart} />}
            />
            <Route
              path="/ShowProduct/:id"
              element={<ShowProduct Add={HandleCart} />}
            />
            <Route
              path="/brands/:id"
              element={<BrandsProducts Add={HandleCart} />}
            />
            <Route path="/gallery" element={<MainGallery />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>

          <Routes>
            <Route
              path="/Cart"
              element={<Cart Add={HandleCart} CartData={ProductCart} />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
