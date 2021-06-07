import Image from 'next/image'
const Hero = () => (
  <section className='container mx-auto text-white'>
    <div className='flex items-center justify-center'>
      <div className=' flex flex-col items-center justify-center py-20 px-10 sm:py-32 sm:w-9/12 text-center'>
        <h1 className=' text-4xl  md:text-6xl font-semibold'>
          Scalable solutions build on time and within budget.
        </h1>
        <p className='pt-6'>
          Looking for a team to validate your idea, lauch that minimum viable
          product or innovate on that product or service, you are in the right
          place. Our team dont just design and code, we offer and build
          solutions.{' '}
        </p>
      </div>
    </div>
  </section>
)
export default Hero
