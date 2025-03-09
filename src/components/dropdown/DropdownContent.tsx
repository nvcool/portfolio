import { IDropdownContent } from "../../types/IDropdownContent";
import { DropdownItem } from "./DropdownItem";

interface IDropdownContentProps {
  children: IDropdownContent[];
  open: boolean;
  inDropdown?: boolean;
}

export const DropdownContent = ({
  children,
  open,
  inDropdown,
}: IDropdownContentProps) => {
  return (
    <div
      className={`${open ? "grid" : "hidden"} grid gap-2 ${inDropdown ? "py-2 pl-[21px]" : "border-b-[1px] border-[#1E2D3D] py-4 pl-3"}`}
    >
      {children.map((item) => {
        return <DropdownItem key={item.id} children={item} />;
      })}
    </div>
  );
};
