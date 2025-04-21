import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    let data = [
        {text:"CSSDesignAwards", number:48},
        {text:"No-CodeConf2021", number:2},
        {text:"awwwward.", number:11},
        {text:"CSSDesignAwards", number:2},
        {text:"No-CodeConf2021", number:11},
        {text:"awwwward.", number:11},
    ]
  return (
    <div className='flex items-center w-full mt-20'>
       {data.map((elem,index)=>( <Stripe key={index} val={elem} />)
       
       )}
    </div>
  )
}

export default Stripes