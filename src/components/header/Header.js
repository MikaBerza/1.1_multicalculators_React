//
//
import React from "react";
import { HeaderContext } from "./HeaderContext";

import { v4 } from "uuid";

import logoCalculator from "./imgHeader/logo-calculator.png";
import Navbar from "./localComponents/Navbar";

// элементы выпадающего списка
const dropdownListItems = [
  { id: v4(), name: "Борщ - расчет ингредиентов", link: "./borsch.html" },
  { id: v4(), name: "Блины - расчет ингредиентов", link: "./pancakes.html" },
  { id: v4(), name: "Плов - расчет ингредиентов", link: "./pilaf.html" },
  {
    id: v4(),
    name: "Ипотечный - калькулятор",
    link: "./mortgageCalculator.html",
  },
  { id: v4(), name: "Дневной - калькулятор", link: "./dailyCalculator.html" },
  { id: v4(), name: "Факты о котах", link: "./factsAboutCats.html" },
  {
    id: v4(),
    name: "Калькулятор стоимости электроэнергии",
    link: "./electricityCalculator.html",
  },
  {
    id: v4(),
    name: "Калькулятор стоимости холодной воды",
    link: "./waterCalculator.html",
  },
  { id: v4(), name: "Ежедневный список дел", link: "./dailyTodoList.html" },
  { id: v4(), name: "Генератор паролей", link: "./passwordGenerator" },
  { id: v4(), name: "Блокнот", link: "./notepad" },
  { id: v4(), name: "Информация об IP", link: "./informationIp.html" },
];

function Header() {
  return (
    // подключаем провайдер и передаем данные в контекст
    <HeaderContext.Provider value={{ dropdownListItems, logoCalculator }}>
      <header>
        <Navbar />
      </header>
    </HeaderContext.Provider>
  );
}

export default Header;
