//
//

import "../Notepad.css";

function Filter({ title, selectValue, handleChangeSelect }) {
  return (
    <div className="notepad__filtering">
      <span className="notepad__filtering-text">{title}</span>
      <select
        className="notepad__filtering-filter"
        value={selectValue}
        onChange={handleChangeSelect}
      >
        <option defaultValue value="Все">
          Все
        </option>
        <option value="Выполненные">Выполненные</option>
        <option value="Невыполненные">Невыполненные</option>
      </select>
    </div>
  );
}

export default Filter;
