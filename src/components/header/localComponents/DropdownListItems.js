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
        <a
          className={`dropdown-item ${custom["dropdownItemCustom"]}`}
          href={item.link}
        >
          {item.name}
        </a>
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
