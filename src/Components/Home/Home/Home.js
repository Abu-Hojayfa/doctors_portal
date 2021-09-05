import React from "react";
import Appointment from "../Appointment/Appointment";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Appointment />
      <Testimonial />
      <Blogs />
      <OurDoctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
