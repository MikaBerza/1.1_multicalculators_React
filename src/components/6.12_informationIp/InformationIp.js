//
//
import React, { useEffect, useState } from "react";

import { v4 } from "uuid";
import custom from "./InformationIp.module.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
//
import IpAddressCurrent from "./localComponents/IpAddressCurrent.js";
import IpAddressData from "./localComponents/IpAddressData.js";

function InformationIp() {
  // (currentIpValue)строка, тело ответа от сервера c текущим IP адресом
  const [currentIpValue, setCurrentIpValue] = useState("");
  // (currentValue)строка, для установки значения в инпут текущего IP адреса
  const [currentValue, setCurrentValue] = useState("");

  // (currentDataIpValue) строка текущего значения инпут, куда вводиться IP адрес
  const [currentDataIpValue, setCurrentDataIpValue] = useState("");
  // (ipData) объект с данными, которые будут выводиться в табличной форме
  const [ipData, setIpData] = useState(null);

  // (dataIpKey)массив ключей из полученного объекта с данными об ip-адресе
  const [dataIpKey, setDataIpKey] = useState([]);
  // (dataIpValue)массив значений из полученного объекта с данными об ip-адресе
  const [dataIpValue, setDataIpValue] = useState([]);

  /* API для получения своего IP ('https://api.ipify.org?format=json')
   const url_IP = 'https://api.ipify.org?format=json'; */
  /* API для получения информации об IP (http://ip-api.com/json/161.185.160.93)
   (вместо-(161.185.160.93) подставить свой/чужой IP)
   const url_data_IP = `http://ip-api.com/json/161.185.160.93`; */

  useEffect(() => {
    // Функция для получения текущего IP адреса
    const getCurrentIPAddress = async () => {
      try {
        // метод fetch возвращая обещание (promise)
        // ответ от сервера c текущим IP адресом
        const response = await fetch("https://api.ipify.org?format=json");
        // response.json() – декодирует ответ в формате JSON
        // тело ответа от сервера c текущим IP адресом
        const date = await response.json();
        setCurrentIpValue(date.ip);
        // console.log(currentIpValue);
        return date;
      } catch (error) {
        return error;
      }
    };
    getCurrentIPAddress();
  }, [currentIpValue]);

  /* по клику на кнопку устанавливаем в input  
     полученное значение из функции (getCurrentIPAddress) */
  function clickHandlerCurrent() {
    setCurrentValue(currentIpValue);
  }

  // Функция указывает на значение input(Получение данных об IP-адресе)
  function handleChange(event) {
    setCurrentDataIpValue(event.target.value);
  }

  useEffect(() => {
    // Функция для получения данных IP-адреса
    const getDataIP = async () => {
      try {
        // метод fetch возвращая обещание (promise)
        // ответ от сервера c текущими данными по IP-адресу
        const response = await fetch(
          `http://ip-api.com/json/${currentDataIpValue}`
        );
        // response.json() – декодирует ответ в формате JSON
        // тело ответа от сервера c текущими данными по IP-адресу
        const date = response.json();
        date.then((res) => {
          // получаем массив ключей объекта
          setDataIpKey(Object.keys(res));
          // получаем массив значений объекта
          setDataIpValue(Object.values(res));
        });
        return date;
      } catch (error) {
        return error;
      }
    };
    getDataIP();
  }, [currentDataIpValue]);

  // функция выводит данные от ip адресе
  /* по клику на кнопку выведем данные   
     об ip адресе в табличном виде */
  function clickHandlerShowIpData() {
    if (currentDataIpValue.length !== 0) {
      const data = dataIpKey.map((note, index) => {
        return (
          <tr key={v4()}>
            <td className={custom["content__table-name"]}>{note}</td>
            <td className={custom["content__table-meaning"]}>
              {dataIpValue[index]}
            </td>
          </tr>
        );
      });
      setIpData(data);
    } else {
      setIpData(null);
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className={custom["section-one"]}>
          <IpAddressCurrent
            heading={"Получение текущего IP-адреса"}
            clickHandlerCurrent={clickHandlerCurrent}
            currentValue={currentValue}
          />
          <IpAddressData
            heading={"Получение данных об IP-адресе"}
            clickHandlerShowIpData={clickHandlerShowIpData}
            currentDataIpValue={currentDataIpValue}
            handleChange={handleChange}
            ipData={ipData}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default InformationIp;
