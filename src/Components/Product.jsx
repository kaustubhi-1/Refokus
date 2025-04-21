import React from 'react'
import Button from './Button'
import { style } from 'motion/react-client';

const Product = ({val,mover,count,setCurrentVideo }) => {
  return (
    <div  className='w-full h-[22rem]'>
        <div onMouseEnter={() => {mover(count) ; setCurrentVideo(val.url); }} className='max-w-screen-xl text-white mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center gap-5 '>
                {val.live && <Button  />}
                {val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product