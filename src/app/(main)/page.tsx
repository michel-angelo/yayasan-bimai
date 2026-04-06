import KenapaBIMAI from "../../components/home/KenapaBIMAI";
import AngkaDampak from "../../components/home/AngkaDampak";
import ProgramUnggulan from "../../components/home/ProgramUnggulan";
import CTADonasi from "../../components/home/CTADonasi";
import Testimoni from "../../components/home/Testimoni";
import Hero from "../../components/home/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AngkaDampak />
      <ProgramUnggulan />
      <KenapaBIMAI />
      <Testimoni />
      <CTADonasi />
    </div>
  );
}
