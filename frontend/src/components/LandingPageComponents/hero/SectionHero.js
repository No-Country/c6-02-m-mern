import React from "react";
import { Hero } from "./Hero";
import { IconRow } from "./IconRow";
import "./SectionHero.css";
import "./iconRowDown.css";
import AddCardPage from "../../AddCardPage/AddCardPage";

export const SectionHero = () => {
  return (
    <>
      <div className="sectionHero">
        <div className="container ">
          <Hero />
        </div>
        <IconRow />
      </div>

      {/* <div>
    <AddCardPage/>
   </div> */}
    </>
  );
};
