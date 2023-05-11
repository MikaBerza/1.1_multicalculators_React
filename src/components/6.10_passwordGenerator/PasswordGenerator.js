// 
// 
import { useState } from "react";

import pasGen from "./PasswordGenerator.module.css";

import Header from "../header/Header";
import Heading from "./localComponents/Heading";
import EnteringARange from "./localComponents/EnteringARange";
import OutputPassword from "./localComponents/OutputPassword";
import Footer from "../footer/Footer";

function PasswordGenerator() {
  const [inputRange, setInputRange] = useState(5);
  const [password, setPassword] = useState("Bgdzh");

  // Функция устанавливает длину пароля
  function handleRange(event) {
    setInputRange(event.target.value);
  }

  // Функция возвращает случайное число
  function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }

  // Функция генерирует пароль
  function generatePassword() {
    // в переменную result накапливаем результат в цикле
    let result = "";
    /* строка символами*/
    const str = `0123456789qwertyuiopasdfghjklzxcvbnmQ
  WERTYUIOPASDFGHJKLZXCVBNM!"№;%:?*()_+`;

    for (let i = 0; i < inputRange; i++) {
      result += str[getRandom(0, str.length - 1)];
    }
    setPassword(result);
  }

  return (
    <>
      <Header />
      <main>
        <section className={pasGen["section-one"]}>
          <Heading
            heading={"Генератор паролей"}
            description={
              "Позволяет получить пароль любой сложности из цифр, букв и специальных символов"
            }
          />
          <div className={pasGen["card"]}>
            <EnteringARange
              password={password}
              generatePassword={generatePassword}
              btnName={"Сгенерировать"}
            />
            <OutputPassword
              minRange={"1"}
              maxRange={"20"}
              stepRange={"1"}
              value={inputRange}
              handleRange={handleRange}
              text={"Длина пароля-"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default PasswordGenerator;
