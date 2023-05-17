//
//
import custom from "../Main.module.css";

// ___локальные компоненты
import SectionName from "../../reusableComponents/6.0/SectionName";
import PageCard from "./localComponents/PageCard";

// ___получим массив ссылок на изображения для (2_section_multicalculatorCards)
// импортируем функцию, которая вернет массив ссылок на изображения из указанной папки
import getLinksToImages from "../../../globalFiles/getLinksToImages";

function MulticalculatorCards() {
  // записываем массив ссылок на изображения из указанной папки
  // в константу linksToTheCardImage
  const linksToTheCardImage = getLinksToImages(
    require.context(
      "./imgMulticalculatorCards",
      true,
      /\.(png|svg|jpg|jpeg|gif)$/i
    )
  );

  return (
    <section className="section-two container-xxl">
      <div className={custom["heading"]}>
        <SectionName sectionName={"Мульти вычислители"} />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <PageCard
          image={linksToTheCardImage[0]}
          cardTitle={"Борщ - расчет ингредиентов"}
          cardText={
            "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
          }
          path={"/6.1_borsch/Borsch"}
          buttonName={"Перейти"}
        />

        <PageCard
          image={linksToTheCardImage[1]}
          cardTitle={"Блины - расчет ингредиентов"}
          cardText={
            "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
          }
          path={"/6.2_pancakes/Pancakes"}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[2]}
          cardTitle={"Плов - расчет ингредиентов"}
          cardText={
            "Вычисляет требуемое количество продуктов для приготовления указанного числа порций."
          }
          path={"/6.3_pilaf/Pilaf"}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[3]}
          cardTitle={"Ипотечный - калькулятор"}
          cardText={
            "Вычисляет аннуитетный и дифференцированный платеж при погашении займа."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[4]}
          cardTitle={"Дневной - калькулятор"}
          cardText={
            "Вычисляет количество дней недели между датами, позволяя спланировать свои задачи."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[5]}
          cardTitle={"Факты о котах"}
          cardText={
            "Подборка фактов позволит вам узнать много нового про наших домашних любимцев."
          }
          path={"/6.6_factsAboutCats/FactsAboutCats"}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[6]}
          cardTitle={"Калькулятор стоимости электроэнергии"}
          cardText={
            "Вычисляет расход и стоимость электроэнергии, потребляемой пользователем с учетом времени работы прибора."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[7]}
          cardTitle={"Калькулятор стоимости холодной воды"}
          cardText={
            "Вычисляет расход и стоимость холодного водоснабжения, с учетом времени работы прибора."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[8]}
          cardTitle={"Ежедневный список дел"}
          cardText={
            "Позволяет записывать список запланированных дневных дел, редактировать, помечать дела сделанными и удалять их."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[9]}
          cardTitle={"Генератор паролей"}
          cardText={
            "Генерирует пароль из цифр, букв и специальных символов заданной длины."
          }
          path={"/6.10_passwordGenerator/PasswordGenerator"}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[10]}
          cardTitle={"Блокнот"}
          cardText={
            "Блокнот позволяет держать все записи в одном месте и возвращаться к ним спустя время."
          }
          path={""}
          buttonName={"Перейти"}
        />
        <PageCard
          image={linksToTheCardImage[11]}
          cardTitle={"Информация об IP"}
          cardText={
            "Позволяет получить ваш текущий IP-адрес и информацию о нем и указанном IP."
          }
          path={"/6.12_informationIp/InformationIp"}
          buttonName={"Перейти"}
        />
      </div>
    </section>
  );
}

export default MulticalculatorCards;
