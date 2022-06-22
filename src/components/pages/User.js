import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../Dashboard";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const API = `https://my.api.mockaroo.com/user.json?key=7436fef0`
  const userData = `https://my.api.mockaroo.com/user/${id}.json?key=7436fef0`;
  const localAPI = "../../datas/user.json";

  // Le useEffect se joue lorsque le composant est monté
  // useEffect(() => {
  //   axios
  //     .get(`https://localhost:3000/datas/mockeddata.js`)
  //     .then((res) => setData(res.data));


  // }, []);

  return (
    <div className="App">
    </div>
  );
}

export default User;
