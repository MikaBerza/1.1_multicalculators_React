// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from "formik";
// import { useState, useEffect, useCallback } from "react";
// /*
// Данные для входа на сайт
//   Почта:
//   Address@mail.ru
//   Пароль:
//   Adr78*#
//   Чекбокас "Я не робот": true
// */
import "./Authentication.css";
import userData from "./userData.json";
import logo from "../header/imgHeader/logo-calculator.png";

import Heading from "./localComponents/Heading";
// import InputField from "./localComponents/InputField";
// import Check from "./localComponents/Check";
import Button from "./localComponents/Button";
import Description from "./localComponents/Description";

// function Authentication() {
//   const [valueEmail, setValueEmail] = useState("");
//   const [styleEmail, setStyleEmail] = useState("form-control");

//   const [valuePassword, setValuePassword] = useState("");
//   const [stylePassword, setStylePassword] = useState("form-control");

//   const [check, setCheck] = useState(false);
//   const [styleCheck, setStyleCheck] = useState("form-check-input");

//   const [flag, setFlag] = useState(false);

//   function handleChangeEmail(event) {
//     setValueEmail(event.target.value); // получаем текущий текст инпута(Email)
//   }
//   function handleChangePassword(event) {
//     setValuePassword(event.target.value); // получаем текущий текст инпута(Password)
//   }
//   function handleChangeCheck() {
//     setCheck(!check); // инвертируем стейт
//   }

//   /*
//   {
//   "Address@mail.ru": {
//     "email": "Address@mail.ru",
//     "password": "Adr78*#",
//     "check": true
//   }
// }
//   */

//   /* Хук useCallback – возвращает мемоизированную версию колбэка,
//      который изменяется, если изменяются значения одной из зависимостей */

//   const enterData = useCallback(() => {
//     let newFlag = false;
//     userData.map((note) => {
//       if (
//         valueEmail === note.email &&
//         valuePassword === note.password &&
//         check === note.check
//       ) {
//         setStyleEmail(`form-control`);
//         setStylePassword(`form-control`);
//         setStyleCheck(`form-check-input`);
//         newFlag = true;
//       } else if (
//         valueEmail !== note.email &&
//         valuePassword !== note.password &&
//         check !== note.check
//       ) {
//         setStyleEmail(`form-control authentication__style-error`);
//         setStylePassword(`form-control authentication__style-error`);
//         setStyleCheck(`form-check-input authentication__style-error`);
//         newFlag = false;
//       } else if (
//         valueEmail !== note.email &&
//         valuePassword !== note.password &&
//         check === note.check
//       ) {
//         setStyleEmail(`form-control authentication__style-error`);
//         setStylePassword(`form-control authentication__style-error`);
//         setStyleCheck(`form-check-input`);
//         newFlag = false;
//       } else if (
//         valueEmail === note.email &&
//         valuePassword === note.password &&
//         check !== note.check
//       ) {
//         setStyleEmail(`form-control`);
//         setStylePassword(`form-control`);
//         setStyleCheck(`form-check-input authentication__style-error`);
//         newFlag = false;
//       } else if (
//         valueEmail === note.email &&
//         valuePassword !== note.password &&
//         check === note.check
//       ) {
//         setStyleEmail(`form-control`);
//         setStylePassword(`form-control authentication__style-error`);
//         setStyleCheck(`form-check-input`);
//         newFlag = false;
//       } else if (
//         valueEmail !== note.email &&
//         valuePassword === note.password &&
//         check === note.check
//       ) {
//         setStyleEmail(`form-control authentication__style-error`);
//         setStylePassword(`form-control`);
//         setStyleCheck(`form-check-input`);
//         newFlag = false;
//       } else if (
//         valueEmail === note.email &&
//         valuePassword !== note.password &&
//         check !== note.check
//       ) {
//         setStyleEmail(`form-control`);
//         setStylePassword(`form-control authentication__style-error`);
//         setStyleCheck(`form-check-input authentication__style-error`);
//         newFlag = false;
//       } else if (
//         valueEmail !== note.email &&
//         valuePassword === note.password &&
//         check !== note.check
//       ) {
//         setStyleEmail(`form-control authentication__style-error`);
//         setStylePassword(`form-control`);
//         setStyleCheck(`form-check-input authentication__style-error`);
//         newFlag = false;
//       }
//       return null;
//     });
//     return newFlag;
//   }, [valueEmail, valuePassword, check]);

//   /* БЕЗ хука useEffect,
//   обновление значения с помощью функции setFlag()
//   происходит только на следующем цикле рендеринга,
//   что влечет за собой, задержку перехода на главную страницу(приходится нажимать
//   на кнопку 2 раза).
//   С хуком useEffect, функция enterData() отрабатывает правильно. */

//   useEffect(() => {
//     if (enterData()) {
//       setFlag(true);
//     } else {
//       setStyleEmail(`form-control`);
//       setStylePassword(`form-control`);
//       setStyleCheck(`form-check-input`);
//       setFlag(false);
//     }
//   }, [enterData]);

//   return (
//     <main className="authentication__container">
//       <form className="authentication__wrapper">
//         <Heading
//           logo={logo}
//           heading={"Вход в мульти вычислители"}
//           requirement={"Заполните поля"}
//         />
//         <InputField
//           type={"email"}
//           className={styleEmail}
//           autoComplete={"off"}
//           placeholder={"Адрес эл.почты"}
//           value={valueEmail}
//           onChange={handleChangeEmail}
//         />
//         <InputField
//           type={"password"}
//           className={stylePassword}
//           autoComplete={"off"}
//           placeholder={"Пароль"}
//           value={valuePassword}
//           onChange={handleChangePassword}
//         />
//         <Check
//           type={"checkbox"}
//           className={styleCheck}
//           onCheck={check}
//           onChangeCheck={handleChangeCheck}
//           text={"Я не робот"}
//         />
// <Button
//   type={"submit"}
//   className={"btn btn-primary authentication__btn"}
//   onClick={enterData}
//   text={"Войти"}
//   flag={flag}
// />
// <Description
//   className={"authentication__description"}
//   description={`Вычислители помогают автоматизировать бытовые домашние расчеты и немного развлечься`}
// />
//       </form>
//     </main>
//   );
// }

// export default Authentication;

function Authentication() {
  // функция для сравнения двух объектов по (ключам и значению)
  function objectsEqual(o1, o2) {
    const entries1 = Object.entries(o1);
    const entries2 = Object.entries(o2);

    if (entries1.length !== entries2.length) {
      console.log("1");
      return false;
    }
    for (let i = 0; i < entries1.length; ++i) {
      // Ключи
      if (entries1[i][0] !== entries2[i][0]) {
        console.log("2");
        return false;
      }
      // Значения
      if (entries1[i][1] !== entries2[i][1]) {
        return false;
      }
    }

    return true;
  }

  return (
    <main className="authentication__container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          checkbox: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          const enteredData = values;
          const dataFromStorage = userData;
          console.log(objectsEqual(enteredData, dataFromStorage));
        }}
      >
        <Form className="authentication__wrapper">
          <Heading
            logo={logo}
            heading={"Вход в мульти вычислители"}
            requirement={"Заполните поля"}
          />
          <div className="mb-3">
            <Field
              id="email"
              type="email"
              className="form-control"
              placeholder="Адрес эл.почты"
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="mb-3">
            <Field
              id="password"
              type="password"
              className="form-control"
              placeholder="Пароль"
              autoComplete="off"
              name="password"
            />
          </div>
          <div className="mb-3 form-check">
            <Field
              type="checkbox"
              className="form-check-input"
              name="checkbox"
            />
            <label className="form-check-label">Я не робот</label>
          </div>

          <Button
            type={"submit"}
            className={"btn btn-primary authentication__btn"}
            text={"Войти"}
          />
          <Description
            className={"authentication__description"}
            description={`Вычислители помогают автоматизировать бытовые домашние расчеты и немного развлечься`}
          />
        </Form>
      </Formik>
    </main>
  );
}

export default Authentication;
