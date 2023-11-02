import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
const NavBar = () => {
    const links =[
        { lable: 'Dashboad', href:'/' },
         {lable:'Issues', href :'/issues'},
]
  return (
    <nav className='flex space-x-6 border-b h-14  items-center'>
      <Link href='/'><AiFillBug/></Link>
          <ul className='flex space-x-7'>
              {links.map(link => <Link key={link.href}
                  className='text-zinc-500 hover:zinc-200 transition-colors'
                  href={link.href}>{ link.lable}</Link>)}  
    
      </ul>
    </nav>
  )
}

export default NavBar
