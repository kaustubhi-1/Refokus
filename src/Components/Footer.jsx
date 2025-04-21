import React from 'react'

const Footer = () => {
  return (
    <div className='w-full pb-9 mt-25 '>
        <div className=' max-w-screen-xl mx-auto flex  gap-32'>
           
                <div className='basis-1/2'>
                   <h1 className='text-[10rem] text-white font-semibold leading-none tracking-tight'>refocus.</h1>
                </div>
                <div  className='basis-1/2 flex gap-4'>
                   <div className='basis-1/3'>
                    <h1 className='text-white mb-10'>Socials</h1>
                    {["Instagram","Twitter(x ?)","Linkdin"].map((item,index) => {
                        return <a key={index} className='block mt-4 capitalize text-zinc-500'>{item}</a>
                    })}
                   </div>
                   <div className='basis-1/3'>
                    <h1 className='text-white mb-10'>Socials</h1>
                    {["Instagram","Twitter(x ?)","Linkdin"].map((item,index) => {
                        return <a key={index} className='block mt-4 capitalize text-zinc-500'>{item}</a>
                    })}
                   </div>
                   <div className='basis-1/3 text-white'>
                    <p>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                   <button className='bg-blue-600 mt-3 px-2 py-3 rounded-md text-semibold  '>Enterprise Partner </button>
                   </div>
                </div>

        </div>
    </div>
  )
}

export default Footer