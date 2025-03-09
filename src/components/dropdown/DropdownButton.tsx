import { BoldArrow } from "../../assets/aboutImage/BoldArrow";

interface IIDropdownButtonProps {
  children: string;
  toggle: () => void;
  open: boolean;
}

export const DropdownButton = ({
  children,
  toggle,
  open,
}: IIDropdownButtonProps) => {
  return (
    <button
      onClick={() => {
        toggle();
      }}
      className={`nav relative mb-1 flex w-full cursor-pointer items-center gap-2 border-b-[1px] border-[#1E2D3D] bg-[#1E2D3D] py-2.5 pl-3 text-white hover:text-white lg:my-0 lg:bg-[#011627] lg:text-[#607B96]`}
    >
      <span>
        <BoldArrow className={`${open ? "" : "-rotate-90"}`} />
      </span>
      {children}
    </button>
  );
};
