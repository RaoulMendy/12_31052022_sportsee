const USER_MAIN_DATA = [
  {
    id: 1,
    userInfos: { firstname: "Jim", lastname: "Merwood", age: 28 },
    todayScore: 0.82,
    KeyData: {
      calorieCount: 2611,
      proteinCount: 54,
      carbohydratesCount: 155,
      lipidCount: 15,
    },
  },
  {
    id: 2,
    userInfos: { firstname: "Ximenes", lastname: "Skeath", age: 41 },
    todayScore: 0.98,
    KeyData: {
      calorieCount: 2255,
      proteinCount: 92,
      carbohydratesCount: 154,
      lipidCount: 14,
    },
  },
  {
    id: 3,
    userInfos: { firstname: "Tobiah", lastname: "Wedlock", age: 34 },
    todayScore: 0.28,
    KeyData: {
      calorieCount: 2192,
      proteinCount: 92,
      carbohydratesCount: 196,
      lipidCount: 100,
    },
  },
  {
    id: 4,
    userInfos: { firstname: "Joannes", lastname: "Haistwell", age: 55 },
    todayScore: 0.78,
    KeyData: {
      calorieCount: 2475,
      proteinCount: 132,
      carbohydratesCount: 157,
      lipidCount: 62,
    },
  },
  {
    id: 5,
    userInfos: { firstname: "Flo", lastname: "Arrighetti", age: 23 },
    todayScore: 0.3,
    KeyData: {
      calorieCount: 2523,
      proteinCount: 86,
      carbohydratesCount: 120,
      lipidCount: 69,
    },
  },
  {
    id: 6,
    userInfos: { firstname: "Sandro", lastname: "Boltwood", age: 38 },
    todayScore: 0.16,
    KeyData: {
      calorieCount: 2373,
      proteinCount: 105,
      carbohydratesCount: 58,
      lipidCount: 52,
    },
  },
  {
    id: 7,
    userInfos: { firstname: "Gil", lastname: "Hemphrey", age: 44 },
    todayScore: 0.54,
    KeyData: {
      calorieCount: 2130,
      proteinCount: 100,
      carbohydratesCount: 144,
      lipidCount: 34,
    },
  },
  {
    id: 8,
    userInfos: { firstname: "Kori", lastname: "Cicchinelli", age: 46 },
    todayScore: 0.34,
    KeyData: {
      calorieCount: 1806,
      proteinCount: 161,
      carbohydratesCount: 114,
      lipidCount: 80,
    },
  },
  {
    id: 9,
    userInfos: { firstname: "Allistir", lastname: "O'Regan", age: 45 },
    todayScore: 0.89,
    KeyData: {
      calorieCount: 1865,
      proteinCount: 160,
      carbohydratesCount: 115,
      lipidCount: 96,
    },
  },
  {
    id: 10,
    userInfos: { firstname: "Godard", lastname: "Sellars", age: 39 },
    todayScore: 0.76,
    KeyData: {
      calorieCount: 2671,
      proteinCount: 176,
      carbohydratesCount: 150,
      lipidCount: 25,
    },
  },
  {
    id: 11,
    userInfos: { firstname: "Courtnay", lastname: "Byart", age: 37 },
    todayScore: 0.21,
    KeyData: {
      calorieCount: 2300,
      proteinCount: 114,
      carbohydratesCount: 167,
      lipidCount: 49,
    },
  },
  {
    id: 12,
    userInfos: { firstname: "Celle", lastname: "Fountian", age: 35 },
    todayScore: 0.38,
    KeyData: {
      calorieCount: 2361,
      proteinCount: 173,
      carbohydratesCount: 115,
      lipidCount: 86,
    },
  },
  {
    id: 13,
    userInfos: { firstname: "Patience", lastname: "Bilbery", age: 26 },
    todayScore: 0.13,
    KeyData: {
      calorieCount: 1604,
      proteinCount: 143,
      carbohydratesCount: 135,
      lipidCount: 76,
    },
  },
  {
    id: 14,
    userInfos: { firstname: "Ursula", lastname: "Daunter", age: 47 },
    todayScore: 0.47,
    KeyData: {
      calorieCount: 2465,
      proteinCount: 149,
      carbohydratesCount: 118,
      lipidCount: 20,
    },
  },
  {
    id: 15,
    userInfos: { firstname: "Noami", lastname: "Kitteringham", age: 29 },
    todayScore: 0.87,
    KeyData: {
      calorieCount: 2399,
      proteinCount: 66,
      carbohydratesCount: 195,
      lipidCount: 95,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 1,
    sessions: [
      { day: "2022-05-12", kilogram: 69, calories: 233 },
      { day: "2021-07-28", kilogram: 68, calories: 449 },
      { day: "2021-06-20", kilogram: 70, calories: 431 },
      { day: "2021-10-13", kilogram: 67, calories: 216 },
      { day: "2021-11-05", kilogram: 70, calories: 243 },
      { day: "2021-11-11", kilogram: 68, calories: 283 },
      { day: "2022-04-22", kilogram: 68, calories: 409 },
    ],
  },
  {
    userId: 2,
    sessions: [
      { day: "2021-08-07", kilogram: 67, calories: 417 },
      { day: "2021-10-25", kilogram: 68, calories: 164 },
      { day: "2021-10-03", kilogram: 68, calories: 268 },
      { day: "2022-02-10", kilogram: 67, calories: 159 },
      { day: "2022-05-16", kilogram: 69, calories: 162 },
      { day: "2021-12-05", kilogram: 67, calories: 339 },
      { day: "2021-07-04", kilogram: 67, calories: 262 },
    ],
  },
  {
    userId: 3,
    sessions: [
      { day: "2022-01-18", kilogram: 69, calories: 246 },
      { day: "2022-05-26", kilogram: 67, calories: 204 },
      { day: "2022-01-20", kilogram: 70, calories: 172 },
      { day: "2022-02-25", kilogram: 70, calories: 156 },
      { day: "2021-07-17", kilogram: 67, calories: 154 },
      { day: "2021-09-12", kilogram: 68, calories: 247 },
      { day: "2022-02-06", kilogram: 68, calories: 365 },
    ],
  },
  {
    userId: 4,
    sessions: [
      { day: "2022-02-27", kilogram: 67, calories: 316 },
      { day: "2022-03-20", kilogram: 68, calories: 347 },
      { day: "2021-11-30", kilogram: 67, calories: 409 },
      { day: "2021-06-27", kilogram: 69, calories: 337 },
      { day: "2021-08-01", kilogram: 70, calories: 224 },
      { day: "2022-03-17", kilogram: 67, calories: 304 },
      { day: "2022-01-06", kilogram: 68, calories: 438 },
    ],
  },
  {
    userId: 5,
    sessions: [
      { day: "2021-07-23", kilogram: 67, calories: 444 },
      { day: "2022-03-21", kilogram: 67, calories: 250 },
      { day: "2021-09-13", kilogram: 70, calories: 197 },
      { day: "2022-03-24", kilogram: 69, calories: 217 },
      { day: "2022-01-24", kilogram: 70, calories: 210 },
      { day: "2022-06-05", kilogram: 68, calories: 432 },
      { day: "2022-04-30", kilogram: 68, calories: 357 },
    ],
  },
  {
    userId: 6,
    sessions: [
      { day: "2022-04-02", kilogram: 68, calories: 261 },
      { day: "2021-12-25", kilogram: 67, calories: 314 },
      { day: "2022-01-04", kilogram: 69, calories: 365 },
      { day: "2021-10-15", kilogram: 70, calories: 406 },
      { day: "2022-02-19", kilogram: 69, calories: 375 },
      { day: "2022-05-18", kilogram: 67, calories: 319 },
      { day: "2021-08-28", kilogram: 70, calories: 269 },
    ],
  },
  {
    userId: 7,
    sessions: [
      { day: "2021-10-07", kilogram: 70, calories: 164 },
      { day: "2022-01-20", kilogram: 69, calories: 435 },
      { day: "2022-02-28", kilogram: 67, calories: 214 },
      { day: "2022-01-04", kilogram: 70, calories: 387 },
      { day: "2022-01-29", kilogram: 67, calories: 407 },
      { day: "2022-01-07", kilogram: 67, calories: 365 },
      { day: "2021-11-08", kilogram: 69, calories: 218 },
    ],
  },
  {
    userId: 8,
    sessions: [
      { day: "2022-05-21", kilogram: 67, calories: 150 },
      { day: "2021-06-17", kilogram: 70, calories: 224 },
      { day: "2021-12-11", kilogram: 69, calories: 238 },
      { day: "2022-02-08", kilogram: 70, calories: 262 },
      { day: "2021-07-01", kilogram: 69, calories: 300 },
      { day: "2021-08-31", kilogram: 68, calories: 160 },
      { day: "2021-11-27", kilogram: 67, calories: 224 },
    ],
  },
  {
    userId: 9,
    sessions: [
      { day: "2021-08-08", kilogram: 68, calories: 377 },
      { day: "2022-03-01", kilogram: 70, calories: 328 },
      { day: "2022-01-03", kilogram: 67, calories: 243 },
      { day: "2022-02-27", kilogram: 69, calories: 372 },
      { day: "2022-01-19", kilogram: 68, calories: 434 },
      { day: "2021-07-02", kilogram: 69, calories: 374 },
      { day: "2021-08-25", kilogram: 68, calories: 159 },
    ],
  },
  {
    userId: 10,
    sessions: [
      { day: "2022-05-16", kilogram: 70, calories: 185 },
      { day: "2022-01-24", kilogram: 67, calories: 297 },
      { day: "2021-09-19", kilogram: 70, calories: 283 },
      { day: "2021-06-15", kilogram: 70, calories: 150 },
      { day: "2021-08-03", kilogram: 68, calories: 195 },
      { day: "2022-03-24", kilogram: 69, calories: 190 },
      { day: "2021-10-31", kilogram: 70, calories: 362 },
    ],
  },
  {
    userId: 11,
    sessions: [
      { day: "2022-03-23", kilogram: 70, calories: 326 },
      { day: "2021-06-28", kilogram: 70, calories: 286 },
      { day: "2021-10-06", kilogram: 70, calories: 252 },
      { day: "2021-10-24", kilogram: 68, calories: 156 },
      { day: "2021-08-20", kilogram: 69, calories: 152 },
      { day: "2021-08-14", kilogram: 67, calories: 399 },
      { day: "2022-01-14", kilogram: 67, calories: 154 },
    ],
  },
  {
    userId: 12,
    sessions: [
      { day: "2021-11-23", kilogram: 70, calories: 404 },
      { day: "2022-05-12", kilogram: 67, calories: 150 },
      { day: "2021-10-12", kilogram: 67, calories: 367 },
      { day: "2022-03-11", kilogram: 69, calories: 412 },
      { day: "2022-02-25", kilogram: 70, calories: 444 },
      { day: "2021-06-17", kilogram: 68, calories: 357 },
      { day: "2021-11-27", kilogram: 70, calories: 275 },
    ],
  },
  {
    userId: 13,
    sessions: [
      { day: "2022-01-23", kilogram: 69, calories: 185 },
      { day: "2022-05-11", kilogram: 67, calories: 386 },
      { day: "2022-05-29", kilogram: 69, calories: 255 },
      { day: "2021-08-30", kilogram: 69, calories: 362 },
      { day: "2022-01-30", kilogram: 67, calories: 422 },
      { day: "2022-01-09", kilogram: 67, calories: 217 },
      { day: "2022-02-13", kilogram: 69, calories: 391 },
    ],
  },
  {
    userId: 14,
    sessions: [
      { day: "2021-11-04", kilogram: 68, calories: 169 },
      { day: "2021-08-14", kilogram: 69, calories: 449 },
      { day: "2022-04-03", kilogram: 69, calories: 230 },
      { day: "2022-04-02", kilogram: 70, calories: 366 },
      { day: "2021-07-23", kilogram: 70, calories: 272 },
      { day: "2022-02-26", kilogram: 69, calories: 237 },
      { day: "2021-09-09", kilogram: 70, calories: 220 },
    ],
  },
  {
    userId: 15,
    sessions: [
      { day: "2022-02-12", kilogram: 69, calories: 409 },
      { day: "2022-02-02", kilogram: 68, calories: 153 },
      { day: "2022-02-23", kilogram: 70, calories: 286 },
      { day: "2021-11-19", kilogram: 67, calories: 260 },
      { day: "2021-12-26", kilogram: 69, calories: 450 },
      { day: "2021-10-24", kilogram: 68, calories: 435 },
      { day: "2021-06-24", kilogram: 69, calories: 306 },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 1,
    sessions: [
      {
        day: 1,
        sessionLength: 13,
      },
      {
        day: 2,
        sessionLength: 30,
      },
      {
        day: 3,
        sessionLength: 7,
      },
      {
        day: 4,
        sessionLength: 42,
      },
      {
        day: 5,
        sessionLength: 35,
      },
      {
        day: 6,
        sessionLength: 29,
      },
      {
        day: 7,
        sessionLength: 30,
      },
    ],
  },
  {
    userId: 2,
    sessions: [
      {
        day: 1,
        sessionLength: 46,
      },
      {
        day: 2,
        sessionLength: 37,
      },
      {
        day: 3,
        sessionLength: 19,
      },
      {
        day: 4,
        sessionLength: 16,
      },
      {
        day: 5,
        sessionLength: 1,
      },
      {
        day: 6,
        sessionLength: 32,
      },
      {
        day: 7,
        sessionLength: 6,
      },
    ],
  },
  {
    userId: 3,
    sessions: [
      {
        day: 1,
        sessionLength: 46,
      },
      {
        day: 2,
        sessionLength: 51,
      },
      {
        day: 3,
        sessionLength: 42,
      },
      {
        day: 4,
        sessionLength: 60,
      },
      {
        day: 5,
        sessionLength: 3,
      },
      {
        day: 6,
        sessionLength: 26,
      },
      {
        day: 7,
        sessionLength: 36,
      },
    ],
  },
  {
    userId: 4,
    sessions: [
      {
        day: 1,
        sessionLength: 54,
      },
      {
        day: 2,
        sessionLength: 43,
      },
      {
        day: 3,
        sessionLength: 32,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 41,
      },
    ],
  },
  {
    userId: 5,
    sessions: [
      {
        day: 1,
        sessionLength: 35,
      },
      {
        day: 2,
        sessionLength: 38,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 18,
      },
      {
        day: 5,
        sessionLength: 16,
      },
      {
        day: 6,
        sessionLength: 37,
      },
      {
        day: 7,
        sessionLength: 12,
      },
    ],
  },
  {
    userId: 6,
    sessions: [
      {
        day: 1,
        sessionLength: 20,
      },
      {
        day: 2,
        sessionLength: 53,
      },
      {
        day: 3,
        sessionLength: 13,
      },
      {
        day: 4,
        sessionLength: 52,
      },
      {
        day: 5,
        sessionLength: 34,
      },
      {
        day: 6,
        sessionLength: 36,
      },
      {
        day: 7,
        sessionLength: 6,
      },
    ],
  },
  {
    userId: 7,
    sessions: [
      {
        day: 1,
        sessionLength: 21,
      },
      {
        day: 2,
        sessionLength: 39,
      },
      {
        day: 3,
        sessionLength: 42,
      },
      {
        day: 4,
        sessionLength: 60,
      },
      {
        day: 5,
        sessionLength: 23,
      },
      {
        day: 6,
        sessionLength: 10,
      },
      {
        day: 7,
        sessionLength: 43,
      },
    ],
  },
  {
    userId: 8,
    sessions: [
      {
        day: 1,
        sessionLength: 6,
      },
      {
        day: 2,
        sessionLength: 45,
      },
      {
        day: 3,
        sessionLength: 33,
      },
      {
        day: 4,
        sessionLength: 7,
      },
      {
        day: 5,
        sessionLength: 35,
      },
      {
        day: 6,
        sessionLength: 38,
      },
      {
        day: 7,
        sessionLength: 24,
      },
    ],
  },
  {
    userId: 9,
    sessions: [
      {
        day: 1,
        sessionLength: 51,
      },
      {
        day: 2,
        sessionLength: 35,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 55,
      },
      {
        day: 5,
        sessionLength: 19,
      },
      {
        day: 6,
        sessionLength: 28,
      },
      {
        day: 7,
        sessionLength: 8,
      },
    ],
  },
  {
    userId: 10,
    sessions: [
      {
        day: 1,
        sessionLength: 42,
      },
      {
        day: 2,
        sessionLength: 9,
      },
      {
        day: 3,
        sessionLength: 23,
      },
      {
        day: 4,
        sessionLength: 18,
      },
      {
        day: 5,
        sessionLength: 36,
      },
      {
        day: 6,
        sessionLength: 40,
      },
      {
        day: 7,
        sessionLength: 39,
      },
    ],
  },
  {
    userId: 11,
    sessions: [
      {
        day: 1,
        sessionLength: 60,
      },
      {
        day: 2,
        sessionLength: 47,
      },
      {
        day: 3,
        sessionLength: 53,
      },
      {
        day: 4,
        sessionLength: 1,
      },
      {
        day: 5,
        sessionLength: 46,
      },
      {
        day: 6,
        sessionLength: 12,
      },
      {
        day: 7,
        sessionLength: 41,
      },
    ],
  },
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 2,
      },
      {
        day: 2,
        sessionLength: 5,
      },
      {
        day: 3,
        sessionLength: 9,
      },
      {
        day: 4,
        sessionLength: 53,
      },
      {
        day: 5,
        sessionLength: 6,
      },
      {
        day: 6,
        sessionLength: 1,
      },
      {
        day: 7,
        sessionLength: 43,
      },
    ],
  },
  {
    userId: 13,
    sessions: [
      {
        day: 1,
        sessionLength: 58,
      },
      {
        day: 2,
        sessionLength: 54,
      },
      {
        day: 3,
        sessionLength: 15,
      },
      {
        day: 4,
        sessionLength: 4,
      },
      {
        day: 5,
        sessionLength: 4,
      },
      {
        day: 6,
        sessionLength: 1,
      },
      {
        day: 7,
        sessionLength: 28,
      },
    ],
  },
  {
    userId: 14,
    sessions: [
      {
        day: 1,
        sessionLength: 44,
      },
      {
        day: 2,
        sessionLength: 45,
      },
      {
        day: 3,
        sessionLength: 57,
      },
      {
        day: 4,
        sessionLength: 9,
      },
      {
        day: 5,
        sessionLength: 14,
      },
      {
        day: 6,
        sessionLength: 46,
      },
      {
        day: 7,
        sessionLength: 49,
      },
    ],
  },
  {
    userId: 15,
    sessions: [
      {
        day: 1,
        sessionLength: 41,
      },
      {
        day: 2,
        sessionLength: 8,
      },
      {
        day: 3,
        sessionLength: 47,
      },
      {
        day: 4,
        sessionLength: 10,
      },
      {
        day: 5,
        sessionLength: 44,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 39,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 1,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 57, kind: 1 },
      { value: 179, kind: 2 },
      { value: 94, kind: 3 },
      { value: 67, kind: 4 },
      { value: 158, kind: 5 },
      { value: 135, kind: 6 },
    ],
  },
  {
    userId: 2,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 199, kind: 1 },
      { value: 62, kind: 2 },
      { value: 182, kind: 3 },
      { value: 185, kind: 4 },
      { value: 118, kind: 5 },
      { value: 142, kind: 6 },
    ],
  },
  {
    userId: 3,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 106, kind: 1 },
      { value: 116, kind: 2 },
      { value: 198, kind: 3 },
      { value: 64, kind: 4 },
      { value: 200, kind: 5 },
      { value: 83, kind: 6 },
    ],
  },
  {
    userId: 4,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 185, kind: 1 },
      { value: 197, kind: 2 },
      { value: 183, kind: 3 },
      { value: 82, kind: 4 },
      { value: 76, kind: 5 },
      { value: 70, kind: 6 },
    ],
  },
  {
    userId: 5,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 208, kind: 1 },
      { value: 113, kind: 2 },
      { value: 145, kind: 3 },
      { value: 79, kind: 4 },
      { value: 108, kind: 5 },
      { value: 156, kind: 6 },
    ],
  },
  {
    userId: 6,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 200, kind: 1 },
      { value: 89, kind: 2 },
      { value: 130, kind: 3 },
      { value: 154, kind: 4 },
      { value: 63, kind: 5 },
      { value: 209, kind: 6 },
    ],
  },
  {
    userId: 7,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 167, kind: 1 },
      { value: 101, kind: 2 },
      { value: 169, kind: 3 },
      { value: 93, kind: 4 },
      { value: 155, kind: 5 },
      { value: 203, kind: 6 },
    ],
  },
  {
    userId: 8,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 173, kind: 1 },
      { value: 102, kind: 2 },
      { value: 123, kind: 3 },
      { value: 154, kind: 4 },
      { value: 114, kind: 5 },
      { value: 63, kind: 6 },
    ],
  },
  {
    userId: 9,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 64, kind: 1 },
      { value: 72, kind: 2 },
      { value: 149, kind: 3 },
      { value: 83, kind: 4 },
      { value: 103, kind: 5 },
      { value: 203, kind: 6 },
    ],
  },
  {
    userId: 10,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 87, kind: 1 },
      { value: 168, kind: 2 },
      { value: 144, kind: 3 },
      { value: 59, kind: 4 },
      { value: 81, kind: 5 },
      { value: 69, kind: 6 },
    ],
  },
  {
    userId: 11,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 120, kind: 1 },
      { value: 210, kind: 2 },
      { value: 65, kind: 3 },
      { value: 191, kind: 4 },
      { value: 87, kind: 5 },
      { value: 97, kind: 6 },
    ],
  },
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 202, kind: 1 },
      { value: 144, kind: 2 },
      { value: 87, kind: 3 },
      { value: 151, kind: 4 },
      { value: 88, kind: 5 },
      { value: 103, kind: 6 },
    ],
  },
  {
    userId: 13,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 207, kind: 1 },
      { value: 121, kind: 2 },
      { value: 192, kind: 3 },
      { value: 174, kind: 4 },
      { value: 191, kind: 5 },
      { value: 158, kind: 6 },
    ],
  },
  {
    userId: 14,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 209, kind: 1 },
      { value: 188, kind: 2 },
      { value: 176, kind: 3 },
      { value: 105, kind: 4 },
      { value: 184, kind: 5 },
      { value: 191, kind: 6 },
    ],
  },
  {
    userId: 15,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 206, kind: 1 },
      { value: 104, kind: 2 },
      { value: 60, kind: 3 },
      { value: 71, kind: 4 },
      { value: 92, kind: 5 },
      { value: 89, kind: 6 },
    ],
  },
];

module.exports = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
