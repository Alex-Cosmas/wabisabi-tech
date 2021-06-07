import Logo from '/components/Header/logo'

const Login = () => {
  return (
    <div className='bg-gray-100 h-screen/1'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center h-screen flex-col'>
          <div>
            <Logo />
          </div>
          Login
        </div>
      </div>
    </div>
  )
}

export default Login
