import { useState } from "react";
import Container from "../../components/container";
import Card from "../../components/tutorial_card";
import Navbar from "../../components/navbar";
import useSWR from "swr";
import fetcher from "../../backend/fetcher";
import Footer from "./../../components/footer";
import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const YOUTUBE_CHANNEL_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/channels";
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export default function Tutorials({ playlist_data }) {
  return (
    // <div className='bg-hero md:bg-hero bg-cover bg-center sm:bg-center'>

    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <title>Yoga By Rachna Shah</title>
        <meta name="description" content="Yoga classes by Rachna Shah. " />

        <meta
          name="description"
          content="Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its lovers and helps them get through daily stress. - Rachna Shah"
        />
        <meta property="og:title" content="Yoga By Rachna" />
        <meta
          property="og:description"
          content="YogaByRachna is a platform where there are many yoga courses available, made by renowned yogi Rachna Shah, who lives in Ahmedabad, Gujrat. She has many courses and tutorials available for people who want to get a healthy lifestyle and connect with their roots with te help of spiritual Yoga."
        />
        <meta property="og:url" content="https://www.yogabyrachna.com//" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="bg-tutorialheader bg-cover sm:bg-center h-[400px] flex items-center justify-center">
        <h1 className="text-4xl text-7xl text-white font-medium text-white text-center justify-center">
          Online Tutorials
        </h1>
      </div>

      <Container>
        <div className="selection:bg-clay-100 selection:text-clay-500">
          <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlist_data.items.map(function (video) {
              const { id, snippet = {} } = video;
              const { title, publishedAt, resourceId = {} } = snippet;
              var video_title = "";
              if (title.length > 60) {
                var video_title = title.substring(0, 59) + "...";
              } else {
                var video_title = title;
              }
              // console.log("video_title" + video_title + "      " + video_title.length)
              var date = publishedAt.substring(0, 10);
              date =
                date.substring(8, 10) +
                date.substring(4, 8) +
                date.substring(0, 4);
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
        </div>
      </Container>

      <div className="flex justify-center">
        {playlist_data.prevPageToken && (
          <a
            rel="noopener"
            className="mx-4 mb-4 w-40 uppercase py-4 text-base font-medium hover:scale-110 transform transition duration-500 text-center text-white bg-clay rounded-sm tracking-wider"
            href={`/tutorials?prevPageToken=${playlist_data.prevPageToken}`}
          >
            Previous
          </a>
        )}
        {playlist_data.nextPageToken && (
          <a
            rel="noopener"
            className="mx-4 mb-4 w-40 uppercase py-4 text-base font-medium hover:scale-110 transform transition duration-500 text-center text-white bg-clay rounded-sm tracking-wider"
            href={`/tutorials?nextPageToken=${playlist_data.nextPageToken}`}
          >
            Next
          </a>
        )}
      </div>

      <a
        href="https://wa.me/918200685035"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${YOUTUBE_CHANNEL_ITEMS_API}?part=contentDetails&id=UCm1mT2H9SmdHXd-2QvV_oKw&key=${process.env.YOUTUBE_API_KEY}`
  );
  const channel_data = await res.json();
  const uploadID =
    channel_data.items[0].contentDetails.relatedPlaylists.uploads;

  var playlistRes;

  if (context.query.nextPageToken) {
    var nextPageToken = context.query.nextPageToken;
    playlistRes = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${uploadID}&key=${process.env.YOUTUBE_API_KEY}&pageToken=${nextPageToken}&part=snippet&maxResults=21`
    );
  } else if (context.query.prevPageToken) {
    var prevPageToken = context.query.prevPageToken;
    playlistRes = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${uploadID}&key=${process.env.YOUTUBE_API_KEY}&pageToken=${prevPageToken}&part=snippet&maxResults=21`
    );
  } else {
    playlistRes = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${uploadID}&key=${process.env.YOUTUBE_API_KEY}&part=snippet&maxResults=21`
    );
  }
  const playlist_data = await playlistRes.json();

  return {
    props: {
      playlist_data,
    },
  };
}
