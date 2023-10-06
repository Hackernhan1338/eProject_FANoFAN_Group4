import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MainMenu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<MainProduct />} />
          <Route path="/Category/:id" element={<FilterProduct />} />
          <Route path="/ShowProduct/:id" element={<ShowProduct />} />
          <Route path="/brands/:id" element={<BrandsProducts />} />
          <Route path="/gallery" element={<MainGallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
