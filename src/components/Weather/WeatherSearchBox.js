import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function WeatherSearchBox() {
    return (
        <div className="weather-searchbox">
            <FontAwesomeIcon icon={faLocationDot} />
            <input type="text" placeholder="Enter your country"></input>
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}
export default WeatherSearchBox