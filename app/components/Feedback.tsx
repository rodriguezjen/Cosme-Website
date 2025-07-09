import React from 'react'
import Image from 'next/image'
const Feedback = () => {
  return (
    <div className='h-full w-full flex flex-col items-center relative'>
      <Image className='h-full w-full object-cover absolute' src={'/bg2.jpg'} alt='background' height={1000} width={1000}></Image>
        <h1 className='w-full text-3xl font-semibold text-left z-10 pl-5 pt-5'>Feedback</h1>
           <p className='w-full text-lg font-medium mt-3 pl-10 z-10'>Should you have face any issue. Feel free to contact us, we will get back to you as soon as we can!</p>

       <div className='h-3/4 w-2/3 border-3 border-custompink rounded-3xl mt-5 bg-white/20 backdrop-blur-sm relative p-3 flex'>
          <div className='h-full min-w-2/5 flex flex-col items-center justify-center bg-custompink/60 px-5 gap-3 rounded-xl'>
            <input className='py-2 px-3 w-full border-b-2 text-white placeholder:text-white outline-none '  type='email' placeholder='Email Address'></input>
            <input className='py-2 px-3 w-full border-b-2 text-white placeholder:text-white outline-none' type="text" placeholder='Name (Optional)'></input>
          </div>
         
          <div className='h-full w-full flex flex-col items-end gap-2'>
            <textarea className='h-full w-full p-3 rounded-2xl outline-none' placeholder='Write your message here.'></textarea>

              <button className='py-2 px-5 w-max border-3 text-sm font-medium rounded-full border-custompink text-white hover:text-custompink hover:bg-white'>
                Submit Now!
              </button>
          </div>

         
        </div>
        
      
    </div>
  )
}

export default Feedback
