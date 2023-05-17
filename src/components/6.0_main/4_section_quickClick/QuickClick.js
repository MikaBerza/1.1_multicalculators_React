import { useState, useEffect } from "react";
//
//
// ___стили страницы
import custom from "../Main.module.css";

// ___локальные компонент
import SectionName from "../../reusableComponents/6.0/SectionName";
import Instruction from "./localComponents/Instruction";
import Table from "./localComponents/Table";
import Button from "../../reusableComponents/6.0/Button";

// ___импортируем изображения (4_section_quickClick)
import iconClick130 from "./imgQuickClick/1.30iconClick.png";
import iconUpdate131 from "./imgQuickClick/1.31iconUpdate.png";

function QuickClick() {
  /* Инициализируем константу (initialValueTimeCounter)
    начальное значение счетчика времени и присваиваем ей значение 30
    (это будет 30 секунд) */
  const initialValueTimeCounter = 30;
  /* Инициализируем константу (initialValueClickCounter)
    начальное значение счетчика кликов и присваиваем ей значение 0 */
  const initialValueClickCounter = 0;
  /* Инициализируем константу (initialValueResult)
    начальное значение результата и присваиваем ей значение 0 */
  const initialValueResult = 0;

  const [timeCounter, setTimeCounter] = useState(initialValueTimeCounter);
  const [clickCounter, setClickCounter] = useState(initialValueClickCounter);
  /* Возвращаемое intervalID числовое ненулевое значение, которое идентифицирует таймер, 
  созданный вызовом setInterval(); 
  это значение может быть передано clearInterval() для отмены интервала*/
  const [intervalId, setIntervalId] = useState(null);
  const [result, setResult] = useState(initialValueResult);
  const [flag, setFlag] = useState(false);

  // Функция запускает таймер
  function startTimer() {
    // проверка на то, что интервал не запущен
    if (!intervalId) {
      const timer = setInterval(() => {
        setTimeCounter((prevCount) => prevCount - 1);
      }, 1000);
      setIntervalId(timer);
    }
    startClick();
  }

  // Функция запускает клики по кнопке и счетчик
  function startClick() {
    setClickCounter((prevCount) => prevCount + 1);
  }

  if (timeCounter === 0) {
    // блокируем кнопку
    setFlag(true);
    setIntervalId(null);
    // отменяет выполнение setInterval (останавливаем его)
    clearInterval(intervalId);
    // устанавливаем значение "время вышло"
    setTimeCounter("time's up");
    // получаем результат кол-ва кликов в секунду
    setResult((clickCounter / initialValueTimeCounter).toFixed(2));
  }

  // Функция обновляет таймер (устанавливает значения в исходные положения)
  function updateTimer() {
    // устанавливаем исходное значение таймера
    setTimeCounter(initialValueTimeCounter);
    setClickCounter(initialValueClickCounter);
    setResult(initialValueResult);
    setIntervalId(null);
    setFlag(false);
  }

  /* Хук useEffect используется для удаления интервала, 
  когда компонент будет размонтирован или когда интервал будет изменен 
  (например, при остановке) */
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <section className={`${custom["section-four"]}`}>
      <div className="container-xxl">
        <SectionName sectionName={"Быстрый щелчок"} />
      </div>
      <div className="container-xxl">
        <Instruction
          text={`Вычисляет скорость кликов, за 30 - секундный интервал времени. Таймер
          обратного отсчета, запускается после нажатия кнопки "Click".`}
        />
      </div>
      <Table
        timeCounter={timeCounter}
        clickCounter={clickCounter}
        result={result}
      />
      <div>
        <Button
          buttonStyle={"btnSuccess"}
          imgStyle={`${custom["iconBtnSuccess"]}`}
          text={"Click"}
          handleClick={startTimer}
          icon={iconClick130}
          alternativeText={"Click"}
          changeDisabled={flag}
        />
        <Button
          buttonStyle={"btnSuccess"}
          imgStyle={`${custom["iconBtnSuccess"]}`}
          handleClick={updateTimer}
          icon={iconUpdate131}
          alternativeText={"Update"}
        />
      </div>
    </section>
  );
}

export default QuickClick;
