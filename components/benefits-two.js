import Image from 'next/image'
import React from 'react'
import Container from './container'

export default function BenefitsTwo(props) {
  const { data } = props

  return (
    <>
      <Container className='flex flex-wrap my-4  lg:gap-10 lg:flex-nowrap '>
        <div
          className={`flex items-start justify-center w-full lg:w-2/5 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div className='mt-24'>
            <Image
              src={data.image}
              width='821'
              height='750'
              alt='Benefits'
              layout='intrinsic'
              placeholder='blur'
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap w-full lg:w-3/5 ${
            props.imgPos === 'right' ? 'lg:justify-center' : ''
          }`}
        >
          <div>
            <div className='flex flex-col w-full mt-4'>
              <h3 className='max-w-2xl text-4xl mb-6 font-normal leading-snug tracking-tight text-clay-400'>
                {data.title}
              </h3>

              <p className='max-w-2xl text-md text-justify leading-normal text-gray-500 mb-8 dark:text-grey-500'>
                {data.desc1}
              </p>

              <p className='max-w-2xl text-justify text-md leading-normal text-gray-500 mb-6 dark:text-grey-500'>
                {data.desc2}
              </p>

              <ul>
                <li>
                  <p className='max-w-2xl text-lg leading-normal text-gray-300 lg:text-xl xl:text-xl'>
                    {data.list}
                  </p>
                </li>
              </ul>
            </div>

            <div className='w-full sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

function Benefit(props) {
  return (
    <>
      <div className='flex justify-center items-center space-x-3'>
        <div className='flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-14 h-14 '>
          {/* {React.cloneElement(props.icon, {
            className: 'w-9 h-9 text-white',
          })} */}
          <img className='w-14 h-14' src={props.icon} alt='' />
        </div>
        <div className='flex flex-col justify-center'>
          <h4 className='text-center text-4xl font-normal text-clay-500'>
            {props.title}
          </h4>
          <p className='mt-1 text-gray-400 flex justify-center text-center w-[150px]'>
            {props.children}
          </p>
        </div>
      </div>
    </>
  )
}
