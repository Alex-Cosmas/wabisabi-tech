const ContactUs = () => {
  return (
    <section>
      <div className='px-4 py-20 md:px-10 bg-items-center gray-300 md:py-32 '>
        <div className='flex flex-col items-center'>
          <h1 className='mb-6 text-4xl font-semibold tracking-tight text-center md:text-5xl md:leading-none'>
            How can we help you?
          </h1>

          <div className='w-full py-12 bg-black md:py-24 text-wsGrey-200'>
            <div className='flex flex-col items-center text-center'>
              <h1 className='w-3/4 text-2xl md:text-4xl'>
                Launch with confidence, on time and within budget
              </h1>

              <div className='inline-flex flex-col mt-6 md:flex-row gap-y-3 md:gap-x-4'>
                <button className='px-6 py-2 border border-white rounded-sm '>
                  Shoot us an email
                </button>
                <button className='px-6 py-2 text-black rounded-sm bg-green'>
                  Schedule a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
