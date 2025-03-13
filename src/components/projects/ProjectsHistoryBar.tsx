import { CloseButtonHistory } from "../../assets/aboutImage/CloseButtonHistory";

interface IProjectsHistoryBarProps {
  label: string;
}

export const ProjectsHistoryBar = ({ label }: IProjectsHistoryBarProps) => {
  return (
    <div className="border-b-[1px] border-[#1E2D3D]">
      <div className="flex w-fit items-center border-r-[1px] border-[#1E2D3D]">
        <button className="cursor-pointer py-2.5 pr-10 pl-4">
          <span>{label}</span>
        </button>
        <button className="cursor-pointer py-2.5 pr-4 transition-colors ease-in hover:text-white">
          <CloseButtonHistory />
        </button>
      </div>
    </div>
  );
};
