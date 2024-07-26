import React from 'react'
import grande from '/grande.jpg'
import primer from '/primer.jpg'
import segunda from '/segunda.jpg'
import tercer from '/tercer.jpg'
import cuarto from '/cuarto.jpg'

export const Gallería = () => {
  return (
    <div>
        <div className='w-[440px]  ml-[200px] mt-[70px] '>
            <img src={grande} alt="muestra de zapatilla grande" className='rounded-xl' />
        </div>
        <div className='flex ml-[200px] mt-8 w-[80px] gap-10 cursor-pointer'>
            <img src={primer} alt="1er muestra" className='rounded-xl '/>
            <img src={segunda} alt="2da muestra" className='rounded-xl' />
            <img src={tercer} alt="3ra muestra" className='rounded-xl'/>
            <img src={cuarto} alt="4ta muestra" className='rounded-xl'/>
        </div>
    </div>
  )
}


        