import Image from "next/image";
import { Crimson_Text, Playfair_Display } from "next/font/google";
import Section1 from "./components/homepage_components/Section1";
import Section2 from "./components/homepage_components/Section2";
import Section3 from "./components/homepage_components/Section3";
import Section4 from "./components/homepage_components/Section4";
import Section5 from "./components/homepage_components/Section5";
import Section6 from "./components/homepage_components/Section6";
import Section7 from "./components/homepage_components/Section7";

const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });
const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#F9F9F9]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      
    
    </main>
  );
}
