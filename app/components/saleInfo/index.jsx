import data from "../../assets/data/data.json";

//SVG IMPORTS
import map from "../../assets/img/saleComponent/map.svg";
import directions from "../../assets/img/saleComponent/direction-line.svg";
import share from "../../assets/img/saleComponent/share-line.svg";
import notes from "../../assets/img/saleComponent/note-favorite.svg";

export default function SaleInfo () {
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
        <p className="text-neutral font-medium mb-1">MLS#: {data.mls}</p>
        <p className="mb-1 text-base-200">
          Listed for: <span className="text-primary font-medium">${data.price.toLocaleString("en-US")}</span>
        </p>
        <p className="text-neutral">
          {data.address} {data.city},
        </p>
        <p className="mb-3 text-neutral">
          {data.state} {data.zipCode}
        </p>
      </div>
      <div className="flex flex-col px-4">
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={map} alt="map" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 normal-case text-right font-medium ">
            View on Map
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={directions}
            alt="directions"
            className="w-6 h-6 ml-4 mr-2"
          />
          <span className="text-base-200 normal-case text-right font-medium">
            Get Directions
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={share} alt="share" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 normal-case text-right font-medium">
            Share
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={notes} alt="notes" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 normal-case text-right font-medium">
            My Notes
          </span>
        </button>
      </div>
    </>
  );
}