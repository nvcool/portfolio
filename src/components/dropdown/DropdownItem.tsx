import { useState } from "react";
import { IDropdownContent } from "../../types/IDropdownContent";
import { ArrowPersonalInfo } from "../../assets/aboutImage/ArrowPersonalInfo";
import { DropdownContent } from "./DropdownContent";

interface IDropdownItemProps {
  children: IDropdownContent;
}

export const DropdownItem = ({ children }: IDropdownItemProps) => {
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
        inDropdown
        open={isOpen}
        children={children.subDropdown}
      />
    </div>
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
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-3 transition-colors ease-in hover:text-white"
    >
      <div className="flex gap-2">
        <div className="flex items-center gap-3">
          {image}
          <span>{children.label}</span>
        </div>
      </div>
    </button>
  );
};
