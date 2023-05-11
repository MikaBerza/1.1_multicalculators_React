//
//
import custom from "../Header.module.css";
import DropdownListItems from "./DropdownListItems";

function DropdownList({ title, path }) {
  return (
    <li className="nav-item dropdown">
      <a
        className={`nav-link dropdown-toggle ${custom["navLinkCustom"]}`}
        href={path}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </a>
      <DropdownListItems />
    </li>
  );
}

export default DropdownList;
