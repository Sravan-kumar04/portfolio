import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";

import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-white">Tipris Sravan Kumar</h2>
        <br />
        <br />
        <h4  className="text-3xl font-bold text-blue" >why should You  Hire me..?</h4>
        <p className="text-lg font-normal text-gray-400">
  I am the one who has expertise in various technologies. Being a tech enthusiast, I am committed to upgrading my skills every single day, ensuring that I stay focused to the latest developments in the field. My ability to handle multiple tasks simultaneously allows me to efficiently manage projects and meet deadlines. Moreover, my strong problem-solving skills enable me to tackle complex challenges with confidence. I thrive in collaborative environments and enjoy contributing innovative ideas to achieve team goals. With a keen attention to detail and a passion for excellence, I am dedicated to delivering high-quality results that exceed expectations.
</p>

        <p className="text-base text-gray-400 tracking-wide">
          
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9652623524</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">tiprisshravan@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/* <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span> */}

          <a href="www.linkedin.com/in/tiprissravankumar" target='_blank'>
          <span className="bannerIcon"  title='Instagram'>
            <FaLinkedinIn />
          </span>
          </a>


          <a href="https://www.instagram.com/__print.sunny__/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon" title="Instagram">
              <FaInstagram aria-label="Instagram" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft