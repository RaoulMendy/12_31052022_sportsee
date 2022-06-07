import React from "react";
import "../sass/styles.css"
import Mock from "../assets/swim-icon.svg"


function Icon({type}) {

    const src = type.toString()
    const source = `../assets/${src}-icon.svg`;


    return (
        <div className="icon">
            <img src={Mock} alt={`icon__${type}`}/>
        </div>
    )
}

export default Icon