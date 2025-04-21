import React from 'react'
import Card from './Card'
import { PiArrowUpLeft } from 'react-icons/pi'

const Cards = () => {
  return (

    <div className='w-full mt-25'>
        <div className='max-w-screen-xl mx-auto gap-5 py-20 flex'>
        <Card width={"basis-1/3"} start={false} para={true} title="Up Next Culture" subtitle="Projects & Case Studies"/>
        <Card width={"basis-2/3"} start={true} para={false} hover="true"  title="Get in Touch" subtitle="Let's do it together"/>
        </div>
    </div>
   
  )
}

export default Cards