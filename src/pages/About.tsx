import { AboutContent } from "../components/about/AboutContent";
import { AboutNavigate } from "../components/about/AboutNavigate";
import { AboutPreview } from "../components/about/AboutPreview";

export const About = () => {
  return (
    <div className="grid h-full grid-cols-[311px_1fr]">
      <AboutNavigate />
      <div className="grid gap-20 lg:flex lg:gap-0">
        <AboutContent />
        <AboutPreview />
      </div>
    </div>
  );
};
