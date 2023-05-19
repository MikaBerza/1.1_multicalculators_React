//
//

import "../Notepad.css";
import { twentyPercent, eightyPercent, ninetyPercent } from "../Notepad";

function Counter({ counter, totalEntries }) {
  return (
    <div className="notepad__counter">
      <span className="notepad__counter-text-done">
        выполненные-{counter}
        {<br />}невыполненные-
        {totalEntries - counter}
      </span>
      <meter
        className="notepad__counter-indicator"
        value={counter}
        min="0"
        low={totalEntries * twentyPercent}
        high={totalEntries * eightyPercent}
        max={totalEntries}
        optimum={totalEntries * ninetyPercent}
      ></meter>
    </div>
  );
}

export default Counter;
