import { useState } from "react";
import { AboutContent } from "../components/about/AboutContent";
import { AboutMobileContent } from "../components/about/AboutMobileContent";
import { AboutNavigate } from "../components/about/AboutNavigate";
import { AboutPreview } from "../components/about/AboutPreview";
import { AboutHistory } from "../components/about/AboutHistory";

export const About = () => {
  const [history, setHistory] = useState<{ id: number; label: string }[]>([
    {
      id: 1552183,
      label: "bio",
    },
  ]);
  const [content, setContent] = useState<number>(1552183);
  console.log(content);

  const handleHistoryDelete = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleContentChange = (id: number, label: string) => {
    setContent(id);

    if (history.find((item) => item.id === id) === undefined) {
      setHistory((prev) => [...prev, { label, id }]);
    }
  };

  return (
    <section className="grid h-full grid-cols-1 lg:h-full lg:grid-cols-[311px_1fr]">
      <div className="flex py-5 pl-3 text-white lg:hidden">_about-me</div>
      <AboutNavigate
        activeContent={[content]}
        onContentChange={handleContentChange}
      />
      <div className="hidden h-full grid-cols-2 flex-col gap-20 lg:flex lg:gap-0">
        <AboutHistory
          activeContent={[content]}
          onContentChange={handleContentChange}
          history={history}
          handleHistoryDelete={handleHistoryDelete}
        />
        <div className="grid h-full grid-cols-2">
          <AboutContent content={content} />
          <AboutPreview />
        </div>
      </div>
      <div className="mx-auto flex lg:hidden">
        <AboutMobileContent />
      </div>
    </section>
  );
};
