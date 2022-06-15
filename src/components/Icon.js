import React from "react";
import "../sass/styles.css";
// import Yoga from "../assets/yoga-icon.svg";
// import Swim from "../assets/swim-icon.svg";
// import Cycle from "../assets/cycle-icon.svg";
// import Weight from "../assets/weight-icon.svg";

function Icon({ type }) {
  // const iconType =
  //   type === "yoga"
  //     ? Yoga
  //     : type === "swim"
  //     ? Swim
  //     : type === "cycle"
  //     ? Cycle
  //     : Weight;

  return (
    <div className="icon">
      <img src={`../assets/${type}-icon.svg`} alt={`icon__${type}`} />
    </div>
  );
}

export default Icon;
