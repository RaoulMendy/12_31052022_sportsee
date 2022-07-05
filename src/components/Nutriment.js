function Nutriment({type, abbrv, name}) {
    return (
        <div className="macronutrients">
          <img src={`../assets/${type}-icon.svg`} className="macronutrients__img" alt="nutri-img"/>
          <div className="macronutrients__content">
            <h2 className="macronutrients__content__figure">{`1500${abbrv}`}</h2>
            <p className="macronutrients__content__name">{name}</p>
          </div>
        </div>
    )
}

export default Nutriment


// import calories from "../assets/calories-icon.svg"
// import protein from "../assets/protein-icon.svg"
// import carbs from "../assets/carbs-icon.svg"
// import fat from "../assets/fat-icon.svg"



// function Nutriment({type, name}) {
//   const nutriType =
//   type === "calories"
//     ? calories
//     : type === "protein"
//     ? protein
//     : type === "carbs"
//     ? carbs
//     : fat;
//     return (
//         <div className="nutri">
//           <img src={nutriType} className="nutri-img" alt="nutri-img"/>
//           <div className="nutri-content">
//             <p>1500KCal</p>
//             <p>{name}</p>
//           </div>
//         </div>
//     )
// }

// export default Nutriment