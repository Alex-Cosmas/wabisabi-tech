import { FeatureWrapper } from 'components/wabisabi/shared/FeatureWrapper'
const Featured = () => {
  return (
    <section className=''>
      <div className='px-4 py-20 md:px-10 bg-items-center gray-300 md:py-32 '>
        <div className='flex flex-col items-center'>
          <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
            Featured projects
          </h1>
        </div>
        {/* Feeature Wrapper */}
        <FeatureWrapper />
      </div>
    </section>
  )
}

export default Featured
