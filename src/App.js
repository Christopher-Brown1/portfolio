import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Project = lazy(() => import("./views/Project"));

function App() {
  return (
    <div className="App">
      <div className="w-full max-w-[992px] mx-auto">
        <h1 className="font-megrim text-[48px] font-medium mt-[48px]">
          Christopher Brown
        </h1>
      </div>

      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project/:slug" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

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
