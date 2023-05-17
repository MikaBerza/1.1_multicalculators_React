//
//
import customGlob from "../../../globalFiles/borschPancakesPilaf.module.css";

function Description({ storyAboutDish }) {
  return (
    <div className="container-xxl">
      <h4 className={`${customGlob["h4Item"]}`}>{storyAboutDish}</h4>
    </div>
  );
}

export default Description;
