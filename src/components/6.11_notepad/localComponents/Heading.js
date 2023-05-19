//
//

import "../Notepad.css";

function Heading({ title }) {
  return (
    <div className="notepad__header-block">
      <h2>{title}</h2>
    </div>
  );
}

export default Heading;
