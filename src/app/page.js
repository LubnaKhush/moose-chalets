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
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <Services />
      <RoomCategories />
      <Testimonials />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default Home;
