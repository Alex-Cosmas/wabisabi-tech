import Image from 'next/image'
const FeatureWrapper = () => {
  return (
    <>
      <div className='grid gap-y-4'>
        <div className='flex CaseStudyWrapper '>
          {/* Container */}
          <div className='flex flex-col-reverse w-full text-left md:flex-row bg-wsGrey-200'>
            {/* Left Side */}
            <div className='flex flex-col justify-center p-4 md:p-10 md:w-1/2'>
              <div className='grid gap-y-4'>
                <h1 className='text-4xl'>Sokoplace</h1>
                <p>
                  Logistics, warehousing and fulfillment SAAS solution for B2B
                  and B2C business
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className='w-full md:w-1/2 unset-img'>
              <Image
                src='/609aa183e271803744931aa6_Roostify Device-p-500.png'
                layout='fill'
                className='custom-img'
              />
            </div>
          </div>
        </div>

        <div className='flex CaseStudyWrapper'>
          <div className='flex flex-col-reverse w-full text-left md:flex-row bg-wsGrey-200'>
            <div className='flex flex-col justify-center p-4 md:p-10 md:w-1/2'>
              <div className='grid gap-y-4'>
                <h1 className='text-4xl'>Msingi</h1>
                <p>
                  Residential rental management solution for tenants, landlords
                  and propery managers
                </p>

                {/* <div className='inline-flex flex-col gap-x-4 md:flex md:flex-row'>
                  <button className='px-6 py-2 rounded-sm bg-green'>
                    View Case Study
                  </button>
                  <button className='px-6 py-2 bg-transparent rounded-sm'>
                    Demo
                  </button>
                </div> */}
              </div>
            </div>
            <div className='w-full md:w-1/2 unset-img'>
              <Image
                src='/609aa183e271803744931aa6_Roostify Device-p-500.png'
                layout='fill'
                className='custom-img'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { FeatureWrapper }
{
  /* <div className='inline-flex flex-col gap-x-4 md:flex md:flex-row'>
                  <button className='px-6 py-2 rounded-sm bg-green'>
                    View Case Study
                  </button>
                  <button className='px-6 py-2 bg-transparent rounded-sm'>
                    Demo
                  </button>
                </div> */
}
