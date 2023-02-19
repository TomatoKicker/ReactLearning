import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

function WeatherSearchBox(){
    return(
      <div>
        <FontAwesomeIcon icon={faCocktail}/>
        <input type='text'/>
        <button>
<FontAwesomeIcon icon={faCocktail}/>
        </button>
        </div>
    )
}
export default WeatherSearchBox