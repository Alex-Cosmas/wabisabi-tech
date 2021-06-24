import { Tabs, Tab, Panel } from '@bumaga/tabs'

const OurProcess = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-20 text-center sm:py-32 sm:w-10/12'>
      <h1 className='mb-6 text-4xl font-semibold md:text-5xl md:leading-none'>
        Our process
      </h1>

      <p className='mb-12 max-w-prose'>
        We employ design thinking to solve the challenges that we take on so
        that we solve the right problem and build the right features. We :
      </p>

      <div className='w-full overflow-hidden rounded-md shadow-lg cursor-pointer bg-wsGrey-200'>
        <Tabs>
          <div className='flex'>
            <div className='w-4/12 bg-wsGrey-900'>
              <div className='flex flex-col gap-8 p-10 text-white '>
                <Tab>
                  <div className='py-3'>Understand</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Research</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Define</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Ideate</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Prototype</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Test</div>
                </Tab>
                <Tab>
                  <div className='py-3'>Build</div>
                </Tab>
              </div>
            </div>
            <div className='w-8/12 p-10 text-left'>
              <Panel>
                <p className='text-green-900'>
                  We never assume anything when taking any project. We try to
                  clearly understand what the project is really about. Once a
                  project has been understood then we are able to set clear
                  objectives and proceed to observation & research phase.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  If one falls ill, they go to a doctor to seek treatment. The
                  first thing the doctor does to the patient is diagonise before
                  proposing a remedy. The same goes to the mechanic , if a
                  clients car breaks down or starts being faulty. For WabiSabi,
                  we do our homework to diagnose our clients challenges so that
                  we better understand the needs and requirments before
                  proposing solutions. The biggest challenge we face is that
                  clients come with fixed ideas of what their competitors are
                  doing and dont understand that what might have work for
                  another business might be the wrong solution for theirs.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  Once we have an clear picture of the requirements and
                  understanding we now process to craft a sustainable soltuion
                  that is not opinionated and is based on facts.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  At this stage, we let all ideas run wild. This is usually
                  focused to solve the challenge at hand and we design as much
                  ideas as possible. This is normally a collaborative effort
                  with the clients.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  Once we have an idea of the problem we start creating the
                  solutions. We pick the most important bits of the ideas which
                  can be feature to create solution. By doing so it helps reduce
                  cost and we efficiently solve the challenge and build a
                  solution that is sustainable.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  We test it out to the users and clients to validate on the
                  ideas and the solutions propose. Normally, we do this in small
                  groups of beta users and if the product does not solve the
                  problem we revisit the problem and try to solve based on the
                  feedback they provide.
                </p>
              </Panel>
              <Panel>
                <p className='text-green-900'>
                  Validating ideas is a really good practice to have inorder to
                  avoid building the wrong thing or product. We enter the
                  building phase where we develop the product fully in sprints
                  which are usually between 4-6 week apart.That way we can
                  control the cost as well as keep the team engaged and focused
                  on the project.
                </p>
              </Panel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default OurProcess
