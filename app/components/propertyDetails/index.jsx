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
    <div className="bg-white rounded-lg mb-6 h-20">
      <div>
        <p>Property Details</p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <img
          src={houseType}
          alt="houseType"
          className="w-6 h-6"
        />
        <p>{data.homeType}</p>
      </div>


    </div>
  );
}