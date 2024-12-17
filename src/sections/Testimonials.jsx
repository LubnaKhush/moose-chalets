"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

const testimonials = [
  {
    src: "/assets/testimonial1.png",
    name: "Việt Hoàng Phạm",
    feedback:
      "Magnificent mountain views and very friendly hosts. They prepared Vietnamese ingredients for us to cook. The hotel is new, well-organized, and the rooms are clean.",
    date: "2 months ago",
    rating: 5,
  },
  {
    src: "/assets/testimonial4.png",
    name: "Fatik Owais",
    feedback:
      "Stunning views with a European vibe—this hidden gem is a must-visit. Friendly host, simple breakfast, and despite occasional off-season electricity issues, it's a fantastic spot to enjoy Hunza.",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    src: "/assets/testimonial2.png",
    name: "Nikhil Satiani",
    feedback:
      "Quiet neighborhood, minutes from the market. Clean, stylish rooms with reliable amenities and amazing views. Nazir bhai’s hospitality makes it a 10/10 experience!",
    date: "1 month ago",
    rating: 5,
  },
  {
    src: "/assets/testimonial3.png",
    name: "Ahsan Ilyas",
    feedback:
      "Great location, just a 2-minute walk to Karimabad market. Beautiful atmosphere, amazing views, and friendly staff. Clean, stylish, and spacious with excellent service. I enjoyed my stay and hope to return.",
    date: "1 month ago",
    rating: 5,
  },
  {
    src: "/assets/testimonial5.png",
    name: "altan Fulgoi",
    feedback:
      "One of the best places I stayed at. The warmth of the hosts, attention to detail, and the chalet’s quality made my stay memorable. Bonus: stunning views and a playful, intelligent pet.",
    date: "4 weeks ago",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function TestimonialSlider() {
  return (
    <div className=" bg-white text-black" id="testimonials">
      <div className="container mx-auto px-4 sm:px-16">
        <h2 className="text-3xl mt-16 text-center  font-bold text-heading mb-6">
          What Our Guests Say
        </h2>
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex mt-12 min-h-[400px] sm:min-h-[400px] flex-col items-center text-center md:pt-12 bg-gray-100  rounded-lg shadow-md transition-transform duration-300 hover:scale-105 md:min-h-[450px]"
              >
                <div className="flex justify-center my-4">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover w-24 h-24"
                  />
                </div>
                <i className="text-lg font-semibold text-black">
                  {testimonial.name}
                </i>
                <p className="text-gray-700 text-justify text-sm p-4">
                  {testimonial.feedback}
                </p>
                <div className="flex justify-center">
                  <StarRating className="" rating={testimonial.rating} />
                </div>
                <span className="text-gray-500  text-xs">
                  {testimonial.date}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-end mt-6">
          <Link href="https://www.google.com/maps/place/Moose+Chalet/@36.3279221,74.6614297,17z/data=!3m1!4b1!4m12!1m5!8m4!1e2!2s115105778246777721829!3m1!1e1!3m5!1s0x38e8a1d8a2cc36d5:0x2d5354c3daa734a5!8m2!3d36.3279178!4d74.6640046!16s%2Fg%2F11t86ykpjt?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">
            <button className="flex items-center text-black bg-yellow-500 hover:bg-yellow-600 font-semibold py-2 px-4 rounded">
              View Google Reviews <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
