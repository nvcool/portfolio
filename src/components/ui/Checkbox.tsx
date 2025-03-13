import * as Checkbox2 from "@radix-ui/react-checkbox";
import { CheckImage } from "../../assets/projectsImage/CheckImage";

interface ICheckboxProps extends Checkbox2.CheckboxProps {}

const Checkbox = ({ className, ...props }: ICheckboxProps) => (
  <Checkbox2.Root
    {...props}
    className={`flex h-4.5 w-4.5 cursor-pointer items-center justify-center rounded-xs border-[1px] hover:ring-2 hover:ring-[rgba(96,123,150,0.30)] ${className}`}
  >
    <Checkbox2.Indicator className="">
      <CheckImage />
    </Checkbox2.Indicator>
  </Checkbox2.Root>
);

export default Checkbox;
