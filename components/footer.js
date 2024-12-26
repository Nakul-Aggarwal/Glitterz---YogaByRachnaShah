import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Container from './container'
import Logo from '../public/img/Yogalogo.png'
import GlitterzLogo from '../public/img/logo2.png'

export default function Footer() {
  // const navigation = [
  //   { name: 'Home', href: '/' },
  //   { name: 'Services', href: '/services', target: '_blank' },
  //   { name: 'Online Tutorials', href: '/tutorials', target: '_blank' },
  //   { name: 'Blogs', href: '/blogs', target: '_blank' },
  //   { name: `About Me`, href: '#' },
  //   { name: `Contact Us`, href: '#contact' },
  //   // { name: `FAQ's`, href: '#faq' },
  // ]
  const overview = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', target: '_blank' },
    { name: 'Online Tutorials', href: '/tutorials' },
    { name: `Blogs`, href: '/blogs' },
  ]

  // const about = [
  //   { name: 'Our Vision', href: '/' },
  //   { name: 'Our Mission', href: '/', target: '_blank' },
  //   { name: 'Meet The Forum', href: '/' },
  //   { name: `Introduce`, href: '/' },
  //   { name: `Customer Service`, href: '/' },
  // ]

  const contact = [
    { name: '+91 8200685035', img:'/img/contacts/Whatsapp.svg' , href: 'https://wa.me/918200685035' },
    { name: 'contact@yogabyrachnashah.com', img: '/img/contacts/Mail.svg', href: '/' },
    {
      name: 'Gujrat, India',
      img: '/img/contacts/Location.svg',
      href: '/',
    },
  ]
  const legal = ['Terms', 'Privacy', 'Legal']
  return (
    <div className='relative bg-clay-500' id='footer'>
      <Container>
        <div className='grid max-w-screen-xl grid-cols-1 gap-10 mx-auto mt-5 lg:grid-cols-5 mr-16'>
          <div className='lg:col-span-2 flex items-center justify-start'>
            <div>
              {' '}
              <Link href='/'>
                <a className='flex items-center justify-center'>
                  <span>
                    <img src='/img/Yogalogo.png' alt='N' className='w-64' />
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div>
            <div className='flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0'>
              <a className='w-full px-4 py-2 text-white text-xl font-header'>
                Overview
              </a>
              {overview.map((item, index) => (
                <Link key={index} href={item.href} target={item.target}>
                  <a className='w-full px-4 py-2 text-lg text-gray-500 rounded-md hover:text-white focus:text-clay-500 focus:bg-clay-100 focus:outline-none dark:focus:bg-trueGray-700'>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className='flex flex-wrap w-full -mt-2 -ml-3 mr-6 '>
              <a className='w-full px-6 py-2 text-white text-xl font-header'>
                Social Links
              </a>

              <div className='flex space-x-5 text-gray-400 dark:text-gray-500'>
          <div className='hover:scale-125 transform transition duration-300 ml-5 mt-3'>
            <a
              href='https://www.youtube.com/channel/UCm1mT2H9SmdHXd-2QvV_oKw'
              target='_blank'
              rel='noopener'
            >
              <span className='sr-only'>YouTube</span>
              <YouTube />
            </a>
          </div>
          <div className='hover:scale-125 transform transition duration-300 mt-3'>
            <a
              href='https://www.facebook.com/pages/category/Health-beauty/Yoga-by-Rachna-Shah-113324487061563/'
              target='_blank'
              rel='noopener'
            >
              <span className='sr-only'>Facebook</span>
              <Facebook />
            </a>
          </div>
          <div className='hover:scale-125 transform transition duration-300 mt-3 '>
            <a
              href='https://www.instagram.com/yogabyrachnashah/?hl=en'
              target='_blank'
              rel='noopener'
            >
              <span className='sr-only'>Instagram</span>
              <Instagram />
            </a>
          </div>
          <div className='hover:scale-125 transform transition duration-300 mt-3 '>
            <a
              href='https://www.linkedin.com/in/rachna-shah-442303247/'
              target='_blank'
              rel='noopener'
            >
              <span className='sr-only'>Linkedin</span>
              <Linkedin />
            </a>
          </div>
        </div>
              {/* {about.map((item, index) => (
                <Link key={index} href={item.href} target={item.target}>
                  <a className='w-full px-4 py-2 text-lg text-gray-500 rounded-md hover:text-white focus:text-clay-500 focus:bg-clay-100 focus:outline-none dark:focus:bg-trueGray-700'>
                    {item.name}
                  </a>
                </Link>
              ))} */}
            </div>
          </div>

          <div>
            <div className='flex flex-wrap w-full -mt-2 -ml-3 mr-6'>
              <a className='w-full px-4 py-2 text-white text-xl font-header'>
                Contact Us
              </a>
              {contact.map((item, index) => (
                <Link key={index} href={item.href} target={item.target}>
                  <a className='w-full px-2 py-2 text-lg text-white flex items-center'>
                    <div className='text-gray-400 flex items-center justify-left flex-shrink-0 mt-1 rounded-md w-6 h-6 mr-6'>
                      <img
                        className='text-gray-400 object-cover'
                        src={item.img}
                        alt=''
                      />
                      {/* {item.img} */}
                    </div>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      {/* <hr className="mt-8 mx-0"/> */}
      </Container>
      <div className='mx-12 justify-center flex items-center pb-6 text-md text-center text-gray-500'>

        <div className='flex items-center'>
      <hr className=""/>
          Copyright © {new Date().getFullYear()}. Made with ♥️ by
          <div className="ml-3 hover:scale-125">
          <a href='https://www.theglitterz.com' target='_blank' rel='noopener'>
          <img src='/img/logo2.png' alt='N' className='object-scale-down h-20 w-20' href='https://www.theglitterz.com' />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const YouTube = ({ size = 32 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='12 6 24 48'
    fill='currentColor'
  >
    <path d='M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z' />
  </svg>
)

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07' />
  </svg>
)

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z' />
  </svg>
)

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z' />
  </svg>
)

// const Whatsapp = ({ size = 24 }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={size}
//     height={size}
//     viewBox='0 0 24 24'
//     fill='currentColor'
//   >
//     <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"/>
//   </svg>
// )
