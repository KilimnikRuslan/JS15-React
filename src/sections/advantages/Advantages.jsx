import { AdvantageCard } from "../../components/advantageCard";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";




  
  export const Advantages = () => {
    return (
      <section style={{ display: "flex" }}>
        <AdvantageCard color="#38c4c1" text="Learning" imgSrc={reactLogo} /> 
        <AdvantageCard color="#feca02" text="Philosophy" imgSrc={viteLogo} />
        <AdvantageCard color="#fe7ec9" text="Practice" imgSrc={reactLogo} />
        <AdvantageCard color="#488df4" text="Games" imgSrc={viteLogo} />
      </section>
    );
  };