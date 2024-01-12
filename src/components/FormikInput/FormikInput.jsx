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
      <div>
        <ErrorMessage name={props.name}>
          {(message) => <span className="text-danger">{message}</span>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default FormikInput;
