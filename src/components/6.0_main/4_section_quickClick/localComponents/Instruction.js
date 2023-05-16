//
//
// ___стили страницы
import custom from "../../Main.module.css";

function Instruction({ text }) {
  return <h4 className={`${custom["h4Item"]}`}>{text}</h4>;
}
export default Instruction;
