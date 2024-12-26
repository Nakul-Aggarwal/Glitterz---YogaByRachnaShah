import { useState } from "react";

const Card = ({ title, published_date, link }) => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto lg:mb-20 rounded-md bg-gray-100">
        <div
          //   onClick={() => setPlayVideo(!playVideo)}
          className="relative rounded-2xl cursor-pointer bg-gray-100 shadow-md hover:shadow-lg hover:scale-110 transform transition"
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
