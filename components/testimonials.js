import Image from 'next/image'
import React from 'react'
import Container from './container'

import userOneImg from '../public/img/user1.jpg'
import userOnemaleImg from '../public/img/user1m.jpg'
import userTwoImg from '../public/img/user2.jpg'
import userThreeImg from '../public/img/user3.jpg'

export default function Testimonials() {
  return (
    <Container>
      <div className='justify-center gap-10 grid grid-cols-1 lg:grid-cols-3'>
        <div className='lg:col-span-1 xl:col-auto'>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 shadow-md hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5
'>
            <p className='text-xl leading-normal ' align='justify'>
              Congratulations 🎊 for such a successful session. You have
              delivered all the information with{' '}
              <Mark>highest professional standard.</Mark> Really appreciate your
              sincere efforts. Thank You very much.🙏
            </p>

            <Avatar
              image={userOneImg}
              name='Ruby Sabuwala'
              title='Increased Yogic knowledge'
            />
          </div>
        </div>
        <div className='lg:col-span-1 xl:col-auto'>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 shadow-md hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5
'>
            <p className='text-xl leading-normal ' align='justify'>
              Yoga 🧘‍♀️ is very beneficial and you are{' '}
              <Mark>very good yoga teacher.</Mark> Your yoga training has
              contributed so much in keeping better health of our whole family
              👨‍👩‍👦 So much thankful to you.
            </p>

            <Avatar
              image={userOneImg}
              name='Neha Rotliwala'
              title='Health improvement '
            />
          </div>
        </div>
        <div className='lg:col-span-1 xl:col-auto'>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 shadow-md hover:shadow-lg hover:translate-x-0.5 hover:translate-y-0.5
'>
            <p className='text-xl leading-normal ' align='justify'>
              I like the way you teach and now I understand the yoga steps as
              well. Your <Mark>tips and advices</Mark> are cherry 🍒 on the
              cake. Moreover I am really satisfied with the previous workshop.
              🥰
            </p>

            <Avatar
              image={userOneImg}
              name='Ankita Bhavsar'
              title='Got relief from Throid and Hypertension'
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className='flex items-center mt-8 space-x-3'>
      <div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
        <Image
          src={props.image}
          width='40'
          height='40'
          alt='Avatar'
          layout='responsive'
          placeholder='blur'
        />
      </div>
      <div>
        <div className='text-lg font-medium'>{props.name}</div>
        <div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
      </div>
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {'  '}
      <mark className='text-white bg-clay-100 rounded-md ring-clay-100 ring-4'>
        {props.children}
      </mark>
      {'  '}
    </>
  )
}
