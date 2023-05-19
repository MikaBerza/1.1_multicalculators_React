//
//

import custom from "../Header.module.css";
import MainLogo from "./MainLogo";
import HamburgerMenu from "./HamburgerMenu";
import DropdownList from "./DropdownList";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-light ${custom["navbarCustom"]} ${custom["bgLightCustom"]}`}
    >
      <div className="container-xxl">
        <MainLogo link={"/Main"} />
        <HamburgerMenu />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <DropdownList title={"Мульти вычислители"} path={"./main.html"} />
            <NavbarItem title={"Викинг и лягушка"} path={"#animation"} />
            <NavbarItem title={"Быстрый щелчок"} path={"#high-speed-click"} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
