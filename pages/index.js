import Image from 'next/image'
import HeroSection from './Hero'

const Index = () => (
  <div>
    <section className='container mx-auto'>
      <div className='flex flex-col sm:flex-row text-white items-center justify-between'>
        <Image
          src='/logo/wabisabi/white-logo.svg'
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

    <HeroSection />
  </div>
)
export default Index
