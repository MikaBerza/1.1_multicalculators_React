import "../Authentication.css";

function Check({ type, className, onCheck, onChangeCheck, text }) {
  return (
    <div className="mb-3 form-check">
      <input
        type={type}
        className={className}
        checked={onCheck}
        onChange={onChangeCheck}
      />
      <label className="form-check-label" htmlFor="inputCheck1">
        {text}
      </label>
    </div>
  );
}

export default Check;
