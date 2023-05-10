import React, { useEffect, useState } from "react";
import custom from "./FactsAboutCats.module.css";
import imgCats from "./imgFactsAboutCats/1.41defaultCat.jpg";

function FactsAboutCats() {
  const [textCat, setTextCat] = useState("");
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const requestDate = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setTextCat(data.fact);
        return data;
      } catch (error) {
        // console.log(error)
        return error;
      }
    };
    requestDate();
  }, [flag]);

  function handleClickImage() {
    return setFlag(!flag);
  }

  return (
    <main>
      <div className={custom["container"]}>
        <div className={custom["card"]}>
          <h3 className={custom["card__header"]}>Facts about cats</h3>
          <p className={custom["card__fact"]}>{textCat}</p>
          <img
            onClick={handleClickImage}
            className={custom["card__img"]}
            src={imgCats}
            alt="Cat"
          />
        </div>
      </div>
    </main>
  );
}

export default FactsAboutCats;
