import React from "react";

export const HorizontalContent = ({
  bottom = "64px",
  top = "0px",
  left = "0px",
  reverse = false,
  ...props
}) => {
  return (
    <div
      className={`flex-col max-w-[992px] mt-[${top}] mb-[${bottom}] ml-[${left}]`}
    >
      {props.title && (
        <h4 className="mb-[64px] text-[36px] text-[#343F56] text-center font-montserrat">
          {props.title}
        </h4>
      )}
      <div className={`flex ${reverse && " flex-row-reverse"}`}>
        <img alt="survivor UI screenshot" className={``} src={props.src} />
        <div
          className={`text-center w-66% my-auto flex-col justify-evenly ${
            reverse ? "mr-[4%]" : "ml-[4%]"
          }`}
        >
          <p className="text-[$343F56] mb-[16px] text-left">
            {props.descriptionOne}
          </p>
          {props.descriptionTwo && (
            <p className="text-[$343F56] text-left">{props.descriptionTwo}</p>
          )}
          {props.descriptionThree && (
            <p className="text-[$343F56] text-left mt-[16px]">
              {props.descriptionThree}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
