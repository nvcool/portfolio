import { useState } from "react";
import { ProjectsBar } from "../components/projects/ProjectsBar";
import { ProjectsContent } from "../components/projects/ProjectsContent";
import { ProjectsHistoryBar } from "../components/projects/ProjectsHistoryBar";
import { AngularImage } from "../assets/projectsImage/AngularImage";
import { CssImage } from "../assets/projectsImage/CssImage";
import { FlutterImage } from "../assets/projectsImage/FlutterImage";
import { HtmlImage } from "../assets/projectsImage/HtmlImage";
import { ReactImage } from "../assets/projectsImage/ReactImage";
import { VueImage } from "../assets/projectsImage/VueImage";
import { IDropdownContent } from "../types/IDropdownContent";
import { CloseButtonHistory } from "../assets/aboutImage/CloseButtonHistory";

const projects: IDropdownContent[] = [
  {
    id: 11,
    checkbox: true,
    label: "React",
    image: <ReactImage />,
  },
  {
    id: 22,
    checkbox: true,
    label: "HTML",
    image: <HtmlImage />,
  },
  {
    id: 33,
    checkbox: true,
    label: "CSS",
    image: <CssImage />,
  },
  {
    id: 44,
    checkbox: true,
    label: "Angular",
    image: <AngularImage />,
  },
  {
    id: 55,
    checkbox: true,
    label: "Vue",
    image: <VueImage />,
  },
  {
    id: 66,
    checkbox: true,
    label: "Flutter",
    image: <FlutterImage />,
  },
];

export const Projects = () => {
  const [activeContent, setActiveContent] = useState<number[]>([]);
  // const [isChekced, setIsChekced] = useState<boolean>(false);
  // //todo добавить handle на нажатие чекбокса
  // const handleChekced = () => {
  //   setIsChekced((prev) => !prev);
  // };

  const handleContentChange = (id: number) => {
    if (activeContent.includes(id)) {
      setActiveContent((prev) => prev.filter((item) => item !== id));
    } else {
      setActiveContent((prev) => [...prev, id]);
    }
  };
  return (
    <section className="grid h-fit grid-cols-1 lg:h-full lg:grid-cols-[311px_1fr]">
      <div className="flex py-5 pl-3 text-white lg:hidden">_contact-me</div>
      <div className="h-full">
        <ProjectsBar
          projects={projects}
          activeContent={activeContent}
          onContentChange={handleContentChange}
        />
      </div>
      <div className="grid grid-rows-[45px_1fr]">
        {activeContent.length !== 0 ? (
          <ProjectsHistoryBar
            label={projects
              .filter((item) => activeContent.includes(item.id))
              .map((item) => item.label)
              .join("; ")}
          />
        ) : (
          <div className="">
            <div className="hidden grid-rows-[44px_1fr] border-b-[1px] border-[#1E2D3D] lg:grid">
              {" "}
              <div className="flex w-fit items-center border-r-[1px] border-[#1E2D3D]">
                <button className="cursor-pointer py-2.5 pr-10 pl-4">
                  all
                </button>
                <button className="cursor-pointer py-2.5 pr-4 transition-colors ease-in hover:text-white">
                  <CloseButtonHistory />
                </button>
              </div>
            </div>

            <div className="flex gap-3 px-10 py-5 lg:hidden">
              <span className="text-white">// projects</span>
              <span> / all</span>
            </div>
          </div>
        )}

        <ProjectsContent activeContent={activeContent} />
      </div>
    </section>
  );
};
