import React from "react";
import { useParams } from "react-router-dom";

export const Project = () => {
  const { slug } = useParams();

  return (
    <div className="w-full">
      <h1>Project {slug}</h1>
      <h3 className="text-center text-[36px] text-[#343F56] font-montserrat py-[32px] mt-[64px] w-full border-t-[10px] border-[#E9896A]">
        Other Projects
      </h3>
    </div>
  );
};

export default Project;
