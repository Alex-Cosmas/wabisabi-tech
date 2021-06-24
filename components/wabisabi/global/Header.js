import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-between sm:flex-row'>
        <Image
          src='/logo/wabisabi/logo-color.svg'
          alt=''
          className='object-contain'
          width={300}
          height={100}
        />

        <div className=''>
          <ul className='flex flex-col sm:flex-row gap-x-6'>
            <Link href=''>
              <a>Our Process</a>
            </Link>
            <Link href=''>
              <a>Who are we?</a>
            </Link>
            <Link href=''>
              <a>Featured Work</a>
            </Link>
          </ul>
        </div>

        <div className='flex items-center gap-x-3'>
          <button className='px-6 py-2 text-black rounded-sm bg-green'>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
export default Header
