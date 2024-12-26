import React from "react";
import Marquee from "react-fast-marquee";

const images1 = [
  {
    src: "/img/gallery/File_109.png",
  },
  {
    src: "/img/gallery/File_110.png",
  },
  {
    src: "/img/gallery/File_111.png",
  },
  {
    src: "/img/gallery/File_112.png",
  },
  {
    src: "/img/gallery/File_113.png",
  },
  {
    src: "/img/gallery/File_114.png",
  },
  {
    src: "/img/gallery/File_115.png",
  },
  {
    src: "/img/gallery/File_116.png",
  },
];

// const clay = [223, 80, 8]
// <Marquee speed={25} direction="left" gradient='false' gradientColor={clay}>

export default function Gallery() {
  return (
    <div className="h-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images1.map((images1, id) => (
          <div
            className="hover:shadow-2xl hover:translate-x-0.5 hover:translate-y-0.5 px-1 py-1"
            key={id}
          >
            <img
              className="object-cover h-44 md:h-56 lg:h-64"
              src={images1.src}
              alt="serving"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
