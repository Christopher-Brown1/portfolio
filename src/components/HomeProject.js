import React from "react"
import { useNavigate } from "react-router-dom"

export const HomeProject = (props) => {
  const navigate = useNavigate()

  return (
    <div
      className={`flex flex-col sm:flex-row max-w-[1200px] mx-[24px] my-[64px] ${
        props.i === 1 ? "flex sm:flex-row-reverse" : ""
      }`}
    >
      {props.src}
      <div
        className={`text-center my-auto flex-col justify-evenly ${
          props.i === 1 ? "sm:mr-[4%]" : "ml-[4%]"
        }`}
      >
        <h4 className=" mb-[32px] sm:mb-[64px] mt-[32px] sm:mt-0 text-[36px] text-[#343F56] font-montserrat">
          {props.title}
        </h4>
        <p className="text-[$343F56] mb-[16px] text-left">
          {props.descriptionOne}
        </p>
        {props.descriptionTwo && (
          <p className="text-[$343F56] text-left">{props.descriptionTwo}</p>
        )}
        <button
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] sm:ml-[64px] mt-[64px]"
          onClick={() => navigate(`project/${props.i + 1}`)}
        >
          View case study
        </button>
      </div>
    </div>
  )
}

export default HomeProject
