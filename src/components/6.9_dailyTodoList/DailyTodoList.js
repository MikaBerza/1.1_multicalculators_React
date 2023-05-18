import React, { useState } from "react";
// уникальный идентификатор
import { v4 } from "uuid";

import custom from "./DailyTodoList.module.css";

// ___глобальные компоненты
import Header from "../header/Header";
import Footer from "../footer/Footer";

// ___локальные компоненты
import Heading from "./localComponents/Heading";
import Description from "./localComponents/Description.js";
import InputGroup from "./localComponents/InputGroup.js";
import OutputGroup from "./localComponents/OutputGroup";

function DailyTodoList() {
  // стейт value, содержащий в себе value инпута
  const [value, setValue] = useState("");
  // стейт notes, содержащий в себе массив добавленных элементов с инпута
  const [notes, setNotes] = useState([]);

  //__функция указывает на значение input
  function handleChange(event) {
    // event.target - ссылка на DOM элемент инпута
    // event.target.value - текущий текст инпута
    setValue(event.target.value);
    // console.log(value);
  }

  //___функция добавляет новую заметку в список
  function addNewNoteElement() {
    if (value === "") {
      console.log("Пустая строка");
    } else if (value !== "") {
      setNotes([...notes, { id: v4(), text: value, change: true }]);
      setValue("");
    }
  }

  //___функция изменяет состояние (выполнено/не выполнено)
  function markAsDone(elem) {
    const updatedNotes = notes.map((note) => {
      if (note.id === elem.id && note.change === true) {
        return { ...note, change: false };
      } else {
        return { ...note, change: true };
      }
    });
    setNotes(updatedNotes);
  }

  //___функция удаляет заметку из списка
  function deleteNoteElement(event, index) {
    if (event.target.className === `${custom["close"]}`) {
      /* с помощью метода stopPropagation() у объекта события, останавливаем всплытие события.
      Без метода stopPropagation() нужный нам элемент вырежется из массива объектов, но
      с помощью функции setNotes() мы не сможем обновить состояние хука useState() */
      event.stopPropagation();
      // вырезаем нужный нам элемент
      setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
    } else {
      setNotes(notes);
    }
  }

  return (
    <>
      <Header />
      <main className={custom["container"]}>
        {/*===Заголовок===*/}
        <Heading heading={"Ежедневный список дел"} />
        {/*===Описание===*/}
        <Description
          item1={
            "- одинарное нажатие на текст вносит дело в список выполненных"
          }
          item2={"- одинарное нажатие на красный крестик удаляет дело"}
        />
        {/*===Группа ввода===*/}
        <InputGroup
          value={value}
          handleChange={handleChange}
          addNewNoteElement={addNewNoteElement}
        />
        {/*===Группа вывода (формируем записи)===*/}
        <OutputGroup
          notes={notes}
          markAsDone={markAsDone}
          deleteNoteElement={deleteNoteElement}
        />
      </main>
      <Footer />
    </>
  );
}
export default DailyTodoList;
