const Portfolio = () => (
  // Inspiration: https://blog.prototypr.io/design-a-landing-page-using-tailwind-css-3a1a68166c47

  <main class=' font-body tracking tracking-normal min-h-screen flex items-center px-6 lg:px-32 bg-purple-900 text-white'>
    {/* Header  */}

    <header class='w-full absolute left-0 top-0 p-6 lg:p-32'>
      <div class='flex justify-between'>
        <div>
          <h1 class='text-3xl font-bold'>{`{Alex Cosmas}`}</h1>
          <span>Full Stack Designer</span>
        </div>

        <div>
          <ul class='flex'>
            <li class='ml-24'>
              <a href=''>
                <div class='flex items-center justify-end'>
                  <div class='w-10 border-b border-solid border-white'></div>
                  <h1 class='ml-3 text-3xl font-bold'>1</h1>
                </div>
                <div class='text-right'>TailWind CSS</div>
              </a>
            </li>
            <li class='ml-24'>
              <a href=''>
                <div class='flex items-center justify-end'>
                  <div class='w-10 border-b border-solid border-white'></div>
                  <h1 class='ml-3 text-3xl font-bold'>2</h1>
                </div>
                <div class='text-right'>Components</div>
              </a>
            </li>
            <li class='ml-24'>
              <a href=''>
                <div class='flex items-center justify-end'>
                  <div class='w-10 border-b border-solid border-white'></div>
                  <h1 class='ml-3 text-3xl font-bold'>3</h1>
                </div>
                <div class='text-right'>CSS Modules</div>
              </a>
            </li>

            <li class='ml-24'>
              <a href=''>
                <div class='flex items-center justify-end'>
                  <div class='w-10 border-b border-solid border-white'></div>
                  <h1 class='ml-3 text-3xl font-bold'>4</h1>
                </div>
                <div class='text-right'>Build & Deploy</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    {/* Hero */}
    <section class='w-full md:w-9/12 xl:w-8/12'>
      <h1 class='text-3xl lg:text-5xl font-bold text-pink-500 mb-2'>
        Tail
        <br />
        Design
      </h1>

      <p class='font-bold mb-1'>The Design is in the details...</p>
      <p>Lorem ipsum dolor sit amet...</p>
    </section>
    {/* Footer  */}
    <footer class='absolute right-0 bottom-0 p-6 lg:p-32'>
      <p class='font-bold mb-1'>Yours Truly</p>
      <p>Chigozie Orunta (Full Stack Engineer)</p>
    </footer>
  </main>
)
export default Portfolio
