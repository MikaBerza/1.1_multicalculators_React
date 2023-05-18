//
//
import custom from "../DailyTodoList.module.css";

function Heading({ heading }) {
  return (
    <div className={custom["main-item1"]}>
      <h4 className={custom["main-item-h4"]}>{heading}</h4>
    </div>
  );
}
export default Heading;
