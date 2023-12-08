import React from "react";

export const Divider = ({ visible = true, top = "32px", bottom = "32px" }) => {
  return (
    <div
      className={`${
        visible && "border-b-[2px] border-[#E9896A]"
      } mt-[${top}] mb-[${bottom}]`}
    />
  );
};
