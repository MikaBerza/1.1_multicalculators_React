//
//
import customGlob from "../../../globalFiles/borschPancakesPilaf.module.css";

function TableRow({ position, products, quantity, unit }) {
  return (
    <tr>
      <th className={customGlob["table-num-position"]} scope="row">
        {position}
      </th>
      <td className={customGlob["table-products"]}>{products}</td>
      <td className={customGlob["table-quantity"]}>{quantity}</td>
      <td className={customGlob["table-unit"]}>{unit}</td>
    </tr>
  );
}
export default TableRow;
