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
import testimonial1 from "../assets/1.jpg"; // Add testimonial images
import testimonial2 from "../assets/2.jpg";
import testimonial3 from "../assets/3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from "./Herosection";
import Shortintro from "./Shortintro";
import Wordfromprincipal from "./Wordfromprincipal";
import Testimonial from "./Testimonial";
import Offerings from "./Offerings";
import Backdrop from "./Backdrop";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img6 from "../assets/6.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
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

  const testimonials = [
    {
      image: testimonial1,
      name: "John Doe",
      feedback:
        "This school has provided my child with the best education. The teachers are excellent and the facilities are top-notch.",
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

  const images = [img1, img2, img6, img4, img5, img4, img5, img5];
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
      <Testimonial testimonials={testimonials} settings={settings} />
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
