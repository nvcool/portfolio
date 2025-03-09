import { MailIcon } from "../../assets/aboutImage/MailIcon";
import { PhoneIcon } from "../../assets/aboutImage/PhoneIcon";
import { FooterGithub } from "../../assets/footerImage/FooterGithub";
import { FooterInstagram } from "../../assets/footerImage/FooterInstagram";
import { FooterTelegram } from "../../assets/footerImage/FooterTelegram";
import { IDropdownContent } from "../../types/IDropdownContent";
import { Dropdown } from "../dropdown/Dropdown";

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

const findInfo: IDropdownContent[] = [
  {
    id: 11231212,
    label: "GitHub",
    image: <FooterGithub />,
    link: "https://github.com/nvcool",
  },
  {
    id: 21312,
    label: "Telegram",
    image: <FooterTelegram />,
    link: "https://telegram.me/nvcool",
  },
  {
    id: 21112312,
    label: "Instagram",
    image: <FooterInstagram />,
    link: "https://www.instagram.com/nvxcool?igsh=Z2tnMnMzYWJ4MG9v&utm_source=qr",
  },
];

export const ContactBar = () => {
  return (
    <div className="mx-auto grid h-fit w-full border-r-0 border-[#1E2D3D] lg:block lg:h-full lg:max-w-[311px] lg:border-r-[1px]">
      {" "}
      <Dropdown buttonText="contacts" content={contactsInfo} />
      <Dropdown buttonText="find-me-also-in" content={findInfo} />
    </div>
  );
};
