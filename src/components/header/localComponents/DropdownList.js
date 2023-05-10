import custom from "../Header.module.css";

function DropdownList({ dropdownListItems }) {
  // элемент выпадающего списка
  const dropdownListItem = dropdownListItems.map((item) => {
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
    <li className="nav-item dropdown">
      <a
        className={`nav-link dropdown-toggle ${custom["navLinkCustom"]}`}
        href="./main.html"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Мульти вычислители
      </a>
      <ul
        className="dropdown-menu"
        style={{ margin: 0 }}
        aria-labelledby="navbarDropdownMenuLink"
      >
        {dropdownListItem}
      </ul>
    </li>
  );
}

export default DropdownList;
