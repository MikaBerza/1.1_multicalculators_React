import { Link } from "react-router-dom";
import "../Authentication.css";

function Button({ typeAtr, classAtr, onClick, text, flag }) {
  return (
    <Link
      to={flag ? "/Main" : "/"}
      type={typeAtr}
      className={classAtr}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default Button;
