'use strict';

import { useState, useEffect } from "react";

//MOCK DATA import
// import data from "../../assets/data/data.json";

export default function InfoTable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //hardcoded propertyId for now
        const propertyId = 1;
        const response = await fetch(`/api/property/${propertyId}`);
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return null;
  }
  
  let description = data.listingDetails.description;
  let maxWords = 25;

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
              ${data.homeDetails.tax.toLocaleString("en-US")} /{" "}
              {data.homeDetails.year}
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="text-base-200 font-medium">Type</td>
            <td className="text-neutral text-right font-medium">
              {data.listingDetails.type}
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="text-base-200 font-medium">Building Age</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.buildingAge}
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <td className="text-base-200 font-medium">Size</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.size} sq.ft.
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td className="text-base-200 font-medium">Parking</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.parking}
            </td>
          </tr>
          {/* row 6 */}
          <tr>
            <td className="text-base-200 font-medium">Basement</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.basement}
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <td className="text-base-200 font-medium">MLS#</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.mls}
            </td>
          </tr>
          {/* row 8 */}
          <tr>
            <td className="text-base-200 font-medium">Possession</td>
            <td className="text-neutral text-right font-medium">
              {data.homeDetails.possession}
            </td>
          </tr>
          {/* row 9 */}
          <tr className="w-full absolute">
            <td className="text-neutral text-lg font-medium block w-full">
              Description
            </td>
            <p className="relative w-full break-normal text-base-200 text-sm -mt-2 px-4 leading-6">
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
