"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeMute,
  faVolumeUp,
  faBook,
  faChalkboardTeacher,
  faFutbol,
  faUtensils,
  faLaptop,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import video from "../assets/video.mp4";
import Card from "./Card";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import img3 from "../assets/3.jpg";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const offers = [
    {
      title: "Quality Education",
      desc: "We provide top-notch education ensuring academic excellence.",
      icon: faBook,
    },
    {
      title: "Skilled Teachers",
      desc: "Our teachers are highly qualified and experienced.",
      icon: faChalkboardTeacher,
    },
    {
      title: "Playground",
      desc: "A large playground for sports and recreational activities.",
      icon: faFutbol,
    },
    {
      title: "Canteen",
      desc: "Healthy and nutritious food available at our canteen.",
      icon: faUtensils,
    },
    {
      title: "Computer Lab",
      desc: "State-of-the-art computer lab with modern equipment.",
      icon: faLaptop,
    },
    {
      title: "Extra-Curricular Activities",
      desc: "A variety of clubs and activities to foster creativity and teamwork",
      icon: faRunning,
    },
  ];

  return (
    <section>
      {/* hero section */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted={isMuted}
          className="absolute w-full h-full object-center object-cover -z-20"
        ></video>
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full flex items-center justify-center z-30"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          <FontAwesomeIcon
            icon={isMuted ? faVolumeMute : faVolumeUp}
            className="lg:text-[25px] text-[20px]"
          />
        </button>

        <div className="absolute top-[30%] left-[10%]">
          <p className="text-white 2xl:text-8xl xl:text-5xl lg:text-5xl text-4xl font-extrabold tracking-wide 2xl:leading-[100px] xl:leading-[60px] lg:leading-[60px] md:leading-[60px] leading-[50px]">
            ONE GOAL ONE <br />
            MISSION, OUR <br />
            CHILDREN OUR NATION.
          </p>
          <p className="text-white font-extralight tracking-wider 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> eius beatae illo sit delectus.
          </p>
          <button className="px-7 py-3 bg-orange-900 text-white font-thin rounded-md mt-3 tracking-widest uppercase 2xl:text-xl text-[12px]">
            <Link href={"/academic"}> Academics</Link>
          </button>
        </div>
      </div>
      {/* short introduction */}
      <div className="h-auto w-full bg-gray-100 relative px-7 flex lg:flex-row flex-col gap-5 py-40">
        <div className="flex-1 overflow-hidden rounded-lg ">
          <Image
            src={img3}
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
            Shree Pashupati Viddhya Asharam is an esteemed educational
            institution located in Dang District, Ghorahi-10, Narayapur, Dang.
            Established with a mission to impart quality education, the school
            caters to students up to Class 10.
            <span className="hidden 2xl:block leading-10 text-2xl">
              Shree Pashupati Viddhya Asharam is dedicated to nurturing the
              intellectual and personal growth of its students, ensuring they
              emerge as well-rounded individuals ready to contribute positively
              to society. With a strong emphasis on academic excellence and
              character development, the school offers a comprehensive
              curriculum that includes a wide range of extracurricular
              activities.Over the years, it has grown and evolved, continually
              enhancing its educational offerings to meet the changing needs of
              society. The school's commitment to excellence has made it a
              trusted institution among the local community, fostering a
              nurturing environment that promotes lifelong learning and personal
              development.
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

      <div className="bg-white w-full h-[250px]"></div>

      {/* word from principal */}
      <div className="relative bg-white w-full h-screen">hello</div>

      {/* testimonial */}
      <div className="relative bg-gray-100 w-full h-screen">testimonial</div>

      {/* offerings */}
      <div className="relative py-10 pb-10 bg-gray-100 2xl:h-screen xl:h-screen lg:h-screen h-auto px-10">
        <p className="text-2xl font-bold text-center text-gray-800 mb-10">
          What We Offer?
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {offers.map((offer, i) => (
            <Card
              key={i}
              title={offer.title}
              desc={offer.desc}
              icon={offer.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
