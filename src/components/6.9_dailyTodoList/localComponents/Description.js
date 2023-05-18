//
//
import custom from "../DailyTodoList.module.css";

function Description({ item1, item2 }) {
  return (
    <h5 className={custom["main-item-h5"]}>
      После добавления дела: <br />
      <span className={custom["text-item"]}>{item1}</span>
      <br />
      <span className={custom["text-item"]}>{item2}</span>
    </h5>
  );
}
export default Description;
