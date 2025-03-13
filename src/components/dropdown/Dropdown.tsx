import { useState } from "react";
import { DropdownButton } from "./DropdownButton";
import { DropdownContent } from "./DropdownContent";
import { IDropdownContent } from "../../types/IDropdownContent";

interface IDropdownProps {
  buttonText: string;
  content: IDropdownContent[];
  activeContent: number[];
  onItemClick?: (id: number, label: string) => void;
  onContentChange?: (id: number) => void;
}

export const Dropdown = ({
  buttonText,
  content,
  onItemClick,
  activeContent,
  onContentChange,
}: IDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent
        onContentChange={onContentChange}
        activeContent={activeContent}
        onItemClick={onItemClick}
        open={open}
      >
        {content}
      </DropdownContent>
    </div>
  );
};
