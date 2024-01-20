import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MenuArrow from "../assets/shared/menu_arrow.png";
import HomeIcon from "../assets/shared/home.png";
import CloseIcon from "../assets/shared/close.png";
import ResumeIcon from "../assets/shared/resume.png";
import EmailIcon from "../assets/shared/email.png";
import LinkedInIcon from "../assets/shared/linkedin.png";

export const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuText = () => {
    switch (location.pathname) {
      case "/project/1":
        return "Survivor Companion App";
      case "/project/2":
        return "Apple Music - New Features";
      case "/project/3":
        return "Goodreads Website Redesign";
      default:
        return "Home";
    }
  };
  return props.isOpen ? (
    <div
      className="w-screen h-screen fixed left-0"
      onClick={() => props.setIsOpen(false)}
    >
      <div
        className="absolute bg-[#F8F5F1] border-[3px] border-[#2A2E2C] w-full max-w-[477px] p-[16px] z-10 sm:right-[64px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b-[1px] border-[#387C6D] px-[16px] pb-[16px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.setIsOpen(false);
              navigate("/");
            }}
          >
            <img alt="home button" src={HomeIcon} />
          </button>
          <p className="text-[48px] font-megrim">CB</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.setIsOpen(false);
            }}
          >
            <img alt="close menu button" src={CloseIcon} />
          </button>
        </div>
        <div className="p-[32px]">
          <button
            className="text-[#2A2E2C80] text-[19px] font-montserrat font-[400] pb-[16px] text-right w-full"
            onClick={(e) => {
              e.stopPropagation();
              props.setIsOpen(false);
              navigate(`project/1`);
            }}
          >
            Survivor Companion App
          </button>
          <button
            className="text-[#2A2E2C80] text-[19px] font-montserrat font-[400] pb-[16px] text-right w-full"
            onClick={(e) => {
              e.stopPropagation();
              props.setIsOpen(false);
              navigate(`project/2`);
            }}
          >
            Apple Music - New Features
          </button>
          <button
            className="text-[#2A2E2C80] text-[19px] font-montserrat font-[400] text-right w-full"
            onClick={(e) => {
              e.stopPropagation();
              props.setIsOpen(false);
              navigate(`project/3`);
            }}
          >
            Goodreads Website Redesign
          </button>
        </div>
        <div className="flex justify-between items-center border-t-[1px] border-[#387C6D] px-[16px] pt-[16px]">
          <a href={`${process.env.PUBLIC_URL}/christopher_resume.pdf`}>
            <img alt="home button" src={ResumeIcon} />
          </a>
          <a href="mailto: chrisbrownuiux@gmail.com">
            <img alt="close menu button" src={EmailIcon} />
          </a>
          <a href="https://www.linkedin.com/in/chrisbrownuiux/">
            <img alt="close menu button" src={LinkedInIcon} />
          </a>
        </div>
      </div>
    </div>
  ) : (
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
  );
};

export default Menu;