//
//
import React, { useContext } from "react";
import { HeaderContext } from "../HeaderContext";

function MainLogo({ link }) {
  // возвращаем из контекста логотип (logoCalculator)
  const { logoCalculator } = useContext(HeaderContext);

  return (
    <a className="navbar-brand " href={link}>
      <img src={logoCalculator} height="60" alt="logo" />
    </a>
  );
}

export default MainLogo;
