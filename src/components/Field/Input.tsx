import React from "react";
import { TFieldTypes } from "../Form/formConfigs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
  type: TFieldTypes;
}

const TextInput: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ label, error, type, ...rest }, ref) => {
  return (
    <div className="mb-4 flex flex-col w-[260px]">
      {label && <label className="block mb-1">{label}</label>}
      <input
        type={type}
        ref={ref}
        {...rest}
        className="p-3.5 text-[1rem] rounded-2xl border-2 border-[#000] border-r-6 outline-0 focus:border-r-4"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
});

TextInput.displayName = "Input";
export default TextInput;
