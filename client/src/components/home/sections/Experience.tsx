import { Timeline } from "../Timeline";
import { experiences } from "@/static/home/3-experiences";
export const ExperienceSection = () => {
  return (
    <section className="mb-6 pb-4 pt-20">
      <div className="container">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};
