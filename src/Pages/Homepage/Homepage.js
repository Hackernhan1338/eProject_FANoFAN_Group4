import Footer from "../../Components/Footer/Footer";
import Maincontent from "../../Components/Maincontent/Maincontent";
import Slideshow from "../../Components/Sideshow/Slideshow";

function Homepage() {
  return (
    <div className="homepage">
      <Slideshow />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default Homepage;
