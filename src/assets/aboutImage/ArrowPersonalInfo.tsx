interface IArrowPersonalInfoProps {
  className?: string;
}

export const ArrowPersonalInfo = ({
  className = "",
}: IArrowPersonalInfoProps) => {
  return (
    <svg
      className={`transform transition-transform duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
    >
      <path
        d="M5.69658 7.20289L0.746582 2.25289L2.16058 0.838894L8.52458 7.20289L2.16058 13.5669L0.746582 12.1529L5.69658 7.20289Z"
        fill="CurrentColor"
      />
    </svg>
  );
};
