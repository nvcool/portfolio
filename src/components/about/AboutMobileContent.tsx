import { useState } from "react";
import nvcool from "../../assets/aboutImage/about-nvcool.jpg";
import { AboutDetailsIcon } from "../../assets/aboutImage/AboutDetailsIcon";

interface IAboutMobileContentProps {
  content: number;
  history: {
    id: number;
    label: string;
  }[];
  activeContent: number[];
  onContentChange: (id: number, label: string) => void;
}

export const AboutMobileContent = ({
  content,
  history,
  activeContent,
  onContentChange,
}: IAboutMobileContentProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const show = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <div className="py-10">
      <div className="mb-5 flex gap-3 px-5">
        <span className="text-white">// personal-info</span>
        {history.map((item) => (
          <div key={item.id} className="">
            <button
              onClick={() => onContentChange(item.id, item.label)}
              className="cursor-pointer transition-colors ease-in hover:text-white"
            >
              <span
                className={`${activeContent.includes(item.id) ? "active-link" : ""}`}
              >
                {" "}
                / {item.label}
              </span>
            </button>
          </div>
        ))}
      </div>
      {content === 1552183 && (
        <div className="mx-auto mb-10 w-full max-w-[500px] px-5">
          <p>
            About me
            <br />
            I`m Frontend-Developer
            <br />
            I have 2 years of еxperience in IT and Web Development
            <br />
            I develop in React (TypeScript / Tailwind CSS)
            <br />
            I help with the creation of a website and web interface
            <br />
            I take a high-quality approach to completing the work
            <br />
            Bringing the result to perfection
            <br />
            Familiar with many web development technologies
            <br />
            HTML, CSS/SCSS, JS/TS, Promise/Fetch/Async/Await, BEM, API, REST API
            ,
          </p>
        </div>
      )}
      {content === 9554 && (
        <div className="mx-auto mb-10 grid w-full max-w-[500px] gap-4 px-5">
          <p className="">
            The FrontEnd developer creates the part of the web page that is
            visible to the user, and his main task is to accurately convey in
            the layout what the designer has created, as well as to implement
            the user logic.
          </p>
          <p>
            The FrontEnd developer creates the part of the web page that is
            visible to the user, and his main task is to accurately convey in
            the layout what the designer has created, as well as to implement
            the user logic.
          </p>
        </div>
      )}
      {content === 574577 && (
        <div className="mx-auto mb-10 grid w-full max-w-[500px] gap-4 px-5">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eum officiis voluptatibus corrupti dolore, repudiandae corporis
            eaque id a autem doloribus laudantium quos. Veniam, vero ab? Illo
            deserunt nobis quae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium dolorem a pariatur dolore animi culpa cumque possimus
            eius officia at maxime nihil doloribus id, iure atque perferendis
            adipisci omnis vel.
          </p>
        </div>
      )}

      <div className="mb-5 flex gap-3 px-5">
        <span className="text-white">// Code snippet showcase:</span>
      </div>
      <div className="mb-10 flex items-center justify-between px-5">
        <div className="flex gap-3">
          <img className="h-10 w-10 rounded-full" src={nvcool} alt="" />
          <div className="grid">
            <span className="cursor-pointer text-[#5565E8] transition-colors ease-in hover:text-white">
              @nvcool
            </span>
            <span className="text-xs">2 months ago</span>
          </div>
        </div>
        <div className="transition-colors ease-in hover:text-white">
          <button
            onClick={show}
            className="flex cursor-pointer items-center gap-1"
          >
            <AboutDetailsIcon />
            <span>details</span>
          </button>
        </div>
      </div>
      <div className="mx-2 mb-5 rounded-[15px] border-[1px] border-[#1E2D3D] bg-[#011221] min-[374px]:mx-5">
        <pre className="p-2">
          <p className="">
            <span className="text-[#E99287]">export function </span>
            <span className="text-[#43D9AD]">{"parseModelTuple("}</span>
          </p>
          <p className="">
            <span className="pl-3">
              response: <span className="text-[#E99287]">Response</span>
            </span>
            ,
            <br />
            <span className="pl-3">
              value:
              <span className="">{" {"}</span>
              <span className="text-[#FEA55F]"> + </span>
              <span className="text-[#5565E8]">
                {"["}
                key: string
                {"]"}
              </span>
              : <br className="block min-[1452px]:hidden" /> JSONValue
              <span>
                {" }"}
              </span> <br className="block min-[1652px]:hidden" /> |{" "}
              {"$ReadOnlyArray"}{" "}
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#43D9AD]">JSONValue</span>
                {">"}
              </span>
              ,
            </span>{" "}
            <br />
            <span className="">{"): any {"}</span> <br />
            <span className="pl-3">
              const tuple:
              <br className="block min-[486px]:hidden" />
              {`[mixed, mixed, mixed, mixed]`} ={" "}
              <br className="block min-[1452px]:hidden" /> {`(value: any)`};
            </span>{" "}
          </p>
        </pre>
      </div>
      {showDetail && (
        <p className="mx-auto w-full max-w-[458px] border-t-[1px] border-[#1E2D3D] px-2 py-5">
          My work here was 2 months ago. It was for the project called “...”.
          Some other text can be placed here.
        </p>
      )}
    </div>
  );
};
