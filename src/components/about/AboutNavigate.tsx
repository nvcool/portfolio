import { useState } from "react";
import { HobiesIcon } from "../../assets/aboutImage/HobiesIcon";
import { PersonalInfo } from "../../assets/aboutImage/PersonalInfo";
import { ProffesionalInfo } from "../../assets/aboutImage/ProffesionalInfo";
import pinkRar from "../../assets/aboutImage/pink-rar.svg";
import greenRar from "../../assets/aboutImage/green-rar.svg";
import purpleRar from "../../assets/aboutImage/purple-rar.svg";
import { BoldArrow } from "../../assets/aboutImage/BoldArrow";
import { ArrowPersonalInfo } from "../../assets/aboutImage/ArrowPersonalInfo";
import { MailIcon } from "../../assets/aboutImage/MailIcon";
import { Dropdown } from "../dropdown/Dropdown";
import { PhoneIcon } from "../../assets/aboutImage/PhoneIcon";
import { IDropdownContent } from "../../types/IDropdownContent";
import { InfoIcon } from "../../assets/aboutImage/InfoIcon";

// const personalInfo = [
//   {
//     personalInfo: [
//       { id: 3511, name: "professional-info" },
//       { id: 2144, image: pinkRar, label: "bio" },
//       { id: 9554, image: greenRar, label: "interests" },
//       { id: 1583, image: purpleRar, label: "education" },
//     ],
//     contacts: [
//       { id: 19, name: "contacts" },
//       { id: 6432, image: MailIcon, label: "roma.gribov.2002@mail.ru" },
//       { id: 1245, image: greenRar, label: "interests" },
//     ],
//   },
// ];

const personalInfo: IDropdownContent[] = [
  {
    id: 2144,
    image: pinkRar,
    label: "bio",
    subDropdown: [
      {
        id: 1552183,
        image: <InfoIcon />,
        label: "bio",
      },
    ],
  },
  {
    id: 9554,
    image: greenRar,
    label: "interests",
    subDropdown: [
      {
        id: 1583,
        image: purpleRar,
        label: "education",
        subDropdown: [{ id: 9554, image: <InfoIcon />, label: "Front-end" }],
      },
    ],
  },
  {
    id: 1583,
    image: purpleRar,
    label: "education",
    subDropdown: [{ id: 9554, image: <InfoIcon />, label: " education" }],
  },
];

const contactsInfo: IDropdownContent[] = [
  {
    id: 6432,
    image: <MailIcon />,
    label: "remdid732@gmail.ru",
    link: "mailto:remdid732@gmail.ru",
  },
  {
    id: 1245,
    image: <PhoneIcon />,
    label: "+79110995488",
    link: "tel:+79110995488",
  },
];

export const AboutNavigate = () => {
  return (
    <div className="flex border-r-[1px] border-[#1E2D3D] text-[#607B96]">
      <div className="flex h-full w-16 flex-col items-center gap-8 border-r-[1px] border-[#1E2D3D] pt-4">
        <button
          className={`cursor-pointer text-[#607B96] opacity-50 transition ease-in hover:text-[#81A1C1] hover:opacity-100`}
        >
          <ProffesionalInfo />
        </button>
        <button className="cursor-pointer text-[#607B96] opacity-50 transition ease-in hover:text-[#81A1C1] hover:opacity-100">
          <PersonalInfo />
        </button>
        <button className="cursor-pointer text-[#607B96] opacity-50 transition ease-in hover:text-[#81A1C1] hover:opacity-100">
          <HobiesIcon />
        </button>
      </div>

      <div className="w-full">
        <Dropdown buttonText="personal-info" content={personalInfo} />
        <Dropdown buttonText="contacts" content={contactsInfo} />
      </div>
    </div>
  );
};
