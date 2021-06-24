import React from 'react'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex gap-2 py-10'>
        <Link href='/experiments/Tabs.js'>
          <a>Home</a>
        </Link>
        <Link href='/experiments/Tabs.js/pageTwo'>
          <a>Page 2</a>
        </Link>
      </div>

      <div>{children}</div>
    </>
  )
}

export default Layout
