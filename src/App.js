import { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import ResumeFooter from "./assets/shared/Resume_footer.png";
import EmailFooter from "./assets/shared/Email_footer.png";
import LinkedInFooter from "./assets/shared/Linkedin_footer.png";
import { ReactComponent as ScrollToTop } from "./assets/shared/Scroll_to_top.svg";
const Survivor = lazy(() => import("./projects/Survivor"));
const AppleMusic = lazy(() => import("./projects/AppleMusic"));
const Goodreads = lazy(() => import("./projects/Goodreads"));

function App() {
  const navigate = useNavigate();

  return (
    <div className="App bg-[#F8F5F1]">
      {/* Header */}
      <div
        className="w-full border-b-[2px] border-[#343F56] pl-[80px]"
        id="header"
      >
        <h1
          className="font-megrim text-[48px] font-medium pt-[48px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Christopher Brown
        </h1>
      </div>

      {/* Content */}
      <div className="relative">
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/project" element={<Projects />}>
              <Route exact path="/project/1" element={<Survivor />} />
              <Route exact path="/project/2" element={<AppleMusic />} />
              <Route exact path="/project/3" element={<Goodreads />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <ScrollToTop className="sticky bottom-[24px] right-[24px] ml-auto mb-[24px] h-[50px] w-[50px]" />
      </div>

      {/* Footer */}
      <div className="w-full bg-[#343F56] text-[#F8F5F1]">
        <div className="flex justify-between items-center py-[16px] px-[80px]">
          <div>
            <h2 className="font-megrim text-[32px] leading-[38.4px] font-medium border-b border-[#387C6D] p-0">
              Christopher Brown
            </h2>
            <p className="text-[#E9896A] text-[8px] font-[500] leading-[10px] font-trirong">
              Barely Fiction Experiences
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col items-center mr-[16.5px]">
              <img alt="" className="h-[30px] w-[30px]" src={ResumeFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-trirong">
                Resume
              </p>
            </div>
            <div className="flex flex-col items-center mr-[16.5px]">
              <img alt="" className="h-[30px] w-[30px]" src={EmailFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-trirong">
                Email
              </p>
            </div>
            <div className="flex flex-col items-center mr-[16.5px]">
              <img alt="" className="h-[30px] w-[30px]" src={LinkedInFooter} />
              <p className="text-[#F8F5F1] text-[10px] font-[500] font-Trirong">
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
