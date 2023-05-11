//
//
import custom from "../Header.module.css";

function NavbarItem({ title, path }) {
  return (
    <li className="nav-item">
      <a className={`nav-link ${custom["navLinkCustom"]}`} href={path}>
        {title}
      </a>
    </li>
  );
}

export default NavbarItem;
