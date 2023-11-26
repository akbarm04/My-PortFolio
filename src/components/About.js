import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
     <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>Hello!! I'm Akbar Maulana.</h3>
            <p className='mb-6'>I'm an 11th grade student majoring in software engineering at SMKN 1 Karawang, and I got 2nd place when I was in 10th grade. I am very interested in the world of technology and programming, and I will continue to learn so that I can master many programming languages.</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={2} duration={3} /> : null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={10} duration={3} /> : null}
                  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <a href='#contact'>
              <button className='btn btn-lg'>Contact me</button>
              </a>
            <a href='#work' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
          </motion.div>
        </div>
      </div>
      </section>
  );
};

export default About;