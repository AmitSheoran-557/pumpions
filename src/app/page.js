import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import LookFamiliar from "@/components/LookFamiliar";
import MeetThePumpions from "@/components/MeetThePumpions";
import MembershipPerks from "@/components/MembershipPerks";
import OgPumpions from "@/components/OgPumpions";
import PumpionsFaq from "@/components/PumpionsFaq";
import Pumpmap from "@/components/Pumpmap";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetThePumpions />
      <LookFamiliar />
      <MembershipPerks />
      <Pumpmap />
      <OgPumpions />
      <PumpionsFaq />
      <Footer />
    </>
  );
}
