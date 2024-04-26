import React from 'react';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiJava, SiPython } from "react-icons/si";
import { DiMongodb, DiMysql, DiReact } from "react-icons/di";


const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lg:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">

          <a href="http://www.linkedin.com/in/tiprissravankumar" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon" title="LinkedIn">
              <FaLinkedinIn aria-label="LinkedIn" />
            </span>
          </a>
          <a href="https://www.instagram.com/__print.sunny__/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon" title="Instagram">
              <FaInstagram aria-label="Instagram" />
            </span>
          </a>

        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" title="Java">
            <SiJava aria-label="Java" />
          </span>
          <span className="bannerIcon" title="Python">
            <SiPython aria-label="Python" />
          </span>
          <span className="bannerIcon" title="MongoDB">
            <DiMongodb aria-label="MongoDB" />
          </span>
          <span className="bannerIcon" title="MySQL">
            <DiMysql aria-label="MySQL" />
          </span>
          <span className="bannerIcon" title="React">
            <DiReact aria-label="React" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
