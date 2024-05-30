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
      <div className="relative py-32 pb-10 bg-gray-100 2xl:h-screen xl:h-screen lg:h-screen h-auto px-10">
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
