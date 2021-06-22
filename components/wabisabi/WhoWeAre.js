const WhoWeAre = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-20 text-center sm:py-32 sm:w-10/12'>
      <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
        Who we are
        {/* Scalable solutions built on time and within budget. */}
      </h1>
      <div>
        <div className='flex justify-center'>
          <div className='flex flex-col w-10/12 pt-6 text-left gap-y-3'>
            <p>
              The name Wabi Sabi is an accient japenesse philiosphy that
              embraces simplicity, imperfection and impermance. This ancient
              Japanesse philosphy summaries the values we hold dear as a
              businesses and company.
            </p>
            <p>
              Wabi Sabi is hard to duplicate, which makes it uniquely yours. We
              define ourselves as a research design agency that provides end to
              end solutions. We are fully remote and work with willing and
              remarkable humans to solve the challenges that the communities
              face on a day to day basis through design and code.
            </p>
            <p>
              For us, we wanted to build and run a business that allows just
              that., where all ideas are welcomed and allow the mind to run wild
              and free because ultimately, we all in one form or another want to
              be free or happy in whatever form that may be.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
