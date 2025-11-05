import React from 'react'
import FlipWords from './FlipWords'
import { motion } from 'motion/react'
const words=["secure","modern","Scalable"]
const variants={
    hidden:{opacity:0,x:-50},
    visible:{opacity:1,x:0},


}

const HeroText=()=> {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text' >
        {/* {desktop  view}     */}
    <div className='flex-col hidden md:flex c-space'> 
            <motion.h1 
            className='text-4xl  font-medium' 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}
             >   Hi I'm SATYAM SHARMA   </motion.h1>
   
    <div className='flex flex-col items-start'>

        <motion.p className='text-5xl font-medium text-neutral-300' 
         initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{delay:1.2}} >  A Developer <br />  Dedicate to Crafting         </motion.p>

        <div>
         {/* get flip word */}

<motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.5}}
            >
    <FlipWords words={ ["secure","modern","Scalable"]} className="font-black text-white text-8xl "/>
</motion.div>
         <motion.p className='text-4xl  font-medium text-neutral-300 '
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}
            > Web Solutions  </motion.p>

        </div>
    </div>  
    </div>



    {/* //Mobile view */}
   
   <div className='flex flex-col md:hidden space-y-6'>
    <motion.p className='text-4xl font-medium' 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.2}}
    >  Hi I'm SAM </motion.p>

 <div>
    <motion.p className='text-5xl font-black text-nuetral-300'   variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.5}}>  Buidling     </motion.p>

<motion.div> <FlipWords words={ words} className="font-bold text-white " />  </motion.div>

< motion.p className='text-4xl font-black text-nuetral-300'
  variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}> Web Applications</motion.p>
 </div>

   </div>
  </div>
   

  )
}

export default HeroText