//
//

import "../Notepad.css";

function InputGroup({
  valTextarea,
  handleChangeTextarea,
  isEdit,
  chooseFunction,
  name,
}) {
  return (
    <>
      {/* rows-высота поля в строках текста чтобы textare занял всю ширину блока,
      обернем его в div */}
      <div className="notepad__block-textarea">
        <textarea
          className="notepad__textarea"
          name={name}
          id=""
          rows="13"
          value={valTextarea}
          onChange={handleChangeTextarea}
        ></textarea>
      </div>
      <div className="notepad__block-button">
        <button className="notepad__button" onClick={chooseFunction}>
          {isEdit ? "Редактировать" : "Добавить"}
        </button>
      </div>
    </>
  );
}

export default InputGroup;
