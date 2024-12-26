import Link from 'next/link'
// import ThemeChanger from './DarkSwitch'
import { Disclosure } from '@headlessui/react'
import Logo from "../public/img/Yogalogo.png";

export default function Navbar() {
  // const navigation = [
  //   'home',
  //   'services',
  //   'tutorials',
  //   'blogs',
  //   'ABOUT ME',
  //   'CONTACT US',
  // ]

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services', target: '_blank' },
    { name: 'ONLINE TUTORIALS', href: '/tutorials', target: '_blank' },
    { name: 'BLOGS', href: '/blogs', target: '_blank' },
    { name: `ABOUT ME`, href: '/#about' },
    { name: `CONTACT US`, href: '#footer' },
    // { name: `FAQ's`, href: '#faq' },
  ]

  return (
    <div className='w-full fixed shadow-md bg-white z-50'>
      <nav className='container relative flex items-center justify-between py-0.5 px-6 sm:px-0 sm:mx-auto font-header'>
      <Link href='/'>
                  <a className='flex items-center space-x-2'>
                    <span>
                      <img
                        src='/img/Yogalogo.png'
                        alt='N'
                        className='w-36'
                      />
                    </span>
                  </a>
                </Link>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto dark:text-gray-800 rounded-md lg:hidden hover:text-clay-500 focus:outline-none text-clay-200 focus:text-white focus:bg-clay-200'>
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='p-4 flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a className='justify-center flex text-uppercase text-center leading-tight w-full px-4 py-4 -ml-4 text-clay'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {/* <Link href='/'>
                      <a className='w-full px-6 py-2 mt-3 text-center text-clay-500 bg-white rounded-md lg:ml-5 font-semibold'>
                        View Classes
                      </a>
                    </Link> */}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='nav__item mx-4' key={index}>
                <Link href={menu.href}>
                  <a className='inline-block py-2 text-base font-normal dark:text-gray-800 no-underline rounded-md text-clay focus:outline-none dark:focus:bg-gray-800 menuitem'>
                    {menu.name}
                    <span className='hover:w-full'></span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>


      </nav>
    </div>
  )
}
