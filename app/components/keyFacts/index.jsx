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
      className="rounded-lg pb-12"
      // style={{ height: "40rem" }}
    >
      <div className="tabs w-full">
        <span
          className={`tab tab-bordered font-medium ${
            activeTab === 0 ? "tab-active text-neutral" : ""
          } w-1/3 h-16 ease-in-out duration-300 transition-all text-lg`}
          onClick={() => handleClick(0)}
        >
          Key Facts
        </span>
        <span
          className={`tab tab-bordered font-medium ${
            activeTab === 1 ? "tab-active text-neutral" : ""
          } w-1/3 h-16 ease-in-out duration-300 transition-all text-lg`}
          onClick={() => handleClick(1)}
        >
          Details
        </span>
        <span
          className={`tab tab-bordered font-medium ${
            activeTab === 2 ? "tab-active text-neutral" : ""
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
