import React from "react"

export const VerticalContent = ({
  bottom = true,
  reverse = false,
  textSize = "small",
  textWidth = "max-w-1024px",
  srcStyles = [],
  height = "initial",
  width = "initial",
  ...props
}) => {
  const myClass = () =>
    reverse
      ? " flex flex-col-reverse items-center"
      : " flex flex-col items-center"
  let customClass =
    "w-full max-w-[1024px] mx-auto px-[24px] sm:px-[64px] " + myClass()
  if (bottom) {
    customClass = customClass + " mb-[80px]"
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
      {(props.descriptionOne || props.descriptionTwo) && (
        <div className="text-center sm:w-66% my-auto flex-col justify-evenly mb-[32px] mx-[24px]">
          <p
            className={`text-[#343F56] w-full ${textWidth} mx-auto text-left font-Trirong`}
          >
            {props.descriptionOne}
          </p>
          {props.descriptionTwo && (
            <p className="text-[#343F56] text-left font-Trirong mt-[16px]">
              {props.descriptionTwo}
            </p>
          )}
        </div>
      )}
      {props.customImage
        ? props.customImage
        : props.src &&
          (Array.isArray(props.src) ? (
            <div className="flex justify-center flex-col sm:flex-row md:flex-col lg:flex-row items-center max-w-[900px] mx-[24px]">
              {props.src.map((src, i) => (
                <img
                  alt="survivor UI screenshot"
                  className={`mb-[32px] ${
                    i !== props.src.length - 1
                      ? "sm:mr-[64px] md:mr-0 lg:mr-[64px] "
                      : " "
                  }${srcStyles.length ? srcStyles[i] : ""}`}
                  key={i}
                  src={src}
                  style={{ height: height }}
                />
              ))}
            </div>
          ) : (
            <img
              alt="survivor UI screenshot"
              className={`mx-auto ${srcStyles[0]}`}
              src={props.src}
              style={{ width: width }}
            />
          ))}
    </div>
  )
}
