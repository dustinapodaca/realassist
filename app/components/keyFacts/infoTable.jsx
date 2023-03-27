'use strict';

//MOCK DATA import
import data from "../../assets/data/data.json";

export default function InfoTable() {
  return (
    <div className="overflow-x-auto p-4 bg-white rounded-xl" style={{height: "42rem"}}>
      <p className="text-md text-base-200 leading-8 mb-1 px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo
        risus a mattis semper. Integer placerat volutpat odio, at pulvinar
        tortor laoreet mattis. Proin aliquet semper tempus.
      </p>
      <table className="table w-full bg-white">
        <tbody className="w-full">
          {/* row 1 */}
          <tr className="w-full">
            <td className="text-base-200 font-medium -pl-4">Tax</td>
            <td className="text-neutral text-right font-medium">
              ${data.tax} / {data.year}
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="text-base-200 font-medium">Type</td>
            <td className="text-neutral text-right font-medium">{data.type}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="text-base-200 font-medium">Building Age</td>
            <td className="text-neutral text-right font-medium">{data.buildingAge}</td>
          </tr>
          {/* row 4 */}
          <tr>
            <td className="text-base-200 font-medium">Size</td>
            <td className="text-neutral text-right font-medium">{data.size} sq.ft.</td>
          </tr>
          {/* row 5 */}
          <tr>
            <td className="text-base-200 font-medium">Parking</td>
            <td className="text-neutral text-right font-medium">{data.parking}</td>
          </tr>
          {/* row 6 */}
          <tr>
            <td className="text-base-200 font-medium">Basement</td>
            <td className="text-neutral text-right font-medium">{data.basement}</td>
          </tr>
          {/* row 7 */}
          <tr>
            <td className="text-base-200 font-medium">MLS#</td>
            <td className="text-neutral text-right font-medium">{data.mls}</td>
          </tr>
          {/* row 8 */}
          <tr>
            <td className="text-base-200 font-medium">Possession</td>
            <td className="text-neutral text-right font-medium">{data.possession}</td>
          </tr>
          {/* row 9 */}
          <tr className="w-full absolute">
            <td className="text-neutral text-lg font-medium block w-full">
              Description
            </td>
            <span className="relative">
              <p className="w-full break-normal text-base-200 text-sm -mt-2 px-4 leading-6">
                {data.description}
              </p>
            </span>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
