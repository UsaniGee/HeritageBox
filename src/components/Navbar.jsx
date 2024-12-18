import React from 'react'
import Logo from './Navbar/Logo.jsx'
import Links from './Navbar/Links.jsx'
import Button from './Button.jsx'
import Vector from '/assets/Vector.png'
const Navbar = () => {
  return (
    <div className='relative  z-10'>
    <div className='flex w-full gap-5 justify-between items-center pt-[30px] pl-[104px] absolute z-10 bg-inherit'>
      <Logo />
      <Links />
      <div className='mr-36'>
        <Button content={'Contact Us'} BtnStyle={'w-[280px] h-[70px] font-medium text-xl gap-10'} image={Vector} />
      </div>
    </div>
    </div>
  )
}

export default Navbar
