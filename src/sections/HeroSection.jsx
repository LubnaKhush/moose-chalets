"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import { useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/image.webp",
    title: "Welcome to Moose Chalets",
    description: "Experience the beauty of nature and luxury in one place.",
  },
  {
    src: "/assets/image5.jpeg",
    title: "Luxurious Rooms with Stunning Views",
    description: "Discover the rich heritage and traditions.",
  },

  {
    src: "/assets/image2.jpeg",
    title: "Relax in Comfort",
    description: "Enjoy our well-furnished rooms with stunning views.",
  },
  {
    src: "/assets/image3.jpeg",
    title: "Explore Stunning Views",
    description: " Savor delicious meals with stunning landscapes.",
  },
  {
    src: "/assets/image4.jpeg",
    title: "Unwind in Nature",
    description: "Take a break and enjoy serene surroundings.",
  },
  {
    src: "/assets/image8.jpeg",
    title: "Peaceful Escape ",
    description: " Relax in quiet, tranquil settings.",
  },
  {
    src: "/assets/image9.jpeg",
    title: "Explore the Outdoors",
    description: "Adventure awaits with hiking, biking, and more.",
  },
  {
    src: "/assets/image7.jpeg",
    title: "Dine with a View",
    description: "Create unforgettable memories at Mossess Chalets.",
  },
  {
    src: "/assets/image11.jpeg",
    title: "Sunset Views ",
    description: "Witness stunning sunsets from your room",
  },
];

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="relative bg-sectionBackground w-full h-screen"
    >
      <Swiper
        modules={[Pagination, Autoplay, Navigation]} // Include Autoplay module
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1700 }} // Set autoplay delay
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <Image
            priority={true}
              width={2680} // Set width
              height={1280} // Set height
             
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col  justify-center sm:items-center text-white p-4">
              <h2 className="text-2xl sm:text-4xl font-Poppins  font-bold mb-2 t">
                {image.title}
              </h2>
              <p className="text-base sm:text-lg">{image.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="sm:block hidden">
          <div className="swiper-button-prev " />
          <div className="swiper-button-next " />
        </div>
      </Swiper>
    </div>
  );
}
