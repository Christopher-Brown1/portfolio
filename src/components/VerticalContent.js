import React from "react";

export const VerticalContent = ({
  bottom = true,
  reverse = false,
  textSize = "small",
  textWidth = "max-w-1024px",
  ...props
}) => {
  const myClass = () => (reverse ? " flex flex-col-reverse" : " flex flex-col");
  let customClass = "w-full max-w-[1024px] mx-auto" + myClass();
  if (bottom) {
    customClass = customClass + " mb-[64px]";
  }

  return (
    <div className={customClass}>
      {props.title && (
        <h4
          className={`mb-[32px] ${
            textSize === "small" ? "text-[27px]" : "text-[36px]"
          } text-[#343F56] text-center font-montserrat`}
        >
          {props.title}
        </h4>
      )}
      <div className="text-center w-66% my-auto flex-col justify-evenly mb-[64px]">
        <div className={`text-[#343F56] ${textWidth} mx-auto text-left`}>
          {props.descriptionOne}
        </div>
        {props.descriptionTwo && (
          <p className="text-[#343F56] text-left mt-[16px]">
            {props.descriptionTwo}
          </p>
        )}
      </div>
      {props.customImage
        ? props.customImage
        : props.src &&
          (Array.isArray(props.src) ? (
            <div className="flex justify-center">
              {props.src.map((src, i) => (
                <img
                  alt="survivor UI screenshot"
                  className={`object-none mb-[32px] ${
                    i !== props.src.length - 1 ? "mr-[64px]" : ""
                  }`}
                  key={i}
                  src={src}
                />
              ))}
            </div>
          ) : (
            <img
              alt="survivor UI screenshot"
              className="object-none mx-auto"
              src={props.src}
            />
          ))}
    </div>
  );
};
