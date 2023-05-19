//
//

import "../Notepad.css";

function Search({ value, onChange }) {
  return (
    <input
      className="notepad__input-search"
      type="search"
      id="site-search"
      placeholder="&#128269; поиск записей"
      value={value}
      onChange={onChange}
    />
  );
}

export default Search;
