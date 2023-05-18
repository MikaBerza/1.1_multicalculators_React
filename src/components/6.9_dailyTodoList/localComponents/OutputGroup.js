//
//
import custom from "../DailyTodoList.module.css";

function OutputGroup({ notes, markAsDone, deleteNoteElement }) {
  // отрисовка полученных записей
  const result = notes.map(function (elem, index) {
    return (
      <ol key={elem.id} className={custom["content-items"]}>
        <li
          key={elem.id}
          onClick={() => markAsDone(elem)}
          className={
            elem.change
              ? `${custom["content-items-li"]}`
              : `${custom["content-items-li-done"]}`
          }
        >
          {elem.text}
          <span
            className={`${custom["close"]}`}
            onClick={(event) => deleteNoteElement(event, index)}
          >
            x
          </span>
        </li>
      </ol>
    );
  });

  return <>{result}</>;
}
export default OutputGroup;
