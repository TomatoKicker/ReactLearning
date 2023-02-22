import React from "react";
import WeatherSearchBox from "./WeatherSearchBox";
import '../../css/Weather/Weather.css'

function WeatherContainer() {
    return (
        <div className="weather-container">
            <WeatherSearchBox />
        </div>
    )
}

export default WeatherContainer;