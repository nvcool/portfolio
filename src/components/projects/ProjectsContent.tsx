import { ReactImage } from "../../assets/projectsImage/ReactImage";
import work1 from "../../assets/projectsImage/projectsImageWorks/Снимок экрана 2025-03-11 225921.png";
import work2 from "../../assets/projectsImage/projectsImageWorks/Comp.png";
import { VueImage } from "../../assets/projectsImage/VueImage";
import { FlutterImage } from "../../assets/projectsImage/FlutterImage";
import { AngularImage } from "../../assets/projectsImage/AngularImage";

interface IProjectsContentProps {
  activeContent: number[];
}

const works = [
  {
    id: 1,
    title: "Projects 1",
    name: "// _portfolio",
    image: work1,
    stack: (
      <div className="rounded-sm bg-[#86E1F9] p-1 text-black">
        <ReactImage />
      </div>
    ),
    description: "My life my rules",
    button: "view-project",
    category: 11,
  },
  {
    id: 2,
    title: "Projects 2",
    name: "// _portfolio",
    image: work2,
    stack: (
      <div className="rounded-sm bg-[#A0BDE1] p-1 text-black">
        <FlutterImage />
      </div>
    ),
    description: "My life my rules",
    button: "view-project",
    category: 66,
  },
  {
    id: 3,
    title: "Projects 3",
    name: "// _portfolio",
    image: work1,
    stack: (
      <div className="rounded-sm bg-[#81D4AF] p-1 text-black">
        <VueImage />
      </div>
    ),
    description: "My life my rules",
    button: "view-project",
    category: 55,
  },
  {
    id: 4,
    title: "Projects 4",
    name: "// _portfolio",
    image: work1,
    stack: (
      <div className="rounded-sm bg-[#F2A9B9] p-1 text-black">
        <AngularImage />
      </div>
    ),
    description: "My life my rules",
    button: "view-project",
    category: 44,
  },
];

export const ProjectsContent = ({ activeContent }: IProjectsContentProps) => {
  return (
    <div className="mx-auto lg:mx-0">
      <ul className="grid grid-cols-1 gap-5 p-10 lg:grid-cols-2 lg:gap-2.5 lg:p-14 xl:grid-cols-3">
        {works.map(
          (item) =>
            (activeContent.includes(item.category) ||
              activeContent.length === 0) && (
              <li key={item.id}>
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
                    <div className="grid gap-5 bg-[#011221] px-8 py-6">
                      <span>{item.description}</span>
                      <button className="w-fit cursor-pointer rounded-[8px] bg-[#1C2B3A] px-3.5 py-2.5 text-white transition-colors ease-in hover:bg-[#2c3844]">
                        {item.button}
                      </button>
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
