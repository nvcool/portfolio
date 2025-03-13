import { ReactImage } from "../../assets/projectsImage/ReactImage";
import work1 from "../../assets/projectsImage/projectsImageWorks/Снимок экрана 2025-03-11 225921.png";
import work2 from "../../assets/projectsImage/projectsImageWorks/Comp.png";
import { VueImage } from "../../assets/projectsImage/VueImage";
import { FlutterImage } from "../../assets/projectsImage/FlutterImage";

interface IProjectsContentProps {
  activeContent: number[];
}

const works = [
  {
    id: 1,
    title: "Projects 1",
    name: "// _portfolio",
    image: work1,
    stack: <ReactImage />,
    description: "My life my rules",
    button: "view-project",
    category: 11,
  },
  {
    id: 2,
    title: "Projects 2",
    name: "// _portfolio",
    image: work2,
    stack: <FlutterImage />,
    description: "My life my rules",
    button: "view-project",
    category: 55,
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
    category: 66,
  },
  {
    id: 4,
    title: "Projects 4",
    name: "// _portfolio",
    image: work1,
    stack: <ReactImage />,
    description: "My life my rules",
    button: "view-project",
    category: 11,
  },
];

export const ProjectsContent = ({ activeContent }: IProjectsContentProps) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-2.5 px-20 py-20">
        {works.map(
          (item) =>
            (activeContent.includes(item.category) ||
              activeContent.length === 0) && (
              <li key={item.id}>
                <div className="">
                  <div className="">
                    <span className="font-bold text-[#5565E8]">
                      {item.title}{" "}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <div className="relative max-w-[370px] overflow-hidden rounded-[15px]">
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
                      <button className="w-fit cursor-pointer rounded-[8px] bg-[#1C2B3A] px-3.5 py-2.5 text-white">
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
