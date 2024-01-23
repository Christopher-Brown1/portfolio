import React, { useEffect } from "react"
import { VerticalContent } from "../components/VerticalContent"
import { HorizontalContent } from "../components/HorizontalContent"
import GoodReadsIntro from "../assets/goodreads/goodreads_intro.svg"
import SurveyResults from "../assets/goodreads/survey_results.png"
import CompetitorAnalysis from "../assets/goodreads/competitor_analysis.png"
import CurrentSite from "../assets/goodreads/Heuristic.png"
import UserExperience from "../assets/goodreads/user_experience.svg"
import StyleCardA from "../assets/goodreads/style_guide_a.png"
import StyleCardB from "../assets/goodreads/style_guide_b.png"
import StyleCardC from "../assets/goodreads/style_guide_c.png"
import WireframeA from "../assets/goodreads/wireframe_a.png"
import WireframeB from "../assets/goodreads/wireframe_b.png"
import EfficiencyData from "../assets/goodreads/efficiency_data.png"
// import GoodReadsDemo from "../assets/goodreads/goodreads_demo.png";
// import GoodReadsVid from "../assets/apple_music/goodreads_demo.mp4";

export const Goodreads = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <VerticalContent
        descriptionOne="With a group of fellow bootcamp students, we identified a website that we would love to see improved upon. My group chose the beloved Goodreads website. With an impressive app, but a poor website, we conducted research and tests to identify what was wrong with the current site, and then created a functioning responsive web design based on that user input."
        src={GoodReadsIntro}
      />
      <VerticalContent
        title="Why Goodreads?"
        descriptionOne='Goodreads is a cataloging service where users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists. Goodreads has been in business since 2007, with a mission to "help people find and share books they love."'
        descriptionTwo='Goodreads has over 125 million registered users, but everyone we talked to that has previously used the site says they have given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, "it is no longer fulfilling the promise it once had of “bringing book lovers together and making new communities."'
      />
      <VerticalContent
        title="Survey"
        descriptionOne="First, we found book lovers who have used, or would like to use the Goodreads software. During the survey we were able to identify the following takeaways:"
        src={SurveyResults}
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
      <VerticalContent title="Style Guide" />
      <VerticalContent
        descriptionOne="As a team, we wanted to continue with the neutral theme of the current website/app, while additional colors (taken from Goodreads created graphics) add interest and excitement to the page."
        descriptionTwo="We then started making decisions for button styles, typography, header/footer design, iconography, etc. These items were put together to create our redesign’s style guide."
        src={[StyleCardA, StyleCardB, StyleCardC]}
      />
      <VerticalContent
        title="Wire Framing"
        descriptionOne="With our style guide done, we started to create hand drawn wireframes of the pages/user flows we were updating. Ideas from various wireframes were combined in Figma to create simple wireframes of various fidelities."
        src={[WireframeA, WireframeB]}
      />
      <HorizontalContent
        title="Making it better"
        descriptionOne="Our updated flows in 3 key tasks saved two clicks per task for each user."
        reverse={true}
        src={EfficiencyData}
      />
      <VerticalContent
        title="Front End Development"
        descriptionOne="After finishing the design process, I was able to create a prototype website using HTML, CSS, and Javascript. This process helped me better understand the handoff process from designer to developer, as well as improving my design process for better development."
        customImage={
          <iframe
            title="demo"
            className="mx-auto w-full max-w-[393px]"
            height="245"
            src="https://www.youtube.com/embed/NKqwwyoHIoE?controls=0&autoplay=1&muted=1&loop=1"
          ></iframe>
          // <video width="250" height="500" autoplay controls="">
          //   <source src={GoodReadsVid} type="video/mp4" />
          //   {/* Fallback image below */}
          //   <img
          //     alt="survivor UI screenshot"
          //     className="object-none mx-auto"
          //     src={GoodReadsDemo}
          //   />
          // </video>
        }
      />
    </div>
  )
}

export default Goodreads
