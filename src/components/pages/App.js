import React, { useState, useEffect } from "react";
// import axios from "axios";
import Dashboard from "../Dashboard";
import { useParams } from "react-router-dom";
import {getUser, getUserActivityById} from "../../service/UserService"


function App() {
  const { id } = useParams();
  // const [data, setData] = useState([]);
  // const API = `https://my.api.mockaroo.com/user.json?key=7436fef0`
  // const userData = `https://my.api.mockaroo.com/user/${id}.json?key=7436fef0`;
  // const localAPI = "../../datas/user.json";

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    async function load() {

      const data = await getUser(12)
      const dataActivity = await getUserActivityById(12)       
      console.log(data);
      console.log(dataActivity);
    }
    
    load()


  }, []);

  return (
  <Dashboard id={id}/>
  
  );
}

export default App;
