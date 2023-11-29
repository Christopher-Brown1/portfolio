import React from "react";

export const HorizontalContent = (props) => {
  return (
    <div className="flex-col max-w-[992px] my-[64px]">
      {props.title && (
        <h4 className="mb-[64px] text-[36px] text-[#343F56] text-center font-montserrat">
          {props.title}
        </h4>
      )}
      <div className="flex">
        <img
          alt="survivor UI screenshot"
          // Remove w-30% and h-[500px] after adding assets/src
          className="h-[500px] min-w-[430px] bg-[#E9896A] w-30%"
          src={props.src}
        />
        <div className="text-center w-66% my-auto flex-col justify-evenly ml-[4%]">
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