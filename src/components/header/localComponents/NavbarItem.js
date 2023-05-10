//
//
import custom from "../Header.module.css";

function NavbarItem({ navbarItems }) {
  const navbarItem = navbarItems.map((item) => {
    return (
      <li className="nav-item" key={item.id}>
        <a className={`nav-link ${custom["navLinkCustom"]}`} href={item.link}>
          {item.name}
        </a>
      </li>
    );
  });

  return navbarItem;
}

export default NavbarItem;
