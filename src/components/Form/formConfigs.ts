import { schemaProps } from "./formValidation";
export type TFieldTypes = "text" | "number" | "select" | "password" | "email";
export const fieldConfigs: Array<{
  label: string;
  name: keyof schemaProps;
  type: TFieldTypes;
  placeholder?: string;
  options?: { value: string; label: string }[];
}> = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@mail.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Strong password...",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "18+",
    },
    {
      name: "availability",
      label: "Availability",
      type: "select",
      placeholder: "Select availability",
      options: [{ value: "full-time", label: "Full time" },
        { value: "part-time", label: "Part time" },
        { value: "weekends", label: "Weekends only" },
      ],
    }
,    
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "USA, UK...",
  },
  {
    name: "flightExperience",
    label: "Years of Flight Experience",
    type: "number",
    placeholder: "3 for example",
  },
  {
    name: "licenseNumber",
    label: "Pilot License Number",
    type: "text",
    placeholder: "Only if you have one",
  },
  {
    name: "aircraftTypes",
    label: "Aircraft Types Flown",
    type: "text",
    placeholder: " Boeing 737, Airbus A320...",
    },
  {
    name: "gender",
    label: "Gender",
    type: "select",
      options: [
        { value: "other", label: "Other" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]
  },

 
];
