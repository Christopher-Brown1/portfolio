import React from "react"
import { CompAnalysisTemplate } from "./CompAnalysisTemplate"
import SpotifyQueue from "../assets/apple_music/spotify_queue.png"
import SpotifyMenu from "../assets/apple_music/spotify_menu.png"
import SpotifyUpdatedMenu from "../assets/apple_music/spotify_updated_menu.png"

export const SpotifyCompAnalysis = (props) => {
  return (
    <CompAnalysisTemplate photo="spotify">
      <div>
        <div className="flex flex-col sm:flex-row pt-[32px]">
          <div className="flex flex-col justify-center">
            <img alt="screenshot of music queue" src={SpotifyQueue} />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              When I add a song from the Top 50: Global playlist, the song is
              added to the “Now playing” section and the rest of the playlist is
              added to the queue.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:ml-[64px]">
            <img
              alt="screenshot of music menu"
              className="max-h-[350px] max-w-[200px] mt-[32px] sm:mt-0"
              src={SpotifyMenu}
            />
            <p className="text-[#D1E8E2] text-center mt-[16px]">
              A new song’s menu only gives me one option to add to the queue.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-[600px] mx-[auto] my-[32px]">
          <img alt="screenshot of updated menu" src={SpotifyUpdatedMenu} />
          <p className="text-[#D1E8E2] text-center mt-[16px]">
            By selecting this option, it adds the song to you queue, after the
            currently playing song, but before the rest of the playlist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row border-t-[1px] border-t-[#D1E8E2] pt-[16px] pb-[48px]">
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
    </CompAnalysisTemplate>
  )
}

export default SpotifyCompAnalysis
