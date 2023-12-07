import Image from "next/image";
import { Crimson_Text, Playfair_Display } from "next/font/google";
import styles from "./css_modules/styles.modules.css";
import Section1 from "./components/homepage_components/Section1";
import Section2 from "./components/homepage_components/Section2";

const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#F9F9F9]">
     <Section1/>
     <Section2/>
    </main>
  );
}
