import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return <li ref = {ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
        <LiIcon reference = {ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Timeline</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                type="Master of Medical Science"
                time="2022-Now" 
                place="Ursuline College, Cleveland, OH"
                info="Relevant experience includes clinical rotations, patient interaction, inter professional collaborations, case studies, research projects."/>

                <Details 
                type="Phlebotomist @ Cancer and Blood Care Specialists"
                time="2022-2022" 
                place="Fullerton, CA"
                info="Relevant experience includes performing blood draws, administering injections, preparing patients for chemotherapy, and assisting with bone marrow biopsies."/>

                <Details 
                type="Bachelor of Science : Neurobiology, Physiology and Behavior"
                time="2018-2021" 
                place="University of California, Davis, CA"
                info="Relevant experience includes research projects, laboratory techniques, physiological measurements, data analysis, and understanding of neuroanatomy and behavior."/>

                <Details 
                type="Associate in Arts : Mathematics and Science"
                time="2016-2018" 
                place="Fullerton Community College - Fullerton, CA"
                info="Relevant experience includes coursework in fundamental mathematical concepts, scientific principles, data analysis, problem-solving, basic college-level writing, and introductory laboratory techniques."/>
            </ul>
        </div>
    </div>
  )
}

export default Education