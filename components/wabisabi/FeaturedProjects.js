import Image from 'next/image'

const Featured = () => {
  return (
    <div className='flex flex-col items-center justify-center px-3 py-20 text-center md:px-10 sm:py-32 sm:w-10/12'>
      <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
        Featured projects
      </h1>
      <div className='grid gap-y-2'>
        <div className='flex CaseStudyWrapper'>
          <div className='flex flex-col-reverse w-full text-left md:flex-row bg-wsGrey-200'>
            <div className='flex flex-col justify-center p-2 md:p-10 md:w-1/2'>
              <div className='grid gap-y-4'>
                <h1 className='text-4xl'>Sokoplace</h1>
                <p>
                  Logistics, warehousing and fulfillment SAAS solution for B2B
                  and B2C business
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
            <div className='md:w-1/2 unset-img'>
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
            <div className='md:w-1/2 unset-img'>
              <Image
                src='/609aa183e271803744931aa6_Roostify Device-p-500.png'
                layout='fill'
                className='custom-img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
