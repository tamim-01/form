import { z } from "zod";
const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);
export const schema = z.object({
  name: z.string().min(3, { message: 'Must have at least 3 character' }),
  email: z
    .string()
    .min(5, { message: 'Must have at least 5 character' })
    .email({
      message: 'Must be a valid email',
    }),
  password: z
    .string()
    .min(8, { message: 'Must have at least 8 character' })
    .regex(passwordValidation, {
      message: "8 characters one uppercase, one lowercase, one number and one special character"
    }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "You must be at least 18 years old" }),
    availability: z
    .enum(["full-time", "part-time", "weekends"], {
      errorMap: () => ({ message: "You have to select an availability option" }),
    }),


  country: z.string().min(2, { message: "Country is required" }),
  flightExperience: z
    .number()
    .min(0, { message: "Flight experience must be 0 or more" }),
  licenseNumber: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 5, {
      message: "License number must be at least 6 characters",
    }),
  aircraftTypes: z
    .string()
    .min(1, { message: "Please list at least one aircraft type" }),

    gender: z
    .enum(["male", "female", "other"], {
      errorMap: () => ({ message: "You have to select a gender option" }),
    }),

});
export type schemaProps = z.infer<typeof schema>