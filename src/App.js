import { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
const Survivor = lazy(() => import("./projects/Survivor"));
const AppleMusic = lazy(() => import("./projects/AppleMusic"));
const Goodreads = lazy(() => import("./projects/Goodreads"));

function App() {
  const navigate = useNavigate();

  return (
    <div className="App bg-[#F8F5F1]">
      {/* Header */}
      <div className="w-full border-b-[2px] border-[#343F56] pl-[80px]">
        <h1
          className="font-megrim text-[48px] font-medium pt-[48px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Christopher Brown
        </h1>
      </div>

      {/* Content */}
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

      {/* Footer */}
      <div className="w-full bg-[#343F56] text-[#F8F5F1]">
        <div className="flex flex-col text-right mr-[80px] mt-[64px] py-[16px]">
          <h2 className="font-megrim text-[32px] font-medium">
            Christopher Brown
          </h2>
          <div>
            <span>Email</span> <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
