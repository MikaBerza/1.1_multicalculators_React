import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Main from "./components/6.0_main/Main";
import FactsAboutCats from "./components/6.6_factsAboutCats/FactsAboutCats";
import PasswordGenerator from "./components/6.10_passwordGenerator/PasswordGenerator";
import InformationIp from "./components/6.12_informationIp/InformationIp";
import Borsch from "./components/6.1_borsch/Borsch";
import Pancakes from "./components/6.2_pancakes/Pancakes";
import Pilaf from "./components/6.3_pilaf/Pilaf";
import DailyTodoList from "./components/6.9_dailyTodoList/DailyTodoList";
import Notepad from "./components/6.11_notepad/Notepad";

import "./App.css";
// import Main from "./components/6.0_main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route
            path="/6.6_factsAboutCats/FactsAboutCats"
            element={<FactsAboutCats />}
          />
          <Route
            path="/6.10_passwordGenerator/PasswordGenerator"
            element={<PasswordGenerator />}
          />
          <Route
            path="/6.12_informationIp/InformationIp"
            element={<InformationIp />}
          />
          <Route path="/6.1_borsch/Borsch" element={<Borsch />} />
          <Route path="/6.2_pancakes/Pancakes" element={<Pancakes />} />
          <Route path="/6.3_pilaf/Pilaf" element={<Pilaf />} />
          <Route
            path="/6.9_dailyTodoList/DailyTodoList"
            element={<DailyTodoList />}
          />
          <Route path="/6.11_notepad/Notepad" element={<Notepad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
