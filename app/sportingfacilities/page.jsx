// Import necessary components from @coreui/react
'use client'
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import SportingSection1 from "../components/sportingfacilitypage/SportingSection1";
import Image from "next/image";
import SportingSection2 from "../components/sportingfacilitypage/SportingSection2";

export default function SportingFacility() {
  return (
    <div>
      <SportingSection1 />
      <SportingSection2/>
    </div>
  );
}
