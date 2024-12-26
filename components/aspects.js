import React from 'react'
import Container from "./container";

export default function Aspects(props) {
  const { data } = props

  return (
    <Container>
      <div className='mx-8 my-8 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-6'>
        {data.aspects.map((item, index) => (
          <Aspect key={index} title={item.name} name={item.namehindi} icon={item.img}>
            {item.body}
          </Aspect>
        ))}
      </div>
    </Container>
  )
}

function Aspect(props) {
  return (
    <>
      <div className='justify-center items-center space-x-3 '>
        <div className='py-8 px-4 bg-white rounded-md items-center justify-center flex-shrink-0 mt-1 rounded-md shadow-md hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5 h-96
'>
          <div className='flex justify-center'>
            <img className='w-24 h-24 md:w-20 md:h-20 my-4' src={props.icon} alt='' />
          </div>

          <h4 className='text-center text-xl font-medium text-clay-500'>
            {props.title}
          </h4>
          <h4 className='text-center text-xl font-medium text-clay-500'>
            {props.name}
          </h4>

          <div className='flex justify-center'>
            <p className='mt-2 text-sm md:text-base text-gray-400 text-center w-[200px]'>
              {props.children}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
