import aboutmePic from "../assets/img/aboutmeimg.jpg"

function About() {
  return <section id="about" className='aboutSection  px-10 md:pt-20  md:pb-30 py-20 bgPrimary text-white opacity-95'>
    <div className="container mx-auto">
    <div
    className=" flex md:flex-row flex-col justify-center item-center ">
      <div className="hidden md:flex w-full md:w-1/2 sm:py-40 justify-center items-start md:items-center">
         <img className="w-3/4" src={aboutmePic} alt="Your Image" />
      </div>

      <div className='flex flex-col overflow-hidden relative justify-center px-5 py-10 md:w-1/2'>
    <h2 
 className="text-4xl font-heading">About Me</h2>
    <p data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="my-10 font-secondary aboutMePara">Hi, I'm <span className="font-heading textHighLight lg">Bhanushri P</span>, a passionate Web Designer turned 
    MERN Stack Developer with over three years of experience in crafting visually appealing and user-friendly websites. My journey in web development has evolved from creating stunning designs to building fully functional, 
    responsive, and scalable web applications using <span className="font-heading textHighLight">MongoDB, Express.js, React, and Node.js</span></p>
    <p data-aos="fade-up-right" 
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    className="font-secondary aboutMePara text-23">Previously, I worked as a <span  className="font-heading textHighLight">Web Designer 
    at NETAXIS IT SOLUTIONS (P) LTD, Chennai</span> with 3 years, where I honed my expertise in UI/UX design
         and front-end development.</p>
    <p data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="font-secondary mt-10 aboutMePara text-23">I completed a <span  className="font-heading textHighLight"> Full Stack Development</span> course at <span  className="font-heading textHighLight">GUVI Geeks Network Pvt Ltd</span>, 
    I have a strong foundation in design and modern  development techniques,Let's build something amazing together!. 
      </p>
   
   
 
    </div>
    </div>
    </div>
   
  
 </section>
}

export default About
  