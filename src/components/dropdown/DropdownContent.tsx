import { IDropdownContent } from "../../types/IDropdownContent";

import { DropdownItem } from "./DropdownItem";

interface IDropdownContentProps {
  children: IDropdownContent[];
  open: boolean;
  activeContent: number[];
  inDropdown?: boolean;
  onItemClick?: (id: number, label: string) => void;
  onContentChange?: (id: number) => void;
}

export const DropdownContent = ({
  children,
  open,
  inDropdown,
  onItemClick,
  activeContent,
  onContentChange,
}: IDropdownContentProps) => {
  return (
    <div
      className={`${open ? "grid" : "hidden"} grid gap-2 ${inDropdown ? "py-2 pl-[21px]" : "border-b-[1px] border-[#1E2D3D] py-4 pl-3"}`}
    >
      {children.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex items-center gap-6`}
            // ${item.checkbox ? "opacity-100" : "opacity-40"}
          >
            {/* <CheckboxDemo /> */}
            <DropdownItem
              onContentChange={onContentChange}
              activeContent={activeContent}
              onItemClick={onItemClick}
              children={item}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};
