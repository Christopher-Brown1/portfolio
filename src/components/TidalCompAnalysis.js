import React from "react"
import { CompAnalysisTemplate } from "./CompAnalysisTemplate"

import TidalA from "../assets/apple_music/tidal_a.png"
import TidalB from "../assets/apple_music/tidal_b.png"
import TidalC from "../assets/apple_music/tidal_c.png"
import TidalD from "../assets/apple_music/tidal_d.png"
import TidalE from "../assets/apple_music/tidal_e.png"

export const TidalCompAnalysis = (props) => {
  return (
    <CompAnalysisTemplate photo="tidal">
      <div>
        <div className="flex justify-between md:items-center flex-col sm:flex-row lg:flex-row md:flex-wrap pt-[32px]">
          <div className="flex flex-col justify-center w-[100%] md:w-[50%] lg:w-[25%]">
            <img
              alt="screenshot of music queue"
              className="max-h-[400px] max-w-[200px] mx-auto"
              src={TidalA}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              This is my Tidal play queue after selecting the song Houdini from
              the Pop Life playlist.
            </p>
          </div>
          <div className="flex flex-col justify-center w-[100%] md:w-[50%] lg:w-[25%]">
            <img
              alt="screenshot of music queue"
              className="max-h-[320px] max-w-[200px] mx-auto"
              src={TidalB}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              Currently, the only option related to my queue in a song’s menu is
              to Play next.
            </p>
          </div>
          <div className="flex flex-col justify-center w-[100%] md:w-[50%] lg:w-[25%]">
            <img
              alt="screenshot of music queue"
              className="max-h-[400px] max-w-[200px] mx-auto md:mt-[32px]"
              src={TidalC}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              A new section has been added to the queue called “Your Queue” with
              the song we just added.
            </p>
          </div>
          <div className="flex flex-col justify-center w-[100%] md:w-[50%] lg:w-[25%]">
            <img
              alt="screenshot of music queue"
              className="max-h-[350px] max-w-[200px] mx-auto md:mt-[32px]"
              src={TidalD}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              The song’s menu has now been updated to include a new queue
              option.
            </p>
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              Clicking “Play next” will add the song to the top of Your Queue
              (The newly created section in the queue)
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-[32px] pb-[32px]">
          <div className="flex flex-col justify-center sm:mr-[64px] sm:w-1/4">
            <img
              alt="screenshot of music queue"
              className="max-h-[400px] max-w-[200px] mx-auto"
              src={TidalE}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px] mb-[32px] sm:mb-0">
              Clicking “Add to play queue” will add the song to the end of Your
              Queue, but before the rest of the Pop Life playlist continues.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row border-t-[1px] border-t-[#D1E8E2] pt-[16px] pb-[48px] sm:w-3/4">
            <div className="w-full sm:w-1/3 sm:border-r-[1px] border-r-[#D1E8E2] p-[10px]">
              <p className="text-[#D1E8E2]">Strengths:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  Easy to follow.
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  Continuous music playing.
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  Easy “Clear queue” process.
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 sm:border-r-[1px] border-r-[#D1E8E2] p-[10px]">
              <p className="text-[#D1E8E2]">Weaknesses:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  No option to play a new song immediately following the current
                  song.
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 p-[10px]">
              <p className="text-[#D1E8E2]">Opportunities:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  Simple way to clear queue.{" "}
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong font-[500] ml-[40px]">
                  Label for clear lists.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CompAnalysisTemplate>
  )
}
