import { useState } from "react";
import testimonial1 from "../assets/1.jpg";
import testimonial2 from "../assets/2.jpg";
import testimonial3 from "../assets/3.jpg";
import Testimonialcard from "./Testimonialcard";

export default function Testimonial() {
  const testimonials = [
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
    {
      image: testimonial2,
      name: "Jane Smith",
      feedback:
        "A wonderful place for kids to learn and grow. The staff is very supportive and the environment is nurturing.",
    },
    {
      image: testimonial3,
      name: "Sam Wilson",
      feedback:
        "I highly recommend this school. It offers a perfect blend of academics and extracurricular activities.",
    },
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Calculate testimonials for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="relative bg-gray-50 w-full py-20 h-auto">
      <p className="text-center text-xl">Testimonials</p>
      <p className="text-3xl font-bold text-center text-gray-800 mb-10">
        What People Say?
      </p>
      <div className="w-full h-auto flex justify-center items-center flex-wrap gap-5 3xl:px-[700px] 2xl:px-[700px]">
        {currentTestimonials.map((item, index) => (
          <Testimonialcard
            key={index}
            image={item.image}
            feedback={item.feedback}
            name={item.name}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
