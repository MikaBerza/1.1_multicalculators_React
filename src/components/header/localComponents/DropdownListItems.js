import { Link } from "react-router-dom";
//
//
import React, { useContext } from "react";
import { HeaderContext } from "../HeaderContext";
import custom from "../Header.module.css";

function DropdownListItems() {
  // возвращаем из контекста элементы выпадающего списка
  const { dropdownListItems } = useContext(HeaderContext);

  // элемент выпадающего списка
  const listItem = dropdownListItems.map((item) => {
    return (
      <li key={item.id}>
        <Link
          className={`dropdown-item ${custom["dropdownItemCustom"]}`}
          to={item.link}
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
