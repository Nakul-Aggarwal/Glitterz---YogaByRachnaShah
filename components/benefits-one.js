import Image from 'next/image'
import React from 'react'
import Container from './container'

export default function BenefitsOne(props) {
  const { data } = props

  return (
    <>
      <Container className='flex flex-wrap my-4 lg:gap-10 lg:flex-nowrap '>
        <div
          className={`flex justify-start w-full lg:w-2/5 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width='644'
              height='602'
              alt='Benefits'
              layout='intrinsic'
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap w-full lg:w-3/5 ${
            props.imgPos === 'right' ? 'lg:justify-end' : 'lg:justify-center'
          }`}
        >
          <div classname='w-full'>
            <div className='mt-2 flex flex-col w-full justify-center'>
              {/* <div>
                <Image
                  src='/img/benefits/logo-only.png'
                  width='62'
                  height='73'
                  alt='Benefits'
                  layout='intrinsic'
                />
              </div> */}

              <div classnmae='justify-center'>
                <div className='flex'>
                  <h3 className='w-full text-4xl mb-6 font-normal leading-snug tracking-tight text-clay-400'>
                    {data.title}
                  </h3>
                </div>

                <p className='max-w-2xl text-base text-justify leading-normal text-gray-500 mb-8 dark:text-grey-500'>
                  {data.desc1}
                </p>

                <p className='max-w-2xl text-base text-justify leading-normal text-gray-500 mb-6 dark:text-grey-500'>
                  {data.desc2}
                </p>

                <ul className='w-full pl-4'>
                  {data.bullets.map((item, index) => (
                    <a key={index}>
                      <Benefit title={item.title}>{item.desc}</Benefit>
                    </a>
                  ))}
                </ul>
              </div>
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
      <div className='flex items-start space-x-3'>
        <div>
          {/* <h4 className="text-4xl text-gray-800 dark:text-gray-200">
            {props.title}
          </h4> */}
          <div className='flex'>
            <li className='list-disc text-base text-gray-500 dark:text-gray-400'>
              {props.children}
            </li>
          </div>
        </div>
      </div>
    </>
  )
}
