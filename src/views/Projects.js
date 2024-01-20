import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "./Home";
import MusicNav from "../assets/shared/music_nav.png";
import GoodreadNav from "../assets/shared/goodreads_nav.svg";
import SurvivorHome from "../assets/home/survivor_home.png";

export const Projects = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentProject = PROJECTS[location.pathname.split("").pop() - 1];

  const getImage = (project) => {
    if (project.title === "Apple Music - New Features") {
      return MusicNav;
    } else if (project.title === "Goodreads Website Redesign") {
      return GoodreadNav;
    } else if (project.title === "Survivor Companion App") {
      return SurvivorHome;
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-[48px] text-[#343F56] font-montserrat mt-[48px] mb-[32px]">
        {currentProject.title}
      </h1>

      {/* This is controlled on App.js sub routes */}
      <Outlet />

      <h3 className="text-center text-[36px] text-[#343F56] font-montserrat py-[48px] mt-[64px] w-full border-t-[10px] border-[#E9896A]">
        Other Projects
      </h3>
      <div className="flex justify-center mb-[64px]">
        {PROJECTS.filter(
          (project) => project.title !== currentProject.title
        ).map((project, i) => (
          <div
            className={
              i !== PROJECTS.length - 2
                ? "flex flex-col w-[25%] cursor-pointer mr-[64px]"
                : "flex flex-col w-[25%] cursor-pointer"
            }
            key={i}
            onClick={() =>
              navigate(
                `${
                  PROJECTS.map((project) => project.title).indexOf(
                    project.title
                  ) + 1
                }`
              )
            }
          >
            <img
              alt={project.title}
              className="object-contain"
              style={{ height: 300, aspectRatio: "3/2" }}
              src={getImage(project)}
            />
            <h4 className="text-center text-[36px] text-[#343F56] font-[400] font-Montserrat">
              {project.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
