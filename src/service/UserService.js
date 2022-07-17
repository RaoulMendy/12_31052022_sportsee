export const getUserById = async (id) => {
  const res = await fetch(`http://localhost:3000/user/${id}/`)
  return await res.json();
};

// Second endpoint : Main User - Activity
export const getUserActivityById = async (id) => {
  const res = await fetch(`http://localhost:3000/user/${id}/activity/`)
  return await res.json();
};

// Third endpoint : Main User - Performance
export const getUserPerformancebyId = async (id) => {
   const res = await fetch(`http://localhost:3000/user/${id}/performance/`);
   return await res.json();
};
// Third endpoint : Main User - Score
export const getUserScoreById = async (id) => {
   const res = await fetch(`http://localhost:3000/user/${id}/average-sessions/`);
   return await res.json();
};
