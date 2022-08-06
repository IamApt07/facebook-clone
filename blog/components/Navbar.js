import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='bg-yellow-500  flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-10' >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <Link href={"/#"}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="mx-auto h-12 w-auto" src="https://miro.medium.com/max/11784/1*s986xIGqhfsN8U--09_AdA.png" alt="Workflow"/>
</a></Link> 
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
<Link href={"/blogs"}><a className="mr-5 hover:text-white">Blogs</a></Link>
<Link href={"/"}><a className="mr-5 hover:hover:text-white">Membership</a></Link>
<Link href={"/write"}><a className="mr-5 hover:text-white">Write</a></Link>
<Link href={"/login"}><a className="mr-5 hover:text-white">Sign In</a></Link>
</nav>
    <button className="inline-flex items-center bg-black hover:bg-white border-0 py-1 px-3 focus:outline-none text-white rounded-full text-base mt-4 md:mt-0 hover:text-yellow-500">Get started
</button>
</div>
</div>
  )
}

export default Navbar
