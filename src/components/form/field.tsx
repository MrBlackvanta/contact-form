import FieldError from "./field-error";
import RequiredMark from "./required-mark";

export function errorId(controlId: string) {
  return `${controlId}-error`;
}

type FieldProps = {
  controlId: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

export default function Field({
  controlId,
  label,
  error,
  children,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={controlId}>
        {label}
        <RequiredMark />
      </label>
      {children}
      {error && <FieldError id={errorId(controlId)}>{error}</FieldError>}
    </div>
  );
}
