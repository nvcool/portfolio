import React, { ComponentProps } from "react";

interface ITextareaProps extends ComponentProps<"textarea"> {
  isError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ isError, ...props }: ITextareaProps, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={`h-[145px] rounded-[8px] bg-[#011221] px-3.5 py-2.5 outline-none focus:ring-2 ${isError ? "border-red-500 text-red-500" : "border-[#1E2D3D]"}`}
      ></textarea>
    );
  },
);
