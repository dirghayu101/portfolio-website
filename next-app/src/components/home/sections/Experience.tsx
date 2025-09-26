import { Timeline } from "@/components/home/Timeline";
import { Experience, EXPERIENCES } from "@/static/home/3-experiences";
export const ExperienceSection = () => {
  return (
    <section className="mb-6 pb-4 pt-20" id="experience">
      <div className="container">
        <Timeline {...(EXPERIENCES as Experience)} />
      </div>
    </section>
  );
};
