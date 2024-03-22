import React, { useEffect } from "react"
import ImageGallery from "react-image-gallery"

import { HorizontalContent } from "../components/HorizontalContent"
import { VerticalContent } from "../components/VerticalContent"
import Survivor1 from "../assets/survivor/survivor_1.png"
import Journey1 from "../assets/survivor/journey1.png"
import Journey2 from "../assets/survivor/journey2.png"
import Journey3 from "../assets/survivor/journey3.png"
import Journey4 from "../assets/survivor/journey4.png"
import Journey5 from "../assets/survivor/journey5.png"
import Journey6 from "../assets/survivor/journey6.png"
import Journey7 from "../assets/survivor/journey7.png"
import Survivor3 from "../assets/survivor/survivor_3.png"
import Survivor4 from "../assets/survivor/survivor_4.png"
import Survivor5 from "../assets/survivor/survivor_5.png"
import Survivor6 from "../assets/survivor/survivor_6.png"
import Survivor7 from "../assets/survivor/survivor_7.png"
import Survivor8 from "../assets/survivor/survivor_8.png"
import Survivor9 from "../assets/survivor/survivor_9.png"
import Survivor10 from "../assets/survivor/survivor_10.png"
import Survivor11 from "../assets/survivor/survivor_11.png"
import Survivor12 from "../assets/survivor/survivor_12.png"
import Survivor13 from "../assets/survivor/survivor_13.png"
import Survivor14 from "../assets/survivor/survivor_14.png"
import Survivor15 from "../assets/survivor/survivor_15.png"
import Survivor16 from "../assets/survivor/survivor_16.png"
import Survivor17 from "../assets/survivor/survivor_17.png"
import VSIcon from "../assets/survivor/vs.png"
import ArrowIcon from "../assets/survivor/arrow.png"
import LeftArrow from "../assets/survivor/arrow_left.svg"
import RightArrow from "../assets/survivor/arrow_right.svg"

const images = [
  { original: Journey1 },
  { original: Journey2 },
  { original: Journey3 },
  { original: Journey4 },
  { original: Journey5 },
  { original: Journey6 },
  { original: Journey7 },
]

export const Survivor = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <HorizontalContent
        title={null}
        descriptionOne="With 45 seasons worth of challenges, strategy, and backstabbing, Survivor has become a staple in homes across the world. In 2021, Survivor debuted a new era with faster gameplay and more twists and advantages thrown to the players."
        descriptionTwo="I created this Survivor companion app to help track a player’s tribe history, advantages, and to catch those hidden scenes after the episode airs. Its the perfect companion to any castaway’s viewing experience."
        customImage={
          <img
            alt="survivor UI screenshot"
            className="h-[350px] w-[377px] mb-[32px]"
            src={Survivor1}
          />
        }
      />
      <VerticalContent
        title="Why Create a Companion App"
        descriptionOne="With the new era of Survivor bringing additional advantages, disadvantages, tribe swaps, hidden idols, and even idols displayed out in the open, I was constantly asking myself: “Who has what?” I read online over and over again about viewers getting confused, discouraged, and giving up on the show with these new twists. In an effort to make the show more viewer friendly, a companion app would allow viewers to better follow along with the castaways’ strategizing."
        descriptionTwo={null}
        // src={Survivor2}
        customImage={
          <div className="mx-[20px] mb-[65px] h-[450px] max-w-[393px]">
            <ImageGallery
              infinite={false}
              items={images}
              renderLeftNav={(onClick, disabled) => (
                <LeftNav onClick={onClick} disabled={disabled} />
              )}
              renderRightNav={(onClick, disabled) => (
                <RightNav onClick={onClick} disabled={disabled} />
              )}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        }
        textWidth="max-w-[750px]"
      />
      <HorizontalContent
        title="Idol and Advantage Tracker"
        descriptionOne="The first section I needed to include in my app design was for tracking advantages and idols. During this process, I was able to create some custom icons to symbolize the current season’s advantages."
        descriptionTwo="Future Plans: Allow users to click on an advantage to read the fine print including rules, when the advantage can be used, restrictions, etc."
        src={Survivor3}
      />
      <HorizontalContent
        title="Player Info and Tribe History"
        descriptionOne="The game moves fast in the new era of Survivor. Pre-merge comes and goes in the blink of an eye and before you know it, castaways are thrown onto the same beach with few, if any, indicators of previous tribe lines. Survivor season 45 threw another loop by reintroducing tribe swaps during the first half of the game."
        descriptionTwo="With all of the changes, the next feature that I created was tribe indicators next to each castaway’s name in order to show their tribe history. This colors correspond with the tribes’ colors from original tribes, swapped tribes, merged tribe, and a dark icon to show a player that has been voted out and didn’t participate in a tribe change."
        descriptionThree="The CBS website also includes brief biographies about the cast, a feature that carries over well to the companion app. Simply click on the profile picture of the cast mate you would like to know more about to view a quick biography."
        reverse={true}
        src={[Survivor4, Survivor5]}
      />
      <VerticalContent
        title="Merchandise"
        descriptionOne="The companion app also features various Survivor merchandise and memorabilia.  From current tribe Buffs to some of host Jeff Probst’s favorite Survivor items. This allows the user to become even more engaged in the fan experience."
        descriptionTwo={null}
        src={[Survivor6, Survivor7]}
      />
      <HorizontalContent
        title="To Homepage or Not to Homepage"
        descriptionOne="The original user flow included a homepage that acted as a springboard to other pages on the app. During early testing periods, I identified the homepage as being unnecessary and adding additional steps to the companion app process. It was then decided to make the current season page as the new landing page, allowing users to quickly jump into the relevant information for the current episode."
        reverse={true}
        src={Survivor8}
      />
      <VerticalContent
        title="Design Decisions"
        descriptionOne="Each season of Survivor features a new logo, based on the theme for that season. Because of this, Survivor’s colors are always changing and adapting, season to season."
        descriptionTwo="Because of this, I used a generic Survivor logo to create a base color palette. These colors are used throughout to bring an island feel to the modern style that survivor has gravitated towards. With the current season’s page being the landing page for the app, I decided that the Survivor logo on the app will reflect the current season’s logo."
        src={[Survivor9, Survivor10]}
      />
      <VerticalContent
        title="Iterations"
        descriptionOne="Various iterations were made based on user feedback to improve how the app looked and was used. These iterations focused on readability, industry standards, and accessibility."
        src={[Survivor11, ArrowIcon, Survivor12]}
        srcStyles={{ index: 1, override: " rotate-90 sm:rotate-0" }}
        textWidth="max-w-[600px]"
      />
      <VerticalContent
        descriptionOne="Various iterations were made based on user feedback to improve how the app looked and was used. These iterations focused on readability, industry standards, and accessibility."
        src={[Survivor13, ArrowIcon, Survivor14]}
        srcStyles={{ index: 1, override: " rotate-90 sm:rotate-0" }}
        textWidth="max-w-[600px]"
      />
      <VerticalContent
        title="A/B Testing"
        descriptionOne="During the iteration process, a user made a comment about how the section containers looked throughout the app. I then conducted an A/B test in order to identify which style was preferred by users. The results indicated that users liked how the colorful containers played into the colorful theme of survivor, but they liked how clean the dark version looked. While this helped me decide on the color version, it prompted me to add a colorful, but clean, container update to my future iterations list."
        src={[Survivor15, VSIcon, Survivor16]}
      />
      <hr className="border-t-[3px] border-t-[#343F56] w-full max-w-[250px] mx-auto mb-[44px]" />
      <HorizontalContent
        descriptionOne="In response to the A/B test feedback, the colorful containers became color coordinated tabs with a clean and updated look."
        reverse={true}
        src={Survivor17}
      />
      <div className="mx-auto mb-[80px]">
        <a
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto mr-[64px]"
          href="https://www.figma.com/proto/AP4lgiQhit1mrTvFz6jujb/Survivor-Comp-App?page-id=2%3A4&type=design&node-id=3-536&viewport=55%2C-86%2C0.24&t=rDbm8FNVCA4EWKYy-1&scaling=scale-down&starting-point-node-id=3%3A536&mode=design"
          target="_blank"
          rel="noreferrer"
        >
          View Prototype Version 1
        </a>
        <a
          className="text-[#387C6D] text-[19px] font-montserrat shadow-button border border-2 border-[#387C6D] rounded-[13px] px-[32px] py-[16px] mx-auto"
          href="https://www.figma.com/proto/AP4lgiQhit1mrTvFz6jujb/Survivor-Comp-App?page-id=252%3A2934&type=design&node-id=252-2935&viewport=481%2C269%2C0.12&t=Z7YVhUweRVsPX0LL-1&scaling=scale-down&starting-point-node-id=25"
          target="_blank"
          rel="noreferrer"
        >
          View Prototype Version 2
        </a>
      </div>
      <VerticalContent
        bottom={false}
        title="Next Steps"
        descriptionOne={
          <React.Fragment>
            <p>
              In addition to the container update, future iterations could
              include:
            </p>
            <ul className="list-decimal">
              <li className="list-item ml-[40px]">
                Connection to Bracketology, the official Survivor fantasy
                league.
              </li>
              <li className="list-item ml-[40px]">
                Social features to discuss the episode and CBS provided clips.
              </li>
              <li className="list-item ml-[40px]">
                Integrated casting profile management.
              </li>
            </ul>
          </React.Fragment>
        }
      />
    </div>
  )
}

export default Survivor

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav top-[calc(100%+57px)]"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <img alt="back arrow" src={LeftArrow} />
    </button>
  )
})
const RightNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav top-[calc(100%+57px)]"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <img alt="next arrow" src={RightArrow} fill="white" />
    </button>
  )
})
