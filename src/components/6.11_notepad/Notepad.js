import { useState, useEffect } from "react";
//
import { v4 } from "uuid";
import "./Notepad.css";
//
import Header from "../header/Header";
import Footer from "../footer/Footer";
//
import Heading from "./localComponents/Heading";
import Search from "./localComponents/Search";
import Filter from "./localComponents/Filter";
import Counter from "./localComponents/Counter";
import OutputGroup from "./localComponents/OutputGroup";
import InputGroup from "./localComponents/InputGroup";

/* Константы для компонента Counter. Выносим их на уровень модуля, 
что бы они не создавались при каждом новом рендере */
const twentyPercent = 0.2;
const eightyPercent = 0.8;
const ninetyPercent = 0.9;

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [valTextarea, setValTextarea] = useState("");
  const [counter, setCounter] = useState(0);

  const [value, setValue] = useState("");
  const [select, setSelect] = useState("Все");

  const [isEdit, setIsEdit] = useState(false);

  //___функция указывает на значение введенное в textarea
  function handleChangeTextarea(event) {
    // event.target - ссылка на DOM элемент textarea
    // event.target.value - текущий текст textarea
    setValTextarea(event.target.value);
  }

  //___функция указывает на значение введенное в input
  function handleChangeInput(event) {
    // event.target - ссылка на DOM элемент input
    // event.target.value - текущий текст input
    setValue(event.target.value);
  }

  //___функция указывает на значение в select
  function handleChangeSelect(event) {
    // event.target - ссылка на DOM элемент select
    // event.target.value - текущий текст select
    setSelect(event.target.value);
  }

  //___функция добавляет запись в блокнот
  function addNote() {
    // добавляем если строка больше нуля и меньше 700
    if (valTextarea.trim().length > 0 && valTextarea.trim().length < 700) {
      const newNote = {
        id: v4(),
        text: valTextarea.trim(),
        checkbox: false,
        // Метод Date.now() возвращает количество миллисекунд с 1970 года по Гринвичу.
        date: Date.now(),
        edit: isEdit,
      };
      setNotes([newNote, ...notes]);
      //после добавления очищаем textarea
      setValTextarea("");
    }
    // else {
    //   console.log("Пустая строка");
    // }
  }

  //___функция возвращает кол-во не редактируемых элементов
  function getNumberOfNotEditableItems() {
    let nonEditableElements = 0;

    for (let elem of notes) {
      if (elem.edit === true) {
        nonEditableElements = notes.length - 1;
      }
    }
    return nonEditableElements;
  }

  //___функция для перехода в режим редактирования записи
  function editNote(id) {
    const newNotes = notes.map((note) => {
      /*если совпадает по id и функция которая возвращает число
        элементов которые сейчас редактируется равно нулю, то мы переходим
        в режим редактирования записи*/
      if (note.id === id && getNumberOfNotEditableItems() === 0) {
        // переходим в поле textarea
        setValTextarea(note.text);
        // изменяем стейт
        setIsEdit(true);
        return { ...note, edit: true };
      } else {
        return note;
      }
    });
    setNotes(newNotes);
  }

  //___функция добавления записи в блокнот после редактирования
  function addEdit() {
    const updatedNotes = notes.map((note) => {
      if (note.edit) {
        return {
          ...note,
          text: valTextarea.trim(),
          checkbox: false,
          date: Date.now(),
          edit: false,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setValTextarea("");
    setIsEdit(false);
  }

  //___функция для выбора функций
  /*эта функция определяет какую функцию запустить
  при клике на кнопку*/
  function chooseFunction() {
    if (isEdit === false) {
      addNote();
    } else {
      addEdit();
    }
  }

  //___функция меняет состояние checkbox (true/false) в объекте newNote
  function handleChangeCheckbox(event) {
    const updatedNotes = notes.map((note) => {
      if (note.id === event.target.id && note.checkbox === false) {
        return { ...note, checkbox: true };
        // note.checkbox = true;
      } else if (note.id === event.target.id && note.checkbox === true) {
        return { ...note, checkbox: false };
      }
      return note;
    });
    // console.log(notes);
    setNotes(updatedNotes);
  }

  //___функция удаляет запись и флажок из списка блокнота
  function deleteNoteElement(event, index, id, checked) {
    for (let i = 0; i < notes.length; i++) {
      if (event.target.id === id && checked === false) {
        // вырезаем нужный нам элемент из основного массива
        setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
      } else if (event.target.id === id && checked === true) {
        // вырезаем нужный нам элемент из основного массива
        setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
        // вычитаем флажок из счетчика активных флажков
        setCounter(counter - 1);
      } else {
        setNotes(notes);
      }
    }
  }

  // ___функция возвращает кол-во активных флажков
  function getNumberActiveCheckboxes() {
    let count = 0;
    for (let note of notes) {
      if (note.checkbox === true) {
        count += 1;
      }
    }
    setCounter(count);
  }
  /* БЕЗ хука useEffect,
  обновление значения (counter) с помощью функции setCounter()  
  происходит только на следующем цикле рендеринга, 
  что влечет за собой неправильный расчет кол-ва активных флажков.
  С хуком useEffect, функция getNumberActiveCheckboxes() отрабатывает правильно. */
  useEffect(() => {
    getNumberActiveCheckboxes();
  });

  //Переменная(searchAndFilter) содержащая новый массив элементов списка, прошедших заданную проверку
  const searchAndFilter = notes.filter((listItem) => {
    /*Метод filter() создаёт новый массив со всеми элементами,
    прошедшими проверку, задаваемую в передаваемой функции.
    Метод includes() определяет, включает ли массив определенное
    значение среди своих записей, возвращая true или false по мере необходимости.*/
    /*После ввода символов в поле input (поиск записей), будем возвращать
    массив с объектами, который хранит наши отсортированные
    по ключевому слову(символу) элементы списка записей.*/
    if (select === "Все") {
      return listItem.text.toUpperCase().includes(value.toUpperCase());
    }
    if (select === "Невыполненные" && listItem.checkbox === false) {
      return listItem.text.toUpperCase().includes(value.toUpperCase());
    }
    if (select === "Выполненные" && listItem.checkbox === true) {
      return listItem.text.toUpperCase().includes(value.toUpperCase());
    }
    return null;
  });

  return (
    <>
      <Header />
      <main className="notepad__flex-container">
        {/*_______________Heading____________*/}
        <Heading title={"Блокнот"} />
        {/*_______________notepad__centre-block____________*/}
        <div className="notepad__centre-block">
          <section className="notepad__section-one">
            {/*_______________Search____________*/}
            <Search value={value} onChange={handleChangeInput} />
            {/*_______________Filtering-and-counter____________*/}
            <div className="notepad__filtering-and-counter">
              <Counter counter={counter} totalEntries={notes.length} />
              <Filter
                title={"фильтрация"}
                selectValue={select}
                handleChangeSelect={handleChangeSelect}
              />
            </div>
            {/*_______________Output-group____________*/}
            <ul className="notepad__numbered-list">
              {searchAndFilter.map((note, index) => {
                return (
                  <OutputGroup
                    key={note.id}
                    note={note}
                    index={index}
                    onNoteTitleDoubleClick={editNote}
                    onClickCheckbox={handleChangeCheckbox}
                    getNumberActiveCheckboxes={getNumberActiveCheckboxes}
                    deleteNoteElement={deleteNoteElement}
                  />
                );
              })}
            </ul>
          </section>
          {/*_______________Input-group____________*/}
          <section className="notepad__section-two">
            <InputGroup
              valTextarea={valTextarea}
              handleChangeTextarea={handleChangeTextarea}
              isEdit={isEdit}
              chooseFunction={chooseFunction}
              name={"postContent"}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export { twentyPercent, eightyPercent, ninetyPercent };
export default Notepad;
