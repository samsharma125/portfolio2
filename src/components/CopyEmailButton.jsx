import React, { use } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { useState } from 'react';

const CopyEmailButton = () => {
    const [copied,setCopied]=useState(false);
    const email= "satyamsharma8755125@gmail.com";//email here to be copied by the user 
    
    const copyToClipboard = () =>{
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false),2000);
    }



    return (

    <motion.button onClick={copyToClipboard} 
    whileHover={{y:-5}}
    whileTap={{scale:1.05}}
    className='relative px-1 py-4 text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
        
        <AnimatePresence mode='wait'>
     { copied ? (
<motion.p
 className='flex items-center justify-center gap-2 ' 
 key="copied"
     initial ={{opacity:0,y:-10}}
     animate={{opacity:1,y:0}}
     exit={{opacity:0,y:-10}}
     transition={{duration:0.1,ease:"easeInOut"}
    }>
       <img src="assets/copy-done.svg"className='w-5' alt="" />
                 Email has Copied    </motion.p>
        ) : (
       <motion.p className='flex items-center justify-center gap-2'
     initial ={{opacity:0,}}
     key="copy"
     animate={{opacity:1,}}
     exit={{opacity:0,}}
     transition={{duration:0.1,}}
       >
       <img src="assets/copy.svg" className='w-5' alt="copy" />
        Copy Email Address 
      </motion.p>)}
      
      
      </AnimatePresence>
        </motion.button>
  )
}

export default CopyEmailButton