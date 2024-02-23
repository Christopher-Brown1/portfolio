import React from "react"

export const VerticalContent = ({
  bottom = true,
  reverse = false,
  textSize = "small",
  textWidth = "max-w-1024px",
  ...props
}) => {
  const myClass = () =>
    reverse
      ? " flex flex-col-reverse items-center"
      : " flex flex-col items-center"
  let customClass = "w-full max-w-[1024px] mx-auto" + myClass()
  if (bottom) {
    customClass =
      customClass + (props.customImage ? " mb-[120px]" : " mb-[64px]")
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
        <div className="text-center sm:w-66% my-auto flex-col justify-evenly mb-[64px] mx-[24px]">
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
            <div className="flex justify-center flex-col sm:flex-row items-center max-w-[900px] mx-[24px]">
              {props.src.map((src, i) => (
                <img
                  alt="survivor UI screenshot"
                  className={`sm:object-none mb-[32px] ${
                    i !== props.src.length - 1 ? "sm:mr-[64px]" : ""
                  }${
                    props.srcStyles?.index === i ? props.srcStyles.override : ""
                  }`}
                  key={i}
                  src={src}
                />
              ))}
            </div>
          ) : (
            <img
              alt="survivor UI screenshot"
              className="sm:object-none mx-auto"
              src={props.src}
            />
          ))}
    </div>
  )
}
