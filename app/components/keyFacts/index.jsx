'use strict';

import { useState } from "react";

//TABLE import
import InfoTable from "./infoTable.jsx";

export default function KeyFacts() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div 
      className="bg-white rounded-lg"
      style={{ height: "28rem" }}
    >
      <div className="tabs w-full">
        <span
          className={`tab tab-bordered ${
            activeTab === 0 ? "tab-active" : ""
          } w-1/3 h-16 ease-in-out duration-300 transition-all text-lg`}
          onClick={() => handleClick(0)}
        >
          Key Facts
        </span>
        <span
          className={`tab tab-bordered ${
            activeTab === 1 ? "tab-active" : ""
          } w-1/3 h-16 ease-in-out duration-300 transition-all text-lg`}
          onClick={() => handleClick(1)}
        >
          Details
        </span>
        <span
          className={`tab tab-bordered ${
            activeTab === 2 ? "tab-active" : ""
          } w-1/3 h-16 ease-in-out duration-300 transition-all text-lg`}
          onClick={() => handleClick(2)}
        >
          Rooms
        </span>
      </div>
      {activeTab === 0 ? (
        <InfoTable />
      ) : activeTab === 1 ? (
        <div className="p-4">
          <p className="text-lg">Details</p>
        </div>
      ) : activeTab === 2 ? (
        <div className="p-4">
          <p className="text-lg">Rooms</p>
        </div>
      ) : null}
    </div>
  );
}
