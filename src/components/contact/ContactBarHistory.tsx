import { CloseButtonHistory } from "../../assets/aboutImage/CloseButtonHistory";

export const ContactBarHistory = () => {
  return (
    <div className="hidden border-b-[1px] border-[#1E2D3D] lg:flex">
      <div className="flex w-max items-center gap-10 border-r-[1px] border-[#1E2D3D] px-4 py-2.5">
        <span className="">contscts</span>
        <button className="cursor-pointer transition-colors ease-in hover:text-white">
          <CloseButtonHistory />
        </button>
      </div>
    </div>
  );
};
