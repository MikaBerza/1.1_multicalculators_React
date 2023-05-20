// import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
// import { useState, useEffect, useCallback } from "react";
/*
Данные для входа на сайт
  Почта:
  Address@mail.ru
  Пароль:
  Adr78*#
  Чекбокас "Я не робот": true
*/
import "./Authentication.css";
import logo from "../header/imgHeader/logo-calculator.png";

import Heading from "./localComponents/Heading";
import InputField from "./localComponents/InputField";
import Check from "./localComponents/Check";
import Button from "./localComponents/Button";
import Description from "./localComponents/Description";

function Authentication() {
  const [valueEmail, setValueEmail] = useState("");
  const [styleEmail, setStyleEmail] = useState("form-control");

  const [valuePassword, setValuePassword] = useState("");
  const [stylePassword, setStylePassword] = useState("form-control");

  const [check, setCheck] = useState(false);
  const [styleCheck, setStyleCheck] = useState("form-check-input");

  const [flag, setFlag] = useState(false);

  function handleChangeEmail(event) {
    setValueEmail(event.target.value); // получаем текущий текст инпута(Email)
  }
  function handleChangePassword(event) {
    setValuePassword(event.target.value); // получаем текущий текст инпута(Password)
  }
  function handleChangeCheck() {
    setCheck(!check); // инвертируем стейт
  }

  const enterData = useCallback(() => {
    if (
      valueEmail === "Address@mail.ru" &&
      valuePassword === "Adr78*#" &&
      check === true
    ) {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input`);
      return true;
    } else if (
      valueEmail !== "Address@mail.ru" &&
      valuePassword !== "Adr78*#" &&
      check !== true
    ) {
      setStyleEmail(`form-control authentication__style-error`);
      setStylePassword(`form-control authentication__style-error`);
      setStyleCheck(`form-check-input authentication__style-error`);
      return false;
    } else if (
      valueEmail !== "Address@mail.ru" &&
      valuePassword !== "Adr78*#" &&
      check === true
    ) {
      setStyleEmail(`form-control authentication__style-error`);
      setStylePassword(`form-control authentication__style-error`);
      setStyleCheck(`form-check-input`);
      return false;
    } else if (
      valueEmail === "Address@mail.ru" &&
      valuePassword === "Adr78*#" &&
      check !== true
    ) {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input authentication__style-error`);
      return false;
    } else if (
      valueEmail === "Address@mail.ru" &&
      valuePassword !== "Adr78*#" &&
      check === true
    ) {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control authentication__style-error`);
      setStyleCheck(`form-check-input`);
      return false;
    } else if (
      valueEmail !== "Address@mail.ru" &&
      valuePassword === "Adr78*#" &&
      check === true
    ) {
      setStyleEmail(`form-control authentication__style-error`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input`);
      return false;
    } else if (
      valueEmail === "Address@mail.ru" &&
      valuePassword !== "Adr78*#" &&
      check !== true
    ) {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control authentication__style-error`);
      setStyleCheck(`form-check-input authentication__style-error`);
      return false;
    } else if (
      valueEmail !== "Address@mail.ru" &&
      valuePassword === "Adr78*#" &&
      check !== true
    ) {
      setStyleEmail(`form-control authentication__style-error`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input authentication__style-error`);
      return false;
    }
  }, [valueEmail, valuePassword, check]);

  useEffect(() => {
    if (enterData()) {
      setFlag(true);
      console.log("888");
    } else {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input`);
      setFlag(false);
      console.log("999");
    }
  }, [enterData]);

  return (
    <main className="authentication__container">
      <form className="authentication__wrapper">
        <Heading
          logo={logo}
          heading={"Вход в мульти вычислители"}
          requirement={"Заполните поля"}
        />
        <InputField
          typeAtr={"email"}
          classAtr={styleEmail}
          autoCompleteAtr={"off"}
          placeholderAtr={"Адрес эл.почты"}
          valueAtr={valueEmail}
          onChange={handleChangeEmail}
        />
        <InputField
          typeAtr={"password"}
          classAtr={stylePassword}
          autoCompleteAtr={"off"}
          placeholderAtr={"Пароль"}
          valueAtr={valuePassword}
          onChange={handleChangePassword}
        />
        <Check
          typeAtr={"checkbox"}
          classAtr={styleCheck}
          onCheck={check}
          onChangeCheck={handleChangeCheck}
          text={"Я не робот"}
        />
        <Button
          typeAtr={"button"}
          classAtr={"btn btn-primary authentication__btn"}
          onClick={enterData}
          text={"Войти"}
          flag={flag}
        />
        <Description
          classAtr={"authentication__description"}
          description={`Вычислители помогают автоматизировать бытовые домашние расчеты и немного развлечься`}
        />
      </form>
    </main>
  );
}

export default Authentication;
