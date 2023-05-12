// 
// 

import custom from "../Main.module.css";

function SwiperSlideCard({ img }) {
  return (
    <div
      className={`swiper-slide ${custom["swiperSlide"]}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <h1 className={`card-title ${custom["card-title-sectionOne"]}`}>
        История создания калькулятора
      </h1>
      <p className={`card-text ${custom["card-text-sectionOne"]}`}>
        Историю вычислительных машин и калькуляторов, традиционно начинают с
        суммирующей машины Паскаля, созданной в 1643 году Блезом Паскалем, и
        арифмометра Лейбница, изобретённого в 1673 году немецким математиком
        Готфридом Вильгельмом Лейбницем. В 1876 году русский математик П. Л.
        Чебышёв создал суммирующий аппарат с непрерывной передачей десятков.
      </p>
    </div>
  );
}

export default SwiperSlideCard;
