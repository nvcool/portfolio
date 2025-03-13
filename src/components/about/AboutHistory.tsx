import { CloseButtonHistory } from "../../assets/aboutImage/CloseButtonHistory";

interface IAboutHistoryProps {
  history: {
    id: number;
    label: string;
  }[];
  activeContent: number[];
  handleHistoryDelete: (id: number) => void;
  onContentChange: (id: number, label: string) => void;
}

export const AboutHistory = ({
  handleHistoryDelete,
  history,
  onContentChange,
  activeContent,
}: IAboutHistoryProps) => {
  return (
    <div
      className={`col-span-2 flex h-fit border-[#1E2D3D] ${history.length !== 0 && "border-b-[1px]"}`}
    >
      {history.map((item) => (
        <div
          key={item.id}
          className="flex w-fit items-center border-r-[1px] border-[#1E2D3D]"
        >
          <button
            onClick={() => onContentChange(item.id, item.label)}
            className="cursor-pointer py-2.5 pr-10 pl-4"
          >
            <span
              className={`${activeContent.includes(item.id) ? "active-link" : ""}`}
            >
              {item.label}
            </span>
          </button>
          <button
            onClick={() => handleHistoryDelete(item.id)}
            className="cursor-pointer py-2.5 pr-4 transition-colors ease-in hover:text-white"
          >
            <CloseButtonHistory />
          </button>
        </div>
      ))}
    </div>
  );
};
