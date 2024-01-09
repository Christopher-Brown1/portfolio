import React from "react";
import { CompAnalysisTemplate } from "./CompAnalysisTemplate";

import TidalA from "../assets/apple_music/tidal_a.svg";
import TidalB from "../assets/apple_music/tidal_b.svg";
import TidalC from "../assets/apple_music/tidal_c.svg";
import TidalD from "../assets/apple_music/tidal_d.svg";
import TidalE from "../assets/apple_music/tidal_e.svg";

export const TidalCompAnalysis = (props) => {
  return (
    <CompAnalysisTemplate photo="tidal">
      <div>
        <div className="flex pt-[32px]">
          <div className="flex flex-col justify-center mr-[64px]">
            <img alt="screenshot of music queue" src={TidalA} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              This is my Tidal play queue after selecting the song Houdini from
              the Pop Life playlist.
            </p>
          </div>
          <div className="flex flex-col justify-center mr-[64px]">
            <img alt="screenshot of music queue" src={TidalB} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              Currently, the only option related to my queue in a song’s menu is
              to Play next.
            </p>
          </div>
          <div className="flex flex-col justify-center mr-[64px]">
            <img alt="screenshot of music queue" src={TidalC} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              A new section has been added to the queue called “Your Queue” with
              the song we just added.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img alt="screenshot of music queue" src={TidalD} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              The song’s menu has now been updated to include a new queue
              option.
            </p>
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              Clicking “Play next” will add the song to the top of Your Queue
              (The newly created section in the queue)
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[32px] pb-[32px]">
          <div className="flex flex-col justify-center mr-[64px] w-1/4">
            <img alt="screenshot of music queue" src={TidalE} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              Clicking “Add to play queue” will add the song to the end of Your
              Queue, but before the rest of the Pop Life playlist continues.
            </p>
          </div>
          <div className="flex border-t-[1px] border-t-[#D1E8E2] pt-[16px] pb-[48px] w-3/4">
            <div className="w-1/3 border-r-[1px] border-r-[#D1E8E2] p-[10px]">
              <p className="text-[#D1E8E2]">Strengths:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  Easy to follow.
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  Continuous music playing.
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  Easy “Clear queue” process.
                </li>
              </ul>
            </div>
            <div className="w-1/3 border-r-[1px] border-r-[#D1E8E2] p-[10px]">
              <p className="text-[#D1E8E2]">Weaknesses:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  No option to play a new song immediately following the current
                  song.
                </li>
              </ul>
            </div>
            <div className="w-1/3 p-[10px]">
              <p className="text-[#D1E8E2]">Opportunities:</p>
              <ul className="list-disc">
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  Simple way to clear queue.{" "}
                </li>
                <li className="text-[#D1E8E2] list-item text-[18px] font-trirong ml-[40px]">
                  Label for clear lists.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CompAnalysisTemplate>
  );
};

export default TidalCompAnalysis;
