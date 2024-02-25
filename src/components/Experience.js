import React, { useRef } from 'react';
import{motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon';
import AnimatedText from '@/components/AnimatedText'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '>


        <LiIcon reference={ref}/>
        <motion.div
        initial={{y: 50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {work}
            </p>
        </motion.div>
    </li>
    );
};



const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            {/* <AnimatedText text="Experience" className='my-20' /> */}
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


 
<motion.div 
style={{scaleY: scrollYProgress}}className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
md:w-[2px] md:left-[30px] xs:left-[20px]" />
               
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                    
position="Frontend Developer" company="CodeClause"
companyLink="https://internship.codeclause.com/"
time="Aug2023-Sep2023" address=" Pune, Maharashtra"
work="Improving new layouts to achieve usability and performance objectives.
Provided standardized technical solutions for bug issues."
                    
                    />

<Details
                    
                    position="Web Developer" company="PHN-Technologies"
                    companyLink="https://phntechnology.com/"
                    time="Apr2023-June2023" address="Pune, Maharashtra"
                    work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                                        
                                        />

<Details
                    
                    position="Full Stack Developer" company="NullClass"
                    companyLink="www.google.com"
                    time="Oct2023-Dec2023" address="BENGALURU, KARNATAKA"
                    work="During my internship at Bharat Intern, I honed my skills as a full-stack web developer, specializing in the MERN
                    stack. I gained proficiency in MERN stack by contributing to the development of responsive.
                    I actively collaborated with cross-functional teams, participated in code reviews, and effectively resolved technical
challenges. This experience improved my ability to work in a team-oriented environment and strengthened my
problem-solving skills"
                                        
                                        />

<Details
                    
                    position="Web Developer" company="InternPe"
                    companyLink="https://internpe.in/"
                    time="Jul2023-Aug2023" address="Jaipur-Rajasthan"
                    work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                                        
                                        />

<Details
                    
                    position="Full Stack Developer" company="Bharat Intern"
                    companyLink="https://bharatintern.live/b/i/index.html"
                    time="jun2023-Jul2023" address="Bhopal, Madhya Pradesh"
                    work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                                        
                                        />
                </ul>
            </div>
        </div>
    )
}
export default Experience