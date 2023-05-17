//
//
import customGlob from "../../../globalFiles/borschPancakesPilaf.module.css";

function ButtonCalculate({ onClickCalculateNumberOfIngredients, buttonName }) {
  return (
    <button
      className={`btn btn-success ${customGlob["btnItem"]}`}
      type="button"
      onClick={onClickCalculateNumberOfIngredients}
    >
      {buttonName}
    </button>
  );
}

export default ButtonCalculate;
