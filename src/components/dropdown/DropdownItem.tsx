import { useState } from "react";
import { IDropdownContent } from "../../types/IDropdownContent";
import { ArrowPersonalInfo } from "../../assets/aboutImage/ArrowPersonalInfo";
import { DropdownContent } from "./DropdownContent";

import Checkbox from "../ui/Checkbox";

interface IDropdownItemProps {
  children: IDropdownContent;
  activeContent: number[];
  onItemClick?: (id: number, label: string) => void;
  onContentChange?: (id: number) => void;
}

export const DropdownItem = ({
  children,
  onItemClick,
  activeContent,
  onContentChange,
}: IDropdownItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const image =
    typeof children.image === "string" ? (
      <img src={children.image} alt="" />
    ) : (
      children.image
    );

  return children.subDropdown?.length ? (
    <div className="">
      <button
        onClick={handleClick}
        className="flex cursor-pointer items-center gap-3 transition-colors ease-in hover:text-white"
      >
        <ArrowPersonalInfo className={`${isOpen ? "rotate-90" : ""} `} />
        {image}
        <span>{children.label}</span>
      </button>
      <DropdownContent
        activeContent={activeContent}
        onItemClick={onItemClick}
        inDropdown
        open={isOpen}
        children={children.subDropdown}
      />
    </div>
  ) : children.checkbox ? (
    <label
      className={`flex cursor-pointer items-center gap-4 pl-2 ${activeContent.includes(children.id) ? "active-link" : ""}`}
    >
      <Checkbox
        onCheckedChange={
          onContentChange ? () => onContentChange(children.id) : undefined
        }
        defaultChecked={activeContent.includes(children.id)}
      />
      {children.image}
      <span className={``}>{children.label}</span>
    </label>
  ) : children.link ? (
    <a
      href={children.link}
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-3 transition-colors ease-in hover:text-white"
    >
      <div className="flex gap-2">
        <div className="flex items-center gap-3">
          {image}
          <span>{children.label}</span>
        </div>
      </div>
    </a>
  ) : (
    <button
      onClick={
        onItemClick ? () => onItemClick(children.id, children.label) : undefined
      }
      className="flex cursor-pointer items-center gap-3 transition-colors ease-in hover:text-white"
    >
      <div className="flex gap-2">
        <div
          className={`flex items-center gap-3 ${activeContent.includes(children.id) ? "active-link" : ""}`}
        >
          {image}
          <span>{children.label}</span>
        </div>
      </div>
    </button>
  );
};
