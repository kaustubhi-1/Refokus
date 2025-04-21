import { motion } from 'motion/react';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width,start,para,title,subtitle,hover="false"}) => {
    
  return (
    <motion.div whileHover={{backgroundColor: hover === 'true' && "#7443ff", padding:"25px"}} className={`text-white ${width} bg-zinc-800 p-5 hover:${hover} rounded-xl min-h-[28rem] flex flex-col justify-between`}>
        <div>
            <div className='w-full flex justify-between items-center'>
                <h3>{title}</h3>
                <IoIosArrowRoundForward />
            </div>
            <h1 className='text-2xl mt-4 font-medium'>{subtitle}</h1>
        </div>
        <div className='down w-full '>
            {
                start && (
                    <>
                        <h1 className='text-7xl  font-medium leading-none'>Start a Project</h1>
                        <button className='px-4 mt-6 py-2 rounded-full border'>Contact Us</button>
                    </>
                ) 
            }
            {
                para  && (
                    <>
                        <p className='text-zinc-400 mt-4'>Lorem ipsum dolor, sit amet consectetur.</p>
                    </>
                )
            }
            
            
        </div>
    </motion.div>
  )
}

export default Card