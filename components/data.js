import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from '@heroicons/react/outline'

import benefitOneImg from '../public/img/benefit-one.png'
import benefitTwoImg from '../public/img/benefit-two.png'

const benefitOne = {
  title: 'Yoga - a holistic approach to wellness',
  desc1: ['Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its practitioners and helps them get through day to day stress. Yoga is a holistic approach to wellness. It is just one of many steps on the path to nirvana.'],

  desc2: ['Often people don’t understand the differences between Yoga and regular exercise. The fundamental difference between the two us that yoga is practiced in coordination with breathing and hence it leads to various advantages like: '],
  image: benefitOneImg,
  bullets: [
    {
      // title: 'Mobile Responsive Template',
      desc: [' The body experiences calm and relaxation.'],
      // icon: <DeviceMobileIcon />,
    },
    {
      // title: 'Powered by Next.js & TailwindCSS',
      desc: ' The body feels refreshed and muscles are relaxed.',
      // icon: <AdjustmentsIcon />,
    },
    {
      // title: 'Dark & Light Mode',
      desc: ' Blood circulation rises which heals diseases.',
      // icon: <SunIcon />,
    },
    {
      // title: 'Dark & Light Mode',
      desc: 'Balance hormonal secretions leading to better health.',
      // icon: <SunIcon />,
    },
    {
      // title: 'Dark & Light Mode',
      desc: ' Relaxation betweens asanas decreases stress.',
      // icon: <SunIcon />,
    },
    {
      // title: 'Dark & Light Mode',
      desc: ' Self confidence rises, immunity rises and very effective for joint pain and joint strength.',
      // icon: <SunIcon />,
    },
  ],
}

const benefitTwo = {
  title: 'About Me',
  desc1: 'YogaByRachnaShah is a result of my long and incessant journey to seek a complete solution for my mind, body and soul. For me, a life without Yoga is unimaginable as it helped me to overcome a multitude of grave ailments I was dealing with - asthma, backache (spondylosis) , knee-pain (arthritis), shoulder pain (ligament rupture) and various features of autoimmune diseases etc. Yoga as well inspired me, motivated me  and led me out of depression and inner negativity and in the process helped me to find my own self’.',
  desc2: 'I continued to grow my knowledge in this field and completed a post graduation in Ayuryog Science - Health Science, Medidation, Yog-meditation and Naturopathy. I have been helping via Yogic Seva (free guidance) to many needy people since 2016. During covid, when I was unable to meet my students in person, I officially started YogaByRachnaShah via online classes in March 2020. Today, YogaByRachnaShah has grown multifolds with hundreds of happy students present in different parts of the world.',
  image: benefitTwoImg,
  bullets: [
    {
      title: '60',
      desc: ['International Students'],
      icon: "/img/AboutUs/choose-1.png",
    },
    {
      title: '7',
      desc: 'Years of experience',
      icon: "/img/AboutUs/choose-2.png",
    },
    {
      title: '5',
      desc: 'Countries',
      icon: "/img/AboutUs/choose-3.png",
    },
    {
      title: '700',
      desc: 'Hours of Personal Training',
      icon: "/img/AboutUs/choose-4.png",
    },
  ],
}

const aspectsOne = {
  aspects: [
    {
      name: 'Āsana',
      namehindi: '(आसन)',
      body: ['means sitdown - a comfortable position proved to improve flexibility and balance'],

      img: "/img/aspects/services-1.png",
    },
    {
      name: 'Dhyāna',
      namehindi: '(ध्यान)',
      body: ' means meditate (to think of) -  a practise to focus & recognise yourself from inside to attain positivity',
      img: "/img/aspects/services-2.png",
    },
    {
      name: 'Mudrā',
      namehindi: '(मुद्रा)',
      body: ' means hand postures - performed with Pranayams to gain benefits for internal body',
      img: "/img/aspects/services-3.png",
    },
    {
      name: 'Bandhas',
      namehindi: '(बंध)',
      body: 'means internal body locks - engaged to gain control of internal energy and redirect as you desire',
      img: "/img/aspects/services-4.png",
    },
    {
      name: 'Praṇāyam',
      namehindi: '(प्राणायाम)',
      body: 'means breathing exercises - helps attain a strong connect between mind, body and soul ',
      img: "/img/aspects/services-5.png",
    },
    {
      name: 'Naturopathy ',
      namehindi: '(प्राकृतिक चिकित्सा)',
      body: 'means natural healing - method of treating disease using food, exercise and body heat',
      img: "/img/aspects/services-6.png",
    },
  ],
}

export { benefitOne, benefitTwo, aspectsOne }
