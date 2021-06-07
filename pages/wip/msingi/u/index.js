import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 h-screen/1'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-screen'>
          Dashboard
          <Link href='/'>
            <Image
              src='/logo/msingi/Msingi_msingi-02.svg'
              alt=''
              className='object-contain'
              width={200}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
