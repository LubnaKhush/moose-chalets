"use client";
import React from "react";
import Room1 from "../../public/assets/room-catig1.jpeg";
import Room2 from "../../public/assets/image5.jpeg";
import Room3 from "../../public/assets/Room4.jpeg";
import Image from "next/image";

function RoomCard({
  title,
  description,
  roomImage,
  price,
  buttonText,
  services,
}) {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white border rounded-lg shadow-lg p-2 md:p-6 m-2 max-w-xs md:max-w-sm lg:max-w-md">
      <div className="h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden">
        <Image
          src={roomImage}
          alt={`${title} image`}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm sm:text-lg font-bold text-green-700">{price}</span>
        <button
          onClick={() => scrollTo("contact")}
          className="bg-heading hover:bg-subHeading text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function RoomCategories() {
  return (
    <div className="container mx-auto place-items-center px-4 my-12  md:my-16">
      <h1 className="text-3xl text-center  font-bold  text-heading mb-8">
        Room Categories and Tariffs
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore our range of rooms, each thoughtfully designed with unique
        amenities to ensure a comfortable and memorable stay.
      </p>
      <div className=" grid grid-cols-1 place- md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RoomCard
          title="King Bed Room"
          description="Enjoy panoramic valley views from a spacious king-size bed room, complete with a private balcony and Jacuzzi."
          roomImage={Room1}
          price="Rs. 15,000 per night"
          buttonText="Book Now"
          services={[
            "Breakfast included",
            "King-size bed",
            "Max 3 guests",
            "Ground Floor or First Floor",
            "4 rooms available",
            "Extra Mattress Provided on Request",
          ]}
        />
        <RoomCard
          title="Twin Bed Room"
          description="A cozy twin bed room with panoramic valley views, private balcony, and Jacuzzi for ultimate relaxation."
          roomImage={Room2}
          price="Rs. 15,000 per night"
          buttonText="Book Now"
          services={[
            "Breakfast included",
            "2 single beds",
            "Max 3 guests",
            "Ground Floor or First Floor",
            "2 rooms available",
            "Extra Mattress Provided on Request",
          ]}
        />
        <RoomCard
          title="First Floor Room"
          description="An elegant suite with stunning valley views, king-size bed, private balcony, and Jacuzzi for a luxurious stay."
          roomImage={Room3}
          price="Rs. 13,000 per night"
          buttonText="Book Now"
          services={[
            "Witout Breakfast",
            "King-size bed",
            "Max 3 guests",
            "Ground Floor or First Floor",
            "2 rooms available",
            "Extra Mattress Provided on Request",
          ]}
        />
      </div>
    </div>
  );
}

export default RoomCategories;
