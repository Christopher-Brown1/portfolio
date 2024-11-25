import React, { useEffect } from "react"
import { VerticalContent } from "../components/VerticalContent"
import { HorizontalContent } from "../components/HorizontalContent"
import GoodReadsIntro from "../assets/goodreads/goodreads_intro.png"
import CompetitorAnalysis from "../assets/goodreads/competitor_analysis.png"
import CurrentSite from "../assets/goodreads/Heuristic.png"
import UserExperience from "../assets/goodreads/user_experience.png"
import StyleCardA from "../assets/goodreads/style_guide_a.png"
import StyleCardB from "../assets/goodreads/style_guide_b.png"
import StyleCardC from "../assets/goodreads/style_guide_c.png"
import StyleCard from "../assets/goodreads/style_card.png"
import WireframeA from "../assets/goodreads/wireframe_a.png"
import WireframeB from "../assets/goodreads/wireframe_b.png"
import EfficiencyData from "../assets/goodreads/efficiency_data.png"
import GoodReadsVid from "../assets/goodreads/prototype_demo.mp4"

export const Goodreads = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <VerticalContent
        descriptionOne="With a group of fellow bootcamp students, we identified a website, Goodreads, that we would love to see improved upon. With an impressive app, but a poor website, we identified what was wrong with the current site, and then created a responsive website to help bring users back."
        src={GoodReadsIntro}
        srcStyles={["max-w-[500px]"]}
      />
      <VerticalContent
        title="Why Goodreads?"
        descriptionOne="Goodreads is a cataloging service where its 125 million registered users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists."
        descriptionTwo="Most of the people we talked to, that has previously used the site, said they had given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, ”it is no longer fulfilling the promise it once had of “bringing book lovers together and making new communities.”"
      />
      <VerticalContent
        title="Competitor Analysis"
        descriptionOne="Next, we identified some competitors to analyze some of their strengths, weaknesses, and opportunities for our redesigned website."
        src={CompetitorAnalysis}
      />
      <VerticalContent
        title="Current Site Issues"
        descriptionOne={
          <div>
            <p className="mb-[5px]">
              Based on our research, we identified these major issues with the
              current site:
            </p>
            <ul>
              <li className="list-disc ml-[30px] mb-[6px]">
                Navigation bar is missing labels.
              </li>
              <li className="list-disc ml-[30px] mb-[6px]">
                Overwhelming advertisements.
              </li>
              <li className="list-disc ml-[30px] mb-[6px]">
                Not enough account personalization.
              </li>
              <li className="list-disc ml-[30px] mb-[6px]">
                Too much text covering the page - possibly change the individual
                book information.
              </li>
            </ul>
          </div>
        }
        src={CurrentSite}
      />
      <VerticalContent
        title="Problem Statement"
        descriptionOne="Readers have a desire to use the features that Goodreads provides, but are unable to navigate past a busy user interface, outdated designs, and inconvenient usability."
        descriptionTwo="In order to increase the number of new users, invite previous users to return, and maintain current users, the website needs a redesign where features are easily identified and accessible."
      />
      <VerticalContent
        title="User Experience"
        descriptionOne="Using a persona we created, we created a scenario that a typical user might experience and how our redesign would help improve their experience."
        src={UserExperience}
      />
      <VerticalContent
        title="Style Guide"
        src={[StyleCardA, StyleCardB, StyleCardC]}
      />
      <VerticalContent
        descriptionOne="As a team, we wanted to continue with the neutral theme of the current website/app, while additional colors (taken from Goodreads created graphics) add interest and excitement to the page."
        src={StyleCard}
      />
      <VerticalContent
        title="Wire Framing"
        descriptionOne="With our style guide done, we started to create hand drawn wireframes of the pages/user flows we were updating. Ideas from various wireframes were combined in Figma to create simple wireframes of various fidelities. "
        src={[WireframeA, WireframeB]}
      />
      <HorizontalContent
        title="Making it better"
        descriptionOne="Our updated flows in 3 key tasks saved two clicks per task for each user."
        reverse={true}
        customImage={
          <div className="flex flex-col justify-center mx-auto">
            <img
              alt="goodreads screenshot"
              className="max-h-[400px] max-w-[200px]"
              src={EfficiencyData}
            />
          </div>
        }
      />
      <VerticalContent
        title="Front End Development"
        descriptionOne="After finishing the design process, I was able to create a prototype website using HTML, CSS, and Javascript. This process helped me better understand the handoff process from designer to developer, as well as improving my design process for better development."
        customImage={
          <div className="px-[24px] sm:px-0">
            <video
              className="mx-[auto]"
              width="400"
              height="250"
              muted={true}
              playsInline={true}
              controls={true}
              src={GoodReadsVid}
            >
              {/* Fallback image below */}
              <img
                alt="survivor UI screenshot"
                className="object-none mx-auto"
                src={GoodReadsIntro}
              />
            </video>
            <p className="text-[19px] font-montserrat font-[400] text-[#000] text-center mt-[16px]">
              Demo video
            </p>
          </div>
        }
      />
    </div>
  )
}

export default Goodreads
