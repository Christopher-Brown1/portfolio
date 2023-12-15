import React from "react";

export const VerticalContent = ({
  bottom = true,
  textSize = "small",
  textWidth = "max-w-1024px",
  ...props
}) => {
  let customClass = "w-full max-w-[1024px] mx-auto";

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
        <p className={`text-[#343F56] ${textWidth} mx-auto text-left`}>
          {props.descriptionOne}
        </p>
        {props.descriptionTwo && (
          <p className="text-[#343F56] text-left mt-[16px]">
            {props.descriptionTwo}
          </p>
        )}
      </div>
      {props.src &&
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
