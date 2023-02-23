import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
function WeatherSearchBox(){
    return(
      <div>
        <FontAwesomeIcon icon={faCocktail}/>
        <input type='text'/>
        <button>
<FontAwesomeIcon icon={faCocktail}/>
        </button>
=======
function WeatherSearchBox() {
    return (
        <div className="weather-searchbox">
            <FontAwesomeIcon icon={faLocationDot} />
            <input type="text" placeholder="Enter your country"></input>
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
>>>>>>> refs/remotes/origin/main
        </div>
    )
}
export default WeatherSearchBox