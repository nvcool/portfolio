import { CloseButtonHistory } from "../../assets/aboutImage/CloseButtonHistory";

interface IProjectsHistoryBarProps {
  label: string;
}

export const ProjectsHistoryBar = ({ label }: IProjectsHistoryBarProps) => {
  return (
    <div className="">
      <div className="hidden border-b-[1px] border-[#1E2D3D] lg:flex">
        <div className="flex w-fit items-center border-r-[1px] border-[#1E2D3D]">
          <button className="cursor-pointer py-2.5 pr-10 pl-4">
            <span>{label}</span>
          </button>
          <button className="cursor-pointer py-2.5 pr-4 transition-colors ease-in hover:text-white">
            <CloseButtonHistory />
          </button>
        </div>
      </div>

      <div className="flex px-10 py-5 lg:hidden">
        <span className="text-white">
          // projects<span className="text-[#607B96]"> / {label}</span>
        </span>
      </div>
    </div>
  );
};
