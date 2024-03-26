import React, { useState } from "react"

import Tidal from "../assets/apple_music/tidal.svg"
import Spotify from "../assets/apple_music/spotify.svg"
import ArrowDown from "../assets/apple_music/Arrow_down.svg"
import ArrowUp from "../assets/apple_music/arrow_up.svg"

export const CompAnalysisTemplate = ({ photo, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const bgColor = photo === "spotify" ? "#387C6D" : "#343F56"

  return (
    <div
      className={`w-full max-w-[1024px] mx-[auto]${
        photo === "spotify" ? " mb-[32px]" : ""
      }`}
    >
      <div className={`bg-[${bgColor}] flex justify-between`}>
        {photo === "spotify" && (
          <img className="ml-[64px]" src={Spotify} alt="spotify logo" />
        )}
        {photo === "tidal" && (
          <img className="ml-[64px]" src={Tidal} alt="tidal logo" />
        )}
        {isOpen ? (
          <img
            className="mr-[64px]"
            onClick={() => setIsOpen(!isOpen)}
            src={ArrowUp}
            alt="open section"
          />
        ) : (
          <img
            className="mr-[64px]"
            onClick={() => setIsOpen(!isOpen)}
            src={ArrowDown}
            alt="close section"
          />
        )}
      </div>
      {isOpen && (
        <div
          className={`w-full max-w-[1024px] mx-[auto] px-[24px] sm:px-[45px] bg-[${bgColor}]`}
        >
          {children}
        </div>
      )}
    </div>
  )
}
