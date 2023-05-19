//
//

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../HeaderContext";

function MainLogo({ link }) {
  // возвращаем из контекста логотип (logoCalculator)
  const { logoCalculator } = useContext(HeaderContext);

  return (
    <Link className="navbar-brand " to={link}>
      <img src={logoCalculator} height="60" alt="logo" />
    </Link>
  );
}

export default MainLogo;
