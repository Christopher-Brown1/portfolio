import React from "react";
import HomeProject from "../components/HomeProject";

const PROJECTS = [
  {
    title: "Survivor Companion App",
    descriptionOne:
      "With 45 seasons worth of challenges, strategy, and backstabbing, Survivor has become a staple in homes across the world. In 2021, Survivor debuted a new era with faster gameplay and more twists and advantages thrown to the players.",
    descriptionTwo:
      "I created this Survivor companion app to help track a player’s tribe history, advantages, and to catch those hidden scenes after the episode airs. Its the perfect companion to any castaway’s viewing experience.",
    src: "",
  },
  {
    title: "Apple Music - New Features",
    descriptionOne:
      "Apple Music is a music streaming service. From user interviews, competitor analysis, and prototype user tests, I decided to put the app through the research process.",
    descriptionTwo:
      "In this case study, I view one of my most used apps, Apple Music, and highlight potential features that could make the music experience even better.",
    src: "",
  },
  {
    title: "Goodreads Website Redesign",
    descriptionOne:
      "With a group of fellow bootcamp students, we identified a website that we use and would like to update. My group chose the beloved Goodreads website. With an impressive app, but a poor website, we conducted research and tests to identify what was wrong with the current site, and then created a prototype website based on our design.",
    src: "",
  },
];

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[75px] bg-[#E9896A]" />
      <div className="w-full h-[75px] bg-[#387C6D] shadow-home flex items-center justify-end">
        <h2 className="text-[#F8F5F1] text-[36px] mr-[80px]">
          Hello! I’m Chris,
        </h2>
      </div>
      <div className="w-full h-[75px] bg-[#343F56] shadow-home flex items-center justify-end">
        <h2 className="text-[#F8F5F1] text-[36px] mr-[80px]">
          a UI/UX designer.
        </h2>
      </div>

      <h3 className="text-center text-[48px] text-[#343F56] font-montserrat mb-[20px] mt-[64px]">
        About Me
      </h3>
      <p className="text-[18px] text-[#343F56] font-trirong max-w-[992px] mx-auto">
        Before I became a UI/UX designer, I taught elementary school. During
        this time I was able to develop strong presentation, organization, and
        adaptability skills. I also have experience working in a professional
        writing environment as a contracted writer.
      </p>
      <p className="text-[18px] text-[#343F56] font-trirong max-w-[992px] mx-auto mt-[18px]">
        I have a strong moral drive to understand people. I have worked hard to
        develop empathy for others. Now, it is my turn to help find solutions
        for life’s tech problems, and make it look good in the process!
      </p>
      <div className="inline-block mt-[32px]">
        <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px]">
          Resume
        </button>
        <a
          href="https://www.linkedin.com/in/chrisbrownuiux/"
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] ml-[64px]"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] ml-[64px]">
          Email
        </button>
      </div>
      <div className="flex justify-between w-full max-w-[992px] py-[16px] mt-[32px]">
        <div className="flex">
          <img alt="figma logo" className="h-[50px] w-[50px] bg-[#E9896A]" />
          <h4>Figma</h4>
        </div>
        <div className="flex">
          <img alt="google logo" className="h-[50px] w-[50px] bg-[#E9896A]" />
          <h4>Google Workspace</h4>
        </div>
        <div className="flex">
          <img
            alt="test tube icon"
            className="h-[50px] w-[50px] bg-[#E9896A]"
          />
          <h4>UX Research</h4>
        </div>
        <div className="flex">
          <img
            alt="code block icon"
            className="h-[50px] w-[50px] bg-[#E9896A]"
          />
          <h4>Basic HTML, CSS, and JS</h4>
        </div>
      </div>

      <h3 className="text-center text-[48px] text-[#343F56] font-montserrat mb-[20px] mt-[64px]">
        My Work
      </h3>
      {PROJECTS.map((project, i) => (
        <HomeProject {...project} i={i} />
      ))}
    </div>
  );
};

export default Home;
