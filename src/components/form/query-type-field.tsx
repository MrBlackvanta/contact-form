import { QUERY_TYPES, type QueryType } from "@/lib";
import FieldError from "./field-error";
import RequiredMark from "./required-mark";

const ERROR_ID = "query-type-error";

type QueryTypeFieldProps = {
  value: QueryType | "";
  error?: string;
  onChange: (value: QueryType) => void;
};

export default function QueryTypeField({
  value,
  error,
  onChange,
}: QueryTypeFieldProps) {
  return (
    <fieldset aria-describedby={error ? ERROR_ID : undefined}>
      <legend>
        Query Type
        <RequiredMark />
      </legend>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {QUERY_TYPES.map((queryType) => (
          <label key={queryType.value} className="v-radio-card">
            <input
              type="radio"
              name="queryType"
              className="v-radio"
              value={queryType.value}
              checked={value === queryType.value}
              onChange={() => onChange(queryType.value)}
              required
            />
            {queryType.label}
          </label>
        ))}
      </div>
      {error && (
        <div className="mt-4">
          <FieldError id={ERROR_ID}>{error}</FieldError>
        </div>
      )}
    </fieldset>
  );
}
