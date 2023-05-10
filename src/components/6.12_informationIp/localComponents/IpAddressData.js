import custom from "../InformationIp.module.css";
//
function IpAddressData({
  heading,
  clickHandlerShowIpData,
  currentDataIpValue,
  handleChange,
  ipData,
}) {
  return (
    <div className={custom["container"]}>
      <div className={custom["content"]}>
        <h4>{heading}</h4>
        <button
          className={custom["content__button"]}
          onClick={clickHandlerShowIpData}
        >
          Отправить
        </button>
        <input
          className={custom["content__input"]}
          type="text"
          placeholder="введите IP-адрес"
          value={currentDataIpValue}
          onChange={handleChange}
        />
        <table className={custom["content__table"]}>
          <tbody>{ipData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default IpAddressData;
