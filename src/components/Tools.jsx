import { FaHtml5 , FaCss3Alt , FaReact ,FaBootstrap ,FaGithub,FaNodeJs,FaGitAlt } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { SiRedux , SiTailwindcss ,SiExpress ,SiMongodb  ,SiVite,SiNpm ,SiPostman} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
function Tools() {
  const skillData = [
    {
      category: "Front end",
      skills: [
        {
          name: "HTML5",icon: FaHtml5 ,score: 90, certificate : "",
        }, 
        {
          name: "CSS3",icon: FaCss3Alt ,score: 95, certificate : "",
        },
        {
          name: "SCSS",icon: BsFiletypeScss ,score: 95, certificate : "",
        },
        {
          name: "Javascript",icon: IoLogoJavascript ,score: 95, certificate : "",
        },
        {
          name: "React",icon: FaReact ,score: 85, certificate : "",
        },      
        {
          name: "Redux",icon: SiRedux  ,score:70,certificate:""
        },
        {
          name: "Bootstrap",icon: FaBootstrap ,score: 90, certificate : "",
        },
        {
          name: "Tailwind",icon: SiTailwindcss ,score: 85, certificate : "",
        }

      ],
    },
    {
      category: "Back end",
      skills: [
        {
          name: "NodeJs",icon: FaNodeJs  ,score:70,certificate:""
        },
        {
          name: "ExpressJs",icon: SiExpress ,score: 90, certificate : "",
        },
        {
          name: "MongoDB",icon: SiMongodb ,score: 85, certificate : "",
        },
        {
          name: "MySQL",icon: GrMysql ,score: 85, certificate : "",
        }
      ]
    },
    {
      category: "Tools Known",
      skills: [
        {
          name: "VsCode",icon: VscVscode ,score: 90, certificate : "",
        },
        {
          name: "Postman",icon: SiPostman ,score: 85, certificate : "",
        },
        {
          name: "Vite",icon: SiVite ,score: 85, certificate : "",
        },
        {
          name: "npm",icon: SiNpm ,score: 90, certificate : "",
        },
        {
          name: "github",icon: FaGithub ,score: 90, certificate : "",
        },
        {
          name: "git",icon: FaGitAlt ,score: 90, certificate : "",
        }
      ]
    }
  ]
  return <section id="skill" className ="toolSection px-10 md:pt-20  md:pb-30 py-20 bgPrimary text-white opacity-95">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading text-center">Skills  &  Technologies  I  Know</h2>
        <div className=''>
        {
          skillData.map((category,index) => (
            <div key={index}>
              <h3 className="text-2xl mt-20 font-heading text-center">{category.category}</h3>
                    <div className='flex mt-10 flex-wrap items-center justify-center'>
                     { category.skills.map((skill,ind) => (
                        <div key={ind}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-center"
                          className="skillItems m-3 p-2 flex flex-col items-center justify-center">
                        <div className="imgBlock mb-2">
                          <skill.icon className="md:text-4xl text-xl text-primary" />
                        </div>
                        <h4 className='skillTitle font-bold text-l md:text-xl text-center'>{skill.name}</h4>
                        <div className="skillProgress mt-3 ">
                          <div className="progressBar" style={{width: `${skill.score}%`}}></div>
                        </div>
                        </div>
                     ))}
                       
                    </div>
            </div>
          )  ) 
        }
      
        </div>

      </div>
  </section>
}

export default Tools
