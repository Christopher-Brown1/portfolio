import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PROJECTS } from "./Home";

export const Projects = (props) => {
  const location = useLocation();
  const project = PROJECTS[location.pathname.split("").pop() - 1];

  return (
    <div className="w-full">
      <h1 className="text-center text-[48px] text-[#343F56] font-montserrat mt-[48px] mb-[32px]">
        {project.title}
      </h1>

      {/* This is controlled on App.js sub routes */}
      <Outlet />

      <h3 className="text-center text-[36px] text-[#343F56] font-montserrat py-[32px] mt-[64px] w-full border-t-[10px] border-[#E9896A]">
        Other Projects
      </h3>
    </div>
  );
};

export default Projects;
