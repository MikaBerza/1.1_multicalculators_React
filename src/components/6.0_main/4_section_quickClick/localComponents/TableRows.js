//
//

function TableRows({ title, numericData, unitsOfMeasurement }) {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{numericData}</td>
      <td>{unitsOfMeasurement}</td>
    </tr>
  );
}
export default TableRows;
