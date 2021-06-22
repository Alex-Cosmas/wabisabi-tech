const OurProcess = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-20 text-center sm:py-32 sm:w-10/12'>
      <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
        Our Process
      </h1>
      <div className='flex'>
        <div className='w-1/2 text-left'>
          <p className='pt-6 '>
            We employ design thinking process to solve the challenges that we
            tackle daily.
          </p>

          <div className='mt-6'>
            We:
            <h6>Understand</h6>
            <h6>Research</h6>
            <h6>Define</h6>
            <h6>Ideate</h6>
            <h6>Prototype</h6>
            <h6>Test</h6>
            <h6>Build</h6>
          </div>
        </div>
        <div className='w-1/2'>
          <p id='understand' className='pt-6 text-left'>
            We never assume anything when taking any project. We try to clearly
            understand what the project is really about. Once a project has been
            understood then we are able to set clear objectives and proceed to
            observation & research phase.
            <br />
          </p>
          <p id='research' className='pt-6 text-left'>
            If one falls ill, they go to a doctor. The first thing a doctor does
            is diagonise before proposing a remedy. The same goes for a
            mechanic. For us , we do our homework to diagnose the challenge so
            that we can understand the client and what they needs are instead of
            prososing solutions that might have worked for other but might not
            work for them.
            <br />
          </p>
          <p id='define' className='pt-6 text-left'>
            Once we have an clear picture of the requirements and understanding
            we now process to craft a sustainable soltuion that is not
            opinionated and is based on facts.
            <br />
          </p>
          <p id='ideate' className='pt-6 text-left'>
            At this stage we let all ideas run wild. This is usally focused to
            solve the challenge at hand and we design as much ideas as possible.
            This is normally a collaborative effort with the clients.
            <br />
          </p>
          <p id='prototype' className='pt-6 text-left'>
            Once we have an idea of the problem we start creating the solutions.
            We pick the most important bits of the ideas which can be feature to
            create solution. By doing so it helps reduce cost and we efficiently
            solve the challenge and build a solution that is sustainable.
            <br />
          </p>
          <p id='test' className='pt-6 text-left'>
            We test it out to the users and clients to validate on the ideas and
            the solutions propose. Normally, we do this in small groups of beta
            users and if the product does not solve the problem we revisit the
            problem and try to solve based on the feedback they provide.
            <br />
          </p>
          <p id='build' className='pt-6 text-left'>
            Once the product has been validated and the clients are happy and
            love the solutions, only then can we proceed to build the entire
            product and iterating constantly through sprints which are usually
            between 4-6 week apart. That way we can control the cost as well as
            keep the team engaged and focused on the project.
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurProcess
