import React from "react";
import "./Carrousel.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Card from "../Cards/Card";

export const Carrousel = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <Card />
      </CCarouselItem>

      <CCarouselItem>
        <Card />
      </CCarouselItem>

      <CCarouselItem>
        <Card />
      </CCarouselItem>
    </CCarousel>
  );
};
