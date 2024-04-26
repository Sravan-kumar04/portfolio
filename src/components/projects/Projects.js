import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Assessment of Fruits Health using AI | June - 2023 to July - 2023 | Associated with KMIT"
          des={`
            We implemented OpenCV in our project for real-time image capturing and processing. This feature enhances the application's capability to assess fruit health promptly, enabling quick decision-making in agricultural and food quality control processes. By integrating OpenCV, we ensure seamless interaction with live data streams, allowing the system to continuously analyze and provide real-time insights into the condition, ripeness, and quality of fruits. This integration leverages the power of computer vision alongside deep learning techniques, such as MobileNetV3, to deliver accurate assessments with minimal latency achieving above 95% accuracy. The combination of OpenCV and deep learning not only enhances the application's performance but also extends its utility across various agricultural and food industry settings, facilitating efficient monitoring and management of fruit health throughout the production and supply chain.
          `}
          src={projectOne}
          myLink={
            "https://github.com/Sravan-kumar04/Assessment-of-Fruit-Health-Using-AI"
          }

          myLink2={"http://54.81.103.244:3000/certificate/275a05dd5a97f86660ad5ae2d734d0e4ffefd06e9ece1552ea23976e8dbc6ed0"}
        />
        <ProjectsCard
          title="iDiary"
          des="Created the iDiary responsive Web  Application with MERN-Stack.This is the where you can keep track your daily activities and daily tasks1.Implemented JWT authentication: Whenever a user creates a new account, a token will be generated and saved in MongoDB. Implement real-time updates for tasks: Enable real-time updates for tasks to reflect changes made by users instantly across all devices. 2.Enhance security measures: Implement additional security measures such as input validation, verification,encryption of sensitive data, and protection against common web vulnerabilities like XSS and CSRF. 3.Made simple UI fo user a better Experience with responsive designIf a user already has an account in iDiary and enters correct credentials matching the token in the database, they will be redirected to the Home page.
          Enhance security measures by implementing additional security features such as input validation, verification, encryption of sensitive data, and protection against common web vulnerabilities like XSS and CSRF..

          "
          src={projectTwo}
          myLink={"https://github.com/Sravan-kumar04/iDiary"}
          myLink2={"https://idiary-notes.vercel.app"}
        />

        {/* Additional ProjectsCard components */}
      </div>
    </section>
  );
};

export default Projects;
