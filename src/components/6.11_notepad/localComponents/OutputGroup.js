//
//

import "../Notepad.css";

function OutputGroup({
  note,
  index,
  onNoteTitleDoubleClick,
  onClickCheckbox,
  getNumberActiveCheckboxes,
  deleteNoteElement,
}) {
  return (
    <li
      // если отмечен применяем дополнительный стиль
      className={
        note.edit ? "notepad__list-item" : "notepad__list-item transparently"
      }
    >
      <div className="notepad__list-item-block1">
        <span
          className="notepad__list-item-text"
          id={note.id}
          onDoubleClick={() => {
            onNoteTitleDoubleClick(note.id);
          }}
        >
          {note.text}
        </span>
        <input
          id={note.id}
          type="checkbox"
          checked={note.checkbox}
          onClick={onClickCheckbox}
          onChange={getNumberActiveCheckboxes}
        />
      </div>
      <div className="notepad__list-item-block2">
        <span className="notepad__list-item-date">
          {/* Метод toLocaleDateString() возвращает строку с 
            языкозависимым представлением части с датой в этой дате*/}
          {new Date(note.date).toLocaleDateString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span
          className="notepad__list-item-close"
          id={note.id}
          onClick={(event) => {
            deleteNoteElement(event, index, note.id, note.checkbox);
          }}
        >
          x
        </span>
      </div>
    </li>
  );
}

export default OutputGroup;
