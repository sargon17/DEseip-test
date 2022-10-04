import Jumbotron from "./sections/Jumbotron";
import Description from "./sections/Description";
import FeeCalculator from "./sections/FeeCalculator";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Description />
      <FeeCalculator />
      <Services />
    </>
  );
}
