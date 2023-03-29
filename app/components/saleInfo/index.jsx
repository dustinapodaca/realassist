'use strict';

// import { useState, useEffect } from "react";
import { useContext } from "react";
import { PropertyContext } from "../../store/propertyContext.jsx";

//MOCK JSON import
// import data from "../../assets/data/data.json";

//SVG IMPORTS
import map from "../../assets/img/saleComponent/map.svg";
import directions from "../../assets/img/saleComponent/direction-line.svg";
import share from "../../assets/img/saleComponent/share-line.svg";
import notes from "../../assets/img/saleComponent/note-favorite.svg";
import phoneLogo from "../../assets/img/saleComponent/phoneLogo.svg";

export default function SaleInfo () {
  // const [data, setData] = useState(null);

  const { property } = useContext(PropertyContext);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       //hardcoded propertyId for now
  //       const propertyId = 1;
  //       const response = await fetch(`/api/property/${propertyId}`);
  //       if (!response.ok) {
  //         throw new Error("HTTP error " + response.status);
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  if (!property) {
    return null;
  }

  return (
    <>
      <div className="flex flex-row">
        <button className="btn btn-square btn-success w-40 mt-4 mx-4">
          <span className="text-emerald-500 normal-case">For Sale</span>
        </button>
        <button className="btn btn-square btn-primary w-20 mt-4 mr-4">
          <span className="text-white font-normal normal-case">Add List</span>
        </button>
      </div>
      <div className="px-5 mt-3">
        <p className="text-neutral font-medium mb-1">MLS#: {property.homeDetails.mls}</p>
        <p className="mb-1 text-base-200">
          Listed for:{" "}
          <span className="text-primary font-medium">
            ${property.price.toLocaleString("en-US")}
          </span>
        </p>
        <p className="text-neutral">
          {property.address} {property.city},
        </p>
        <p className="mb-3 text-neutral">
          {property.state} {property.zipCode}
        </p>
      </div>
      <div className="flex flex-col px-4">
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={map}
            alt="map"
            className="w-6 h-6 ml-4 mr-2 hover:text-white hover:stroke-white hover:fill-white"
          />
          <p className="text-base-200 hover:text-white pr-28 py-4 normal-case text-right font-medium ">
            View on Map
          </p>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={directions}
            alt="directions"
            className="w-6 h-6 ml-4 mr-2"
          />
          <span className="text-base-200 hover:text-white pr-24 py-4 normal-case text-right font-medium">
            Get Directions
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={share} alt="share" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 hover:text-white pr-40 py-4 normal-case text-right font-medium">
            Share
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={notes} alt="notes" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 hover:text-white pr-32 py-4 normal-case text-right font-medium">
            My Notes
          </span>
        </button>
        <div className="w-full px-4 h-20 bg-base-300 rounded-lg mt-3">
          <p className="text-base-200 font-normal text-xs mt-2">
            Listing Agent
          </p>
          <p className="text-neutral font-normal text-sm mt-1">Courtney Henry</p>
          <span className="flex flex-row mt-1">
            <img src={phoneLogo} alt="phoneLogo" className="w-5 h-5 mr-2 rounded-full" />
            <p className="text-base-200 normal-case text-sm text-right font-medium">
              +90 552 489 8277
            </p>
          </span>
        </div>
      </div>
    </>
  );
}