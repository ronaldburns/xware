import React, { useState, HTMLAttributes } from "react";
import MaskedInput from "react-text-mask";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  checkCalix?: boolean;
}

export default function AgreementNumberInput(props: Props) {
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const validate = (input: String): Boolean => {
    if (input.includes("_")) {
      setError("This field is required.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <div
      className={classNames(
        {
          validated: validated
        },
        props.className && props.className
      )}
    >
      <label>Agreement Number</label>
      <div /*className="kt-spinner kt-spinner--sm kt-spinner--success kt-spinner--right kt-spinner--input"*/
      >
        <MaskedInput
          mask={[
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ]}
          type="text"
          className={classNames({
            "form-control": true,
            "is-invalid": !!error
          })}
          name="agreement"
          onChange={({ target: { value } }) => {
            if (validated) {
              if (!validate(value)) {
                setValidated(true);
                return;
              }
            }
          }}
          onBlur={({ target: { value } }) => {
            if (!validate(value)) {
              setValidated(true);
              return;
            }
            //const parsed = value.replace(/-/g, "");
          }}
          autoComplete="off"
          placeholder="___-___-____"
        />
      </div>
      {error && validated ? (
        <div className="invalid-feedback">{error}</div>
      ) : (
        undefined
      )}
      <span className="form-text text-muted">
        Please enter their master agreement number.
      </span>
    </div>
  );
}
