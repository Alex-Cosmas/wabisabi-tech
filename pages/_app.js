import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Component {...pageProps} />;
    </div>
  )
}

export default MyApp
