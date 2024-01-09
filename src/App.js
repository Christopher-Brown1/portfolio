import { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import ResumeFooter from "./assets/shared/Resume_footer.png";
import EmailFooter from "./assets/shared/Email_footer.png";
import LinkedInFooter from "./assets/shared/Linkedin_footer.png";
import { ReactComponent as ScrollToTop } from "./assets/shared/Scroll_to_top.svg";
import Survivor from "./projects/Survivor";
import AppleMusic from "./projects/AppleMusic";
import Goodreads from "./projects/Goodreads";

function App() {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="App bg-[#F8F5F1]">
      {/* Header */}
      <div
        className="sticky top-0 z-10 bg-[#F8F5F1] w-full border-b-[2px] border-[#343F56] pl-[80px]"
        ref={headerRef}
      >
        <h1
          className="font-megrim text-[48px] font-medium pt-[48px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Christopher Brown
        </h1>
      </div>

      {/* Content */}
      <div className="relative" id="header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<Projects />}>
            <Route exact path="/project/1" element={<Survivor />} />
            <Route exact path="/project/2" element={<AppleMusic />} />
            <Route exact path="/project/3" element={<Goodreads />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <ScrollToTop
          className="cursor-pointer sticky bottom-[24px] right-[24px] ml-auto mb-[24px] h-[75px] w-[75px]"
          onClick={() => headerRef.current.scrollIntoView()}
        />
      </div>

      {/* Footer */}
      <div className="w-full bg-[#343F56] text-[#F8F5F1]">
        <div className="flex justify-between items-center pb-[16px] pt-[20px] px-[80px]">
          <div>
            <h2 className="font-megrim text-[32px] leading-[38.4px] font-medium border-b border-[#387C6D] p-0">
              Christopher Brown
            </h2>
            <p className="text-[#E9896A] text-[8px] font-[500] leading-[10px] font-trirong">
              Barely Fiction Experiences
            </p>
          </div>
          <div className="flex justify-end">
            <a
              className="flex flex-col items-center mr-[16.5px]"
              href={`${process.env.PUBLIC_URL}/christopher_resume.pdf`}
            >
              <img alt="" className="h-[30px] w-[30px]" src={ResumeFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-trirong">
                Resume
              </p>
            </a>
            <a
              className="flex flex-col items-center mr-[16.5px]"
              href="mailto: chrisbrownuiux@gmail.com"
            >
              <img alt="" className="h-[30px] w-[30px]" src={EmailFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-trirong">
                Email
              </p>
            </a>
            <a
              className="flex flex-col items-center mr-[16.5px]"
              href="https://www.linkedin.com/in/chrisbrownuiux/"
            >
              <img alt="" className="h-[30px] w-[30px]" src={LinkedInFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-Trirong">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
