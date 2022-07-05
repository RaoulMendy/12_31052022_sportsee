const axios = require('axios').default;

// All users endpoint
export const getUser = async (id) => {
  return axios.get("http://localhost:3000/user/" + id)
  
};

// // Second endpoint : Main User activity
export const getUserActivityById = async (id) => {
  return axios.get(`http://localhost:3000/user/${id}/activity/`)
  
};
// export const getUserActivityById = async () => {
//   return axios.get("http://localhost:3000/user/:id/activity");
// };
// // Third endpoint : Main User average sessions
// export const getUserPerformancebyId = async () => {
//   return axios.get("http://localhost:3000/user/:id/performance");
// };
// // Third endpoint : Main User score
// export const getUserScoreById = async () => {
//   return axios.get("http://localhost:3000/user/:id/average-sessions");
// };
