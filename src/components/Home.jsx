"use client";
import React, { useState } from "react";
import {
  faVolumeMute,
  faVolumeUp,
  faBook,
  faChalkboardTeacher,
  faFutbol,
  faUtensils,
  faLaptop,
  faRunning,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import video from "../assets/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img3 from "../assets/3.jpg";
import principal from "../assets/principal.jpg"; // Add the principal image

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from "./Herosection";
import Shortintro from "./Shortintro";
import Wordfromprincipal from "./Wordfromprincipal";
import Testimonial from "./Testimonial";
import Offerings from "./Offerings";
import Backdrop from "./Backdrop";
import gallery1 from "../assets/gallery/1.jpg";
import gallery2 from "../assets/gallery/2.jpg";
import gallery3 from "../assets/gallery/3.jpg";
import gallery4 from "../assets/gallery/4.jpg";
import gallery5 from "../assets/gallery/5.jpg";
import gallery6 from "../assets/gallery/6.jpg";
import Peakgallery from "./Peakgallery";
import Link from "next/link";
import Image from "next/image";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [gallery3, gallery2, gallery1, gallery4];
  return (
    <section className="">
      <Herosection
        faVolumeMute={faVolumeMute}
        faVolumeUp={faVolumeUp}
        video={video}
        isMuted={isMuted}
        toggleMute={toggleMute}
      />
      <Shortintro img3={img3} />
      <Backdrop />
      <Wordfromprincipal principal={principal} />
      <Testimonial />
      <Backdrop />
      <Offerings offers={offers} />

      {/* peak of our gallery for large screen*/}
      <div className="relative  w-full xl:h-screen h-auto bg-white py-20 hidden lg:block md:block">
        <p className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Gallery
        </p>
        <Link href={"/gallery"}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            className="absolute right-10 top-[86px]"
          />
        </Link>
        <div className="relative w-full h-full flex justify-center items-center px-10">
          <div className=" w-full h-[400px] flex gap-2">
            {images.map((image, index) => (
              <Peakgallery key={index} img={image} />
            ))}
          </div>
        </div>
      </div>
      {/* peak of our gallery for small screen*/}
      <div className="relative lg:hidden md:hidden block w-full h-auto bg-white py-10">
        <p className="text-3xl font-bold text-center text-gray-800 mb-10 w-full">
          Our Gallery
        </p>
        <Link href={"/gallery"}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute right-10 top-[50px] text-[25px]"
          />
        </Link>

        <div class="h-auto grid grid-cols-4 grid-rows-4 gap-2 p-2">
          <div class="col-span-2 row-span-2 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery1}
              alt="Large Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-1 row-span-2 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery2}
              alt="Medium Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-1 row-span-1 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery3}
              alt="Small Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-1 row-span-1 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery4}
              alt="Small Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-2 row-span-2 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery5}
              alt="Medium Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>
          <div class="col-span-1 row-span-1 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery1}
              alt="Small Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-1 row-span-1 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery3}
              alt="Small Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>

          <div class="col-span-2 row-span-1 overflow-hidden flex items-center justify-center">
            <Image
              src={gallery1}
              alt="Small Image"
              className=" rounded-xl w-full h-full object-cover hover:scale-110 transition hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
