import { Link } from "react-router-dom";
//
//
import React, { useContext } from "react";
import { HeaderContext } from "../HeaderContext";
import custom from "../Header.module.css";
import scrollToTop from "../../../globalFiles/scrollToTop";

function DropdownListItems() {
  // возвращаем из контекста элементы выпадающего списка
  const { dropdownListItems } = useContext(HeaderContext);

  // элемент выпадающего списка
  const listItem = dropdownListItems.map((item) => {
    return (
      <li key={item.id}>
        <Link
          to={item.link}
          className={`dropdown-item ${custom["dropdownItemCustom"]}`}
          onClick={scrollToTop}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <ul
      className="dropdown-menu"
      style={{ margin: 0 }}
      aria-labelledby="navbarDropdownMenuLink"
    >
      {listItem}
    </ul>
  );
}

export default DropdownListItems;
