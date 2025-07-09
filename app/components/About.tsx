import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='h-full w-full flex relative '>
        <Image className='h-full w-full object-cover absolute' src={'/bg2.jpg'} alt='background' height={1000} width={1000}></Image>

          <div className='h-full w-full z-50 grid grid-cols-12 grid-rows-12 gap-5 p-3 '>
            

             <button className='h-full w-full z-10 col-span-5 row-span-6 relative group overflow-hidden'>
              <Image className='h-full w-full object-cover' src={'/manic5.jpg'} alt='img' height={1000} width={1000} ></Image>
              <span className='h-1/2 w-full p-3 bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-50 ease-in-out z-50 duration-300 flex items-end'>
              </span>
            </button>

            <button className='h-full w-full z-10 col-span-4 row-span-full relative group overflow-hidden'>
              <Image className='h-full w-full object-cover ' src={'/3girlsmanic.webp'} alt='img' height={1000} width={1000} ></Image>
              <span className='h-1/2 w-full p-3 bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-50 ease-in-out z-50 duration-300 flex'>
              </span>
            </button>

            <button className='h-full w-full z-10 col-span-3 row-span-full relative group overflow-hidden'>
             <Image className='h-full w-full object-cover' src={'/nicole.jpg'} alt='img' height={1000} width={1000} ></Image> 
               <span className='h-1/2 w-full p-3 bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-50 ease-in-out z-50 duration-300 flex items-end'>
              </span>
            </button>

            <button className='h-full w-full z-10 col-span-5 row-span-6 relative group overflow-hidden'>
               <Image className='h-full w-full object-cover' src={'/model.webp'} alt='img' height={1000} width={1000} ></Image>
                <span className='h-1/2 w-full p-3 bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-50 ease-in-out z-50 duration-300 flex items-end'>
              </span>
            </button>
          </div>
          
      
    </div>
  )
}

export default About
