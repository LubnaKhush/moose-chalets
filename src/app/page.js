import Blogs from "@/sections/Blogs";
import ContactForm from "@/sections/Contact";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import Navbar from "@/sections/Navbar";
import RoomCategories from "@/sections/Packages";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import WhoWeAre from "@/sections/WhoWeAre";
import React from "react";

function Home() {
  return (
    <div>
    
      <HeroSection />
      <WhoWeAre />
      <Services />
      <RoomCategories />
      <Blogs/>
      <Testimonials />
      <ContactForm />
  
    </div>
  );
}

export default Home;
