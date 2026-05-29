import React from "react";
import { RiCalendar2Fill, RiGraduationCapFill, RiMapPinLine} from "react-icons/ri";

const About = ({dark}) => {
  return (
    <section id="about" className={`flex flex-col w-full  ${dark ? "bg-[#181c2580]": "bg-[#f1f3f6] "}`}>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold mt-10">
          About <span className="text-purple-700">Me</span>
        </h1>
      </div>
      <div className="mx-7 mt-10 lg:mx-70">
        <p className="tracking-[2px] leading-7 opacity-60 text-justify ">
          I am a third-year B.Tech Computer Science student specializing in frontend development with hands-on experience building responsive, user-centric web applications using React.js and Tailwind CSS. <br />
I am developing real-world projects including a Job Application Tracker(CareerTrack), focusing on clean UI, reusable component architecture, and mobile-first design. My internship experience at Code Alpha and InternPe strengthened my ability to build interactive and scalable web interfaces. <br />
Currently expanding into full-stack development with Node.js and MongoDB, while sharpening my problem-solving skills through Data Structures and Algorithms. I am a quick learner, passionate about building impactful digital solutions, and actively seeking opportunities to contribute and grow as a developer.
        </p>
      </div>
      <div className="mt-13 flex justify-center items-center opacity-60 text-[17px]">
        <RiMapPinLine className="mr-2 text-purple-700" /> Dehradun, Uttarakhand, India
      </div>
      <div className="flex justify-center items-center mt-15 pb-20" data-aos ="fade-right" data-aos-duration="1200">       
          <div className="bg-purple-700/20 p-3 mx-7 rounded-xl mr-5 text-2xl">
            <RiGraduationCapFill className="text-purple-700"/>
          </div>
          <div className="flex flex-col  ">
            <div className="flex items-center opacity-60">
              <RiCalendar2Fill className="mr-2"/>
              <p>2023-2027</p>
            </div>
          <div>
            <h2>B.tech Computer Science</h2>
            <h3 className="opacity-60">Uttaranchal University, Dehradun</h3>
          </div>
          <div>
            <p className="text-purple-700 font-bold">CGPA: 8.1</p>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default About;
