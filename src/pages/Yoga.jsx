import { useContext } from "react";
import Instructions from "../components/Instructions";
import YogaContext from "../YogaContext";
import "../Yoga.css";
import DropDown from "../components/DropDown";
import { Link } from "react-router-dom";

let poseList = [
  "Tree",
  "Chair",
  "Cobra",
  "Warrior",
  "Dog",
  "Shoulderstand",
  "Traingle",
];

function Yoga() {
  const { startYoga } = useContext(YogaContext);
  return (
    <div className="yoga-container">
      <div className="yoga-top">

        <DropDown poseList={poseList} />
      </div>

      <Instructions />
      <div className="button-container">
        <button onClick={startYoga(true)} className="secondary-btn">
          <Link to="/yoga">Start Pose</Link>
        </button>
        <button className="secondary-btn">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Yoga;
