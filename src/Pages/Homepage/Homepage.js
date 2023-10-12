import Footer from "../../Components/Footer/Footer";

import Maincontent from "../../Components/Maincontent/Maincontent";
import Slideshow from "../../Components/Sideshow/Slideshow";
import { motion } from "framer-motion";
//import "./Homepage.scss";

function Homepage({ Add }) {
  // // // Get the button
  // let mybutton = document.getElementById("myBtn");

  // // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function() {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // // // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <button
        onClick={topFunction}
        className="scrolling-top"
        id="myBtn"
        title="Go to top"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button> */}
      <Slideshow />
      <Maincontent Add={Add} />
      <Footer />
    </motion.div>
  );
}

export default Homepage;
