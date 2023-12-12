import React from "react";

export const VerticalContent = ({
  bottom = true,
  textSize = "small",
  ...props
}) => {
  return (
    <div className={`flex-col max-w-[992px] ${bottom && "mb-[64px]"}]`}>
      {props.title && (
        <h4
          className={`mb-[32px] ${
            textSize === "small" ? "text-[27px]" : "text-[36px]"
          } text-[#343F56] text-center font-montserrat`}
        >
          {props.title}
        </h4>
      )}
      <div className="text-center w-66% my-auto flex-col justify-evenly">
        <p className="text-[#343F56] text-left">{props.descriptionOne}</p>
        {props.descriptionTwo && (
          <p className="text-[#343F56] text-left mt-[16px]">
            {props.descriptionTwo}
          </p>
        )}
      </div>
      {props.src &&
        (Array.isArray(props.src) ? (
          <div className="flex">
            {props.src.map((src) => (
              <img
                alt="survivor UI screenshot"
                className="mx-auto mt-[32px] mb-[32px]"
                src={src}
              />
            ))}
          </div>
        ) : (
          <img
            alt="survivor UI screenshot"
            className="mx-auto mt-[32px] mb-[32px]"
            src={props.src}
          />
        ))}
    </div>
  );
};
