import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
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

import Loader from "./localComponents/Loader";
import Heading from "./localComponents/Heading";
import InputField from "./localComponents/InputField";
import Checkbox from "./localComponents/Checkbox";
import Button from "./localComponents/Button";
import Description from "./localComponents/Description";

// функция для проверки введенных данных в поле Email
function checkTheEnteredDataEmail(inputData) {
  if (inputData.email === userData.email) {
    return true;
  } else if (inputData.email !== userData.email) {
    return false;
  }
}
// функция для проверки введенных данных в поле Password
function checkTheEnteredDataPassword(inputData) {
  if (inputData.password === userData.password) {
    return true;
  } else if (inputData.password !== userData.password) {
    return false;
  }
}
// функция для проверки установки Checkbox
function checkTheEnteredDataCheckbox(inputData) {
  if (inputData.checkbox === userData.checkbox) {
    return true;
  } else if (inputData.checkbox === userData.checkbox) {
    return false;
  }
}

function Authentication() {
  const navigate = useNavigate();
  // создаем состояние loading, которое отвечает за отображение компонента Loader.
  const [loading, setLoading] = useState(false); // состояние загрузки
  /* В функции goMainPage мы устанавливаем состояние loading в true перед 
  имитацией загрузки другой страницы. После завершения загрузки состояние loading
  устанавливается в false и осуществляется переход на главную страницу Main 
  с помощью navigate("/Main")*/
  function goMainPage(values, actions) {
    setLoading(true);

    // Имитируем загрузку другой страницы
    setTimeout(() => {
      setLoading(false);
      /* actions в этом контексте - это объект, который передается в goMainPage
      метод Formik при отправке формы. 
      actions.setSubmitting(false) - метод, который устанавливает значение свойства 
      isSubmitting формы в false в том случае, если форма была отправлена */
      actions.setSubmitting(false);
      navigate("/Main");
    }, 1500);
  }

  /* Для того, чтобы validate отрабатывал только после нажатия кнопки, 
  необходимо добавить параметры validateOnBlur={false}, validateOnChange={false} 
  в компонент Formik. Это отключит автоматическую проверку полей при вводе и 
  validate будет вызываться только при отправке формы. */

  /* В разметке формы мы используем условный оператор if/else, чтобы определить, 
  следует ли отображать форму или компонент Loader. Если loading установлено в true, 
  мы отображаем компонент Loader (имитация загрузки другой страницы),
  иначе мы отображаем нашу форму */
  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="authentication__container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            checkbox: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!checkTheEnteredDataEmail(values)) {
              errors.email = "Такой email не зарегистрирован";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Неверный адрес электронной почты";
            }

            if (!checkTheEnteredDataPassword(values)) {
              errors.password = "Неверный пароль, попробуйте еще раз";
            }

            if (!checkTheEnteredDataCheckbox(values)) {
              errors.checkbox = "Докажите, что вы не робот";
            }

            return errors;
          }}
          // добавлен параметр validateOnBlur={false}
          validateOnBlur={false}
          // добавлен параметр validateOnChange={false}
          validateOnChange={false}
          // если все проверки прошли, то переходим на главную страницу
          onSubmit={goMainPage}
        >
          {({ errors }) => {
            return (
              <Form className="authentication__wrapper">
                <Heading
                  logo={logo}
                  heading="Вход в мульти вычислители"
                  requirement="Заполните поля"
                />
                <InputField
                  name={"email"}
                  className={[
                    "mb-3",
                    "form-control",
                    "authentication__style-error",
                    "authentication__style-text-error",
                  ]}
                  errors={errors}
                  placeholderText={"Адрес эл.почты"}
                  fieldError={errors.email}
                />
                <InputField
                  name={"password"}
                  className={[
                    "mb-3",
                    "form-control",
                    "authentication__style-error",
                    "authentication__style-text-error",
                  ]}
                  errors={errors}
                  placeholderText={"Пароль"}
                  fieldError={errors.password}
                />
                <Checkbox
                  name={"checkbox"}
                  className={[
                    "mb-3",
                    "form-check",
                    "form-check-label",
                    "form-check-input",
                    "authentication__style-error",
                    "authentication__style-text-error",
                  ]}
                  checkboxError={errors.checkbox}
                  text={"Я не робот"}
                />
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
            );
          }}
        </Formik>
      </main>
    );
  }
}

export default Authentication;
