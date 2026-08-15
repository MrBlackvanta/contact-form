import { CheckIcon } from "@/components/icons";
import FieldError from "./field-error";
import RequiredMark from "./required-mark";

const ERROR_ID = "consent-error";

type ConsentFieldProps = {
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
};

export default function ConsentField({
  checked,
  error,
  onChange,
}: ConsentFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="group flex items-center gap-4">
        <span className="grid size-6 shrink-0 place-items-center">
          <input
            type="checkbox"
            name="consent"
            className="peer col-start-1 row-start-1 v-checkbox group-hover:border-green-600"
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? ERROR_ID : undefined}
            required
          />
          <CheckIcon className="pointer-events-none col-start-1 row-start-1 w-2.75 text-white opacity-0 peer-checked:opacity-100" />
        </span>
        <span>
          I consent to being contacted by the team
          <RequiredMark />
        </span>
      </label>
      {error && <FieldError id={ERROR_ID}>{error}</FieldError>}
    </div>
  );
}
