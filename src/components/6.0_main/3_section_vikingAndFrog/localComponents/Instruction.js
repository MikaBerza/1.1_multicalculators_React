//
//
// ___стили страницы
import custom from "../../Main.module.css";

function Instruction({ text, icon, alternativeText }) {
  return (
    <h5>
      {text}
      <img
        className={`${custom["img-symbol"]}`}
        src={icon}
        alt={alternativeText}
      />
    </h5>
  );
}
export default Instruction;