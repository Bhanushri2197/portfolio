import introimg from "../assets/img/introimg.png"
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
function IntroHeader() {

  const { ref, inView } = useInView({
    triggerOnce: true, // The animation runs only once when it first comes into view
    threshold: 0.1, // Animation triggers when 10% of the element is visible
});

  return <section id="home" className="introSection  px-10 md:pt-40  md:pb-30 py-20 bgPrimary text-white opacity-95">
   <div className="container mx-auto flex md:flex-row flex-col justify-center items-center">
   <div 
   className="flex flex-col relative justify-center px-5 py-10 md:w-1/2">
        <h1 className="text-primary  md:text-4xl text-2xl font-bold font-heading">Hi,</h1>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white font-bold md:text-5xl text-3xl py-3 font-heading"> It's Bhanushri P,</h1>
        <p className="md:text-4xl text-xl font-bold font-primary mb-5"> I am a <span className="text-primary md:text-4xl text-2xl"> MERN </span>stack developer</p>
        <p className="font-secondary mb-3 description mt-5 text-l">I combine technical expertise with creative vision to build web applications that are intuitive, efficient, and impactful. Together, let’s create something innovative and inspiring!"</p>
        <div className="iconBlock sm:relative mt-4 flex md:block md:mt-5   md:absolute b-0 l-0">
        <motion.div className=""
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5 }}>
        <a href="https://github.com/Bhanushri2197" className="mb-5 md:p-2 block" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl sm:text-5xl" /></a>
        </motion.div>
      <motion.div className=""
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5 }}>
      <a href="https://www.linkedin.com/in/bhanushri-p-011371201/"  className="md:mt-5 md:ml-0 ml-3 mt-0 md:p-2 block" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl sm:text-5xl"/></a>
      </motion.div>
      </div>
      <motion.div className="btnBlock mt-5" ref={ref}
     initial={{ opacity: 0, y: 100 }}
     animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
     exit={{ opacity: 0, y: -100 }}
     transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: 0.2 }}       >
     <button
      onClick={() => window.location.href = 'mailto:steffynajones@gmail.com'}
      className="inline-block text-white bg-primary hover:bg-black border-2 border-primary focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primary"
    >
      Contact Me
    </button>
      <a href="https://drive.google.com/file/d/1ShBMBTKSDB2RPnkcg2g-MhLqFgj7On7_/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-block text-white bg-primary hover:bg-black border-2 border-primary focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none"
      >
        Resume
      </a>
    
      </motion.div>
    
    </div>
    <motion.div className=" md:w-1/3 w-2/3 flex items-center"   ref={ref}
     initial={{ opacity: 0, y: 100 }}
     animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
     exit={{ opacity: 0, y: -100 }}
     transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: 0.2 }}
     >
  
        <img className="delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:opacity-0" data-taos-offset="400" src={introimg} alt="" />
    </motion.div>
   </div>
  

  </section>}

export default IntroHeader
