'use strict';

import { useState, useContext } from "react";
import { PropertyContext } from "../../store/propertyContext";

//MOCK PROPERTY import
// import data from "../../assets/data/data.json";

export default function InfoTable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { property } = useContext(PropertyContext);

  if (!property) {
    return null;
  }
  
  let description = property.listingDetails.description;
  const maxWords = 25;

  const words = description.split(" ");
  const truncatedWords = words.slice(0, maxWords);
  const truncatedText = truncatedWords.join(" ");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="overflow-x-auto p-4 bg-white rounded-xl"
      style={{ height: "42rem" }}
    >
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
              ${property.homeDetails.tax.toLocaleString("en-US")} /{" "}
              {property.homeDetails.year}
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="text-base-200 font-medium">Type</td>
            <td className="text-neutral text-right font-medium">
              {property.listingDetails.type}
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="text-base-200 font-medium">Building Age</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.buildingAge}
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <td className="text-base-200 font-medium">Size</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.size} sq.ft.
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td className="text-base-200 font-medium">Parking</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.parking}
            </td>
          </tr>
          {/* row 6 */}
          <tr>
            <td className="text-base-200 font-medium">Basement</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.basement}
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <td className="text-base-200 font-medium">MLS#</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.mls}
            </td>
          </tr>
          {/* row 8 */}
          <tr>
            <td className="text-base-200 font-medium">Possession</td>
            <td className="text-neutral text-right font-medium">
              {property.homeDetails.possession}
            </td>
          </tr>
          {/* row 9 */}
          <tr className="w-full absolute">
            <td className="text-neutral text-lg font-medium block w-full">
              Description
            </td>
            <p className="relative w-full break-normal text-base-200 text-sm -mt-2 px-4 leading-6 pb-5">
              {isExpanded ? description : truncatedText}
              {words.length > maxWords && (
                <button className="text-primary ml-2 font-medium" onClick={toggleExpansion}>
                  {isExpanded ? "..read less" : "read more.."}
                </button>
              )}
            </p>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
