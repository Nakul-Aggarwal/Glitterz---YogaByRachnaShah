import React from 'react'
import Container from './container'

export default function Cta() {
  return (
    <Container>
      <div className='flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl'>
        <div className='flex-grow text-center lg:text-left'>
          <h2 className='text-2xl font-bold lg:text-3xl'>
            Ready to start your Yogic journey?
          </h2>
          <p className='mt-2 font-medium text-white text-opacity-90 lg:text-xl'>
            Chck out the classes and join quickly.
          </p>
        </div>
        <div className='flex-shrink-0 w-full text-center lg:w-auto'>
          <a
            href='/'
            target='_blank'
            rel='noopener'
            className='inline-block py-3 mx-auto text-lg text-center text-clay-500 font-bold hover:scale-110 transform transition duration-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 '
          >
            View Classes
          </a>
        </div>
      </div>
    </Container>
  )
}
