'use strict';

import { useContext } from "react";
import { PropertyContext } from "../../store/propertyContext";

//MOCK JSON IMPORT
// import data from "../../assets/data/data.json";

//SVG IMPORTS
import houseType from "../../assets/img/propDetails/building-4.svg";
import bedrooms from "../../assets/img/propDetails/la_bed.svg";
import bathrooms from "../../assets/img/propDetails/ph_bathtub.svg";
import garage from "../../assets/img/propDetails/car.svg";
import sqft from "../../assets/img/propDetails/home-2.svg";
import area from "../../assets/img/propDetails/format-square.svg";

export default function PropertyDetails() {
  const { property } = useContext(PropertyContext);

  if (!property) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg h-20 flex flex-row justify-between items-center overflow-hidden">
      <div>
        <p className="text-md text-neutral ml-6">Property Details</p>
      </div>
      <div className="flex flex-row items-center justify-evenly px-2 sm:px-0">
        <span className="mx-1 sm:mx-4">
          <img
            src={houseType}
            alt="houseType"
            className="w-6 h-6 m-auto mb-1 text-center leading-4"
          />
          <p className="text-base-200 text-sm">
            {property.homeDetails.homeType}
          </p>
        </span>
        <span className="mx-1 sm:mx-4">
          <img src={bedrooms} alt="bedrooms" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-sm text-center leading-4">
            {property.homeDetails.bedrooms} Bedrooms
          </p>
        </span>
        <span className="mx-1 sm:mx-4">
          <img
            src={bathrooms}
            alt="bathrooms"
            className="w-6 h-6 m-auto mb-1"
          />
          <p className="text-base-200 text-sm text-center leading-4">
            {property.homeDetails.bathrooms} Bathrooms
          </p>
        </span>
        <span className="mx-1 sm:mx-4">
          <img src={garage} alt="garage" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-sm text-center leading-4">
            {property.homeDetails.garage} Garage
          </p>
        </span>
        <span className="mx-1 sm:mx-4">
          <img src={sqft} alt="sqft" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-sm text-center leading-4">
            {property.homeDetails.sqft.toLocaleString("en-US")} sq.ft.
          </p>
        </span>
        <span className="mx-1 sm:mx-4">
          <img src={area} alt="area" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-sm text-center leading-4">
            {property.homeDetails.area.toLocaleString("en-US")} sq.ft.
          </p>
        </span>
      </div>
    </div>
  );
}
