import Head from 'next/head'

import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'
import { benefitOne, benefitTwo, aspectsOne } from '../components/data'
import Video from '../components/video'
import BenefitsOne from '../components/benefits-one'
import BenefitsTwo from '../components/benefits-two'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import PopupWidget from '../components/popupWidget'

import Gallery from '../components/gallery'
import Aspects from '../components/aspects'


const YOUTUBE_CHANNEL_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/channels'
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_CHANNEL_ITEMS_API}?part=contentDetails&id=UCm1mT2H9SmdHXd-2QvV_oKw&key=${process.env.YOUTUBE_API_KEY}`
  )
  const channel_data = await res.json()
  const uploadID = channel_data.items[0].contentDetails.relatedPlaylists.uploads

  const playlistRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${uploadID}&key=${process.env.YOUTUBE_API_KEY}&part=snippet&maxResults=3`
  )
  const playlist_data = await playlistRes.json()

  return {
    props: {
      playlist_data,
    },
  }
}

export default function Home(playlist_data) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <title>Yoga By Rachna Shah</title>
        <meta name='description' content='Yoga classes by Rachna Shah. ' />

        <meta
          name='description'
          content='Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its lovers and helps them get through daily stress. - Rachna Shah'
        />
        <meta property='og:title' content='Yoga By Rachna' />
        <meta
          property='og:description'
          content='YogaByRachna is a platform where there are many yoga courses available, made by renowned yogi Rachna Shah, who lives in Ahmedabad, Gujrat. She has many courses and tutorials available for people who want to get a healthy lifestyle and connect with their roots with te help of spiritual Yoga.'
        />
        <meta property='og:url' content='https://www.yogabyrachna.com//' />
        <meta property='og:type' content='website' />

        <link rel='icon' href='/favicon.png' sizes='32x32' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        
         {/* Google Tag Manager */}
     <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16610561187"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16610561187');
            `
          }} />

        <link
          href='https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap'
          rel='stylesheet'
        />
        

      </Head>
      <Navbar />

      <div className='bg-hero md:bg-hero bg-cover bg-right sm:bg-center'>
        <div className='h-screen selection:bg-clay-100 selection:text-clay-500'>
          <Hero />
        </div>
      </div>

      <div className='selection:bg-clay-100 selection:text-clay-500' id='about'>
        {/* <BenefitsOne data={benefitOne} /> */}
        <div className='bg-gray-100 dark:bg-trueGray-800 py-4'>
          <BenefitsTwo imgPos='right' data={benefitTwo} />
        </div>

        <SectionTitle pretitle='' title='Enjoy all aspects of Yoga'>
          A holistic approach to wellness - just one of many steps on the path
          to achieve nirvana
        </SectionTitle>
        <Aspects data={aspectsOne} />

        <div className='bg-gray-100 dark:bg-trueGray-800 py-4'>
          <SectionTitle pretitle='' title='Latest Videos'>
            Deepdive into the beautiful world of Yoga and Meditation for free.
            The tutorials include wide range of Asanas, breathing exercises and
            pranayams
          </SectionTitle>
          <Video playlist_data={playlist_data} />
        </div>

        <div className='bg-white dark:bg-trueGray-800'>
          <SectionTitle pretitle='' title='Client Reviews'>
            Our happy clients are our motivation to keep going. Read what they
            have to say about us.
          </SectionTitle>
          <Testimonials />
        </div>

        {/* <SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle> */}
        {/* <Faq /> */}

        <div className='bg-gray-100'>
          <SectionTitle
            pretitle=''
            title='A look into the beautiful world of yoga'
          >
            Take a look at the beautiful yogis and yoginis who have shared their
            growth and journey with us.
          </SectionTitle>
          <Gallery />
          
        </div>
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
        {/* <Cta /> */}
        <Footer />
        {/* <PopupWidget /> */}
      </div>
    </>
  )
}
