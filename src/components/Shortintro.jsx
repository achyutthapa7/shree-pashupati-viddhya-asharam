import Image from "next/image";
import Link from "next/link";

export default function Shortintro({ img3 }) {
  return (
    <div className="h-auto w-full bg-gray-100 relative px-7 flex lg:flex-row flex-col gap-5 py-40 2xl:h-screen">
      <div className="flex-1 overflow-hidden rounded-lg ">
        <Image
          src={img3}
          alt="image"
          className="transition ease-linear delay-100 duration-[500ms] hover:scale-125 hover:rotate-2 rounded-lg shadow-2xl"
        />
      </div>
      <div className="flex-1 h-auto ">
        <p className="text-3xl font-thin text-gray-400 tracking-tighter mb-2 2x:text-4xl">
          Welcome To
        </p>
        <p className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-gray-900 mb-3 2xl:text-4xl 2xl:mb-7">
          Shree Pashupati Viddhya Asharam
        </p>
        <p className="tracking-wide text-lg leading-9 text-justify text-gray-700 2xl:leading-10 2xl:text-2xl">
          Shree Pashupati Viddhya Asharam is an esteemed educational institution
          located in Dang District, Ghorahi-10, Narayapur, Dang. Established
          with a mission to impart quality education, the school caters to
          students up to Class 10.
          <span className="hidden 2xl:block leading-10 text-2xl">
            Shree Pashupati Viddhya Asharam is dedicated to nurturing the
            intellectual and personal growth of its students, ensuring they
            emerge as well-rounded individuals ready to contribute positively to
            society. With a strong emphasis on academic excellence and character
            development, the school offers a comprehensive curriculum that
            includes a wide range of extracurricular activities.Over the years,
            it has grown and evolved, continually enhancing its educational
            offerings to meet the changing needs of society. The school&apos;s
            commitment to excellence has made it a trusted institution among the
            local community, fostering a nurturing environment that promotes
            lifelong learning and personal development.
          </span>
          <Link
            href={"/about"}
            className="text-blue-800 block hover:text-blue-700"
          >
            Read More....
          </Link>
        </p>
      </div>
    </div>
  );
}
