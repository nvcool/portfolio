import * as Dialog from "@radix-ui/react-dialog";
import menuButton from "../assets/headerModal/menu-button.svg";
import closeButton from "../assets/headerModal/close-button.svg";
import { NavLink } from "react-router";

interface IMenuModalProps {
  firstLink: {
    name: string;
    link: string;
  }[];
  middleLinks: {
    name: string;
    link: string;
  }[];
  lastLink: {
    name: string;
    link: string;
  }[];
}

export const MenuModal = ({
  firstLink,
  middleLinks,
  lastLink,
}: IMenuModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="nav relative" asChild>
        <button className="flex cursor-pointer p-4 lg:hidden">
          <img src={menuButton} alt="" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed" />
        <Dialog.Content className="fixed inset-0 m-[15px] rounded-[8px] border-[1px] border-b-[1px] border-[#1E2D3D] bg-[#011627] sm:m-[48px] lg:m-[69px]">
          <Dialog.Title className="hidden" />
          <Dialog.Description className="hidden" />
          <div className="border-b-[1px] border-[#1E2D3D]">
            <ul className="grid items-center">
              <li className="py-4">
                {firstLink.map((link) => {
                  return (
                    <NavLink
                      className="nav relative py-4 pl-4 whitespace-nowrap text-[#607B96]"
                      key={link.link}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </li>

              <li className="grid">
                {middleLinks.map((link) => {
                  return (
                    <NavLink
                      className="nav relative border px-4 py-4 pl-4"
                      key={link.link}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </li>

              <li className="flex">
                {lastLink.map((link) => {
                  return (
                    <NavLink
                      className="nav relative w-full px-5 py-4"
                      key={link.link}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
          <Dialog.Close asChild>
            <button
              className="nav absolute top-0 right-0 cursor-pointer p-5"
              aria-label="Close"
            >
              <img src={closeButton} alt="" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
