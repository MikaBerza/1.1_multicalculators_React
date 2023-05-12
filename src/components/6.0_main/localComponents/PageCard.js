import { Link } from "react-router-dom";

import custom from "../Main.module.css";

function PageCard({ image, cardTitle, cardText, path, buttonName }) {
  return (
    <div className="col">
      <div className={`card h-100 ${custom["h100"]} ${custom["cardCustom"]}`}>
        <img className={custom["card-img-sectionTwo"]} src={image} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <Link
            to={path}
            className={`btn btn-primary ${custom["btnCustom"]} ${custom["btnPrimary"]}`}
          >
            {buttonName}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageCard;
