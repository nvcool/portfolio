import { JSX } from "react";

export interface IDropdownContent {
  id: number;
  image: string | JSX.Element;
  label: string;
  link?: string;
  subDropdown?: IDropdownContent[];
}
