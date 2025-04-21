import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-37 px-4 py-2 flex items-center justify-between h-full bg-white  text-black rounded-full'>{title} 
    <BsArrowReturnRight />
    </div>
    
  )
}

export default Button