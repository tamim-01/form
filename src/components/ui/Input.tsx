import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="mb-4 flex flex-col w-[260px] ">
        {label && <label className="block mb-1">{label}</label>}
        <input
          ref={ref}
          {...rest}
          className="p-3.5 text-[1rem] rounded-2xl border-2
       border-[#000] border-r-6 outline-0 focus:border-r-4  "
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
