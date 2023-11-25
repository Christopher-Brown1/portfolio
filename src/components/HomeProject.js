import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeProject = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex max-w-[992px] my-[64px] ${
        props.i === 1 && "flex flex-row-reverse"
      }`}
    >
      <img
        alt={props.title + " screenshot"}
        className="h-[500px] min-w-[430px] bg-[#E9896A] w-30%"
        src={props.src}
      />
      <div
        className={`text-center w-66% ${props.i === 1 ? "mr-[4%]" : "ml-[4%]"}`}
      >
        <h4 className="mb-[64px] text-[36px] text-[#343F56] font-montserrat">
          {props.title}
        </h4>
        <p className="text-[$343F56] mb-[16px]">{props.descriptionOne}</p>
        {props.descriptionTwo && (
          <p className="text-[$343F56]">{props.descriptionTwo}</p>
        )}
        <button
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] ml-[64px]"
          onClick={() => navigate(`project/${props.i + 1}`)}
        >
          View case study
        </button>
      </div>
    </div>
  );
};

export default HomeProject;
