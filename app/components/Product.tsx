import React from 'react'
import Image from 'next/image'

const Product = () => {

  return (
    <div className='h-auto w-full grid grid-cols-3 grid-rows-2 relative gap-5 py-4'>
        <Image className='h-full w-full object-cover absolute' src={'/bg2.jpg'} alt='background' height={1000} width={1000}></Image>
           <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic1.jpg'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3>DAY DREAM SHAMPOO</h3>
                    <p className='font-semibold'>₱199</p>
                  </div> 
           </button>

            <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic2.jpg'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3 className='font-medium'>MOON STAIN TINT</h3>
                    <p className='font-semibold'>₱159</p>
                  </div> 
            </button>

           <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic8.webp'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3 className='font-medium'>DREAM BUBBLE SOAP</h3>
                    <p className='font-semibold'>₱199</p>
                  </div> 
            </button>

            <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic4.jpg'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3 className='font-medium'>COSMIST</h3>
                    <p className='font-semibold'>₱149</p>
                  </div> 
            </button>

            <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic9.jpg'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3 className='font-medium'>COSMIST</h3>
                    <p className='font-semibold'>₱159</p>
                  </div> 
            </button>

            <button className='col-span-1 row-span-1  rounded-sm flex overflow-hidden flex-col justify-center relative items-center group '>
              <Image className='h-full  w-full object-contain ml-5' src={'/manic6.webp'} alt='logo' height={1000} width={1000}></Image>
                  <div className='w-full py-5 pl-5 pr-8 flex justify-between duration-300 text-xl bg-gradient-to-t from-custom to-transparent absolute group-hover:bottom-0 -bottom-20 ease-in-out ml-5'>

                    <h3 className='font-medium'>BEAUTY PALLET</h3>
                    <p className='font-semibold'>₱199</p>
                  </div> 
            </button>
   
       </div>
  )
}

export default Product
