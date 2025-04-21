import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Image1 from "../assets/image1.png";
import Image2 from "../assets/Refokus Tools.png";
import Image3 from "../assets/Refokus.png";
import Image4 from "../assets/Summon.png";


const Main = () => {
  
const [images,setimages] = useState( [
  {url:"https://plus.unsplash.com/premium_photo-1672329275106-073b5493c00f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", top:"40%", left:"50%", isActive:false},
  {url: Image4, top:"53%", left:"44%", isActive:false},
  {url:Image2, top:"45%", left:"56%", isActive:false},
  {url:"https://images.unsplash.com/photo-1744058588832-5a0cf779b215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D", top:"61%", left:"53%", isActive:false},
  {url: "https://images.unsplash.com/photo-1744484876956-d5054fcec5f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", top:"63%", left:"40%", isActive:false},
  {url:Image3,top:"77%", left:"40%", isActive:false},
  {url:Image1, top:"87%", left:"53%", isActive:false},
])

    

    const { scrollYProgress } = useScroll()

 scrollYProgress.on('change',(data) => {

  function imagesShow(arr){
    setimages((prev)=> 
      prev.map((item,index) => arr.indexOf(index) === -1 ? 
    {...item,isActive:false} : 
    {...item,isActive:true}
  ))
  }
  switch(Math.floor(data*100)){
    case 0:
      imagesShow([])
      break;
    case 3:
      imagesShow([0])
      break;
    case 5:
      imagesShow([0,1])
      break;
    case 7:
      imagesShow([0,1,2])
      break;
    case 8:
      imagesShow([0,1,2,3])
      break;
    case 10:
      imagesShow([0,1,2,3,4])
      break;
    case 12:
      imagesShow([0,1,2,3,4,5])
      break;
    case 13:
        imagesShow([0,1,2,3,4,5,6])
        break;
  }
 })

  

  return (
    <div className='w-full mt-10'>
        <div className='relative max-w-screen-xl text-white mx-auto text-center text-semibold'>
           <h1 className='text-[50vh] pt-20 leading-none tracking-tight font-medium select-none'>work</h1>
           <div className='w-full h-full top-0 absolute'>
            {images.map((elem,index) => (elem.isActive && (<img key={index} className='absolute w-52 h-65 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url}  style={{top:elem.top, left:elem.left}}  />)))}
           </div>
        </div>
    </div>
  )
}

export default Main