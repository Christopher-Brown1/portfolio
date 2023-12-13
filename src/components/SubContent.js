import React from "react";

export const SubContent = (props) => {
  return (
    <div className="flex-col max-w-[1024px] my-[32px]">
      {props.title && (
        <h4 className="text-[19px] text-[#343F56] text-center font-montserrat underline">
          {props.title}
        </h4>
      )}
      <div className="text-center w-66% my-auto flex-col justify-evenly">
        <p className="text-[$343F56] mb-[16px] text-left">
          {props.descriptionOne}
        </p>
        {props.descriptionTwo && (
          <p className="text-[$343F56] mb-[16px] text-left">
            {props.descriptionTwo}
          </p>
        )}
        {props.descriptionThree && (
          <p className="text-[$343F56] mb-[16px] text-left">
            {props.descriptionThree}
          </p>
        )}
        {props.descriptionFour && (
          <p className="text-[$343F56] mb-[16px] text-left">
            {props.descriptionFour}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubContent;
