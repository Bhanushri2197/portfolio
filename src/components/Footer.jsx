import React from 'react'
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <section id='footer'>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl my-3 font-bold">Bhanushri H</h2>

          <ul className="flex justify-center space-x-6 mt-4 text-gray-300">
            {["home", "about", "skill", "project", "qualification", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-primary-400">{item}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex my-4 justify-center space-x-4 mt-4">
            {[
              { icon: SiGmail, link: "mailto:steffynajones@gmail.com" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/bhanushri-p-011371201/" },
              { icon: FaWhatsapp, link: "https://wa.link/9087661001" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-500 border border-primary-400 rounded-full p-2">
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4">   ©  
            <a href="https://colorlib.com" className="text-primary-400 hover:text-primary-500"> Bhanushri </a>
           Portfolio . 2024
            <span className="text-red-400"> ♥ </span> 
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
