import React, { useEffect } from "react";
import { VerticalContent } from "../components/VerticalContent";
// import { HorizontalContent } from "../components/HorizontalContent";

export const Goodreads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      <VerticalContent
        descriptionOne="With a group of fellow bootcamp students, we identified a website that we would love to see improved upon. My group chose the beloved Goodreads website. With an impressive app, but a poor website, we conducted research and tests to identify what was wrong with the current site, and then created a functioning responsive web design based on that user input."
        src="1"
      />
      <VerticalContent
        title="Why Goodreads?"
        descriptionOne='Goodreads is a cataloging service where users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists. Goodreads has been in business since 2007, with a mission to "help people find and share books they love."'
        descriptionTwo='Goodreads has over 125 million registered users, but everyone we talked to that has previously used the site says they have given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, "it is no longer fulfilling the promise it once had of “bringing book lovers together and making new communities."'
      />
      <VerticalContent
        title="Current Site Issues"
        descriptionOne='Goodreads is a cataloging service where users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists. Goodreads has been in business since 2007, with a mission to "help people find and share books they love."'
        descriptionTwo='Goodreads has over 125 million registered users, but everyone we talked to that has previously used the site says they have given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, ”it is no longer fulfilling the promise it once had of "bringing book lovers together and making new communities."'
        src="1"
      />
      <VerticalContent
        title="Competitor Analysis"
        descriptionOne='Goodreads is a cataloging service where users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists. Goodreads has been in business since 2007, with a mission to "help people find and share books they love."'
        descriptionTwo='Goodreads has over 125 million registered users, but everyone we talked to that has previously used the site says they have given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, ”it is no longer fulfilling the promise it once had of "bringing book lovers together and making new communities."'
        src="1"
      />
      <VerticalContent
        title="Survey"
        descriptionOne='Goodreads is a cataloging service where users can search its database of books, annotations, quotes, and reviews. Users can sign up and register books to create personalized library catalogs and reading lists. Goodreads has been in business since 2007, with a mission to "help people find and share books they love."'
        descriptionTwo='Goodreads has over 125 million registered users, but everyone we talked to that has previously used the site says they have given up on it because it lacks a lot of basic usability. Maris Kreizman, an author who used to use Goodreads to promote her books said, ”it is no longer fulfilling the promise it once had of "bringing book lovers together and making new communities."'
      />
    </div>
  );
};

export default Goodreads;
