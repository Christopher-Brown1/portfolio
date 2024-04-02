import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import MenuArrow from "../assets/shared/menu_arrow.svg"
import HomeIcon from "../assets/shared/home.svg"
import CloseIcon from "../assets/shared/close.svg"
import ResumeIcon from "../assets/shared/resume.svg"
import EmailIcon from "../assets/shared/email.svg"
import LinkedInIcon from "../assets/shared/linkedin.svg"

export const Menu = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const project = location.pathname.split("/").slice(-1)[0]

  const menuText = () => {
    switch (project) {
      case "1":
        return "Survivor Companion App"
      case "2":
        return "Apple Music - New Features"
      case "3":
        return "Goodreads Website Redesign"
      default:
        return "Home"
    }
  }
  return (
    <React.Fragment>
      {props.isOpen && (
        <div
          className="w-screen h-screen fixed left-0 top-0"
          onClick={() => props.setIsOpen(false)}
        >
          <div
            className="absolute bg-[#F8F5F1] border-[3px] border-[#2A2E2C] w-full max-w-[477px] p-[16px] z-10 top-[100px] sm:top-[128px] lg:top-[176px] xl:top-[104px] md:right-[24px] lg:right-[64px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b-[1px] border-[#387C6D] px-[16px] pb-[16px]">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  props.setIsOpen(false)
                  navigate("/")
                }}
              >
                <img alt="home button" src={HomeIcon} />
              </button>
              <p className="text-[48px] font-megrim">CB</p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  props.setIsOpen(false)
                }}
              >
                <img alt="close menu button" src={CloseIcon} />
              </button>
            </div>
            <div className="p-[32px]">
              <button
                className={`text-[#2A2E2C80] text-[19px] font-montserrat pb-[16px] text-right w-full${
                  project === "1" ? " font-[900]" : " font-[400]"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  props.setIsOpen(false)
                  navigate(`project/1`)
                }}
              >
                Survivor Companion App
              </button>
              <button
                className={`text-[#2A2E2C80] text-[19px] font-montserrat pb-[16px] text-right w-full${
                  project === "2" ? " font-[900]" : " font-[400]"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  props.setIsOpen(false)
                  navigate(`project/2`)
                }}
              >
                Apple Music - New Features
              </button>
              <button
                className={`text-[#2A2E2C80] text-[19px] font-montserrat text-right w-full${
                  project === "3" ? " font-[900]" : " font-[400]"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  props.setIsOpen(false)
                  navigate(`project/3`)
                }}
              >
                Goodreads Website Redesign
              </button>
            </div>
            <div className="flex justify-between items-center border-t-[1px] border-[#387C6D] px-[16px] pt-[16px]">
              <div className="flex flex-col items-center">
                <a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="home button" src={ResumeIcon} />
                </a>
                <p className="text-[10px] font-[500] font-trirong leading-[7px] mt-[4px]">
                  Resume
                </p>
              </div>
              <div className="flex flex-col items-center">
                <a href="mailto: chrisbrownuiux@gmail.com">
                  <img alt="close menu button" src={EmailIcon} />
                </a>
                <p className="text-[10px] font-[500] font-trirong leading-[7px] mt-[4px]">
                  Email
                </p>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.linkedin.com/in/chrisbrownuiux/">
                  <img alt="close menu button" src={LinkedInIcon} />
                </a>
                <p className="text-[10px] font-[500] font-trirong leading-[7px] mt-[4px]">
                  LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="flex items-center font-montserrat text-[14px] sm:text-[19px] text-[#2a2e2c80] menuButton"
        onClick={() => props.setIsOpen(true)}
      >
        {menuText()}{" "}
        <img
          alt="open menu"
          onClick={() => props.setIsOpen(true)}
          className="ml-[8px] menuButton"
          src={MenuArrow}
        />
      </button>
    </React.Fragment>
  )
}

export default Menu
