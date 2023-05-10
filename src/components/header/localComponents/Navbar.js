//
//
import custom from "../Header.module.css";
import MainLogo from "./MainLogo";
import HamburgerMenu from "./HamburgerMenu";
import DropdownList from "./DropdownList";
import NavbarItem from "./NavbarItem";

function Navbar({ logo, navbarItems, dropdownListItems }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-light ${custom["navbarCustom"]} ${custom["bgLightCustom"]}`}
      >
        <div className="container-xxl">
          <MainLogo logo={logo} link={"./main.html"} />
          <HamburgerMenu />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <DropdownList dropdownListItems={dropdownListItems} />
              <NavbarItem navbarItems={navbarItems} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
