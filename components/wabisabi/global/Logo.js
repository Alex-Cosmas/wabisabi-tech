import Image from 'next/image'
const Logo = () => {
  return (
    <Image
      src='/logo/wabisabi/logo-color.svg'
      alt=''
      className='object-contain'
      width={300}
      height={100}
    />
  )
}

export { Logo }
