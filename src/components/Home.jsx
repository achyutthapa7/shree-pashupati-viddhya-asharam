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

  const images = [gallery3, gallery2, gallery1, gallery4, gallery5, gallery6];
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

      {/* peak of our gallery */}
      <div className="relative  w-full xl:h-screen h-auto bg-white py-20 hidden lg:block">
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
    </section>
  );
};

export default Home;
// testimonials={testimonials} settings={settings}
