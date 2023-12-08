import React, { useEffect } from "react";
import { HorizontalContent } from "../components/HorizontalContent";
import { VerticalContent } from "../components/VerticalContent";
import SurvivorFrameImg from "../assets/survivor/ui_frame.png";
import SurvivorAdvantageTrackerImg from "../assets/survivor/survivor_advantage_tracker.png";
import SurvivorPlayerTribeInfoImg from "../assets/survivor/player_tribe_info.png";
import SurvivorHomepageFlowImg from "../assets/survivor/homepage_flowchart.png";

export const Survivor = () => {
  useEffect(() => {
    document.getElementById("header").scrollIntoView();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[992px] mx-auto">
      <HorizontalContent
        title={null}
        descriptionOne="With 45 seasons worth of challenges, strategy, and backstabbing, Survivor has become a staple in homes across the world. In 2021, Survivor debuted a new era with faster gameplay and more twists and advantages thrown to the players."
        descriptionTwo="I created this Survivor companion app to help track a player’s tribe history, advantages, and to catch those hidden scenes after the episode airs. Its the perfect companion to any castaway’s viewing experience."
        src={SurvivorFrameImg}
      />
      <VerticalContent
        title="Why Create a Companion App"
        descriptionOne="With the new era of Survivor bringing additional advantages, disadvantages, tribe swaps, hidden idols, and even idols displayed out in the open, I was constantly asking myself: “Who has what?” I read online over and over again about viewers getting confused, discouraged, and giving up on the show with these new twists. In an effort to make the show more viewer friendly, a companion app would allow viewers to better follow along with the castaways’ strategizing."
        descriptionTwo={null}
        src="1"
      />
      <HorizontalContent
        title="Idol and Advantage Tracker"
        descriptionOne="The first section I needed to include in my app design was for tracking advantages and idols. During this process, I was able to create some custom icons to symbolize the current season’s advantages."
        descriptionTwo="Future Plans: Allow users to click on an advantage to read the fine print including rules, when the advantage can be used, restrictions, etc."
        src={SurvivorAdvantageTrackerImg}
      />
      <HorizontalContent
        title="Player Info and Tribe History"
        descriptionOne="The game moves fast in the new era of Survivor. Pre-merge comes and goes in the blink of an eye and before you know it, castaways are thrown onto the same beach with few, if any, indicators of previous tribe lines. Survivor season 45 threw another loop by reintroducing tribe swaps during the first half of the game."
        descriptionTwo="With all of the changes, the next feature that I created was tribe indicators next to each castaway’s name in order to show their tribe history. This colors correspond with the tribes’ colors from original tribes, swapped tribes, merged tribe, and a dark icon to show a player that has been voted out and didn’t participate in a tribe change."
        descriptionThree="The CBS website also includes brief biographies about the cast, a feature that carries over well to the companion app. Simply click on the profile picture of the cast mate you would like to know more about to view a quick biography."
        reverse={true}
        src={SurvivorPlayerTribeInfoImg}
      />
      <VerticalContent
        title="Merchandise"
        descriptionOne="The companion app also features various Survivor merchandise and memorabilia.  From current tribe Buffs to some of host Jeff Probst’s favorite Survivor items. This allows the user to become even more engaged in the fan experience."
        descriptionTwo={null}
        src="1"
      />
      <HorizontalContent
        title="To Homepage or Not to Homepage"
        descriptionOne="The original user flow included a homepage that acted as a springboard to other pages on the app. During early testing periods, I identified the homepage as being unnecessary and adding additional steps to the companion app process. It was then decided to make the current season page as the new landing page, allowing users to quickly jump into the relevant information for the current episode."
        reverse={true}
        src={SurvivorHomepageFlowImg}
      />
      <VerticalContent
        title="Design Decisions"
        descriptionOne="Each season of Survivor features a new logo, based on the theme for that season. Because of this, Survivor’s colors are always changing and adapting, season to season."
        descriptionTwo="Because of this, I used a generic Survivor logo to create a base color palette. These colors are used throughout to bring an island feel to the modern style that survivor has gravitated towards. With the current season’s page being the landing page for the app, I decided that the Survivor logo on the app will reflect the current season’s logo."
        src="1"
      />
      <VerticalContent
        title="Iterations"
        descriptionOne="Various iterations were made based on user feedback to improve how the app looked and was used. These iterations focused on readability, industry standards, and accessibility."
        src="1"
      />
      <VerticalContent
        descriptionOne="Various iterations were made based on user feedback to improve how the app looked and was used. These iterations focused on readability, industry standards, and accessibility."
        src="1"
      />
      <VerticalContent
        title="A/B Testing"
        descriptionOne="Here I can describe the testing that was done and what the results were"
        src="1"
      />
      <VerticalContent
        title="Next Steps"
        descriptionOne="Here is where I talk about potential next steps in the app."
      />
      <button className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto">
        View Prototype
      </button>
    </div>
  );
};

export default Survivor;
