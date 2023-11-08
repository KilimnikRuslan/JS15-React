import { Header } from "./sections/header"; 
import { Hero } from "./sections/hero";
import { Advantages } from "./sections/advantages";
import { Impression } from "./sections/Impression";
import { Achievement } from "./sections/achievement";
import { Services } from "./sections/services";


export const Home = () => {
    return (
      <>
        <Header />
        <Hero/>
        <Advantages/>
        <Impression/>
        <Achievement/>
        <Services/>
      </>
    );
  };