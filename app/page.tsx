import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import RecentWork from "@/components/sections/RecentWork";
import WorkSection from "@/components/sections/WorkSection";
import HeroSection from "@components/sections/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <div id="parent-container" className="relative w-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <RecentWork />
      </div>
      <ContactSection />
    </div>
  );
}
