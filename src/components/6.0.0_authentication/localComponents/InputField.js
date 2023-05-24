import "../Authentication.css";

function InputField({
  type,
  className,
  autoComplete,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-3">
      <input
        type={type}
        className={className}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
