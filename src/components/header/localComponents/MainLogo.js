//
//
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../HeaderContext";
import scrollToTop from "../../../globalFiles/scrollToTop";

function MainLogo({ link }) {
  // возвращаем из контекста логотип (logoCalculator)
  const { logoCalculator } = useContext(HeaderContext);

  return (
    <Link className="navbar-brand " to={link} onClick={scrollToTop}>
      <img src={logoCalculator} height="60" alt="logo" />
    </Link>
  );
}

export default MainLogo;
