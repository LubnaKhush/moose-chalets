"use client";

import React, { useState, useEffect } from 'react';
import PaymentModal from "./PaymentModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [image, setImage] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [mattressOption, setMattressOption] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      setLoading(false)
      return;
    }
    if (!/^\d{5,}$/.test(documentNumber)) {
      alert("Document number must be at least 5 digits.");
      setLoading(false)
      return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      alert("Date must be today or in the future.");
      setLoading(false)
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("documentNumber", documentNumber);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("paymentMethod", paymentMethod);
    formData.append("guestCount", guestCount);
    formData.append("mattressOption", mattressOption);
    formData.append("date", date);

    if (image) {
      formData.append("attachment", image); // Attach the image file
    }
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: formData,
    });

   

    if (response.status === 200) {
      setLoading(false);
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 12000); // Close modal after 8 seconds
    } else {
      alert("Something went wrong, please try again.");
      setLoading(false);
    }

    setName("");
    setEmail("");
    setPhone("");
    setDocumentNumber("");
    setSubject("");
    setMessage("");
    setPaymentMethod("cash");
    setImage(null);
    setGuestCount(1);
    setMattressOption("");
    setDate("");
    setLoading(false);
    // Prepare email data
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(file);
    } else {
      alert("Image file size should be less than 2MB.");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

 

  return (
    <div id="contact" className="container mx-auto px-4 py-24">
      <h2 className="text-3xl text-center font-bold text-heading mb-8">
        Book Now
      </h2>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex max-w-4xl mx-auto flex-col gap-4"
        >
          <div>
            <label htmlFor="name" className="block text-heading font-bold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-heading font-bold mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-heading font-bold mb-2"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter title"
              type="text"
              id="subject"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-heading font-bold mb-2"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              id="phone"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="documentNumber"
              className="block text-heading font-bold mb-2"
            >
              Passport or ID Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="documentNumber"
              placeholder="Enter Passport Number or ID Card Number"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-heading font-bold mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Briefly add your message"
              id="message"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-heading font-bold mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="guestCount"
              className="block text-heading font-bold mb-2"
            >
              Number of Guests <span className="text-red-500">*</span>
            </label>
            <select
              id="guestCount"
              className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              required
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="mattressOption"
              className="block mt-5 text-heading font-bold mb-2"
            >
              Mattress <span className="text-gray-500">(optional)</span>
            </label>
            <div>
              <label className="flex  items-center">
                <input
                  type="checkbox"
                  className="mr-2 border-none  bg-gray-100 py-4 leading-tight"
                  checked={mattressOption === "needed"}
                  onChange={(e) =>
                    setMattressOption(e.target.checked ? "needed" : "")
                  }
                />
                <span className="text-heading font-bold">Needed?</span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="paymentMethod"
              className="block border-none  py-4 text-heading font-bold mb-2"
            >
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              id="paymentMethod"
              className="shadow  bg-gray-100 appearance-none border rounded w-full  px-3 text-heading py-3 leading-tight focus:outline-none focus:shadow-outline"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="cash">Cash</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          {paymentMethod === "bank" && (
            <div>
              <label
                htmlFor="image"
                className="block text-heading font-bold mb-2"
              >
                  Upload Transaction Snapshot <span className="text-red-500">*</span> (max 2MB)
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="shadow-lg shadow-gray-200 border-none  bg-gray-100 py-4 appearance-none border rounded w-full  px-3 text-heading leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleImageChange}
                required
              />
            </div>
          )}
     
          <button
            type="submit"
            className="p-2 mt-1 py-2  px-6 rounded-lg bg-heading hover:bg-subHeading text-white font-bold text-xl"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          
        </form>
           <div className=" my-3 max-w-4xl mx-auto">
            <button
              onClick={()=>setIsModalOpen(true)}
              className=" bg-gray-100   border border-gray-800 w-full text-heading font-bold py-2  px-6 rounded-lg shadow-lg transition-transform transform hover:bg-gray-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Read Note
            </button>
{         status   && <BookingConfirmation  />} 


          </div>

        <div className=" max-w-3xl mx-auto justify-center items-center">
          <PaymentModal
            className="max-w-3xl"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;






const BookingConfirmation = () => {
  
  return (
    <div>
   
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-800">Booking Details Received</h3>
        <p className="text-gray-600 mt-4">
          We have received your details and sent a confirmation email to your inbox. Please check your inbox for further information.
        </p>
        <p className="text-gray-600 mt-4">
          If anything is incorrect, we will verify your identity and send you a final confirmation email once everything is confirmed.
        </p>
        <p className="text-gray-600 mt-4">
          Thank you for your patience. For more details, feel free to contact us at <a href="mailto:moosechalet@gmail.com" className="text-blue-500">moosechalet@gmail.com</a>.
        </p>
      </div>
    </div>


    </div>
  );
};


