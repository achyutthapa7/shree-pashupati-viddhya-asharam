"use client";
import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-auto py-28 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Gallery
      </h1>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Image {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="absolute top-0 right-0 m-2 text-white bg-black rounded-full p-2 hover:bg-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
