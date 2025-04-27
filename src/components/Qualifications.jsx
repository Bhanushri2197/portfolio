import { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function Qualifications() {
  const [activeTab, setActiveTab] = useState("education");
  

  return (
    <section id="qualification" className="qualificationSection px-10 md:pt-20  md:pb-30 py-20 bgPrimary text-white opacity-95">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Qualification</h2>

        <div className="flex justify-center space-x-10 mb-10">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center hover:underline  space-x-2 text-lg font-semibold ${
              activeTab === "education" ? "text-white" : "text-gray-400"
            }`}
          >
            <FaGraduationCap />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center hover:underline  space-x-2 text-lg font-semibold ${
              activeTab === "experience" ? "text-white" : "text-gray-400"
            }`}
          >
            <FaBriefcase />
            <span>Experience</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-xl mx-auto space-y-6">
          {activeTab === "education" && (
            <>
              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">MERN Full Stack Development</h3>
                <p className="text-gray-600">Guvi Geek Network, IIT Madras</p>
                <p className="text-gray-500">2024</p>
              </div>

              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">
                  Bachelor of Engineering in Electronics and Communication Engineering
                </h3>
                <p className="text-gray-600">PSNA College of Engineering and Technology, Dindigul</p>
                <p className="text-gray-500">2014 - 2018</p>
              </div>

              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">
                  Higher Secondary Education
                </h3>
                <p className="text-gray-600">SRV Matriculation Higher Secondary School, Trichy</p>
                <p className="text-gray-500">2013 - 2014</p>
              </div>
            </>
          )}

          {activeTab === "experience" && (
            <>
              <div className="bg-white text-black p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Web Designer</h3>
                <p className="text-gray-600">NETAXIS IT SOLUTIONS (P) LTD, Chennai</p>
                <p className="text-gray-500">2+ Years</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};




export default Qualifications
