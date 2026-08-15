"use client";

import { useState } from "react";
import {
  EMPTY_VALUES,
  FIELD_ORDER,
  validate,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib";
import ConsentField from "./consent-field";
import Field, { errorId } from "./field";
import QueryTypeField from "./query-type-field";
import SuccessToast from "./success-toast";

const NO_ERRORS: ContactFormErrors = {};

function focusControl(form: HTMLFormElement, name: string) {
  const control = form.elements.namedItem(name);
  const target = control instanceof RadioNodeList ? control[0] : control;
  if (target instanceof HTMLElement) target.focus();
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [showErrors, setShowErrors] = useState(false);
  const [sentCount, setSentCount] = useState(0);

  const errors = showErrors ? validate(values) : NO_ERRORS;

  function update(patch: Partial<ContactFormValues>) {
    setValues({ ...values, ...patch });
  }

  function describe(name: keyof ContactFormValues, controlId: string) {
    return {
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? errorId(controlId) : undefined,
    };
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedErrors = validate(values);
    const firstInvalid = FIELD_ORDER.find((name) => submittedErrors[name]);

    if (firstInvalid) {
      setShowErrors(true);
      setSentCount(0);
      focusControl(event.currentTarget, firstInvalid);
      return;
    }

    setValues(EMPTY_VALUES);
    setShowErrors(false);
    setSentCount(sentCount + 1);
  }

  return (
    <>
      <div role="status">
        {sentCount > 0 && <SuccessToast key={sentCount} />}
      </div>
      <form noValidate onSubmit={handleSubmit} className="mt-8 flex flex-col">
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
            <Field
              controlId="first-name"
              label="First Name"
              error={errors.firstName}
            >
              <input
                id="first-name"
                name="firstName"
                autoComplete="given-name"
                className="v-input"
                value={values.firstName}
                onChange={(event) => update({ firstName: event.target.value })}
                required
                {...describe("firstName", "first-name")}
              />
            </Field>
            <Field
              controlId="last-name"
              label="Last Name"
              error={errors.lastName}
            >
              <input
                id="last-name"
                name="lastName"
                autoComplete="family-name"
                className="v-input"
                value={values.lastName}
                onChange={(event) => update({ lastName: event.target.value })}
                required
                {...describe("lastName", "last-name")}
              />
            </Field>
          </div>

          <Field controlId="email" label="Email Address" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="v-input"
              value={values.email}
              onChange={(event) => update({ email: event.target.value })}
              required
              {...describe("email", "email")}
            />
          </Field>

          <QueryTypeField
            value={values.queryType}
            error={errors.queryType}
            onChange={(queryType) => update({ queryType })}
          />

          <Field controlId="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              className="h-60 v-input resize-none sm:h-33 lg:h-26.25"
              value={values.message}
              onChange={(event) => update({ message: event.target.value })}
              required
              {...describe("message", "message")}
            />
          </Field>
        </div>

        <div className="mt-10">
          <ConsentField
            checked={values.consent}
            error={errors.consent}
            onChange={(consent) => update({ consent })}
          />
        </div>

        <button type="submit" className="mt-10 v-btn">
          Submit
        </button>
      </form>
    </>
  );
}
