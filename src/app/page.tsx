import Image from "next/image";

import HomeBanner from "./ui/HomeBanner";
import Companies from "./ui/Companies";
import PopularServices from "./ui/PopularServices";
import Everything from "./ui/Everything";
import Services from "./ui/Services";
import { FiverBuisness } from "./ui/FiverBuisness";
import JoinFiver from "./ui/JoinFiver";

export default function Home() {
  return (
    <div>
      
      <HomeBanner/>
      {/* <Companies/>
      <PopularServices/>
      <Everything/>
      <Services/>
      <FiverBuisness/>
      <JoinFiver/> */}
    </div>
  );
}
