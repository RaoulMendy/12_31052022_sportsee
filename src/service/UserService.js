// import axios from "axios";
// import React from "react";
// import { USER_ACTIVITY,  } from "../datas/MockedData";


// export default function GetUserById() {
//     const [user, setUser] = React.useState(null);
  
//     React.useEffect(() => {
//       axios.get('http://localhost:3000/user/18/').then((response) => {
//         setUser(response.data);
//       });
//     }, []);
  
//     if (!user) return null;
  
//     return (
//       <div>
//         <h1>{user.title}</h1>
//         <p>{user.body}</p>
//       </div>
//     );
//   }

// / const axios = require('axios').default;

// // All users endpoint
// export const getAllUsers = async () => {
//   return axios.get("http://localhost:3000/users/")
  
// };
// // First endpoint : Main User
// export const getUserByIdActivity = async () => {
//     const res = await fetch("http://localhost:3000/user/12");
//     return await res.json()
// };
// // Second endpoint : Main User activity
// export const getUserActivity = async () => {
//   return axios.get("http://localhost:3000/user/:id/activity");
// };
// // Third endpoint : Main User average sessions
// export const getUserPerformance = async () => {
//   return axios.get("http://localhost:3000/user/:id/average-sessions");
// };
// // Third endpoint : Main User score
// export const getUserSocre = async () => {
//   return axios.get("http://localhost:3000/user/:id/today-score");
// };
