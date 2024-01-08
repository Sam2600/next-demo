import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center my-10 rounded-lg shadow-lg p-10 m-5 mx-auto text-center bg-slate-200 text-black w-7/12'>
      <p className='text-xl p-2'> Hello This is Home Page</p>
      <Link className="hover:text-green-600" href="/about">To About Page</Link>
      <Link className="hover:text-green-600" href="/about/info">To Info Page</Link>
    </div>
  )
}

export default HomePage