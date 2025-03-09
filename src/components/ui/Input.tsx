import React, { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  isError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, isError, ...props }: IInputProps, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        className={`rounded-[8px] bg-[#011221] px-3.5 py-2.5 outline-none focus:ring-2 ${isError ? "border-red-500 text-red-500" : "border-[#1E2D3D]"} ${className}`}
      />
    );
  },
);
