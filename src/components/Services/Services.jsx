import { delay } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import webDev  from '../../assets/webDev.png';
import uiux  from '../../assets/uiux.png';
import softwareQuality  from '../../assets/softwareQuality.png';
import productManagement  from '../../assets/productManagement.png';
import foreignLanguage  from '../../assets/foreignLanguage.png';
import englishTest  from '../../assets/englishtest.png';


const ServicesData = [
    {
        id:1,
        title:"Web Development",
        link: "#",
        icon:<img src={webDev} className='w-16 h-16 object-contain'/>,
        delay: 0.2,
    },
    {
        id:2,
        title:"UI-UX Research and Design",
        link: "#",
        icon:<img src={uiux} className='w-16 h-16 object-contain'/>,
        delay: 0.2,
    },
    {
        id:3,
        title:"Product and Product Management",
        link: "#",
        icon:<img src={softwareQuality} className='w-12 h-12 object-contain'/>,
        delay: 0.2,
    },
    {
        id:4,
        title:"Software Quality Assurance",
        link: "#",
        icon:<img src={productManagement} className='w-12 h-12 object-contain'/>,
        delay: 0.2,
    },
    {
        id:5,
        title:"Foreign Language",
        link: "#",
        icon:<img src={foreignLanguage} className='w-12 h-12 object-contain'/>,
        delay: 0.2,
    },
    {
        id:6,
        title:"English Test and Scholarship Preparation",
        link: "#",
        icon:<img src={englishTest} className='w-20 h-20 object-contain'/>,
        delay: 0.2,
    },
]


const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 0.3,
                delay: delay,
                ease: "EaseInOut",
            },
        },
    };
};


const Services = () => {
  return (
    <section className='bg-white'>
        <div className='container pb-14 pt-16'>
            <h1 className='text-4xl font-bold text-left pb-10'>Services we provide</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>
                {ServicesData.map((service) =>(
                <motion.div
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                    <div className='text-4xl mb-4'>{service.icon}</div>
                    <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services