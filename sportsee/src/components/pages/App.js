import React, { useState, useEffect } from "react";
import "../../sass/styles.css";
import { useParams } from "react-router-dom";
import {
  getUserById,
  getUserActivityById,
  getUserPerformancebyId,
  getUserScoreById,
} from "../../service/UserService";
import Header from "../Header";
import Activity from "../Activity";
import Sessions from "../Sessions";
import Performance from "../Performance";
import Score from "../Score";
import Nutriment from "../Nutriment";

function App() {
  const { id } = useParams();
  const active = parseInt(id);
  const [datas, setData] = useState({ main: {}, activity: {}, performance: {}, score: {} });

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    async function load() {
      try {
        const main = await getUserById(active);
        const activity = await getUserActivityById(active);
        const performance = await getUserPerformancebyId(active);
        const score = await getUserScoreById(active);
        setData({
          main: main.data,
          activity: activity.data,
          performance: performance.data,
          score: score.data
        });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(datas);

  return (
    <div className="dashboard">
        <Header userInfos={datas.main.userInfos}/>
      <div className="wrapper-dashboard">
        <div className="dashboard__charts">
          <Activity data={datas.activity.sessions} />
          <Sessions data={datas.score.sessions} />
          <Performance data={datas.performance.data} kind={datas.performance.kind} />
          <Score data={datas.main.todayScore} />
        </div>
        <div className="wrapper-macronutrients">
          {/* <Nutriment data={datas.user.keyData} type="calories" abbrv="Kcal" name="Calories" /> */}
          <Nutriment type="protein" abbrv="g" name="Proteines" />
          <Nutriment type="carbs" abbrv="g" name="Glucides" />
          <Nutriment type="fat" abbrv="g" name="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default App;
