import aboutmePic from "../assets/img/aboutmeimg.jpg"
import {fadeIn} from "../assets/utility/variants"
import {motion} from "framer-motion"

function About() {
  return <section id="about" className='aboutSection  px-10 md:pt-20  md:pb-30 py-20 bgPrimary text-white opacity-95'>
    <div className="container mx-auto">
    <motion.div
    variants = {fadeIn("up",0.2)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once: false,amount : 0.9}}
    className=" flex md:flex-row flex-col justify-center item-center ">
      <motion.div
          variants = {fadeIn("right",0.2)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false,amount : 0.4}}
      className="flex w-full sm:h-300 md:w-1/2  sm:py-40 justify-center items-start md:items-center">
        <img className="w-3/4" src={aboutmePic} alt="Your Image" />
      </motion.div>
      <motion.div
      variants = {fadeIn("up",0.7)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once: false,amount : 0.9}}
      className='flex flex-col relative justify-center px-5 py-10 md:w-1/2'>
    <motion.h2 
      variants = {fadeIn("left",0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once: false,amount : 0.4}}  
    className="text-4xl font-heading">About Me</motion.h2>
    <p className="my-10 font-secondary aboutMePara">Hi, I'm <span className="font-heading textHighLight lg">Bhanushri P</span>, a passionate Web Designer turned 
    MERN Stack Developer with over three years of experience in crafting visually appealing and user-friendly websites. My journey in web development has evolved from creating stunning designs to building fully functional, 
    responsive, and scalable web applications using <span className="font-heading textHighLight">MongoDB, Express.js, React, and Node.js</span></p>
    <p className="font-secondary aboutMePara text-23">Previously, I worked as a <span  className="font-heading textHighLight">Web Designer 
    at NETAXIS IT SOLUTIONS (P) LTD, Chennai</span> with 3 years, where I honed my expertise in UI/UX design
         and front-end development.</p>
    <p className="font-secondary mt-10 aboutMePara text-23">I completed a <span  className="font-heading textHighLight"> Full Stack Development</span> course at <span  className="font-heading textHighLight">GUVI Geeks Network Pvt Ltd</span>, 
    I have a strong foundation in design and modern  development techniques,Let's build something amazing together!. 
      </p>
   
   
 
    </motion.div>
    </motion.div>
    </div>
   
  
 </section>
}

export default About
  