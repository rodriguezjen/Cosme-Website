'use client'
import React from 'react'
import Image from 'next/image'
import { MdAddToHomeScreen } from 'react-icons/md'
import { GiLipstick } from 'react-icons/gi'
import { FaInfo } from 'react-icons/fa'
import { PiReadCvLogoThin } from 'react-icons/pi'
import { motion } from 'framer-motion'

interface HeaderProps{
    setPage:(page:string)=>void;
}
const Header:React.FC<HeaderProps>= ({setPage}) => {
    const togglePage=(page:string)=>{
        setPage(page)
    }
  return (
    <div className='h-full w-20 flex flex-col bg-custom'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <Image className='h-20 w-20 mt-5 rounded-full animate-pulse'src='/cosmelogo.png' alt='logo' width={100} height={100}/>
        </motion.div>
    
        <motion.button onClick={()=>togglePage("Mainpage")} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hover:text-custompink text-white ease-in-out duration-150'>
            <MdAddToHomeScreen className='text-4xl ml-5 mt-20'/>
        </motion.button>
        
        <motion.button onClick={()=>togglePage("Product")} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hover:text-custompink text-white ease-in-out duration-150'>
            <GiLipstick className='text-4xl ml-5 mt-10 '/>
        </motion.button>

        <motion.button onClick={()=>togglePage("About")} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hover:text-custompink text-white ease-in-out duration-150'>
            <FaInfo className='text-4xl ml-5 mt-10'/>
        </motion.button>
 
        <motion.button onClick={()=>togglePage("Feedback")} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hover:text-custompink text-white ease-in-out duration-150'>
            <PiReadCvLogoThin className='text-4xl ml-5 mt-10'/>
        </motion.button>

    </div>
  )
}

export default Header
