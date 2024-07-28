import React from 'react'
import Logo_1 from '../assets/Logo/logo.png'

const Navbar = () => {
  return (
    <nav className='md:container md:mx-auto px-7 py-2 '>

      <img src={Logo_1} alt="logo" className='w-20'/>

      <ul>
        <li><link to="">Home</link></li>
        <li><link to="">Agents</link></li>
        <li><link to="">Property</link></li>
        <li><link to="">About</link></li>
        <li><link to="">Blog</link></li>
        <li><link to="">Contact</link></li>
      </ul>

    </nav>
  )
}

export default Navbar