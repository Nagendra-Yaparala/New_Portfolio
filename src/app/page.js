'use client'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Card from '@/Components/Card'
import About from '@/Components/About'
import MySkills from '@/Components/MySkills'
import Portfolio from '@/Components/Portfolio'
import { motion} from 'framer-motion'
import ProjectCard from '@/Components/ProjectCard'
import Contact from '@/Components/Contact'
import  Footer  from '@/Components/Footer'

const page = () => {

    
  return (
    <div className='bg-gradient-to-r from-black-100 to-gray-800 flex flex-col justify-center itesm-center overflow-hidden   '>
        <motion.div  className='w-full'  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <Navbar/>
        <Hero/>

<About/>
{<MySkills/> }
<Portfolio/>
<ProjectCard/>
<Contact/>
<Footer/>
      </motion.div>
    </div>
  )
}

export default page