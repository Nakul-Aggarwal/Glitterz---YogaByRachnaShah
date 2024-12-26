import Image from "next/image";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import Head from "next/head";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import useSWR, { useSWRPages } from "swr";
import fetcher from "../../backend/fetcher";
import Footer from "./../../components/footer";
import Link from "next/link";
import { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Blogs() {
  const { data, error } = useSWR(`../api/blogs`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
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
      <div className="bg-blogpageheader bg-center bg-cover h-[400px] flex items-center justify-center">
        <h1 className="text-4xl text-7xl text-white font-medium text-white text-center justify-center">
          Blogs
        </h1>
      </div>

      <Container>
        <div className="mt-2 lg:mt-8 mx-4 lg:mx-auto justify-center gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(function (blogs, idx) {
            return (
              <Link
                href={{
                  pathname: `/blogdetails`,
                  query: {
                    id: blogs.id,
                  },
                }}
              >
                <div className="rounded-2xl cursor-pointer hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5 bg-gray-100 ">
                  <div className="">
                    <img
                      className="h-60 w-full object-cover rounded-t-2xl"
                      src={blogs.img}
                      alt=""
                    />
                  </div>
                  <div
                    key={idx}
                    className="max-w-[500px] my-4 lg:col-span-1 xl:col-auto"
                  >
                    <div className="flex flex-col justify-end w-full h-full px-6 rounded-b-2xl ">
                      {/* <div className="h-56 bg-clay-500 mb-6">
                        <img src={blogs.img} alt="" />
                      </div> */}
                      <p className="text-sm lg:text-base font-normal text-clay-400">
                        {blogs.title}
                      </p>
                      <p className="text-xs lg:text-sm mt-4 text-base text-grey-500 font-medium">
                        {blogs.published}
                      </p>
                      <Avatar
                        image={blogs.author.img}
                        name={blogs.author.name}
                        date={blogs.published}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <a
          href="https://wa.me/918200685035"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </Container>

      {/* Pagination */}
      {/* <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
        <div className='flex-1 flex justify-between sm:hidden'>
          <a
            href='#'
            className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Previous
          </a>
          <a
            href='#'
            className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Showing <span className='font-semibold'>1</span> to{' '}
              <span className='font-semibold'>10</span> of{' '}
              <span className='font-semibold'>97</span> results
            </p>
          </div>
          <div>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </a> */}
      {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
      {/* <a
                href='#'
                aria-current='page'
                className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                1
              </a>
              <a
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                2
              </a>
              <a
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
              >
                3
              </a>
              <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
                ...
              </span>
              <a
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
              >
                8
              </a>
              <a
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                9
              </a>
              <a
                href='#'
                className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                10
              </a>
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </a>
            </nav>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-4 space-x-2">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          // placeholder="blur"
        />
      </div>
      <div>
        <div className="text-base font-normal text-grey-500">{props.name}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {"  "}
      <mark className="text-clay-500 bg-clay-100 rounded-md ring-clay-100 ring-4">
        {props.children}
      </mark>
      {"  "}
    </>
  );
}
