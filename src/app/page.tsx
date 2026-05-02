import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Logos from "@/components/Logos";
import Threats from "@/components/Threats/Threats";
import Container from "@/components/Container";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Threats />
      <Container>
        <Benefits />
        <Stats />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;