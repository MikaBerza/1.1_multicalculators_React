//
//
import custom from "../DailyTodoList.module.css";

function InputGroup({ value, handleChange, addNewNoteElement }) {
  return (
    <div className={custom["main-item2"]}>
      <input
        className={custom["main-input"]}
        type="text"
        placeholder=" запишите своё дело сюда"
        autoComplete="off"
        value={value}
        onChange={(event) => handleChange(event)}
      />
      <button className={custom["main-button"]} onClick={addNewNoteElement}>
        Добавить
      </button>
    </div>
  );
}
export default InputGroup;
