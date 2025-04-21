import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] text-white flex justify-between items-center px-8 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700'>
        <span className='text-white font-semibold'>{val.text}</span>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe