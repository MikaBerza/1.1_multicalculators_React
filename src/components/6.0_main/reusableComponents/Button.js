//
//

import custom from "../Main.module.css";

function Button({
  buttonStyle,
  imgStyle,
  text,
  handleClick,
  icon,
  alternativeText,
  changeDisabled,
}) {
  return (
    <button
      className={`btn ${custom[buttonStyle]} `}
      type="button"
      onClick={handleClick}
      disabled={changeDisabled}
    >
      {text}
      <img className={imgStyle} src={icon} alt={alternativeText} />
    </button>
  );
}

export default Button;
