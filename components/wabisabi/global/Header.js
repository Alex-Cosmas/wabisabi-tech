import Image from 'next/image'
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
            <li>Who we are </li>
            <li> Our Process </li>
            <li>Featured Projects </li>
            <li>Rates and Billing </li>
          </ul>
        </div>

        <div className='flex gap-x-3'>
          <div>Contact Us</div>
          <div>Schedule a Call</div>
        </div>
      </div>
    </section>
  )
}
export default Header
