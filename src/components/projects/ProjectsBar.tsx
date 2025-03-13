import { IDropdownContent } from "../../types/IDropdownContent";
import { Dropdown } from "../dropdown/Dropdown";

interface IProjectsBarProps {
  activeContent: number[];
  onContentChange: (id: number) => void;
  projects: IDropdownContent[];
}

export const ProjectsBar = ({
  onContentChange,
  activeContent,
  projects,
}: IProjectsBarProps) => {
  return (
    <div className="grid h-fit w-full border-r-0 border-[#1E2D3D] lg:h-full lg:max-w-[311px] lg:border-r-[1px]">
      {" "}
      <Dropdown
        onContentChange={onContentChange}
        activeContent={activeContent}
        buttonText="projects"
        content={projects}
      />
    </div>
  );
};
