import { useState } from "react";
import { DropdownButton } from "./DropdownButton";
import { DropdownContent } from "./DropdownContent";
import { IDropdownContent } from "../../types/IDropdownContent";

interface IDropdownProps {
  buttonText: string;
  content: IDropdownContent[];
}

export const Dropdown = ({ buttonText, content }: IDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
};
