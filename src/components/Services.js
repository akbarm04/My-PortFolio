import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

//services data 
const services = [
  {
    name: 'Web Development',
    description: 'I am familiar with programming languages such as HTML, CSS, JavaScript, and some frameworks such as Bootstrap, etc. I will continue to improve my skills in this field',
    link: 'Learn more',
  },
  {
    name: 'UI/UX DESIGN',
    description: 'As a beginner in UI/UX design, I have mastered the basics, My commitment is to keep learning and improving the quality of design with every project.',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing ',
    description: 'I am still studying Digital Marketing, focusing on building an online presence through social media management, keyword research, and SEO content.',
    link: 'Learn more',
  },
  {
    name: 'Iot Engineering',
    description: 'I am currently studying the IoT, I am interested in designing hardware, integrating systems, and providing strategic consulting with special attention to security and innovation.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text and image*/}
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Some of my skills after studying in the RPL department </h3>
          <a href='#work'>
            <button className='btn btn-sm'>See my work</button>
            </a>
        </motion.div>
        {/* services */}
        <motion.div 
         variants={fadeIn('left', 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
        className='flex-1'>
        {/* services list */}
        <div>
          {services.map((service, index)=> {
            //destructure service
            const {name, description, link} = service;
           return (
           <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
              <p className='font-secondary leading-tight'>{description}</p>
            </div>
            <div className='flex flex-col flex-1 items-end'>
              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight />
             </a>
             <a href='#' className='text-gradient text-sm'>{link}</a>
            </div>
           </div>
           );
          })}
        </div>
       </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Services;
