"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const { Name, Email, Message } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await SENDFORMDATA();
    setIsLoading(false);
  };

  const SENDFORMDATA = async () => {
    try {
      if (Name !== "" && Email !== "" && Message !== "") {
        const res = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Name, Email, Message }),
        });
        const data = await res.json();
        alert(data);
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        alert("ALL FIELDS ARE REQUIRED!!!");
      }
    } catch (error) {
      console.error(error.message);
      alert("Failed to send email");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-auto py-28 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-2 border-gray-300 p-2 w-full rounded"
                  placeholder="Your Name"
                  name="Name"
                  value={Name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-2 border-gray-300 p-2 w-full rounded"
                  placeholder="Your Email"
                  name="Email"
                  value={Email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="border-2 border-gray-300 p-2 w-full rounded"
                  placeholder="Your Message"
                  name="Message"
                  value={Message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 active:bg-blue-700 flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.0541811523975!2d82.39988730600801!3d28.05908840283307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399793f934185c27%3A0x494495cc9bce4c73!2sShree%20pashupati%20viddya%20ashram%20(high%20level%20school)!5e0!3m2!1sen!2snp!4v1717349550888!5m2!1sen!2snp"
              width="100%"
              height="400"
              className="border-2 border-gray-300 rounded"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
