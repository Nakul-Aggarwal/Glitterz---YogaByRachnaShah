import { useState, useEffect } from "react";
import Container from "./container";
import Card from "./card";
import expert1 from "../public/img/user2.jpg";

export default function Video(props) {
  // const [playVideo, setPlayVideo] = useState(false);
  const { data } = props

  console.log(props.playlist_data.playlist_data)
  // console.log(playlist_data)

  return (
    <Container>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {props.playlist_data.playlist_data.items.map(function (video) {

          const { id, snippet = {} } = video;
              const { title, publishedAt, resourceId = {} } = snippet
              var video_title = ""
              if (title.length > 40) {
                var video_title = title.substring(0, 39) + "...";
              } else {
                 var video_title = title
              }
              var date = publishedAt.substring(0,10)
              date = date.substring(8,10) + date.substring(4,8) + date.substring(0,4)
          return (
            <Card
              key={id}
              title={video_title}
              published_date={date}
              link={`https://www.youtube.com/embed/${resourceId.videoId}`}
            />
          );
        })}
      </div>
      <div className="mt-8 flex-shrink-0 w-full text-center lg:w-auto hover:scale-110 transform transition
">
        <a
          href="/tutorials"
          rel="noopener"
          className="px-8 uppercase py-4 text-base font-medium hover:scale-110 transform transition duration-500 text-center text-white bg-clay rounded-sm tracking-wider"
        >
          View More
        </a>
      </div>
    </Container>
  );
}
