import "./MainMenu.scss";
import { NavDropdown } from "react-bootstrap";
import Category from "../Categories/Category.json";
import Brands from "../Brands/Brands.json";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu() {
  return (
    <div className="mainmenu">
      <div className="mainmenu-content">
        <Navbar expand="lg">
          <Container fluid="md">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className="mainmenu-item me-3">
                  HOMEPAGE
                </Nav.Link>
                <Nav.Link href="/products" className="mainmenu-item me-3">
                  PRODUCTS
                </Nav.Link>
                <NavDropdown
                  title="CATEGORY"
                  id="basic-nav-dropdown"
                  className="mainmenu-item me-3"
                >
                  {Category.map((item, index) => (
                    <NavDropdown.Item href={`/Category/${item.Id}`} key={index}>
                      {item.Name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="BRANDS"
                  id="navbarScrollingDropdown"
                  className="mainmenu-item me-3"
                >
                  {Brands.map((items, index) => (
                    <NavDropdown.Item href={`/brands/${items.id}`} key={index}>
                      {items.Name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link href="/gallery" className="mainmenu-item me-3">
                  GALLERY
                </Nav.Link>
                <Nav.Link href="/feedback" className="mainmenu-item me-3">
                  FEEDBACK
                </Nav.Link>
                <Nav.Link href="/customer" className="mainmenu-item me-3">
                  HELP CENTER
                </Nav.Link>
                <Nav.Link href="/contact" className="mainmenu-item">
                  CONTACT US
                </Nav.Link>
                <Nav.Link href="/aboutus" className="mainmenu-item">
                  ABOUT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default MainMenu;
