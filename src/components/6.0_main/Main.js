//
//
import "../../globalFiles/swiperScript";
import custom from "./Main.module.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import SwiperSlideCard from "./localComponents/SwiperSlideCard";
import SectionNameWithCards from "./localComponents/SectionNameWithCards";
import PageCard from "./localComponents/PageCard";

// ___импортируем изображения (1_section)
import fon101 from "./imgMain/1_section/1.01fon.jpg";
import fon102 from "./imgMain/1_section/1.02fon.jpg";

// ___импортируем изображения (2_section)
import borsch from "./imgMain/2_section/1.05borsch.png";
import pancakes from "./imgMain/2_section/1.06pancakes.png";
import pilaf from "./imgMain/2_section/1.07pilaf.png";
import ipotechCalck from "./imgMain/2_section/1.08IpotechCalck.jpg";
import kalendar from "./imgMain/2_section/1.09kalendar.jpg";
import factsAboutCats from "./imgMain/2_section/1.10factsAboutCats.jpg";
import electrika from "./imgMain/2_section/1.11electrika.jpg";
import xvs from "./imgMain/2_section/1.12XVS.jpg";
import todoList1 from "./imgMain/2_section/1.13todoList1.jpg";
import password from "./imgMain/2_section/1.14password.jpg";
import notepad from "./imgMain/2_section/1.15notepad.jpg";
import informationIp from "./imgMain/2_section/1.16informationIp.jpg";

function Main() {
  return (
    <>
      <Header />
      <main>
        {/* <!-----SectionOne---------------------------------------------------------------------------> */}
        <section className={custom["section-one"]}>
          {/* <!-- Контейнер слайдера --> */}
          <div className={`swiper ${custom["swiperCustom"]} container-xxl`}>
            {/* <!-- Дополнительная оболочка --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <SwiperSlideCard img={fon101} />
              <SwiperSlideCard img={fon102} />
              {/* <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${fon101})`,
                }}
              >
                <h1 className="card-title card-title-sectionOne ">
                  История создания калькулятора
                </h1>
                <p className="card-text card-text-sectionOne">
                  Историю вычислительных машин и калькуляторов, традиционно
                  начинают с суммирующей машины Паскаля, созданной в 1643 году
                  Блезом Паскалем, и арифмометра Лейбница, изобретённого в 1673
                  году немецким математиком Готфридом Вильгельмом Лейбницем. В
                  1876 году русский математик П. Л. Чебышёв создал суммирующий
                  аппарат с непрерывной передачей десятков.
                </p>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${fon101})`,
                }}
              >
                <h1 className="card-title card-title-sectionOne ">
                  История создания калькулятора
                </h1>
                <p className="card-text card-text-sectionOne">
                  В 1881 году он же сконструировал к нему приставку для
                  умножения и деления (арифмометр Чебышёва). Массовый выпуск
                  механических устройств автоматизации счёта начался в конце XIX
                  века: суммирующие машины, табуляторы и арифмометры стали
                  реальным подспорьем в бухгалтерии, статистике и инженерных
                  расчётах. Электронные клавишные вычислительные устройства были
                  созданы в 1950-х годах с использованием сначала реле, а затем
                  полупроводниковых компонентов.
                </p>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${fon101})`,
                }}
              >
                <h1 className="card-title card-title-sectionOne ">
                  История создания калькулятора
                </h1>
                <p className="card-text card-text-sectionOne">
                  Первые такие приборы были размером с мебельную тумбу и весили
                  более сотни килограммов. Так, в 1957 году компанией Casio был
                  выпущен один из первых серийных калькуляторов 14-А. Он
                  выполнял четыре действия арифметики над 14-разрядными
                  десятичными числами. Конструкция использовала реле, весила 140
                  кг и была выполнена в виде стола с тумбой-вычислительным
                  блоком, клавиатурой и дисплеем, при работе потребляла 300 Вт.
                </p>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${fon101})`,
                }}
              >
                <h1 className="card-title card-title-sectionOne ">
                  История создания калькулятора
                </h1>
                <p className="card-text card-text-sectionOne">
                  В 1961 году в Великобритании начат выпуск первого массового
                  полностью электронного калькулятора ANITA MK VIII с
                  11-разрядным индикатором на газоразрядных лампах, полной
                  клавиатурой для ввода числа + десять клавиш для ввода
                  множителя. В СССР в 1964 году выпущен первый отечественный
                  серийный электронный калькулятор «Вега», в США в том же году
                  появился массовый полностью транзисторный калькулятор FRIDEN
                  130 (4 регистра, обратная польская нотация).
                </p>
              </div> */}
            </div>
            {/* <!-- Разбивка на страницы --> */}
            <div className="swiper-pagination"></div>
            {/* <!-- Навигационные кнопки --> */}
            <div className="swiper-button-prev"></div>
            <div className={`swiper-button-next ${["swiperButtonNext"]}`}></div>
          </div>
        </section>

        {/* <!-----SectionTwo---------------------------------------------------------------------------> */}
        <section className="section-two container-xxl">
          <SectionNameWithCards sectionName={"Мульти вычислители"} />
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <PageCard
              image={borsch}
              cardTitle={"Борщ - расчет ингредиентов"}
              cardText={
                "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
              }
              path={""}
              buttonName={"Перейти"}
            />

            <PageCard
              image={pancakes}
              cardTitle={"Блины - расчет ингредиентов"}
              cardText={
                "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={pilaf}
              cardTitle={"Плов - расчет ингредиентов"}
              cardText={
                "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={ipotechCalck}
              cardTitle={"Ипотечный - калькулятор"}
              cardText={
                "Вычисляет аннуитетный и дифференцированный платеж при погашении займа."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={kalendar}
              cardTitle={"Дневной - калькулятор"}
              cardText={
                "Вычисляет количество дней недели между датами, позволяя спланировать свои задачи."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={factsAboutCats}
              cardTitle={"Факты о котах"}
              cardText={
                "Подборка фактов позволит вам узнать много нового про наших домашних любимцев."
              }
              path={"/6.6_factsAboutCats/FactsAboutCats"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={electrika}
              cardTitle={"Калькулятор стоимости электроэнергии"}
              cardText={
                "Вычисляет расход и стоимость электроэнергии, потребляемой пользователем с учетом времени работы прибора."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={xvs}
              cardTitle={"Калькулятор стоимости холодной воды"}
              cardText={
                "Вычисляет расход и стоимость холодного водоснабжения, с учетом времени работы прибора."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={todoList1}
              cardTitle={"Ежедневный список дел"}
              cardText={
                "Позволяет записывать список запланированных дневных дел, редактировать, помечать дела сделанными и удалять их."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={password}
              cardTitle={"Генератор паролей"}
              cardText={
                "Генерирует пароль из цифр, букв и специальных символов заданной длины."
              }
              path={"/6.10_passwordGenerator/PasswordGenerator"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={notepad}
              cardTitle={"Блокнот"}
              cardText={
                "Блокнот позволяет держать все записи в одном месте и возвращаться к ним спустя время."
              }
              path={"./borsch.html"}
              buttonName={"Перейти"}
            />
            <PageCard
              image={informationIp}
              cardTitle={"Информация об IP"}
              cardText={
                "Позволяет получить ваш текущий IP-адрес и информацию о нем и указанном IP."
              }
              path={"/6.12_informationIp/InformationIp"}
              buttonName={"Перейти"}
            />
            {/* and Card */}
          </div>
        </section>

        {/* <!-----SectionThree---------------------------------------------------------------------------> */}
        <section className="section-free container-xxl">
          <div className="section-free-heading">
            <h2 className="card-title">
              <a name="animation"></a>Викинг и лягушка
            </h2>
            <h5>
              Для запуска анимации выполните двойной клик по значку{" "}
              <img
                className="img-symbol"
                src="./images/1.27iconsStart.png"
                alt="Start1"
              />
            </h5>
            <h5>
              Для остановки анимации выполните одинарный клик по значку{" "}
              <img
                className="img-symbol"
                src="./images/1.28iconsStop.png"
                alt="Stop1"
              />
            </h5>
          </div>
          <div className="section-free-block">
            <img
              id="imgSectionThree"
              className="container-xxl"
              src="./images/1.17viking.png"
              alt=""
            />
            <button
              id="btnSectionThreeStart"
              type="button"
              className="btn btn-sectionThre-play"
            >
              <img src="./images/1.27iconsStart.png" alt="Start1" />
            </button>
            <button
              id="btnSectionThreeStop"
              type="button"
              className="btn btn-sectionThre-pause"
            >
              <img src="./images/1.28iconsStop.png" alt="Stop1" />
            </button>
          </div>
        </section>

        {/* <!-----SectionFour---------------------------------------------------------------------------> */}
        <section className="section-four">
          <div className="oneBlock-section-four container-xxl">
            <h2 className="card-title">
              <a name="high-speed-click"></a>Быстрый щелчок
            </h2>
          </div>
          <div className="twoBlock-section-three container-xxl">
            <h4 className="h4__item">
              Вычисляет скорость кликов, за 30 - секундный интервал времени.
              Таймер обратного отсчета, запускается после нажатия кнопки
              "Click".
            </h4>
          </div>
          <div className="threeBlock-section-four">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Таймер</th>
                  <td id="timerSectionFour">30</td>
                  <td>сек</td>
                </tr>
                <tr>
                  <th scope="row">Счетчик</th>
                  <td id="counterSectionFour">0</td>
                  <td>клик</td>
                </tr>
                <tr>
                  <th scope="row">Результат</th>
                  <td id="resultSectionFour">0</td>
                  <td>клик/сек</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="fourBlock-section-four">
            <button
              id="btnClickSectionFour"
              className="btn btn-success btn__click border-1"
              type="button"
            >
              Click
              <img
                className="img-section-four"
                src="./images/1.30iconClick.png"
                alt=""
              />
            </button>
            <button
              id="btnRebootSectionFour"
              className="btn btn-success btn__reboot"
              type="button"
            >
              <img
                className="img-section-four"
                src="./images/1.31iconUpdate.png"
                alt=""
              />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
