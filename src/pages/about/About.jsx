import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about-bgImg-container">
        <div className="about__bio-image">
          <h2>BIO</h2>
          <p>
            As a frontend developer, nearly a year of focused education and a
            strong commitment to self-improvement through hands-on projects have
            been integral to my growth. During this time, active participation
            in personal and collaborative projects has been instrumental in
            skill enhancement in web development. Passionate about code
            composition and the creation of responsive designs, my aptitude for
            swiftly grasping new concepts and technologies is well-acknowledged.
            This proficiency enables the development of innovative solutions for
            intricate problems. Eager to continually acquire knowledge, various
            technologies, tools, and libraries are consistently explored.
            Primary interests encompass frontend and web development, where
            skills in HTML, CSS, JavaScript, and React have been diligently
            refined. The pursuit of knowledge excites me, and a lifelong
            learning mindset is embraced.
          </p>
        </div>
      </div>

      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">2020 - 2021</h2>
            <h3>CLARUSWAY</h3>
            <h6>Instructor & Full Stack Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2019 - 2020</h2>
            <h3>Google</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2017 - 2019</h2>
            <h3>The Best Websites Co.</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
