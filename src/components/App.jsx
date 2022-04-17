import React from "react";
import Header from "./header/Header.jsx"
import Nav from "./nav/Nav.jsx"
import Contact from "./contact/Contact.jsx"
import Experience from "./experience/Experience.jsx";
import Footer from "./footer/Footer.jsx"
import About from "./about/About.jsx"
// import Testimonials from "./testimonials/Testimonials.jsx"
import Portfolio from "./portfolio/Portfolio.jsx"
import Services from "./services/Services.jsx";

function App() {



  return (
  
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact />
    <Footer />
  

    </>


  );
}

export default App;