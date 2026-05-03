import Hero from "@/components/home/Hero";
import KenapaBIMAI from "@/components/home/KenapaBIMAI";
import ProgramUnggulan from "@/components/home/ProgramUnggulan";
import Testimoni from "@/components/home/Testimoni";
import CTADonasi from "@/components/home/CTADonasi";

export default function Home() {
  return (
    <main>
      <Hero />
      <KenapaBIMAI />
      <ProgramUnggulan />
      <Testimoni />
      <CTADonasi />
    </main>
  );
}
