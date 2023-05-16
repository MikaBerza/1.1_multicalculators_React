//
//

import TableRows from "./TableRows";

function Table({ timeCounter, clickCounter, result }) {
  return (
    <div>
      <table className="table">
        <tbody>
          <TableRows
            title={"Таймер"}
            numericData={timeCounter}
            unitsOfMeasurement={"сек"}
          />
          <TableRows
            title={"Счетчик"}
            numericData={clickCounter}
            unitsOfMeasurement={"клик"}
          />
          <TableRows
            title={"Результат"}
            numericData={result}
            unitsOfMeasurement={"клик/сек"}
          />
        </tbody>
      </table>
    </div>
  );
}
export default Table;
