import React from 'react'
import Image from 'next/image'
import { AiFillTikTok } from 'react-icons/ai'
import { IoLogoInstagram } from 'react-icons/io'
import { SiShopee } from 'react-icons/si'
import { motion } from 'framer-motion'
const Mainpage = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center relative py-5 '>
      <h1 className='h-auto w-full z-10 flex items-center justify-center mt-40 flex-col text-6xl text-custompink font-semibold animate-bounce  '>Welcome!</h1>
        <Image className='h-full w-full border object-cover absolute' src={"/bg1.jpg"} alt='logo' height={1000} width={1000}></Image>
          <motion.h3 initial={{y:-99,opacity:0}} animate={{y:0.5,opacity:1}} transition={{duration:0.5,delay:0.4}} className='h-auto w-full animate-pulse flex text-2xl font-medium text-custompink justify-center z-10 mt-20'>Shop now!</motion.h3>

        <div className='flex justify-center gap-3 items-center mt-5 '>
          <motion.button initial={{x:-99,opacity:0}} animate={{x:0.5,opacity:1}} transition={{duration:0.5,delay:1.5,ease:"easeInOut"}} className='h-10 w-40 pt-1 rounded-sm flex border-blue-400 border-3 text-zinc-700 bg-blue-200 hover:bg-custompink hover:text-white hover:border-white z-10 hover:animate-pulse duration-300 ease-in-out'>
            <SiShopee className='ml-2 text-2xl text-orange-500 rounded-sm'/>
            <h2 className='ml-4 pb-5'>Shopee</h2>
          </motion.button>

          <motion.button initial={{x:-99,opacity:0}} animate={{x:0.5,opacity:1}} transition={{duration:0.5,delay:1,ease:"easeInOut"}} className='h-10 w-40 pt-1 rounded-sm flex border-blue-400 border-3 text-zinc-700 bg-blue-200 hover:bg-custompink hover:text-white hover:border-white  hover:animate-pulse duration-300 ease-in-out z-10'>
            <IoLogoInstagram className='ml-2 text-2xl bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400 rounded-sm'/>
            <h2 className='ml-4 pb-5 '>Instagram</h2>
          </motion.button>
       
          <motion.button initial={{x:-99,opacity:0}} animate={{x:0.5,opacity:1}} transition={{duration:0.5,delay:0.5,ease:"easeInOut"}} className='h-10 w-40 pt-1 rounded-sm flex border-blue-400 border-3 text-zinc-700 bg-blue-200 hover:bg-custompink hover:text-white hover:border-white z-10 hover:animate-pulse shadow-md duration-300 ease-in-out'>
           <AiFillTikTok className='ml-2 text-2xl text-black bg-white rounded-sm'/>
           <h2 className='ml-4 pb-5'>TikTok</h2>
          </motion.button>

        </div>
          

    </div>
  )
}

export default Mainpage
