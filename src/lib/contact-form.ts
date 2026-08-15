export const QUERY_TYPES = [
  { value: "general", label: "General Enquiry" },
  { value: "support", label: "Support Request" },
] as const;

export type QueryType = (typeof QUERY_TYPES)[number]["value"];

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: QueryType | "";
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const EMPTY_VALUES: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

export const FIELD_ORDER = [
  "firstName",
  "lastName",
  "email",
  "queryType",
  "message",
  "consent",
] as const satisfies readonly (keyof ContactFormValues)[];

const REQUIRED = "This field is required";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = REQUIRED;
  if (!values.lastName.trim()) errors.lastName = REQUIRED;
  if (!values.email.trim()) errors.email = REQUIRED;
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please enter a valid email address";
  if (!values.queryType) errors.queryType = "Please select a query type";
  if (!values.message.trim()) errors.message = REQUIRED;
  if (!values.consent)
    errors.consent = "To submit this form, please consent to being contacted";

  return errors;
}
