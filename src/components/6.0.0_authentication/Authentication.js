import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
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
import Button from "./localComponents/Button";
import Description from "./localComponents/Description";

function Authentication() {
  let inputData = {};

  const [styleEmail, setStyleEmail] = useState("form-control");
  const [stylePassword, setStylePassword] = useState("form-control");
  const [styleCheckbox, setStyleCheckbox] = useState("form-check-input");

  const navigate = useNavigate();

  // функция для проверки введенных данных в поле Email
  function checkTheEnteredDataEmail() {
    if (inputData.email !== userData.email) {
      setStyleEmail("authentication__style-error");
      return false;
    } else if (inputData.email === userData.email) {
      setStyleEmail("form-control");
      return true;
    }
  }
  // функция для проверки введенных данных в поле Password
  function checkTheEnteredDataPassword() {
    if (inputData.password !== userData.password) {
      setStylePassword("authentication__style-error");
      return false;
    } else if (inputData.password === userData.password) {
      setStylePassword("form-control");
      return true;
    }
  }
  // функция для проверки установки Checkbox
  function checkTheEnteredDataCheckbox() {
    if (inputData.checkbox !== userData.checkbox) {
      setStyleCheckbox("authentication__style-error");
      return false;
    } else if (inputData.checkbox === userData.checkbox) {
      setStyleCheckbox("form-check-input");
      return true;
    }
  }
  // функция проверяет массив промисов
  function checkThePromiseArray(arr) {
    let counter = 0;
    for (let elem of arr) {
      if (elem === true) {
        counter += 1;
      } else if (elem === false) {
        counter = 0;
      }
    }
    return counter;
  }

  // функция запускает проверку полей ввода и существующих данных
  function runTheCheck() {
    const promise1 = new Promise((resolve) =>
      resolve(checkTheEnteredDataEmail())
    );
    const promise2 = new Promise((resolve) =>
      resolve(checkTheEnteredDataPassword())
    );
    const promise3 = new Promise((resolve) =>
      resolve(checkTheEnteredDataCheckbox())
    );

    Promise.all([promise1, promise2, promise3])
      .then((responses) => {
        if (checkThePromiseArray(responses) === 3) {
          navigate("/Main");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="authentication__container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          checkbox: "",
        }}
        onSubmit={(values) => {
          inputData = values;
          runTheCheck();
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
              className={`form-control ${styleEmail}`}
              placeholder={"Адрес эл.почты"}
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="mb-3">
            <Field
              id="password"
              type="password"
              className={`form-control ${stylePassword}`}
              placeholder="Пароль"
              autoComplete="off"
              name="password"
            />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label">
              <Field
                type="checkbox"
                className={`form-check-input ${styleCheckbox}`}
                name="checkbox"
              />
              Я не робот
            </label>
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
