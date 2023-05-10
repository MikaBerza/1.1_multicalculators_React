// import uuid from 'react-uuid'
import { v4 } from "uuid";

import logoCalculator from "./imgHeader/logo-calculator.png";
import Navbar from "./localComponents/Navbar";

// элементы навигационной панели
const navbarItems = [
  { id: v4(), name: "Викинг и лягушка", link: "#animation" },
  { id: v4(), name: "Быстрый щелчок", link: "#high-speed-click" },
];

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
    <header>
      <Navbar
        logo={logoCalculator}
        navbarItems={navbarItems}
        dropdownListItems={dropdownListItems}
      />
    </header>
  );
}

export default Header;
