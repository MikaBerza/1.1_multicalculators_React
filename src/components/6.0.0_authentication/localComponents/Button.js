// import { Link } from "react-router-dom";
import "../Authentication.css";

function Button({ type, className, onClick, text, flag }) {
  return (
    <button
      // to={flag ? "/Main" : "/"}
      type={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
