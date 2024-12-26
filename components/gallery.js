import React from 'react'
// import Marquee from "react-marquee-slider";
import Marquee from 'react-fast-marquee'

const images1 = [
  {
    src: '/img/gallery/gallery-1.jpg',
  },
  {
    src: '/img/gallery/gallery-2.jpg',
  },
  {
    src: '/img/gallery/gallery-3.jpg',
  },
  {
    src: '/img/gallery/gallery-4.png',
  },
  {
    src: '/img/gallery/gallery-5.jpg',
  },
  {
    src: '/img/gallery/gallery-6.jpg',
  },
  {
    src: '/img/gallery/gallery-7.jpg',
  },
  {
    src: '/img/gallery/gallery-8.jpg',
  },
]
const images2 = [
  {
    src: '/img/gallery/gallery-9.jpg',
  },
  {
    src: '/img/gallery/gallery-10.jpg',
  },
  {
    src: '/img/gallery/gallery-11.jpg',
  },
  {
    src: '/img/gallery/gallery-12.jpg',
  },
  {
    src: '/img/gallery/gallery-14.png',
  },
  {
    src: '/img/gallery/gallery-15.png',
  },
  {
    src: '/img/gallery/gallery-13.jpg',
  },
  {
    src: '/img/gallery/gallery-16.jpg',
  },
]

// const clay = [223, 80, 8]
// <Marquee speed={25} direction="left" gradient='false' gradientColor={clay}>

export default function Gallery() {
  return (
    <div className='h-auto'>
      <Marquee speed={25} direction='right' gradient={false}>
        <div className='mb-1 grid grid-cols-8'>
          {images1.map((images1, id) => (
            <div
              className='hover:scale-110 transform transition duration-800 pl-1 sm:pl-1'
              key={id}
            >
              <img
                className='object-cover h-44 md:h-56 lg:h-64 w-72'
                src={images1.src}
                alt='serving'
              />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={25} direction='left' gradient={false}>
        <div className='mb-1 grid grid-cols-8'>
          {images2.map((images2, id) => (
            <div
              className='hover:scale-110 transform transition duration-800 pl-1 sm:pl-1'
              key={id}
            >
              <img
                className='object-cover h-44 md:h-56 lg:h-64 w-72'
                src={images2.src}
                alt='serving'
              />
            </div>
          ))}
        </div>
      </Marquee>
      {/* <div className="mb-5 sm:mb-10">
    <Marquee speed={25} direction="right">
      {images1.map((id) => (
        <div className="px-2 sm:px-4" key={id}>
          <img
            className="object-cover rounded-3xl h-44 md:h-56 lg:h-64 w-72 sm:w-auto"
            src={id}
            alt="serving"
          />
        </div>
      ))}
    </Marquee>
  </div>
  <div>
    <Marquee speed={25} direction="left">
      {images2.map((id) => (
        <div className="px-2 sm:px-4" key={id}>
          <img
            className="object-cover rounded-3xl h-44 md:h-56 lg:h-64 w-72 sm:w-auto"
            src={id}
            alt="serving"
          />
        </div>
      ))}
    </Marquee>
  </div> */}
    </div>
  )
}
