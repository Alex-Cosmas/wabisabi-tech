import Link from 'next/link'
import { Logo } from '/components/wabisabi/global/Logo'
import { useState } from 'react'

import { MenuIcon } from '/components/wabisabi/shared/ToggleMenu'
const Header = () => {
  // const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <nav className='flex bg-transparent '>
      <div className='flex flex-wrap items-center w-full p-3 '>
        <div className='md:w-3/12'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <button
          className='inline-flex p-3 ml-auto rounded outline-none hover:text-wsGrey-800 hover:bg-greenHover lg:hidden '
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto '>
                Our process
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto '>
                Who we are
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto '>
                Featured projects
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-6 py-2 font-bold rounded lg:inline-flex lg:w-auto bg-wsGrey-900 text-wsGrey-200'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header

// <div className='flex items-center justify-between sm:flex-row'>
//         <Image
//           src='/logo/wabisabi/logo-color.svg'
//           alt=''
//           className='object-contain'
//           width={300}
//           height={100}
//         />
//
//         <div className='md:hidden'>
//           {!showMenu && (<MenuIcon onClick={() => setShowMenu(!showMenu)} />)}
//         </div>
//
//         {showMenu && <div>This is the mobile menu</div>}
//
//         <div className='items-center justify-between hidden md:flex'>
//           <div className='mr-10'>
//             <ul className='flex flex-col sm:flex-row gap-x-6'>
//               <Link href=''>
//                 <a>Our Process</a>
//               </Link>
//               <Link href=''>
//                 <a>Who are we?</a>
//               </Link>
//               <Link href=''>
//                 <a>Featured Work</a>
//               </Link>
//             </ul>
//           </div>
//
//           <div className='flex items-center gap-x-3'>
//             <button className='px-6 py-2 text-black rounded-sm bg-green'>
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>
