import { Container } from "react-bootstrap";
import "./Header.scss";
import Logo from "./imgHeader/LOGO2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container fluid="md">
      <div className="header">
        <div className="header-content">
          <div className="header-left-logo">
            <img className="header-img-logo" src={Logo} alt="logo" />
          </div>
          <div className="header-center-search">
            <div class="search-bar">
              <input type="text" class="textbox" placeholder="Search..." />
              <Link class="search-btn" href="#">
                <p>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </p>
              </Link>
            </div>
          </div>
          <div className="header-right-cart-login">
            <div className="header-login">Log in</div>
            <div className="header-cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
