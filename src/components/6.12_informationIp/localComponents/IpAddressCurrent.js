import custom from "../InformationIp.module.css";
//

function IpAddressCurrent({ heading, clickHandlerCurrent, currentValue }) {
  return (
    <div className={custom["container"]}>
      <div className={custom["content"]}>
        <h4>{heading}</h4>
        {/* <!-- <form action=""> --> */}
        <button
          className={custom["content__button"]}
          onClick={clickHandlerCurrent}
        >
          Получить
        </button>
        <input
          className={custom["content__input"]}
          disabled
          value={currentValue}
        />
        {/* <!-- </form> --> */}
      </div>
    </div>
  );
}

export default IpAddressCurrent;
