import { useState } from "react";

import custom from "../footer/Footer.module.css";

import iconWhatsapp from "./imgFooter/iconWhatsapp.png";
import iconTelegram from "./imgFooter/iconTelegram.png";
import iconInstagram from "./imgFooter/iconInstagram.png";
import iconsTikTok from "./imgFooter/iconsTikTok.png";
import iconsGithub from "./imgFooter/iconsGithub.png";

function Footer() {
  const [linksToSocialNetworks, setLinksToSocialNetworks] = useState([
    { nameIcon: iconWhatsapp, link: "https://www.whatsapp.com/" },
    { nameIcon: iconTelegram, link: "https://web.telegram.org/k/" },
    { nameIcon: iconInstagram, link: "https://instagram-my.ru" },
    { nameIcon: iconsTikTok, link: "https://www.tiktok.com/" },
    { nameIcon: iconsGithub, link: "https://github.com/" },
  ]);

  return (
    <footer className="text-center text-lg-start bg-light text-muted footerCustom">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container-xxl">
        <div>
          <div style={{ paddingBottom: "15px" }}>Cоциальные сети:</div>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            className="me-4 text-reset"
          >
            <img
              className={custom["footerIcon"]}
              src={iconWhatsapp}
              alt="icon"
            />
          </a>
          <a
            href="https://web.telegram.org/k/"
            target="_blank"
            className="me-4 text-reset"
          >
            <img
              className={custom["footerIcon"]}
              src={iconTelegram}
              alt="icon"
            />
          </a>
          <a
            href="https://instagram-my.ru"
            target="_blank"
            className="me-4 text-reset"
          >
            <img
              className={custom["footerIcon"]}
              src={iconInstagram}
              alt="icon"
            />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            className="me-4 text-reset"
          >
            <img
              className={custom["footerIcon"]}
              src={iconsTikTok}
              alt="icon"
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="me-4 text-reset"
          >
            <img
              className={custom["footerIcon"]}
              src={iconsGithub}
              alt="icon"
            />
          </a>
        </div>
      </section>

      <section>
        <div className="container-xxl text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="#"></i>Проектирование сайтов
              </h6>
              <p>Эскизный проект</p>
              <p>Дизайнерские решения</p>
              <p>Верстка сайта</p>
              <p>Программная часть</p>
              <p>Наполнение контентом и тестирование</p>
              <p>Выпуск</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Инструменты</h6>
              <p>
                <a
                  href="https://balsamiq.com/wireframes/"
                  target="_blank"
                  className="text-reset"
                >
                  BalsamiqMockups
                </a>
              </p>
              <p>
                <a
                  href="https://www.figma.com/files/recent?fuid=1114807420115018183"
                  target="_blank"
                  className="text-reset"
                >
                  Figma
                </a>
              </p>
              <p>
                <a
                  href="http://htmlbook.ru/"
                  target="_blank"
                  className="text-reset"
                >
                  HTML && CSS
                </a>
              </p>
              <p>
                <a
                  href="https://262.ecma-international.org/"
                  target="_blank"
                  className="text-reset"
                >
                  JavaScript
                </a>
              </p>
              <p>
                <a
                  href="https://browsershots.org/"
                  target="_blank"
                  className="text-reset"
                >
                  internet && Browsershots
                </a>
              </p>
              <p>Передача заказчику</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
              <p>
                <a
                  href="https://yandex.ru/maps/14/tver/geo/naberezhnaya_stepana_razina/8001632/?ll=35.920722%2C56.859018&z=16"
                  target="_blank"
                  className="text-reset fas fa-home me-3"
                >
                  Тверь, набережная Степана Разина
                </a>
              </p>
              <p>
                <a
                  href="https://yandex.ru/maps/213/moscow/geo/nizhnyaya_krasnoselskaya_ulitsa/10049867/?ll=37.671112%2C55.776001&z=16"
                  target="_blank"
                  className="text-reset fas fa-home me-3"
                >
                  Москва, Нижняя Красносельская
                </a>
              </p>
              <p>
                <a
                  href="mailto:e.mail.ru"
                  className="text-reset fas fa-home me-3"
                >
                  TverwebsiteDesign01@mail.ru
                </a>
              </p>
              <p>
                <a
                  href="mailto:e.mail.ru"
                  className="text-reset fas fa-home me-3"
                >
                  MscwebsiteDesign01@mail.ru
                </a>
              </p>
              <p>
                <a
                  href="tel:+79874565432"
                  className="text-reset fas fa-home me-3"
                >
                  +7 958 456 54-32 Tver
                </a>
              </p>
              <p>
                <a
                  href="tel:+79874565432"
                  className="text-reset fas fa-home me-3"
                >
                  +7 999 456 54-32 Msc
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#!">
          WebsiteDesign.ru
        </a>
      </div>
    </footer>
  );
}

export default Footer;
