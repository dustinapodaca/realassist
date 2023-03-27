//MOCK JSON IMPORT
import data from "../../assets/data/data.json";

//SVG IMPORTS
import houseType from "../../assets/img/propDetails/building-4.svg";
import bedrooms from "../../assets/img/propDetails/la_bed.svg";
import bathrooms from "../../assets/img/propDetails/ph_bathtub.svg";
import garage from "../../assets/img/propDetails/car.svg";
import sqft from "../../assets/img/propDetails/home-2.svg";
import area from "../../assets/img/propDetails/format-square.svg";

export default function PropertyDetails () {
  return (
    <div className="bg-white rounded-lg mb-6 h-20 flex flex-row justify-evenly items-center">
      <div>
        <p className="text-lg">Property Details</p>
      </div>
      <div className="flex flex-row justify-evenly">
        <span className="px-4">
          <img src={houseType} alt="houseType" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.homeType}</p>
        </span>
        <span className="px-4">
          <img src={bedrooms} alt="bedrooms" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.bedrooms} Bedrooms</p>
        </span>
        <span className="px-4">
          <img src={bathrooms} alt="bathrooms" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.bathrooms} Bathrooms</p>
        </span>
        <span className="px-4">
          <img src={garage} alt="garage" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.garage} Garage</p>
        </span>
        <span className="px-4">
          <img src={sqft} alt="sqft" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.sqft} sq.ft.</p>
        </span>
        <span className="px-4">
          <img src={area} alt="area" className="w-6 h-6 m-auto mb-1" />
          <p className="text-base-200 text-md">{data.area} sq.ft.</p>
        </span>
      </div>
    </div>
  );
}