import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { PROJECTS } from "./Home"
import AppleMusicIntro from "../assets/apple_music/apple_music_intro.png"
import GoodreadsIntro from "../assets/goodreads/goodreads_intro.png"
import SurvivorIntro from "../assets/survivor/survivor_intro.png"

export const Projects = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentProject = PROJECTS[location.pathname.split("").pop() - 1]

  const getImage = (project) => {
    if (project.title === "Apple Music - New Features") {
      return AppleMusicIntro
    } else if (project.title === "Goodreads Website Redesign") {
      return GoodreadsIntro
    } else if (project.title === "Survivor Companion App") {
      return SurvivorIntro
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-center text-[48px] text-[#343F56] font-montserrat mt-[48px] mb-[32px]">
        {currentProject.title}
      </h1>

      {/* This is controlled on App.js sub routes */}
      <Outlet />

      <h3 className="text-center text-[36px] text-[#343F56] font-montserrat py-[48px] mt-0 w-full border-t-[10px] border-[#E9896A]">
        Other Projects
      </h3>
      <div className="flex flex-col sm:flex-row justify-center mb-[64px] mx-[20px] lg:mx-0">
        {PROJECTS.filter((project) => project.title !== currentProject.title)
          .reverse()
          .map((project, i) => (
            <div
              className={
                i !== PROJECTS.length - 2
                  ? "flex flex-col sm:w-[48%] sm:w-[25%] cursor-pointer mr-[4%] sm:mr-[64px]"
                  : "flex flex-col sm:w-[48%] sm:w-[25%] cursor-pointer"
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
  )
}

export default Projects
