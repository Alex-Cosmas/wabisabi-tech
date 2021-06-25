import Image from 'next/image'
const Hero = () => (
  <section className=''>
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center px-5 py-10 text-center md:px-10 md:py-20 sm:py-32 sm:w-10/12'>
        <p className='pb-3 '>
          Our role is to assist founders and innovation teams launch new
          ventures.
          {/* Looking for a team to validate your idea, lauch that minimum viable
          product or innovate on that product or service, you are in the right
          place. Our team dont just design and code, we offer and build
          solutions. */}
        </p>
        <h1 className='text-3xl font-semibold sm:text-4xl md:text-5xl md:leading-none'>
          We help you launch with confidence, on time and within budget.
          {/* Scalable solutions built on time and within budget. */}
        </h1>

        <button className='px-6 py-2 mt-5 rounded shadow-sm bg-green'>
          Learn More
        </button>
      </div>
    </div>
  </section>
)
export default Hero
