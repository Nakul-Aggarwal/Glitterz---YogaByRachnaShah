import Image from 'next/image'
import Container from './container'
import heroImg from '../public/img/hero.png'

export default function Hero() {
  return (
    <>
      <Container className='flex flex-wrap h-full'>
        <div className='flex items-center w-full lg:w-4/5 font-header'>
          <div className='max-w-3xl mb-8'>
            <h1 className='text-5xl sm:text-8xl font-black leading-snug tracking-[0.5em] lg:leading-tight xl:leading-tight text-white lg:text-9xl'>
              YOGA
            </h1>
            <p className='tracking-[0.3em] text-xl leading-normal text-white lg:text-2xl xl:text-3xl mb-12 '>
              [yo.ga] noun
            </p>
            <p className='italic text-xl leading-normal lg:text-3xl text-white '>
              is the journey of the self,
              <br />
              through the self,
              <br />
              to the self.
            </p>

            {/* <div className='my-16 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
              <a
                href='/'
                // target='_blank'
                rel='noopener'
                className='px-8 uppercase py-4 text-base font-medium hover:scale-110 transform transition duration-500 text-center text-white bg-clay rounded-sm tracking-wider'
              >
                Discover More
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className='display-none flex items-center justify-center w-full lg:w-1/2'>
          <div className='display-none'>
            <Image
              src={heroImg}
              width='616'
              height='617'
              alt='Hero Illustration'
              layout='intrinsic'
              loading='eager'
              placeholder='blur'
            />
          </div>
        </div> */}
      </Container>
    </>
  )
}
