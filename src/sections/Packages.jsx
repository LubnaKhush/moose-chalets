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
          title="Twin Bed Room"
          description="A cozy twin bed room with panoramic valley views and a private balcony for ultimate relaxation."
          roomImage={Room2}
          price="Rs. 18,000/day"
          buttonText="Book Now"
          services={[
           
            "Ground Floor",
            "2 twin beds",
            "1 king bed",
            "Max 3 guests",
            "Extra Mattress Provided on Request",
          ]}
        />
        <RoomCard
          title="King Bed Room"
          description="Relax in a spacious king-size bedroom featuring stunning valley views and a private balcony for your comfort."
          roomImage={Room1}
          price="Rs. 20,000/day"
          buttonText="Book Now"
          services={[
          
            'First Floor', 
            "3 king beds",
            "Max 3 guests",
            "Extra Mattress Provided on Request",
          ]}
        />
 <RoomCard
  title="Breakfast Add-On"
  description="Enhance your stay with a premium breakfast experience for Rs. 2,000/day."
  roomImage={Room2} // Replace with a relevant image
  price="+ Rs. 2,000/day"
  buttonText="Book Now"
  services={[
    "Fresh & Organic Meals",
    "Traditional & Continental Options",
    "Served in-room or restaurant",
    "Variety of Hot & Cold Beverages",
    "Nutritious & Balanced Choices",
    "Customized Dietary Options Available",
  ]}
/>
      </div>
    </div>
  );
}

export default RoomCategories;
