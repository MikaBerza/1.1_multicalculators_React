//
//

import iconWhatsapp from "./imgFooter/iconWhatsapp.png";
import iconTelegram from "./imgFooter/iconTelegram.png";
import iconInstagram from "./imgFooter/iconInstagram.png";
import iconsTikTok from "./imgFooter/iconsTikTok.png";
import iconsGithub from "./imgFooter/iconsGithub.png";

import IconTitle from "./localComponents/IconTitle";
import Icon from "./localComponents/Icon";
import SectionTitle from "./localComponents/SectionTitle";
import DevelopmentStage from "./localComponents/DevelopmentStage";
import SectionItemTitle from "./localComponents/SectionItemTitle";
import Copyright from "./localComponents/Copyright";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted footerCustom">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container-xxl">
        <div>
          <IconTitle iconTitle={"Социальные сети:"} />
          <Icon link={"https://www.whatsapp.com/"} pathLogo={iconWhatsapp} />
          <Icon link={"https://web.telegram.org/k/"} pathLogo={iconTelegram} />
          <Icon link={"https://instagram-my.ru"} pathLogo={iconInstagram} />
          <Icon link={"https://www.tiktok.com/"} pathLogo={iconsTikTok} />
          <Icon link={"https://github.com/"} pathLogo={iconsGithub} />
        </div>
      </section>

      <div className="container-xxl text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <SectionTitle sectionTitle={"Разработка сайтов"} />
            <DevelopmentStage stage={"Эскизный проект"} />
            <DevelopmentStage stage={"Дизайнерские решения"} />
            <DevelopmentStage stage={"Верстка сайта"} />
            <DevelopmentStage stage={"Программирование"} />
            <DevelopmentStage stage={"Наполнение контентом и тестирование"} />
            <DevelopmentStage stage={"Выпуск"} />
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <SectionTitle sectionTitle={"Инструменты"} />
            <SectionItemTitle
              link={"https://balsamiq.com/wireframes/"}
              title={"BalsamiqMockups"}
            />
            <SectionItemTitle
              link={
                "https://www.figma.com/files/recent?fuid=1114807420115018183"
              }
              title={"Figma"}
            />
            <SectionItemTitle
              link={"http://htmlbook.ru/"}
              title={"HTML && CSS"}
            />
            <SectionItemTitle
              link={"https://ru.legacy.reactjs.org/"}
              title={"React"}
            />
            <SectionItemTitle
              link={"https://browsershots.org/"}
              title={"internet && Browsershots"}
            />
            <SectionItemTitle
              link={
                "https://www.consultant.ru/law/podborki/akt_peredachi_sajta/"
              }
              title={"Передача заказчику"}
            />
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <SectionTitle sectionTitle={"Контакты"} />
            <SectionItemTitle
              link={
                "https://yandex.ru/maps/14/tver/geo/naberezhnaya_stepana_razina/8001632/?ll=35.920722%2C56.859018&z=16"
              }
              title={"Тверь, набережная Степана Разина"}
            />
            <SectionItemTitle
              link={
                "https://yandex.ru/maps/213/moscow/geo/nizhnyaya_krasnoselskaya_ulitsa/10049867/?ll=37.671112%2C55.776001&z=16"
              }
              title={"Москва, Нижняя Красносельская"}
            />
            <SectionItemTitle
              link={"mailto:e.mail.ru"}
              title={"TverwebsiteDesign01@mail.ru"}
            />
            <SectionItemTitle
              link={"mailto:e.mail.ru"}
              title={"MscwebsiteDesign01@mail.ru"}
            />
            <SectionItemTitle
              link={"tel:+79874565432"}
              title={"+7 958 456 54-32 Tver"}
            />
            <SectionItemTitle
              link={"tel:+79874565432"}
              title={"+7 999 456 54-32 Msc"}
            />
          </div>
        </div>
      </div>

      <Copyright
        link={"https://github.com/MikaBerza"}
        linkText={"MikaBerza"}
        copyrightText={"© 2022 Copyright:"}
      />
    </footer>
  );
}
// SectionTitle (название раздела)
// SectionItemTitle (название элемента раздела)
export default Footer;
