import "./Footer.scss";

import { Link } from "react-router-dom";
import Logo from "./img-Footer/Logo-footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo-phone">
          <img className="footer-logo" src={Logo} alt="logo" />
          <div className="footer-phone">
            <i class="fa-solid fa-phone"></i> (+84) 000 000 0000
          </div>
        </div>
        <div className="footer-address-email">
          <div className="footer-email">
            <i class="fa-solid fa-envelope"></i> fanofan@gmail.com
          </div>
          <div className="footer-address">
            <i class="fa-solid fa-location-dot"></i> 590 Cach Mang Thang Tam,
            Q3, TPHCM
          </div>
        </div>

        <div className="footer-social">
          <div className="footer-follow">Follow us:</div>
          <div className="footer-social-icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="footer-about">
          <p className="footer-about-title">About</p>
          <div>
            <ul>
              <li className="footer-about-list">
                <Link className="footer-about-link">About us</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Contact us</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">All items</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Privacy policy</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Term and Condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-customer">
          <p className="footer-customer-title">Customer</p>
          <div>
            <ul>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">My account</Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">Wishlist</Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">ShoppingCart</Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">Customer Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-final">
        <div className="text-hr">
          <hr />
        </div>
        <p className="footer-final-text">
          &copy; FANoFAN 2023. All Right Reservered.
        </p>
      </div>
    </div>
  );
}

export default Footer;
