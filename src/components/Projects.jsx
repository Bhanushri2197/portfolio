import {Swiper, SwiperSlide} from 'swiper/react'
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode , Pagination , Navigation ,Autoplay,} from 'swiper/modules'
import { ProjectData }from '../assets/utility/project.js'

function Projects() {
    return <section id="projects" className ="ProjectSection px-10 md:pt-20  md:pb-30 py-20 bgPrimary text-white opacity-95">
    <div className="container mx-auto">
      <h2 className="text-4xl font-heading text-center">Projects</h2>
      <h3 className='text-2xl mt-10 font-secondary text-center'>Here are some of my projects, Check them out...</h3>
      <div className='mt-20'>    
        
        <Swiper 
          breakpoints={{
            340: {
                slidesPerView: 1,
                spaceBetween: 15
              },
            700:{
                slidesPerView: 3,
                spaceBetween: 20
              },
          }}
          freeMode = {true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next'
          }}
          modules={[FreeMode, Pagination , Navigation ,Autoplay]}
          className="mySwiper relative max-w-[90%] lg:max-w-[80%]"
        >
            {
                ProjectData.map((project, index) => (
                    <SwiperSlide key={index}>
                            <div className="projectList  relative"
                             data-aos="fade-left"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-anchor-placement="center-bottom">
                              <div className="projectListTop relative group">
                                        <img className="w-full h-full projectImg" src={project.imgSrc} alt={project.title} />
                                <div className="backLinksBlock absolute h-full text-center inset-0 flex flex-col justify-center items-center  bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h4 className="projectTitle text-2xl font-bold font-heading text-white">{project.title}</h4>
                                    <div className="flex space-x-4 mt-4">
                                        <a className="text-white bg-primary hover:bg-black border-2 border-primary rounded-lg p-3 transition-colors duration-300" href={project.liveLink}>
                                        <FaLink size={30}/>
                                        </a>
                                        <a className="text-white bg-primary hover:bg-black border-2 border-primary rounded-lg p-3 transition-colors duration-300" href={project.codeLink}>
                                        <FaCode size={30} />
                                        </a>
                                    </div>
                                </div>
                              </div>
                                    <div className='p-2'>
                                        <h4 className='projectTitle text-2xl text-bold font-heading '>{project.title}</h4>
                                        <div className="skillUsed mt-5 flex flex-wrap">
                                        {project.skills.map((skill, index) => (  
                                                <div key={index} className="skillList my-1 mr-1 inline p-2 text-sm rounded-lg">{skill}</div>
                                            ))}
                                        </div>
                                    </div>                           
                         
                            </div>
                    
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div className="custom-prev swiper-button-prev"></div>
        <div className="custom-next swiper-button-next"></div>
      </div>

    </div>
</section>
}

export default Projects
