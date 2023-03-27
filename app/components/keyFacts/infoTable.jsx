'use strict';

//MOCK DATA import
import data from "../../assets/data/data.json";

export default function InfoTable() {
  return (
    <div className="overflow-x-auto p-4">
      <p className="text-md text-base-200 leading-8 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo
        risus a mattis semper. Integer placerat volutpat odio, at pulvinar
        tortor laoreet mattis. Proin aliquet semper tempus.
      </p>
      <table className="table w-full bg-white">
        <tbody className="w-full">
          {/* row 1 */}
          <tr className="w-full">
            <th>Tax</th>
            <td>{data.tax} / {data.year}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Type</th>
            <td>{data.type}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Building Age</th>
            <td>{data.buildingAge}</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>Size</th>
            <td>{data.size}</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>Parking</th>
            <td>{data.parking}</td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>Basement</th>
            <td>{data.basement}</td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>MLS#</th>
            <td>{data.mls}</td>
          </tr>
          {/* row 8 */}
          <tr>
            <th>Possession</th>
            <td>{data.possession}</td>
          </tr>
          {/* row 9 */}
          {/* <tr>
            <th>Description</th>
            <td className="break-normal w-min">{data.description}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
