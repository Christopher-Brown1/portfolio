import React, { useEffect } from "react";
import { VerticalContent } from "../components/VerticalContent";
import { HorizontalContent } from "../components/HorizontalContent";
import { SubContent } from "../components/SubContent";
// import AppleMusicFrameImg from "../assets/apple_music/ui_frame_large.png";
// import AppleMusicFrame1Img from "../assets/apple_music/ui_frame_1.png";
// import AppleMusicFrame2Img from "../assets/apple_music/ui_frame_2.png";
// import AppleMusicIconImg from "../assets/apple_music/music_icon.png";
// import AppleMusicEditMenuImg from "../assets/apple_music/music_edit_menu.png";
// import AppleMusicQueueImg from "../assets/apple_music/music_queue.png";
// import AppleMusicPlayerImg from "../assets/apple_music/music_player.png";
import { Divider } from "../components/Divider";

export const AppleMusic = () => {
  useEffect(() => {
    document.getElementById("header").scrollIntoView();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <VerticalContent
        descriptionOne="In this case study, I view one of my most used apps, Apple Music, and highlight potential features that could make the music experience even better."
        // src={AppleMusicFrameImg}
      />
      <Divider />
      <VerticalContent
        title="Feature #1: Pin Favorite Music"
        descriptionOne="Your favorite artist has just released the album of the year. It is all you can listen to. Flash forward to next week when new music has been released again. You find other songs that you enjoy, but you still keep going back to that album. Eventually, all of your recently added music has pushed your beloved album off of the homepage. Instantly, listening takes a few more steps and a little more time. Introducing pinned music, where you can pin favorite albums, playlists, artists, or songs directly from your library for easy access whenever you want."
        // src={AppleMusicFrame1Img}
      />
      <HorizontalContent
        descriptionOne="When deciding where the pinned music should go, there were two standout options. The first option was to include a new “pinned” item at the top of the library categories. The second option was to put the pinned music below the library categories, and above the recently added section (shown here). I decided to go with the second option in order to decrease the amount of clicks needed to access them."
        // src={AppleMusicFrame2Img}
      />
      <HorizontalContent
        bottom="64px"
        left="32px"
        descriptionOne="When pinning new music, I needed to find a way to differentiate between the different items that can be pinned. Using inspiration from some of the existing iconography from Apple, I created a new set of icons to represent playlists, songs, artists, albums, and genres."
        // src={AppleMusicIconImg}
      />
      <HorizontalContent
        bottom="0"
        descriptionOne="In order to pin new music, I had to identify how a user would go about pinning new items. Using the already existing Apple Music song menu, I created a new option to “Pin ____” with the second part of the option changing depending on what type of item you are wanting to pin."
        // src={AppleMusicEditMenuImg}
      />
      <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto mt-[32px]">
        View Prototype
      </button>
      <Divider bottom="64px" />
      <VerticalContent
        title="Feature #2: Music Queue Options"
        descriptionOne="While browsing music and listening to my favorite artists on Apple Music, I am constantly finding myself frustrated with adding music to the queue and not being able to get it exactly how I want it. Based on my online research, the debate about how to make the music queue work is widespread and a common issue with Apple Music."
      />
      <SubContent
        title="Competitor Analysis"
        descriptionOne="My first step in this project was to identify how the competitors allow users to manage their music queue. I looked at the premium versions of both Spotify and Tidal to see what was good, bad, and loved by the users."
      />
      {/* Two Competitor Sections Go Here */}
      <span className="text-center text-[30px] italic">
        **Competitor Content Goes Here**
      </span>
      <SubContent
        title="Creating the feature"
        descriptionOne="My main priority when designing the new queue was to allow the user to chose exactly where they wanted their song to play."
        descriptionTwo="When choosing a song from an album or playlist, the selected song will play followed by the rest of the album or playlist-this is the continue playing section of your queue."
        descriptionThree='If you are listening through a playlist and you want to add a new song to be played immediately after the current song (but before the rest of the continue playing section plays) then you can select "Play Next". This will create a new section of the queue called "Playing Next".'
        descriptionFour='If you want to add another song to your queue, you can now either add the song to the end of your "Playing Next" section by selecting "Add to Playing Next" or you can add it to the end of the "Continue Playing" section by selecting "Add to Continue Playing".'
      />
      <HorizontalContent
        descriptionOne="The first change that needed to be made was to update the song menu. The current menu only allows for “Play next” or “Play last”. In order to accomplish the goal of creating more accessible queue options, I made the following changes to the song menu:"
        descriptionTwo={
          <ul>
            <li className="list-disc ml-[20px] mb-[6px]">
              Changed the “Play last” option to “Add to Playing Next”. This has
              the same functionality of playing the selected song at the end of
              the added songs, but before it continues to play the rest of the
              album/playlist that was originally chosen.
            </li>
            <li className="list-disc ml-[20px]">
              The next change was to add a “Add to Continue Playing” button.
              This puts the selected song at the end of the Continue Playing
              section based on the originally selected album/playlist.
            </li>
          </ul>
        }
        // src={AppleMusicEditMenuImg}
      />
      <HorizontalContent
        descriptionOne="Next came changes to the queue itself. This allows the queue to be set up to correspond with the new menu buttons and new queue features. The shuffle, repeat, and autoplay buttons have also been removed from the queue for easier readability."
        // src={AppleMusicQueueImg}
      />
      <HorizontalContent
        descriptionOne="New placement of shuffle, repeat, and autoplay buttons that is easier to reach and doesn’t cause clutter in the new queue area."
        // src={AppleMusicPlayerImg}
      />
      <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto">
        View Prototype
      </button>
    </div>
  );
};

export default AppleMusic;
