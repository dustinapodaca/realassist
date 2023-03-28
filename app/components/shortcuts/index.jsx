'use strict';

//SVG imports
import shortcutIcon from '../../assets/img/shortcuts/fatrows.svg';
import keyFacts from '../../assets/img/shortcuts/key.svg';
import propertyHistory from '../../assets/img/shortcuts/history-line.svg';
import demographics from '../../assets/img/shortcuts/donut-chart-line.svg';
import poi from '../../assets/img/shortcuts/location-tick.svg';

const toggleChange = (e) => {
  const isChecked = e.target.checked;
  if(isChecked) {
    console.log('toggleChecked');
    //add toggle functionality here
  } else {
    console.log('toggleUnchecked');
  }
}

export default function Shortcuts () {
  return (
    <>
      <div className="flex flex-row items-center justify-between mt-3">
        <div>
          <p className="text-md text-neutral ml-4">Shortcuts</p>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-accent drawer-button mr-4"
        >
          <img
            src={shortcutIcon}
            alt="shortcutIcon"
            className="w-6 h-6"
          />
        </label>
      </div>
      <div className="flex flex-row items-center mx-4 h-12 bg-base-300 rounded-lg mt-3 mb-2">
        <p className="text-neutral text-sm font-medium ml-4 mr-3">
          Notify similar properties
        </p>
        <input
          type="checkbox"
          className="toggle toggle-primary toggle-sm"
          onChange={toggleChange}
        />
      </div>
      <div className="flex flex-col px-4">
        <button className="btn btn-square btn-primary w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={keyFacts}
            alt="keyFacts"
            className="w-6 h-6 ml-4 mr-2 hover:text-white hover:stroke-white hover:fill-white"
          />
          <p className="text-white hover:text-white pr-12 py-4 normal-case text-right font-medium ">
            Key Facts
          </p>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={propertyHistory}
            alt="propertyHistory"
            className="w-6 h-6 ml-4 mr-2"
          />
          <span className="text-base-200 hover:text-white pr-12 py-4 normal-case text-right font-medium">
            Property History
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img
            src={demographics}
            alt="demographics"
            className="w-6 h-6 ml-4 mr-2"
          />
          <span className="text-base-200 hover:text-white pr-14 py-4 normal-case text-right font-medium">
            Demographics
          </span>
        </button>
        <button className="btn btn-outline btn-square btn-accent w-full mb-2 flex flex-row items-left justify-start">
          <img src={poi} alt="poi" className="w-6 h-6 ml-4 mr-2" />
          <span className="text-base-200 hover:text-white pr-10 py-4 normal-case text-right font-medium">
            Points of Interest
          </span>
        </button>
      </div>
    </>
  );
}