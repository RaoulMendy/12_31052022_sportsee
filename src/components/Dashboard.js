import React from "react";
import "../sass/styles.css";
import Nutriment from "./Nutriment";
import Activity from "./Activity";
import Sessions from "./Sessions";
import Performance from "./Performance";
import RadialChart from "./RadialChart.js";


function Dashboard({ id }) {
  return (
    <div className="dashboard">
      <h1>
        Bonjour <span className="user">{`Utilisateur n°${id}`}</span>
      </h1>
      <p>Avez-vous atteint votre objectif?</p>
      <div className="container">
        <div className="container-graph">
          <Activity/>
          <Sessions/>
          <Performance/>
          <RadialChart/>
        </div>
        <div className="container-nutri">
          <Nutriment type="calories" name="Calories" />
          <Nutriment type="protein" name="Proteines" />
          <Nutriment type="carbs" name="Glucides" />
          <Nutriment type="fat" name="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
