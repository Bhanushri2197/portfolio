import introimg from "../assets/img/introimg.png"
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import {fadeIn} from "../assets/utility/variants"
import {motion} from "framer-motion"
function IntroHeader() {
  return <section id="intro" className="introSection  px-10 md:pt-40  md:pb-30 py-20 bgPrimary text-white opacity-95">
   <div className="container mx-auto flex md:flex-row flex-col justify-center items-center">
   <motion.div 
   variants = {fadeIn("up",0.2)}
   initial = "hidden"
   whileInView={"show"}
   viewport={{once: false,amount : 0.4}}
   
   className="flex flex-col relative justify-center px-5 py-10 md:w-1/2">
        <h1 className="text-primary text-5xl font-bold font-heading">Hi,</h1>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white font-bold text-5xl py-3 font-heading"> It's Bhanushri P,</h1>
        <p className="text-4xl font-bold font-primary mb-5"> I am a <span className="text-primary"> MERN </span>stack developer</p>
        <p className="font-secondary mb-3 description mt-5 text-l">I combine technical expertise with creative vision to build web applications that are intuitive, efficient, and impactful. Together, let’s create something innovative and inspiring!"</p>
      <div className="btnBlock mt-5">
      <a href='mailto:steffynajones@gmail.com' className="text-white bg-primary hover:bg-black border-2 border-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800">Contact</a>
      <button type="button" className=" ml-2 text-white bg-primary hover:bg-black border-2 border-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800">Resume</button>
    
      </div>
      <div className="iconBlock absolute b-0 l-0">
      <a href="https://github.com/Bhanushri2197" className="mb-5 p-2 block" target="_blank" rel="noopener noreferrer"><FaGithub className="" size={40}/></a>
      <a href="http://"  className="mt-5 p-2 block" target="_blank" rel="noopener noreferrer"><FaLinkedin className="" size={40}/></a>
      </div>
    </motion.div>
    <motion.div className=" md:w-1/3 flex items-center"
      variants = {fadeIn("left",0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once: false,amount : 0.4}}
   >
        <img className="delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400" src={introimg} alt="" />
    </motion.div>
   </div>
  

  </section>}

export default IntroHeader
