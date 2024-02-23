import React from "react"

export const HorizontalContent = ({
  bottom = "64px",
  top = "0px",
  reverse = false,
  ...props
}) => {
  const myClass = () =>
    reverse ? "flex flex-col sm:flex-row-reverse" : "flex flex-col sm:flex-row"

  return (
    <div
      className={`flex flex-col max-w-[1024px] mt-[${top}] mb-[${bottom}] mx-[auto] p-[20px]`}
    >
      {props.title && (
        <h4 className="mb-[64px] text-[36px] text-[#343F56] text-center font-montserrat">
          {props.title}
        </h4>
      )}
      <div className={myClass()}>
        {props.customImage
          ? props.customImage
          : props.src &&
            (Array.isArray(props.src) ? (
              <div className="flex flex-col justify-center w-full sm:w-[33%] items-center mx-auto">
                {props.src.map((src, i) => (
                  <img
                    alt="survivor UI screenshot"
                    className={`${i !== props.src.length - 1 && "mb-[32px]"}`}
                    key={i}
                    src={src}
                  />
                ))}
              </div>
            ) : (
              <img alt="survivor UI screenshot" src={props.src} />
            ))}
        <div
          className={`text-center w-full sm:w-[66%] my-auto flex-col justify-evenly ${
            reverse ? "mr-[4%]" : "sm:ml-[4%]"
          }`}
        >
          <p className="text-[$343F56] mb-[16px] mt-[20px] sm:mt-0 text-left">
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
  )
}
