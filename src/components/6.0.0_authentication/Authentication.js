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
import userData from "./userData.json";
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

  /* Хук useCallback – возвращает мемоизированную версию колбэка, 
     который изменяется, если изменяются значения одной из зависимостей */

  const enterData = useCallback(() => {
    let newFlag = false;
    userData.map((note) => {
      if (
        valueEmail === note.email &&
        valuePassword === note.password &&
        check === note.check
      ) {
        setStyleEmail(`form-control`);
        setStylePassword(`form-control`);
        setStyleCheck(`form-check-input`);
        newFlag = true;
      } else if (
        valueEmail !== note.email &&
        valuePassword !== note.password &&
        check !== note.check
      ) {
        setStyleEmail(`form-control authentication__style-error`);
        setStylePassword(`form-control authentication__style-error`);
        setStyleCheck(`form-check-input authentication__style-error`);
        newFlag = false;
      } else if (
        valueEmail !== note.email &&
        valuePassword !== note.password &&
        check === note.check
      ) {
        setStyleEmail(`form-control authentication__style-error`);
        setStylePassword(`form-control authentication__style-error`);
        setStyleCheck(`form-check-input`);
        newFlag = false;
      } else if (
        valueEmail === note.email &&
        valuePassword === note.password &&
        check !== note.check
      ) {
        setStyleEmail(`form-control`);
        setStylePassword(`form-control`);
        setStyleCheck(`form-check-input authentication__style-error`);
        newFlag = false;
      } else if (
        valueEmail === note.email &&
        valuePassword !== note.password &&
        check === note.check
      ) {
        setStyleEmail(`form-control`);
        setStylePassword(`form-control authentication__style-error`);
        setStyleCheck(`form-check-input`);
        newFlag = false;
      } else if (
        valueEmail !== note.email &&
        valuePassword === note.password &&
        check === note.check
      ) {
        setStyleEmail(`form-control authentication__style-error`);
        setStylePassword(`form-control`);
        setStyleCheck(`form-check-input`);
        newFlag = false;
      } else if (
        valueEmail === note.email &&
        valuePassword !== note.password &&
        check !== note.check
      ) {
        setStyleEmail(`form-control`);
        setStylePassword(`form-control authentication__style-error`);
        setStyleCheck(`form-check-input authentication__style-error`);
        newFlag = false;
      } else if (
        valueEmail !== note.email &&
        valuePassword === note.password &&
        check !== note.check
      ) {
        setStyleEmail(`form-control authentication__style-error`);
        setStylePassword(`form-control`);
        setStyleCheck(`form-check-input authentication__style-error`);
        newFlag = false;
      }
      return null;
    });
    return newFlag;
  }, [valueEmail, valuePassword, check]);

  /* БЕЗ хука useEffect,
  обновление значения с помощью функции setFlag()  
  происходит только на следующем цикле рендеринга, 
  что влечет за собой, задержку перехода на главную страницу(приходится нажимать
  на кнопку 2 раза).
  С хуком useEffect, функция enterData() отрабатывает правильно. */

  useEffect(() => {
    if (enterData()) {
      setFlag(true);
    } else {
      setStyleEmail(`form-control`);
      setStylePassword(`form-control`);
      setStyleCheck(`form-check-input`);
      setFlag(false);
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
