import { AboutSection } from "@/components/home/sections/About";
import { ContactSection } from "@/components/home/sections/Contact";
import { ExperienceSection } from "@/components/home/sections/Experience";
import { HeroSection } from "@/components/home/sections/Hero";
import { ProjectsSection } from "@/components/home/sections/Projects";
import { TapeSection } from "@/components/home/sections/Tape";
import { TestimonialsSection } from "@/components/home/sections/Testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
