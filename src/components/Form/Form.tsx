"use client";
import { useForm } from "react-hook-form";
import { schema, schemaProps } from "./formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import { fieldConfigs } from "./fieldConfigs";

export function Form({ onSubmit }: { onSubmit: (data: schemaProps) => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schemaProps>({
    resolver: zodResolver(schema),
  });
  function submitForm(data: schemaProps) {
    console.log(">>> ~ submitForm ~ data:", data);

    onSubmit(data);
    reset();
  }

  return (
    <form
      className="flex flex-row flex-wrap gap-2 w-[600px]"
      onSubmit={handleSubmit(submitForm)}
    >
      {fieldConfigs &&
        fieldConfigs.map((field) => {
          return (
            <Input
              key={field.label}
              type={field.type}
              label={field.label}
              error={errors?.[field.name]?.message}
              placeholder={field.placeholder}
              {...register(field.name, {
                setValueAs:
                  field.type === "number"
                    ? (v) => (v === "" ? undefined : Number(v))
                    : undefined,
              })}
            />
          );
        })}

      <button
        type="submit"
        className="py-2 px-8 mt-6 bg-blue-100  text-[1rem] rounded-lg border-2
       border-[#000] border-r-6  border-b-6  outline-0 focus:border-r-4 focus:border-b-2 "
      >
        submit
      </button>
    </form>
  );
}
