import "../Authentication.css";

function Check({ typeAtr, classAtr, onCheck, onChangeCheck, text }) {
  return (
    <div className="mb-3 form-check">
      <input
        type={typeAtr}
        className={classAtr}
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
