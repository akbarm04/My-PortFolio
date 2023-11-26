import React from 'react';
//motions
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';
//icon
import {FaGithub} from 'react-icons/fa'
//img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My latest <br/> Work.</h2>
            <p className='max-w-sm mb-16'>Below are some of my latest projects when I was in grade XI majoring in Software Engineering at SMKN 1 Karawang.</p>
            <button className='btn btn-sm'>View All Project</button>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Tugas Bootstrap </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
              <a href='https://akbarm04.github.io/Tugas-Bootstrap/' target="_blank" rel="noopener noreferrer">
                <FaGithub />
              <span className='text-2xl text-white'>Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Tugas Form Css</span>
              </div>
           {/* title */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
              <a href='https://akbarm04.github.io/Form-Akbar/' target="_blank" rel="noopener noreferrer">
                <FaGithub />
              <span className='text-2xl text-white'>Demo</span>
              </a>
            </div>
          </div>          
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Tugas CSS</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
              <a href='https://akbarm04.github.io/Tugas-CSS-2/' target="_blank" rel="noopener noreferrer">
                <FaGithub />
              <span className='text-2xl text-white'>Demo</span>
              </a>
            </div>
          </div>              
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
