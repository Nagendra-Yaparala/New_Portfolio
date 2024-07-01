import React from 'react'
import Image from 'next/image'
import top from '../images/top.png'
import { Button } from 'antd'

const Hero = () => {
  return (
    <div className='text-white p-10 mt-40 md:mt-20 relative '>
      <div className='grid grid-cols-1  md:grid-cols-2 md:justify-center md:items-center md:mx-40'>
        <div className='flex flex-col gap-7'>
        <h1 className=' text-2xl md:text-5xl font-semibold '>I`&apos;`M <span  className='text-yellow-600'>Nagendra Yaparala</span></h1>
        <p className='text-xl'>Frontend Developer</p>
        <Button style={{backgroundColor:'transparent',padding:'3vh',color:'#FFA62F', borderColor:'#FFA62F',fontSize:'3vh'}} className='font-medium '>contact me</Button>
        </div>
        <Image 
          src={top} 
          alt="Top Image" 
        />
        <div className='absolute bottom-0 right-0'>
           
        </div>
      </div>
    </div>
  )
}

export default Hero
