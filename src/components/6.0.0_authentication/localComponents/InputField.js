import { Field } from "formik";
import "../Authentication.css";

function InputField({ name, className, fieldError, placeholderText }) {
  return (
    <div className={`${className[0]}`}>
      <Field
        name={name}
        id={name}
        type={name}
        className={`${className[1]} ${fieldError ? className[2] : ""}`}
        placeholder={placeholderText}
        autoComplete="off"
      />
      <p className={`${className[3]}`}>{fieldError}</p>
    </div>
  );
}

export default InputField;
