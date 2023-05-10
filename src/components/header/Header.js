import custom from '../header/Header.module.css';
import logoCalculator from './imgHeader/logo-calculator.png';
// active

function Header() {
  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg bg-light ${custom['navbarCustom']} ${custom['bgLightCustom']}`}
      >
        <div className="container-xxl">
          <a className="navbar-brand " href="">
            <img src={logoCalculator} height="60" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${custom['navLinkCustom']}`}
                  href="./main.html"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Мульти вычислители
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      id="header__borsch"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./borsch.html"
                    >
                      Борщ - расчет ингредиентов
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__pancake"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./pancakes.html"
                    >
                      Блины - расчет ингредиентов
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__pilaf"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./pilaf.html"
                    >
                      Плов - расчет ингредиентов
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__mortgage"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./mortgageCalculator.html"
                    >
                      Ипотечный - калькулятор
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__day"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./dailyCalculator.html"
                    >
                      Дневной - калькулятор
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__factsCats"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./factsAboutCats.html"
                    >
                      Факты о котах
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__energy"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./electricityCalculator.html"
                    >
                      Калькулятор стоимости электроэнергии
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__coldWater"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./waterCalculator.html"
                    >
                      Калькулятор стоимости холодной воды
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__todoList"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./dailyTodoList.html"
                    >
                      Ежедневный список дел
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__password"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./passwordGenerator"
                    >
                      Генератор паролей
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__notepad"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./notepad"
                    >
                      Блокнот
                    </a>
                  </li>
                  <li>
                    <a
                      id="header__informationIp"
                      className={`dropdown-item ${custom['dropdownItemCustom']}`}
                      href="./informationIp.html"
                    >
                      Информация об IP
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${custom['navLinkCustom']}`}
                  href="#animation"
                >
                  Викинг и лягушка
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${custom['navLinkCustom']}`}
                  href="#high-speed-click"
                >
                  Быстрый щелчок
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
