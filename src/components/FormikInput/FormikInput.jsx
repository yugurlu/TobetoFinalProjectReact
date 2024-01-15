import { ErrorMessage, Field } from "formik";
import React from "react";

function FormikInput({ name, type, className, placeholder }) {
  return (
    <div>
      <Field
        name={name}
        type={type || "text"}
        className={className}
        placeholder={placeholder}
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
