import React from "react";
import { VerticalContent } from "../components/VerticalContent";
import { HorizontalContent } from "../components/HorizontalContent";

export const AppleMusic = () => {
  return (
    <div className="flex flex-col w-full max-w-[992px] mx-auto">
      <VerticalContent
        descriptionOne="In this case study, I view one of my most used apps, Apple Music, and highlight potential features that could make the music experience even better."
        src="1"
      />
      <VerticalContent
        title="Feature #1: Pin Favorite Music"
        descriptionOne="Your favorite artist has just released the album of the year. It is all you can listen to. Flash forward to next week when new music has been released again. You find other songs that you enjoy, but you still keep going back to that album. Eventually, all of your recently added music has pushed your beloved album off of the homepage. Instantly, listening takes a few more steps and a little more time. Introducing pinned music, where you can pin favorite albums, playlists, artists, or songs directly from your library for easy access whenever you want."
        src="1"
      />
      <HorizontalContent
        descriptionOne="When deciding where the pinned music should go, there were two standout options. The first option was to include a new “pinned” item at the top of the library categories. The second option was to put the pinned music below the library categories, and above the recently added section (shown here). I decided to go with the second option in order to decrease the amount of clicks needed to access them."
        src=""
      />
      <HorizontalContent
        descriptionOne="When pinning new music, I needed to find a way to differentiate between the different items that can be pinned. Using inspiration from some of the existing iconography from Apple, I created a new set of icons to represent playlists, songs, artists, albums, and genres."
        src=""
      />
      <HorizontalContent
        descriptionOne="In order to pin new music, I had to identify how a user would go about pinning new items. Using the already existing Apple Music song menu, I created a new option to “Pin ____” with the second part of the option changing depending on what type of item you are wanting to pin."
        src=""
      />
      <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto">
        View Prototype
      </button>
      <VerticalContent
        title="Feature #2: Music Queue Options"
        descriptionOne="While browsing music and listening to my favorite artists on Apple Music, I am constantly finding myself frustrated with adding music to the queue and not being able to get it exactly how I want it. Based on my online research, the debate about how to make the music queue work is widespread and a common issue with Apple Music."
      />
    </div>
  );
};

export default AppleMusic;
