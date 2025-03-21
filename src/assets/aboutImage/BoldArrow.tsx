interface IBoldArrowProps {
  className?: string;
}

export const BoldArrow = ({ className = "" }: IBoldArrowProps) => {
  return (
    <svg
      className={`transform transition-transform duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
    >
      <path
        d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
        fill="CurrentColor"
      />
    </svg>
  );
};
