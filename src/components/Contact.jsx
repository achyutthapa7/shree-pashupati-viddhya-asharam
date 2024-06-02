import React from "react";

const Contact = () => {
  return (
    <div className="h-auto py-28">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h1>

      <div className="w-full flex h-auto">
        <div className="flex-1">
          <div>
            <input
              type="email"
              id="email"
              className="border-2 border-black p-2 w-3/4"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.0541811523975!2d82.39988730600801!3d28.05908840283307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399793f934185c27%3A0x494495cc9bce4c73!2sShree%20pashupati%20viddya%20ashram%20(high%20level%20school)!5e0!3m2!1sen!2snp!4v1717349550888!5m2!1sen!2snp"
            width="600"
            height="450"
            className="border-black border-2"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
