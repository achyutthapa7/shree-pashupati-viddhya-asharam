import Image from "next/image";

export default function Testimonialcard({ image, feedback, name }) {
  return (
    <div className="transition relative min-h-[330px] w-[320px] h-auto bg-white shadow-md rounded-2xl hover:scale-110 hover:shadow-2xl flex flex-col items-center p-5 quote">
      <div className="transition w-28 h-28 border-yellow-400 border-[5px] rounded-full hover:scale-110 shadow-lg p-1">
        {/* <Image
          src={image}
          alt="testimonials"
          className="w-full h-full object-cover rounded-full"
        /> */}
      </div>

      <p className="text-center text-slate-700 mt-3">{feedback}</p>

      <p className="text-gray-400">-{name}</p>
    </div>
  );
}
