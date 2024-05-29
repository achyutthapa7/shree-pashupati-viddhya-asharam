"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import video from "../assets/video.mp4";
import Card from "./Card";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const cardDetails = [
    {
      title: "Quality Education",
      desc: "We provide high-quality education to foster the intellectual and personal growth of our students.",
      img: img9,
    },
    {
      title: "Skilled Teachers",
      desc: "Our skilled teachers provide high-quality education, fostering the intellectual and personal growth of our students. ",
      img: img10,
    },
    {
      title: "Computer Lab",
      desc: "We provide high-quality education to foster the intellectual and personal growth of our students.",
      img: img9,
    },
    {
      title: "Playground",
      desc: "We provide high-quality education to foster the intellectual and personal growth of our students.",
      img: img9,
    },
    {
      title: "Quality Education",
      desc: "We provide high-quality education to foster the intellectual and personal growth of our students.",
      img: img9,
    },
    {
      title: "Quality Education",
      desc: "We provide high-quality education to foster the intellectual and personal growth of our students.",
      img: img9,
    },
  ];

  return (
    <>
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

        <div className="absolute top-[25%] left-[10%]">
          <p className="text-white 2xl:text-8xl xl:text-5xl lg:text-5xl text-4xl  font-extrabold tracking-wide 2xl:leading-[100px] xl:leading-[60px] lg:leading-[60px] md:leading-[60px] leading:[50px]">
            ONE GOAL ONE <br />
            MISSION, OUR <br />
            CHILDREN OUR NATION.
          </p>
          <p className="text-white font-extralight tracking-wider 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> eius beatae illo sit delectus.
          </p>
          <button className="px-7 py-3 bg-orange-900 text-white font-thin rounded-md mt-3 tracking-widest uppercase 2xl:text-xl text-[12px]">
            Academics
          </button>
        </div>
      </div>
      <div
        className={`relative 2xl:h-screen h-auto${
          cardDetails.length <= 3 ? "h-screen" : "h-auto"
        } z-10 py-10 bg-gradient-to-r from-gray-50 via-gray-400 to-green-600`}
      >
        <p className="text-2xl font-bold text-center text-gray-800 mb-10">
          What We Offer?
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {cardDetails.map((c, i) => (
            <Card key={i} title={c.title} desc={c.desc} img={c.img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
