import React from 'react'
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <section id='footer'>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold">Colorlib.com</h2>

          <ul className="flex justify-center space-x-6 mt-4 text-gray-300">
            {["home", "about", "skill", "project", "qualification", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-primary-400">{item}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            {[
              { icon: SiGmail, link: "mailto:hduraimurugan@gmail.com" },
              { icon: FaLinkedin, link: "https://www.linkedin.com" },
              { icon: FaWhatsapp, link: "https://wa.link/dzqc74" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-500 border border-primary-400 rounded-full p-2">
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4">
            Copyright ©2021 All rights reserved | This template is made with
            <span className="text-red-400"> ♥ </span> by
            <a href="https://colorlib.com" className="text-primary-400 hover:text-primary-500"> Colorlib.com</a>
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
