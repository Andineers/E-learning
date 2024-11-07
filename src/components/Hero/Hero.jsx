import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowForward } from 'react-icons/io'

const Hero = () => {
  return (
    <section className='bg-light overflow-hidden relative'>
        <Navbar/>

        <div className='container grid grid-cols-1 md:grid-cols-2 mih-h-[650px]'>
            {/* Brand info */}
            <div>
                <h1 className='text-3xl lg:text-5xl font-bold !leading-snug'>Let's Learn to build a{" "}
                    <span className='text-secondary'>Webiste</span> for your business
                </h1>
                <div className='flex justify-center md:justify-start'>
                    <button className='primary-btn flex items-center gap-2'>
                        Get Started
                        <IoIosArrowForward/>
                        </button>
                </div>
            </div>
            {/* Hero Image */}
        </div>
    </section>
  )
}

export default Hero