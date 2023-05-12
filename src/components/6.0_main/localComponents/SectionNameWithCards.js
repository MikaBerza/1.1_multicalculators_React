//
//
import custom from "../Main.module.css";

function SectionNameWithCards({ sectionName }) {
  return (
    <div className={custom["heading"]}>
      <h2 className="card-title">{sectionName}</h2>
    </div>
  );
}

export default SectionNameWithCards;
