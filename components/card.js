// import { useState } from "react";
// import Container from "./container";

// const Card = ({ title, published_date, link }) => {
//   const [playVideo, setPlayVideo] = useState(false);
//   return (
//     <div>
//       <div className="w-full max-w-4xl my-auto overflow-hidden lg:mb-20 rounded-md">
//         <div
//           onClick={() => setPlayVideo(!playVideo)}
//           className="relative cursor-pointer aspect-w-16 aspect-h-12 bg-gradient"
//         >
//           {/* {!playVideo && (
//               <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-16 h-16  lg:w-28 lg:h-28"
//                   viewBox="0 0 20 20"
//                   fill="currentColor">
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="sr-only">Play Video</span>
//               </button>
//             )}
//             {playVideo && (
//               <iframe
//                 src={link}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen></iframe>
//             )} */}

//           <div className="rounded-xl cursor-pointer hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5">
//             <div>
//               <div className="text-lg lg:text-lg font-medium">{title}</div>
//               <div className="text-sm lg:text-sm text-gray-400">
//                 {published_date}
//               </div>
//               <iframe
//             src={link}
//             width="80%"
//             height="80%"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { useState } from "react";

const Card = ({ title, published_date, link }) => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div>
    <div className="w-full max-w-4xl mx-auto lg:mb-20 rounded-md bg-white">
      <div
        //   onClick={() => setPlayVideo(!playVideo)}
        className="relative rounded-2xl cursor-pointer bg-white shadow-md hover:shadow-lg hover:scale-110 transform transition"
      >
        <div className="flex flex-col">
          <div className="h-3/4 rounded-md aspect-w-16 aspect-h-9">
            <iframe
              className="absolute inset-x-0 top-0 px-8 py-8"
              width="100%"
              height="80%"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full rounded-md justify-end w-full px-8 pb-6 rounded-b-2xl">
          <p className="text-sm lg:text-base font-normal text-clay-400 inset-x-7">
                {title}
              </p>
              <p className="text-xs lg:text-sm mt-4 text-base text-grey-500 font-medium inset-x-7">
                Published Date: {published_date}
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Card;
