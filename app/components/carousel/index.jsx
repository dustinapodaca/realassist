//temp seed data

import houseimg1 from '../../assets/img/houseimg1.jpg';
import houseimg2 from '../../assets/img/houseimg2.jpg';
import houseimg3 from '../../assets/img/houseimg3.jpg';
import houseimg4 from '../../assets/img/houseimg4.jpg';
import houseimg5 from '../../assets/img/houseimg5.jpg';
import houseimg6 from '../../assets/img/houseimg6.jpg';

import React, { useState } from "react";

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
    <div className="relative">
      <div className="absolute top-1/2 -mt-3 z-10">
        <button
          onClick={handleClickLeft}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="btn btn-circle h-6 w-6" />
        </button>
      </div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-1/3 flex-none"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -mt-3 right-0 z-10">
        <button
          onClick={handleClickRight}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="btn btn-circle h-6 w-6" />
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