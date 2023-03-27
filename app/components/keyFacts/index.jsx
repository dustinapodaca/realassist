import data from "../../assets/data/data.json";

export default function KeyFacts () {
  return (
    <div className="h-96 bg-white rounded-lg">
      <div className="tabs w-full">
        <a className="tab tab-bordered tab-active w-1/3 h-14">Key Facts</a>
        <a className="tab tab-bordered w-1/3 h-14">Details</a>
        <a className="tab tab-bordered w-1/3 h-14">Rooms</a>
      </div>
    </div>
  );
}