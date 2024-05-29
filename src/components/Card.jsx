import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="2xl:max-w-4xl max-w-sm mx-auto bg-transparent/ shadow-md overflow-hidden transform transition duration-500 hover:scale-105 mb-8 backdrop-blur-lg rounded-lg">
      <div
        className="bg-cover 2xl:h-56 h-40"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="2xl:p-10 p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
