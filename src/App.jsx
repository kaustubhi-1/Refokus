import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquee from './Components/Marquee'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-full bg-zinc-900 font-sans'>
     <div className='max-w-screen-xl mx-auto py-6'> 
        <Navbar />
        <Main/>
        
     </div>
     <div>
     <Stripes />
     <Products />
     <Marquee />
     <Cards />
     <Footer />
     </div>
    </div>
   
  )
}

export default App