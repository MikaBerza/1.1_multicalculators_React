//
//
import customGlob from "../../../globalFiles/borschPancakesPilaf.module.css";

function InputGroup({ value, handleChangeInput }) {
  return (
    <table className={`table table-bordered ${customGlob["table-product"]}`}>
      <thead>
        <tr>
          <th scope="row">Введите количество порций</th>
          <td>
            <input
              className={`${customGlob["inp"]}`}
              type="number"
              value={value}
              onChange={handleChangeInput}
            />
          </td>
          {/*<td><input type="number" id="idProductInput" value="0"/></td>*/}
        </tr>
      </thead>
    </table>
  );
}

export default InputGroup;
