import React from 'react'
import Link from 'next/link'


const Navbar = ({}) => {
  return (
    <nav className='bg-[#111] '>
    <div className='flex items-center justify-between max-w-7xl mx-auto ' >
    <div className='font-bold text-neutral-100 font-neue p-4   container tracking-widest flex justify-between'>
        <Link href='/'>
            <a className='text-base md:text-2xl' >Home
            
            </a>
        </Link>
        <Link href='/fav'>
            <a className='text-base md:text-2xl' >Go To Your Favorites
            
            </a>
        </Link>
        
    </div>

    <div >

    </div>
    
     </div>
       
    </nav>
  )
}

export default Navbar