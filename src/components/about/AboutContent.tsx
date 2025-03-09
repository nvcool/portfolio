import { CloseButtonHistory } from "../../assets/aboutImage/CloseButtonHistory";

const about = [
  { item: "// About me" },
  { item: "// I`m Frontend-Developer" },
  {
    item: "// I have 2 years of еxperience in IT and Web Development",
  },
  { item: "// I develop in React (TypeScript / Tailwind CSS)" },
  { item: "// I help with the creation of a website and web interface" },
  { item: "// I take a high-quality approach to completing the work" },
  { item: "// Bringing the result to perfection" },
  { item: "// Familiar with many web development technologies" },
  {
    item: "// HTML, CSS/SCSS, JS/TS, Promise/Fetch/Async/Await, BEM, API, REST API",
  },
];

export const AboutContent = () => {
  return (
    <div className="grow-3 border-r-[1px] border-[#1E2D3D]">
      <div className="border-b-[1px] border-[#1E2D3D]">
        {" "}
        <div className="flex w-max items-center gap-10 border-r-[1px] border-[#1E2D3D] px-4 py-2.5">
          <span className="">bio</span>
          <button className="cursor-pointer transition-colors ease-in hover:text-white">
            <CloseButtonHistory />
          </button>
        </div>
      </div>
      <ol className="grid list-decimal gap-2 pt-4 pr-12 pl-16">
        {about.map((item) => {
          return <li>{item.item}</li>;
        })}
      </ol>
    </div>
  );
};
