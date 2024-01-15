import { ErrorMessage, Field } from "formik";
import React from "react";

function FormikInput({ name, type, className, placeholder, as, rows }) {
  return (
    <div >
      <Field
        name={name}
        type={type || "text"}
        className={className}
        placeholder={placeholder}
        as={as || null}
        rows={rows}
      />
      <div>
        <ErrorMessage name={name}>
          {(message) => <span className="text-danger">{message}</span>}
        </ErrorMessage>
      </div>
    </div>
  );
}

export default FormikInput;
