import React from "react";
import "../sass/styles.css";
import Nutriment from "./Nutriment";
import Activity from "./Activity";
import Sessions from "./Sessions";
import Performance from "./Performance";
import Score from "./Score.js";

function Dashboard({ id }) {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>
          Bonjour <span className="user">{`${id}`}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="wrapper-dashboard">
        <div className="dashboard__charts">
          <Activity />
          {/* <div className="graph-bis"> */}
            <Sessions />
            <Performance />
            <Score />
          {/* </div> */}
        </div>
        <div className="wrapper-macronutrients">
          <Nutriment type="calories" abbrv="Kcal" name="Calories" />
          <Nutriment type="protein" abbrv="g" name="Proteines" />
          <Nutriment type="carbs" abbrv="g" name="Glucides" />
          <Nutriment type="fat" abbrv="g" name="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
