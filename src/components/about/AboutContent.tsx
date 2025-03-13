interface IAboutContentProps {
  content: number;
}

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

export const AboutContent = ({ content }: IAboutContentProps) => {
  return (
    <div className="h-full grow-3 border-r-[1px] border-[#1E2D3D]">
      {content === 1552183 && (
        <ol className="grid list-decimal gap-2 pt-4 pr-2 pl-16">
          {about.map((item) => {
            return <li key={item.item}>{item.item}</li>;
          })}
        </ol>
      )}
    </div>
  );
};
