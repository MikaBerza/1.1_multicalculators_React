//
//
import custom from "../../Main.module.css";

function SwiperSlideCard({ image, cardTitle, cardText }) {
  return (
    <div
      className={`swiper ${custom["swiperCustom"]} ${custom["swiperButtonNext"]}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className={`card-title ${custom["card-title-sectionOne"]}`}>
        {cardTitle}
      </h1>
      <p className={`card-text ${custom["card-text-sectionOne"]}`}>
        {cardText}
      </p>
    </div>
  );
}

export default SwiperSlideCard;
