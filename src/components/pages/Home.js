import React, { useState, useEffect } from "react";
import axios from "axios";
import { USER_MAIN_DATA } from "../../datas/zMockedData";

const data = USER_MAIN_DATA;
console.log(data);

function Home() {
  return (
    <div className="dashboard">
      <h1>Projet N°12 - Sportsee</h1>
      <p>Veuillez cliquer sur le profil à suivre</p>
      <ul>
        {data.map((user) => (
          <li
            key={user.id}
          >{`Utilisateur #${user.id} - ${user.userInfos.firstname} ${user.userInfos.lastname}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
