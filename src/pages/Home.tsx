import { NavLink } from "react-router";
// import { FlappyBirdGame } from "../components/game/FlappyBirdGame";

export const Home = () => {
  return (
    <section className="flex h-full items-center justify-center gap-[130px] overflow-x-clip p-7">
      <div className="relative flex flex-col justify-center gap-20">
        <div className="animate-blob absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#43D9AD] opacity-40 blur-[87px]"></div>
        <div className="animate-blob animation-delay-2000 absolute -right-20 -bottom-40 h-80 w-80 rounded-full bg-[#4D5BCE] opacity-40 blur-[87px]"></div>
        <div className="z-10 leading-[50px]">
          <span className="text-[18px] text-white">Hi all. I am</span>
          <h1 className="text-[62px] leading-[62px] font-light text-white min-[492px]:leading-normal">
            Roman Gribov
          </h1>
          <span className="text-[20px] text-[#43D9AD] min-[492px]:text-[32px] min-[494px]:text-[#4D5BCE]">
            {" "}
            {">"} Front-end developer
          </span>
        </div>
        <div className="z-10 grid text-[#607B96]">
          <span>// find my profile on Github:</span>
          <span className="text-[#43D9AD]">
            <span className="text-[#4D5BCE]">const</span> githubLink ={" "}
            <NavLink
              className="text-[#E99287] transition-colors ease-in hover:text-white"
              to={"https://github.com/nvcool"}
            >
              “https://github.com/nvcool”
            </NavLink>
          </span>
        </div>
      </div>
      {/* <FlappyBirdGame /> */}
    </section>
  );
};
