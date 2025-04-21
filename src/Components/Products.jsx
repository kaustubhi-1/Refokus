import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

const Products = () => {
   
    let products = [
        {
            title:"Rainfall", 
            description:"We reimagined Rainfall’s digital presence with a sleek, interactive single-page design, reflecting their evolution into a global leader in venture capital.", 
            live:true, 
            url: "https://cdn.refokus.com/website/2022/videos/rainfall.webm",
            case:false
        },
        {
            title:"Brightwave", 
            description:"A scalable and dynamic website with a bold visual identify to reflect Brightwaves' evolution from an ambitious AI-driven startup to a mature leader in the financial sector.", 
            live:true,
            url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4", 
            case:false
        },
        {
            title:"GoodRoots", 
            description:"We redesigned GoodRoots' website to enhance user experience, streamline navigation, and better communicate their shared equity model for renters seeking homeownership.", 
            live:true, 
            url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
            case:true
        },
        {
            title:"Cula", 
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", 
            live:true, 
            url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
            case:false
        },
        {
            title:"Analog Way", 
            description:"Analog Way's website transformed with a dynamic, story-driven homepage and streamlined design, redefining their digital presence to attract leads and engage users.", 
            live:true, 
            url: "https://cdn.refokus.com/website/2022/videos/summon.webm",
            case:false
        }
    ]
    const [currentVideo, setCurrentVideo] = useState("")
    const[pos,setpos] = useState(0)
    const mover = (val) => {
        setpos(val*20)
    }

  return (
    <div className='relative mt-32'>
       {products.map((val,index)=> <Product count={index} val={val} mover={mover} setCurrentVideo={setCurrentVideo}/>) }
       <div className='w-full h-full top-0 absolute pointer-events-none '>
      
        {currentVideo && (
             <motion.div 
             initial={{y:pos}} 
             animate={{y:pos + `rem`}}
             transition={{ease:[0.76,0,0.24,1], duration:0.6}}
             className='window w-[32rem] h-[20rem] left-[28%] absolute rounded-[1.5rem] overflow-hidden'
         >
            <video
              key={currentVideo} // this forces re-render when video URL changes
              src={currentVideo}
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
            />
            </motion.div>
        )}
      
 
{/*        
        <motion.div className=' w-full h-full bg-blue-400'></motion.div>
        <motion.div className=' w-full h-full bg-blue-400'></motion.div>
        <motion.div className=' w-full h-full bg-blue-400'></motion.div> */}
        

        </div>
       </div>
  
  )
}

export default Products