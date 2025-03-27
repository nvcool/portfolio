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
      {content === 9554 && (
        <div className="grid w-full max-w-[500px] gap-4 pt-4 pr-2 pl-16 leading-10">
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
        <p className="w-full max-w-[500px] gap-4 pt-4 pr-2 pl-16 leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          eum officiis voluptatibus corrupti dolore, repudiandae corporis eaque
          id a autem doloribus laudantium quos. Veniam, vero ab? Illo deserunt
          nobis quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusantium dolorem a pariatur dolore animi culpa cumque possimus eius
          officia at maxime nihil doloribus id, iure atque perferendis adipisci
          omnis vel.
        </p>
      )}
    </div>
  );
};
