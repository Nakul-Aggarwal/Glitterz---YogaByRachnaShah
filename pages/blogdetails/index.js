import Image from "next/image";
import htmlParser from "html-react-parser";
import { useState } from "react";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import useSWR from "swr";
import fetcher from "../../backend/fetcher";
import Footer from "./../../components/footer";
import { useRouter } from "next/router";
import Head from 'next/head'

export default function Blogdetails() {
  const [pageIndex, setPageIndex] = useState(0);

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
      <Page index={pageIndex} />
      <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div>
      {/* 
      <div className='flex justify-between'>
        <button className='p-4 bg-gray-200 mx-auto hover:bg-gray-300 rounded-md' onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button className='p-4 bg-gray-200 mx-auto hover:bg-gray-300 rounded-md' onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      </div> */}

      <Footer />
    </>
  );
}

function Page({ index }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    id ? `/api/blogs/${id}?page=${index}` : null,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  
  // Helper function to parse HTML safely
  const parseHtml = (htmlString) => {
    return htmlParser(String(htmlString));
  };

  return (
    <>
      <div className="p-8 bg-blogheader bg-center bg-cover h-[400px] flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white text-white text-center justify-center">
          {data.title}
        </h1>
        <p className="text-2xl text-white font-normal text-white text-center justify-center">
          By <strong>{data.author.name}</strong> | {data.published}
        </p>
      </div>

      <Container>
        <p className="text-base text-justify leading-normal text-gray-500 mb-8 dark:text-grey-500">
          {parseHtml(data.desc1)}
        </p>

        <div className="mx-20">
          <img
            className="my-8 h-96 w-full object-cover"
            src={data.img}
            alt=""
          />
        </div>

        <p className="text-base text-justify leading-normal text-gray-500 mb-8 dark:text-grey-500">
          {parseHtml(data.desc2)}
        </p>

        <p className="text-base text-justify leading-normal text-gray-500 mb-8 dark:text-grey-500">
          {parseHtml(data.desc3)}
        </p>
        <div>
          <a
            href="https://wa.me/918200685035"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </Container>
    </>
  );
}
