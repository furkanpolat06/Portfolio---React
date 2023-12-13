import React from "react";
import { FaDownload } from "react-icons/fa";
import "./section-header.css";
import resumepng from "../../assets/img/Screenshot_3.png"

const SectionHeader = () => {
  return (
    <div className="section-header">
        <h2>RESUME</h2>
       <div className="header resumeLink">
       <span className="text-shadow">
        <a
          href="https://docs.google.com/document/d/1FGBLDiSqJGf17fgJPPLviknZTrU49UBLu8GzfgYoh4M/edit"
          className="resume-download "
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download"
          target={"_blank"}
        >
          <i className="fa fa-download" aria-hidden="true">
            {" "}
          </i>{" "}
         Download Resume
        </a>
       </span>
       

       </div>
        <img className="m-auto" src={resumepng} alt="" />
   
   
       
      
    </div>
  );
};

export default SectionHeader;