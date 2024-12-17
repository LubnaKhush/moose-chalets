"use client";
import wifiImage from "../../public/assets/wifi.svg";
import securityImage from "../../public/assets/security.svg";
import serviceImage from "../../public/assets/room-service.svg";
import waterImage from "../../public/assets/hot-water.svg";
import ServicesImage1 from "../../public/assets/services-image1.jpeg";
import ServicesImage2 from "../../public/assets/services-image2.jpeg";
import servicesImage5 from "../../public/assets/img-services.jpeg"
import ServicesImage4 from "../../public/assets/services-image4.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div
      id="services"
      className="py-8 bg-sectionBackground lg:container lg:mx-auto px-2 font-Poppins  sm:px-6 lg:px-8"
    >
      <div className="md:text-center max-w-7xl p-3 mx-auto">
        <h2 className="text-2xl  md:text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
          Services and Amenities for Your Comfort
        </h2>
        <p className="mt-4 text-lg tracking-wider  leading-[150%] text-paragraph text-justify md:text-center">
          Enjoy 24/7 room service, high-speed Wi-Fi access, high-class security,
          and warm water to ensure your stay is comfortable and convenient.
          Experience exceptional hospitality tailored to meet your every need.
        </p>
      </div>
      <div className=" mt-5 md:mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-10">
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={serviceImage}
              height={40}
              width={40}
              alt="service-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            24/7 Room Service
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Enjoy 24-hour room service with delicious meals and drinks delivered
            right to your door anytime.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={wifiImage}
              height={40}
              width={40}
              alt="wifi-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Fast & Free Wifi
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Stay connected with our fast and free Wi-Fi, available throughout
            the hotel for your convenience.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={securityImage}
              height={40}
              width={40}
              alt="security-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Hi-Class Security
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Experience high-class security for your peace of mind, ensuring a
            safe and secure environment.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={waterImage}
              height={40}
              width={40}
              alt="water-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Warm Water
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Enjoy warm water in your room for a relaxing experience any time you
            need it.
          </p>
        </div>
      </div>

      <div className="space-y-4 md:space-y-12 px-3 mt-8 md:mt-24  font-Poppins">
        {/* section 1 */}
        <div>
          <div className="flex flex-col md:flex-row  gap-4 xl:gap-6">
            <div className="md:w-1/2">
              <Image
                src={ServicesImage1}
                width={1000}
                height={1000}
                alt="Mountain-Facing Room"
                className="  w-full  h-[90%] my-6   object-cover rounded-[20px]"
              />
            </div>

            <div className="md:w-1/2 sm:p-4">
              <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold md:font-bold  mb-3 sm:mb-4 border-l-[6px] p-2 md:p-4 xl:p-5 border-heading text-subHeading">
                Mountain-Facing Rooms
              </h2>
              <p className="text-[14px]  md:text-base md:mt-5 lg:leading-[150%] lg:text-xl  pl-2 md:pl-5 text-paragraph mb-4 text-justify ">
                Experience the stunning beauty of Hunza Valley from our mountain
                rooms, where breathtaking views of majestic peaks await you.
                Each room is designed for comfort and tranquility, offering
                modern amenities to make your stay relaxing. Wake up to the
                sight of snow-capped mountains and enjoy the peaceful ambiance
                that surrounds you. Our rooms feature large windows that invite
                natural light and allow you to immerse yourself in the
                picturesque landscape. Whether you’re sipping morning tea or
                unwinding after a day of adventure, our mountain-facing rooms
                provide the perfect backdrop for a memorable getaway in nature’s
                paradise.
              </p>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div>
          <div className="flex flex-col-reverse md:flex-row  gap-4 xl:gap-6">
            <div className="md:w-1/2 sm:p-4">
              <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold md:font-bold  mb-3 sm:mb-4 border-l-[6px] p-2 md:p-4 xl:p-5 border-heading text-subHeading">
                Embrace Nature's Beauty
              </h2>
              <p className="text-[14px]  md:text-base md:mt-5 lg:leading-[150%] lg:text-xl  pl-2 md:pl-5 text-paragraph mb-4 text-justify ">
                Immerse yourself in the breathtaking natural beauty of Hunza
                Valley. Surrounded by lush landscapes, towering mountains, and
                serene rivers, our hotel offers the perfect escape for nature
                lovers. Explore scenic trails, witness stunning sunsets, and
                experience the tranquility of the great outdoors. Each moment
                spent here allows you to reconnect with nature and rejuvenate
                your spirit. Enjoy guided tours and outdoor activities that
                showcase the valley's rich flora and fauna. Whether you're
                seeking adventure or relaxation, our stunning surroundings will
                leave you captivated and inspired throughout your stay.
                Experience the essence of nature like never before!
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={ServicesImage2}
                width={1000}
                height={500}
                alt="Mountain-Facing Room"
                className="  w-full  h-[90%]  my-6  object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div>
          <div className="flex flex-col md:flex-row  gap-4 xl:gap-6">
            <div className="md:w-1/2">
              <Image
                src={servicesImage5}
                width={1000}
                height={1000}
                alt="Mountain-Facing Room"
                className="  w-full  h-[90%] my-6  object-cover rounded-[20px]"
              />
            </div>

            <div className="md:w-1/2 sm:p-4">
              <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold md:font-bold  mb-3 sm:mb-4 border-l-[6px] p-2 md:p-4 xl:p-5 border-heading text-subHeading">
                Savor Exquisite Cuisine
              </h2>
              <p className="text-[14px]  md:text-base md:mt-5 lg:leading-[150%] lg:text-xl  pl-2 md:pl-5 text-paragraph mb-4 text-justify ">
                Delight your taste buds with our exquisite culinary offerings,
                featuring a blend of traditional and modern flavors. Our skilled
                chefs use fresh, locally sourced ingredients to create dishes
                that celebrate the rich heritage of Hunza Valley. From hearty
                breakfasts to gourmet dinners, every meal is crafted with care
                to ensure an unforgettable dining experience. Enjoy a variety of
                options, including regional specialties and international
                cuisine, all served in a warm and inviting atmosphere. Whether
                you're dining in our restaurant or enjoying room service, our
                commitment to quality and taste will elevate your stay. Savor
                every bite with us!
              </p>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div>
          <div className="flex flex-col-reverse md:flex-row  gap-4 xl:gap-6">
            <div className="md:w-1/2 sm:p-4">
              <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold md:font-bold  mb-3 sm:mb-4 border-l-[6px] p-2 md:p-4 xl:p-5 border-heading text-subHeading">
                Pristine Cleanliness
              </h2>
              <p className="text-[14px]  md:text-base md:mt-5 lg:leading-[150%] lg:text-xl  pl-2 md:pl-5 text-paragraph mb-4 text-justify ">
                At our hotel, we prioritize cleanliness and a neat environment
                to ensure your comfort throughout your stay. Our dedicated
                housekeeping team maintains the highest standards of hygiene,
                ensuring that your room is meticulously cleaned and
                well-organized. We use eco-friendly products to promote a
                healthy atmosphere while being mindful of the beautiful
                environment surrounding us. From sparkling bathrooms to freshly
                made beds, every detail is carefully attended to. Enjoy peace of
                mind knowing that your comfort and well-being are our top
                priorities. Experience a welcoming space where you can relax and
                unwind in a spotless, serene setting.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src={ServicesImage4}
                width={1000}
                height={1000}
                alt="Mountain-Facing Room"
                className="  w-full  h-[90%] my-6  object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
