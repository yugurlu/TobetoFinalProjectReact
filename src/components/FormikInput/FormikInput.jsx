import { ErrorMessage, Field } from "formik";
import React from "react";

const FormikInput = (props) => {
  return (
    <div>
      <Field
        name={props.name}
        type={props.type || "text"}
        className={props.className}
        placeholder={props.placeholder}
      />
      <ErrorMessage name={props.name}>
        {(message) => <span className="text-danger">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
