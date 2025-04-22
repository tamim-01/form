import { schemaProps } from "./formValidation";

export const fieldConfigs: Array<{
  label: string;
  name: keyof schemaProps;
  type: "text" | "number" | "select" | "password" | "email";
  placeholder?: string;
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
];
