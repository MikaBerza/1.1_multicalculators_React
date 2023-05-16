import { useState, useEffect } from "react";
//
//
// ___стили страницы
import custom from "../Main.module.css";

// ___локальные компонент
import SectionName from "../reusableComponents/SectionName";
import Instruction from "./localComponents/Instruction";
import ShowAnimation from "./localComponents/ShowAnimation";
import Button from "../reusableComponents/Button";

// ___импортируем изображения для (3_section_button_animation)
import iconsStart127 from "./imgVikingAndFrog/button_animation/1.27iconsStart.png";
import iconsStop128 from "./imgVikingAndFrog/button_animation/1.28iconsStop.png";

// ___получим массив ссылок на изображения для (3_section_vikingAndFrog)
// импортируем функцию, которая вернет массив ссылок на изображения из указанной папки
import getLinksToImages from "../../../globalFiles/getLinksToImages";

function VikingAndFrog() {
  // записываем массив ссылок на изображения из указанной папки
  // в константу linksToTheCardImage
  const linksToTheVikingImage = getLinksToImages(
    require.context(
      "./imgVikingAndFrog/viking_animation",
      true,
      /\.(png|svg|jpg|jpeg|gif)$/i
    )
  );

  const [count, setCount] = useState(0);
  /* Возвращаемое intervalID числовое ненулевое значение, которое идентифицирует таймер, 
  созданный вызовом setInterval(); 
  это значение может быть передано clearInterval() для отмены интервала*/
  const [intervalId, setIntervalId] = useState(null);

  // Функция для запуска анимации
  const startAnimation = () => {
    // проверка на то, что интервал не запущен
    if (!intervalId) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 300);
      setIntervalId(timer);
    }
  };

  if (count === 10) {
    // сбрасываем счетчик на 0
    setCount(0);
    setIntervalId(null);
    // отменяет выполнение setInterval (останавливаем его)
    clearInterval(intervalId);
  }

  // Функция для остановки анимации
  const stopAnimation = () => {
    setIntervalId(null);
    // отменяет выполнение setInterval (останавливаем его)
    clearInterval(intervalId);
  };

  /* Хук useEffect используется для удаления интервала, 
  когда компонент будет размонтирован или когда интервал будет изменен 
  (например, при остановке) */
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <section className="section-free container-xxl">
      <div className={`${custom["section-free-heading"]}`}>
        <SectionName sectionName={"Викинг и лягушка"} />
        <Instruction
          text={"Для запуска анимации выполните одинарный клик по значку "}
          icon={iconsStart127}
          alternativeText={"Start"}
        />
        <Instruction
          text={"Для остановки анимации выполните одинарный клик по значку "}
          icon={iconsStop128}
          alternativeText={"Stop"}
        />
      </div>
      <div className={`${custom["section-free-block"]}`}>
        <ShowAnimation
          linksToTheVikingImage={linksToTheVikingImage}
          count={count}
        />
        <Button
          buttonStyle={"btn-sectionThre-play"}
          handleClick={startAnimation}
          icon={iconsStart127}
          alternativeText={"Start1"}
        />
        <Button
          buttonStyle={"btn-sectionThre-pause"}
          handleClick={stopAnimation}
          icon={iconsStop128}
          alternativeText={"Stop1"}
        />
      </div>
    </section>
  );
}

export default VikingAndFrog;
