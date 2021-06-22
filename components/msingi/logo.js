import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href='#'>
        <Image
          src='/logo/msingi/Msingi_msingi-02.svg'
          alt=''
          className='object-contain'
          width={200}
          height={100}
        />
      </Link>
    </div>
  )
}

export default Logo
