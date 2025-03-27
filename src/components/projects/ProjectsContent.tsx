import { ReactImage } from "../../assets/projectsImage/ReactImage";
import work1 from "../../assets/projectsImage/projectsImageWorks/Снимок экрана 2025-03-11 225921.png";
import work2 from "../../assets/projectsImage/projectsImageWorks/Funiro.png";
import work3 from "../../assets/projectsImage/projectsImageWorks/Comp.png";
import zoo from "../../assets/projectsImage/projectsImageWorks/zoo.webp";
import auto from "../../assets/projectsImage/projectsImageWorks/autoLiz.webp";
import { NavLink } from "react-router";
import { HtmlImage } from "../../assets/projectsImage/HtmlImage";

interface IProjectsContentProps {
  activeContent: number[];
}

const works = [
  {
    id: 1,
    title: "Projects 1",
    name: "// _portfolio",
    link: "https://github.com/nvcool/portfolio",
    image: work1,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description: "My portfolio site",
    button: "view-project",
    category: 11,
  },
  {
    id: 2,
    title: "Projects 2",
    name: "// _funiro",
    link: "https://github.com/nvcool/magazin-udachanadachy",
    image: work2,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description: "E-commerce App",
    button: "view-project",
    category: 11,
  },
  {
    id: 3,
    title: "Projects 3",
    name: "// _todo",
    link: "https://github.com/nvcool/todo",
    image: work3,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description:
      "Todo list, have dark theme and filtered todo ( all, complete, incomplete), also deleted todo and edited todo.",
    button: "view-project",
    category: 11,
  },
  {
    id: 4,
    title: "Projects 4",
    name: "// _zoo-ts",
    link: "https://github.com/nvcool/zoo-ts",
    image: zoo,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description: "Zoo in React (tsx)",
    button: "view-project",
    category: 11,
  },
  {
    id: 5,
    title: "Projects 5",
    name: "// _zoo-js",
    link: "https://github.com/nvcool/zoopark",
    image: zoo,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description: "Zoo in React (jsx)",
    button: "view-project",
    category: 11,
  },
  {
    id: 6,
    title: "Projects 5",
    name: "// _auto-lizing",
    link: "https://github.com/nvcool/AutoLiz",
    image: auto,
    stack: (
      <div className="rounded-sm bg-[#E99287] p-1 text-black">
        <HtmlImage />
      </div>
    ),
    description: "Zoo in React (jsx)",
    button: "view-project",
    category: 22,
  },
];

export const ProjectsContent = ({ activeContent }: IProjectsContentProps) => {
  return (
    <div className="mx-auto lg:mx-0">
      <ul className="grid h-full grid-cols-1 gap-5 p-10 lg:grid-cols-2 lg:p-14 xl:grid-cols-3">
        {works.map(
          (item) =>
            (activeContent.includes(item.category) ||
              activeContent.length === 0) && (
              <li key={item.id} className="h-full">
                <div className="">
                  <div className="mb-3.5">
                    <span className="font-bold text-[#5565E8]">
                      {item.title}{" "}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <div className="relative overflow-hidden rounded-[15px]">
                    <div className="">
                      <img
                        className="h-[145px] w-full object-cover"
                        src={item.image}
                        alt=""
                      />
                      <span className="absolute top-4 right-4">
                        {item.stack}
                      </span>
                    </div>
                    <div className="grid h-full gap-5 bg-[#011221] px-8 py-6">
                      <span className="max-h-6 overflow-hidden">
                        {item.description}
                      </span>
                      <NavLink
                        to={item.link}
                        className="w-fit cursor-pointer rounded-[8px] bg-[#1C2B3A] px-3.5 py-2.5 text-white transition-colors ease-in hover:bg-[#2c3844]"
                      >
                        {item.button}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};
