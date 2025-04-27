import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header() {
    const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <header className="navHeader fixed w-full top-0 left-0 z-10 shadow-md backdrop-filter backdrop-blur-md">
        <div className="flex justify-between md:justify-around items-center  container mx-auto ">
            <a className='text-white md:text-2xl text-xl font-row-font flex items-center gap-0.5'>Bhanushri P</a>
            <nav className="hidden nav md:block">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex">
                    <li><a href="/" >Home </a></li>
                    <li><a href="#about" >About </a></li>
                    <li><a href="#skill" >Skill </a></li>
                    <li><a href="#projects" >Project </a></li>
                    <li><a href="#qualification" >Qualification </a></li>
                    <li><a href="#contact" >Contact </a></li>
                </ul>
            </nav>
            <div className="block md:hidden py-4">
            <button onClick={() => setToggleMenu(!toggleMenu)}><Bars3Icon className='size-4 text-white'/></button>
            {toggleMenu && <nav className="">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="mobileNav">
                    <li><a href="#home" >Home </a></li>
                    <li><a href="#about" >About </a></li>
                    <li><a href="#skill" >Skill </a></li>
                    <li><a href="#project" >Project </a></li>
                    <li><a href="#qualification" >Qualification </a></li>
                    <li><a href="#contact" >Contact </a></li>
                </ul>
            </nav>}
            </div>
            
        </div>
      
    </header>
  )
}

export default Header
