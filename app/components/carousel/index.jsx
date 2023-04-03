'use strict';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import houseimg1 from '../../assets/img/houseimg1.jpg';
import houseimg2 from '../../assets/img/houseimg2.jpg';
import houseimg3 from '../../assets/img/houseimg3.jpg';
import houseimg4 from '../../assets/img/houseimg4.jpg';
import houseimg5 from '../../assets/img/houseimg5.jpg';
import houseimg6 from '../../assets/img/houseimg6.jpg';

//temp seed img data
const images = [
  { id: 1, src: houseimg1 },
  { id: 2, src: houseimg2 },
  { id: 3, src: houseimg3 },
  { id: 4, src: houseimg4 },
  { id: 5, src: houseimg5 },
  { id: 6, src: houseimg6 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1410) {
      setIsMobile(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1410) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1410) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  }, []);

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative -mr-2 top-0 -z-10">
      <div className="absolute top-1/2 -mt-6 z-10">
        <button
          onClick={handleClickLeft}
          className="btn btn-square btn-error ml-8 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            whileHover={{
              scale: 1.3,
              transition: { type: "spring", stiffness: 600, damping: 25 },
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </motion.svg>
        </button>
      </div>
      <div className="overflow-hidden relative">
      {isMobile ? (
        <div
          className="flex transition-all duration-500 ease-in-out h-72"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.id}
              className="w-1/2 object-cover flex-none p-2 rounded-2xl"
            />
          ))}
        </div>
      ) : (
        <div
          className="flex transition-all duration-500 ease-in-out h-72"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.id}
              className="w-1/3 object-cover flex-none p-2 rounded-2xl"
            />
        ))}
        </div>
      )}
      </div>
      <div className="absolute top-1/2 -mt-6 right-0 z-10">
        <button
          onClick={handleClickRight}
          className="btn btn-square btn-error mr-8 text-base-200 hover:text-gray-700 focus:outline-none"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            whileHover={{
              scale: 1.3,
              transition: { type: "spring", stiffness: 600, damping: 25 },
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </motion.svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// export default function Carousel() {
//   return (
//     <div className="carousel w-full">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img src={houseimg1} className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide3" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <img src={houseimg2} className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide1" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img
//           src={houseimg3}
//           className="w-full"
//         />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }