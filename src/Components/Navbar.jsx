import React from 'react'
import Button from './Button'
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='flex items-center border-b-1 border-zinc-500 pb-7 w-full justify-between '>
        <img className='h-[100%]  w-30' src={Logo} alt="" />
        <div className='links items-center flex justify-between gap-14 ml-32'>
           {['Home' , 'Work', 'Culture','','News'].map((elem,index) => 
            elem.length === 0 ? <span key={index} className='w-[2px] h-9 bg-zinc-700'></span> : 
            (<a key={index} className='text-sm text-white flex items-center gap-2' href='#'>
                {index===1 && <span className='inline-block w-2 h-2 rounded-full bg-green-400'></span>}
                {elem}
            </a>)
            
            )}
            <Button/>
        </div>

        
    </div>
  )
}

export default Navbar
