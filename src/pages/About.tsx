import { AboutContent } from "../components/about/AboutContent";
import { AboutMobileContent } from "../components/about/AboutMobileContent";
import { AboutNavigate } from "../components/about/AboutNavigate";
import { AboutPreview } from "../components/about/AboutPreview";

export const About = () => {
  return (
    <div className="grid h-fit grid-cols-1 lg:h-full lg:grid-cols-[311px_1fr]">
      <AboutNavigate />
      <div className="hidden grid-cols-2 gap-20 lg:grid lg:gap-0">
        <AboutContent />
        <AboutPreview />
      </div>
      <div className="mx-auto flex lg:hidden">
        <AboutMobileContent />
      </div>
    </div>
  );
};
