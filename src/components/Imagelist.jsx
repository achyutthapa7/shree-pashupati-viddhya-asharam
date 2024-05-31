"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import Image from "next/image";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Imagelist() {
  const itemData = [
    { img: img3, rows: 2, cols: 2, title: "images" },
    { img: img2, title: "images" },
    { img: img4, title: "images" },
    { img: img5, cols: 2, title: "images" },
    { img: img6, cols: 2 },
    { img: img10, rows: 2, cols: 2, title: "images" },
    { img: img12, title: "images" },
    { img: img9 },
    { img: img7, rows: 2, cols: 2, title: "images" },
    { img: img8, title: "images" },
    { img: img11 },
    { img: img1, cols: 2, title: "images" },
  ];

  return (
    <ImageList
      sx={{ width: "100%", height: 390 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
      id="image-list"
      className="rounded-lg"
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <Image
            {...srcset(item.img.src, 121, item.rows, item.cols)}
            alt={item.title || "images"}
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
