import React, { useEffect } from "react";
import HomeProject from "../components/HomeProject";
import FigmaLogo from "../assets/home/figma.png";
import GoogleLogo from "../assets/home/google.png";
import CodeLogo from "../assets/home/code.png";
import ResearchLogo from "../assets/home/research.png";
import SurvivorHome from "../assets/home/survivor_home.png";
import MusicHome from "../assets/home/music_home.svg";
import GoodreadHome from "../assets/home/goodreads_home.svg";

export const PROJECTS = [
  {
    title: "Survivor Companion App",
    descriptionOne:
      "With 45 seasons worth of challenges, strategy, and backstabbing, Survivor has become a staple in homes across the world. In 2021, Survivor debuted a new era with faster gameplay and more twists and advantages thrown to the players.",
    descriptionTwo:
      "I created this Survivor companion app to help track a player’s tribe history, advantages, and to catch those hidden scenes after the episode airs. Its the perfect companion to any castaway’s viewing experience.",
    src: (
      <img
        alt="Survivor Companion App Screenshot"
        className="h-[500px] w-[430px]"
        src={SurvivorHome}
      />
    ),
  },
  {
    title: "Apple Music - New Features",
    descriptionOne:
      "Apple Music is a music streaming service. From user interviews, competitor analysis, and prototype user tests, I decided to put the app through the research process.",
    descriptionTwo:
      "In this case study, I view one of my most used apps, Apple Music, and highlight potential features that could make the music experience even better.",
    src: (
      <img
        alt="Apple Music Screenshot"
        className="h-[500px] w-[386px]"
        src={MusicHome}
      />
    ),
  },
  {
    title: "Goodreads Website Redesign",
    descriptionOne:
      "With a group of fellow bootcamp students, we identified a website that we use and would like to update. My group chose the beloved Goodreads website. With an impressive app, but a poor website, we conducted research and tests to identify what was wrong with the current site, and then created a prototype website based on our design.",
    src: (
      <img
        alt="Goodreads Website Screenshot"
        className="h-[500px] w-[600px]"
        src={GoodreadHome}
      />
    ),
  },
];

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col items-center mb-[16px]">
      <div className="w-full h-[75px] bg-[#E9896A]" />
      <div className="w-full h-[75px] bg-[#387C6D] shadow-home flex items-center justify-end">
        <h2 className="text-[#F8F5F1] text-[36px] mr-[20px] sm:mr-[80px]">
          Hello! I’m Chris,
        </h2>
      </div>
      <div className="w-full h-[75px] bg-[#343F56] shadow-home flex items-center justify-end">
        <h2 className="text-[#F8F5F1] text-[36px] mr-[20px] sm:mr-[80px]">
          a UI/UX designer.
        </h2>
      </div>

      <h3 className="text-center text-[48px] text-[#343F56] font-montserrat mb-[64px] my-[32px]">
        About Me
      </h3>
      <p className="text-[18px] text-[#343F56] font-trirong max-w-[1200px] mx-auto">
        Before I became a UI/UX designer, I taught elementary school. During
        this time I was able to develop strong presentation, organization, and
        adaptability skills. I also have experience working in a professional
        writing environment as a contracted writer.
      </p>
      <p className="text-[18px] text-[#343F56] font-trirong max-w-[1200px] mx-auto mt-[18px] mb-[64px]">
        I have a strong moral drive to understand people. I have worked hard to
        develop empathy for others. Now, it is my turn to help find solutions
        for life’s tech problems, and make it look good in the process!
      </p>
      <div className="flex flex-col sm:flex-row">
        <a
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button block border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px]"
          href={`${process.env.PUBLIC_URL}/christopher_resume.pdf`}
          rel="noreferrer"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button block border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mt-[32px] sm:ml-[64px] sm:mt-0 text-center"
          href="https://www.linkedin.com/in/chrisbrownuiux/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button block border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mt-[32px] sm:ml-[64px] sm:mt-0 text-center"
          href="mailto: chrisbrownuiux@gmail.com"
        >
          Email
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] py-[16px] mt-[64px]">
        <div className="flex items-center">
          <img alt="figma logo" src={FigmaLogo} />
          <h4 className="ml-[10px] font-montserrat text-[19px] text-[#387C6D]">
            Figma
          </h4>
        </div>
        <div className="flex items-center mt-[32px] sm:mt-0">
          <img alt="google logo" src={GoogleLogo} />
          <h4 className="ml-[10px] font-montserrat text-[19px] text-[#387C6D]">
            Google Workspace
          </h4>
        </div>
        <div className="flex items-center mt-[32px] sm:mt-0">
          <img alt="test tube icon" src={ResearchLogo} />
          <h4 className="ml-[10px] font-montserrat text-[19px] text-[#387C6D]">
            UX Research
          </h4>
        </div>
        <div className="flex items-center mt-[32px] sm:mt-0">
          <img alt="code block icon" src={CodeLogo} />
          <h4 className="ml-[10px] font-montserrat text-[19px] text-[#387C6D]">
            Basic HTML, CSS, and JS
          </h4>
        </div>
      </div>

      <h3 className="text-center text-[48px] text-[#343F56] font-montserrat mt-[64px]">
        My Work
      </h3>
      {PROJECTS.map((project, i) => (
        <HomeProject {...project} i={i} key={i} />
      ))}
    </div>
  );
};

export default Home;
