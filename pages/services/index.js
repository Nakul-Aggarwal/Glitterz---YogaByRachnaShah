import { useState } from "react";
import Container from "../../components/container";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import useSWR from "swr";
import fetcher from "../../backend/fetcher";
import Footer from "./../../components/footer";
import SectionTitle from "./../../components/sectionTitle";
import OnlineClasses from "../../components/onlineclasses";
import Pricing from "../../components/pricing";
import FixedGallery from "../../components/fixedgallery";
import Head from "next/head";

export default function Services() {
  // const { data, error } = useSWR("../api/services", fetcher);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // console.log(data);

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
      <div className="bg-servicesheader bg-cover sm:bg-center h-[400px] flex items-center justify-center">
        <h1 className="text-4xl text-7xl text-white font-medium text-white text-center justify-center">
          Services
        </h1>
      </div>

      <div className="bg-white py-4">
        <SectionTitle pretitle="" title="Online Classes">
          We offer multiple online batches to suit our clients in various
          timezones. You can now practice yoga from the comfort of your home
          from any part of the world.
        </SectionTitle>
        <OnlineClasses />
        <SectionTitle pretitle="" title="Pricing">
          We offer multiple plans to suit everyone irrespective of where they are in their yoga journey.
        </SectionTitle>
        <Pricing />
      </div>
      <div className="bg-white py-4 items-center text-clay-500">
        <SectionTitle pretitle="" title="Personal Training">
          We also offer online and in person personal training sessions for
          those who want a deeper practice.
        </SectionTitle>
        <div
          className={`flex w-full flex-col mt-2 items-center justify-center text-center text-gray-400`}
        >
          <ul>
            <li className="list-disc text-base text-gray-400">
              {" "}
              Classes are specifically designed for your individual needs and
              goals.
            </li>
            <li className="list-disc text-base text-gray-400">
              Sessions are available as per your convenience including weekends.
            </li>
            <li className="list-disc text-base text-gray-400">
              Deep attention to postures as per your body’s flexibility and
              strength.
            </li>
            <li></li>
            <li></li>
          </ul>
          <div
            className={`flex w-full flex-col mt-4 items-center justify-center text-center text-clay-400`}
          >
            <p className="text-gray-400">
              To know more or book your personal training sessions,{" "}
              <a
                href="#footer"
                rel="noopener"
                className="text-clay underline scroll-smooth"
              >
                please get in touch
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white py-4 text-clay-400">
          <SectionTitle pretitle="" title="Corporate sessions">
            We also have vast experience in delivering sessions for corporate
            employees and clients We conduct working sessions like how to
            improve postures while working at office, meditation as well as
            deliver lectures on naturopahty, yoga etc. We design these sessions
            as per the specific needs of the clients.
          </SectionTitle>

          <div
            className={`flex w-full flex-col mt-4 items-center justify-center text-center text-clay-400`}
          >
            <p className="text-gray-400">
              To know more,{" "}
              <a href="#footer" rel="noopener" className="text-clay underline">
                please get in touch
              </a>
            </p>
          </div>
        </div>
      </div>

      <FixedGallery />
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
