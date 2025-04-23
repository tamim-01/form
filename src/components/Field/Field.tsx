import React from "react";
import { TFieldTypes } from "../Form/formConfigs";
import Input from "./Input";
import Select from "./Select";
interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label?: string;
  error?: string;
  type: TFieldTypes;
  options?: { value: string; label: string }[];
}
const Field = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  FieldProps
>(({ label, error, type, options, ...rest }, ref) => {
  if (["email", "number", "password", "text"].includes(type)) {
    return (
      <Input
        ref={ref as React.Ref<HTMLInputElement>}
        label={label}
        error={error}
        type={type}
        {...rest}
      />
    );
  }

  if (type === "select") {
    return (
      <Select
        ref={ref as React.Ref<HTMLSelectElement>}
        label={label}
        error={error}
        options={options}
        {...rest}
      />
    );
  }

  return null;
});

Field.displayName = "Field";
export default Field;
