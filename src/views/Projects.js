import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PROJECTS } from "./Home";

export const Projects = (props) => {
  const location = useLocation();
  const currentProject = PROJECTS[location.pathname.split("").pop() - 1];

  return (
    <div className="w-full">
      <h1 className="text-center text-[48px] text-[#343F56] font-montserrat mt-[64px] mb-[64px]">
        {currentProject.title}
      </h1>

      {/* This is controlled on App.js sub routes */}
      <Outlet />

      <h3 className="text-center text-[36px] text-[#343F56] font-montserrat py-[32px] mt-[64px] w-full border-t-[10px] border-[#E9896A]">
        Other Projects
      </h3>
      <div className="flex justify-center">
        {PROJECTS.filter(
          (project) => project.title !== currentProject.title
        ).map((project) => (
          <h4>{project.title}</h4>
        ))}
      </div>
    </div>
  );
};

export default Projects;
