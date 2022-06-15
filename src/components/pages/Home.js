import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../Dashboard";
import data from "../../datas/db.json";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  const [data, setData] = useState([])


  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get(data).then((res) => console.log(res.data));
  }, []);

  return (
    <div className="App">
      <Dashboard id={id} />
    </div>
  );
}

export default Home;
