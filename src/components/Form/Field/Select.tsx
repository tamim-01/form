import React from "react";

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  ref?: React.Ref<HTMLSelectElement>;
  options?: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ label, error, options, ...rest }, ref) => {
  return (
    <div className="mb-4 flex flex-col w-[260px]">
      {label && <label className="block mb-1">{label}</label>}
      <select
        ref={ref}
        {...rest}
        className="p-3.5 text-[1rem] rounded-2xl border-2 border-[#000] border-r-6 outline-0 focus:border-r-4"
      >
        <option value="">Select an option</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
});

Select.displayName = "Input";
export default Select;
