import React from 'react'
import Container from './container'

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      {props.pretitle && (
        <div className='text-sm font-bold tracking-wider text-clay-500 uppercase'>
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className='max-w-2xl mt-3 mb-6 text-3xl font-normal leading-snug tracking-tight text-clay-400 lg:leading-tight lg:text-4xl dark:text-white'>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className='max-w-4xl py-4  mt-1 text-gray-400 flex justify-center text-center '>
          {props.children}
        </p>
      )}
    </Container>
  )
}
