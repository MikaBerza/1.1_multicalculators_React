import { Field } from "formik";
import "../Authentication.css";

function Checkbox({ name, className, checkboxError, text }) {
  return (
    <div className={`${className[0]} ${className[1]}`}>
      <label className={`${className[2]}`} style={{ cursor: "pointer" }}>
        <Field
          name={name}
          type={name}
          className={`${className[3]} ${checkboxError ? className[4] : ""}`}
        />
        {text}
      </label>
      <p className={`${className[5]}`}>{checkboxError}</p>
    </div>
  );
}

export default Checkbox;
