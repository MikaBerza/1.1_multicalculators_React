import "../Authentication.css";

function InputField({
  typeAtr,
  classAtr,
  autoCompleteAtr,
  placeholderAtr,
  valueAtr,
  onChange,
}) {
  return (
    <div className="mb-3">
      <input
        type={typeAtr}
        className={classAtr}
        autoComplete={autoCompleteAtr}
        placeholder={placeholderAtr}
        value={valueAtr}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
