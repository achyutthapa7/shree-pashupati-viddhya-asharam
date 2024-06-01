import Image from "next/image";
import Slider from "react-slick";

export default function Testimonial({ testimonials, settings }) {
  return (
    <div className="relative bg-gray-100 w-full py-32 overflow-x-hidden">
      <div className="text-center mb-10">
        <h2 className="text-lg text-gray-900">Testimonials</h2>
        <p className=" text-gray-700 text-3xl font-extrabold">
          What our students and parents say
        </p>
      </div>
      <Slider {...settings} className="max-w-3xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="transition ease-in-out duration-500 rounded-full mx-auto mb-4 hover:scale-105 shadow-2xl "
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {testimonial.name}
            </h3>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
