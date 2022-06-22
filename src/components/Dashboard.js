import React from "react";
import "../sass/styles.css";

function Dashboard({ id }) {
  return (
    <div className="dashboard">
      <h1>
        Bonjour <span className="user">{id}</span>
      </h1>
      <p>Avez-vous atteint votre objectif?</p>
      <div>
        
      </div>
    </div>

  );
}

export default Dashboard;
