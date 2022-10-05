import Jumbotron from "./sections/Jumbotron";
import Description from "./sections/Description";
import FeeCalculator from "./sections/FeeCalculator";
import Services from "./sections/Services";

import HeaderFooter from "../template/HeaderFooter";

export default function Home() {
  return (
    <>
      <HeaderFooter>
        <Jumbotron />
        <Description />
        <FeeCalculator />
        <Services />
      </HeaderFooter>
    </>
  );
}
