import * as Dialog from "@radix-ui/react-dialog";
import menuButton from "../../assets/headerModal/menu-button.svg";
import closeButton from "../../assets/headerModal/close-button.svg";
import { NavLink } from "react-router";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className="nav relative" asChild>
        <button className="flex cursor-pointer p-4 lg:hidden">
          <img src={menuButton} alt="" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-10" />
        <Dialog.Content className="fixed inset-0 z-10 border-[#1E2D3D] bg-[#011627]">
          <Dialog.Title className="hidden" />
          <Dialog.Description className="hidden" />
          <div className="border-b-[1px] border-[#1E2D3D]">
            <ul className="grid items-center">
              <li className="border-b-[1px] border-[#1E2D3D] py-4">
                {firstLink.map((link) => {
                  return (
                    <NavLink
                      onClick={closeModal}
                      className="nav relative py-4 pl-4 whitespace-nowrap"
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
                      onClick={closeModal}
                      className="nav relative border-b-[1px] px-4 py-4 pl-4"
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
                      onClick={closeModal}
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
