//
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper";

// ___стили страницы
import "../swiperStyle.css";
import custom from "../Main.module.css";

// ___локальные компоненты
import SwiperSlideCard from "./localComponents/SwiperSlideCard";

// ___импортируем изображения (1_section_calculatorHistory)
import fon101 from "./imgCalculatorHistory/1.01fon.jpg";
import fon102 from "./imgCalculatorHistory/1.02fon.jpg";
import fon103 from "./imgCalculatorHistory/1.03fon.jpg";
import fon104 from "./imgCalculatorHistory/1.04fon.jpg";

function CalculatorHistory() {
  return (
    <section className={custom["section-one"]}>
      <div className="container-xxl">
        {/* <!-- Slides --> */}
        <Swiper
          effect={"cube"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          loop={true}
          modules={[Navigation, EffectCube, Pagination]}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 0,
            shadowScale: 0,
          }}
          className={`${custom["swiperButtonPrev"]}`}
        >
          <SwiperSlide>
            <SwiperSlideCard
              image={fon101}
              cardTitle={"История создания калькулятора"}
              cardText={`Историю вычислительных машин и калькуляторов, традиционно начинают с
                суммирующей машины Паскаля, созданной в 1643 году Блезом Паскалем, и
                арифмометра Лейбница, изобретённого в 1673 году немецким математиком
                Готфридом Вильгельмом Лейбницем. В 1876 году русский математик П. Л.
                Чебышёв создал суммирующий аппарат с непрерывной передачей десятков.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideCard
              image={fon102}
              cardTitle={"История создания калькулятора"}
              cardText={`В 1881 году он же сконструировал к нему приставку для
                умножения и деления (арифмометр Чебышёва). Массовый выпуск
                механических устройств автоматизации счёта начался в конце XIX
                века: суммирующие машины, табуляторы и арифмометры стали
                реальным подспорьем в бухгалтерии, статистике и инженерных
                расчётах. Электронные клавишные вычислительные устройства были
                созданы в 1950-х годах с использованием сначала реле, а затем
                полупроводниковых компонентов.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideCard
              image={fon103}
              cardTitle={"История создания калькулятора"}
              cardText={`Первые такие приборы были размером с мебельную тумбу и весили
                  более сотни килограммов. Так, в 1957 году компанией Casio был
                  выпущен один из первых серийных калькуляторов 14-А. Он
                  выполнял четыре действия арифметики над 14-разрядными
                  десятичными числами. Конструкция использовала реле, весила 140
                  кг и была выполнена в виде стола с тумбой-вычислительным
                  блоком, клавиатурой и дисплеем, при работе потребляла 300 Вт.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideCard
              image={fon104}
              cardTitle={"История создания калькулятора"}
              cardText={`В 1961 году в Великобритании начат выпуск первого массового
                  полностью электронного калькулятора ANITA MK VIII с
                  11-разрядным индикатором на газоразрядных лампах, полной
                  клавиатурой для ввода числа + десять клавиш для ввода
                  множителя. В СССР в 1964 году выпущен первый отечественный
                  серийный электронный калькулятор «Вега», в США в том же году
                  появился массовый полностью транзисторный калькулятор FRIDEN
                  130 (4 регистра, обратная польская нотация).`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CalculatorHistory;
