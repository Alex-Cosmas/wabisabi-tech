const ContactUs = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-20 text-center sm:py-32 sm:w-10/12'>
      <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
        How can we help you?
      </h1>
      {/* <p className='mb-6'>Launch with confidence, on time and within budget.</p> */}
      <div className='w-full py-24 bg-black text-wsGrey-200'>
        <div className='flex flex-col items-center'>
          <h1 className='w-3/4 text-4xl'>
            Launch with confidence, on time and within budget
          </h1>

          <div className='inline-flex mt-6 gap-x-4 '>
            <button className='px-6 py-2 border border-white rounded-sm '>
              Drop an Email
            </button>
            <button className='px-6 py-2 text-black rounded-sm bg-green'>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
