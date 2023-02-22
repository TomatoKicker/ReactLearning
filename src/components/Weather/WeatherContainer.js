import React from "react";
import WeatherSearchBox from "./WeatherSearchBox";
import '../../css/Weather/Weather.css'
import WeatherNotFound from "./WeatherNotFound";

function WeatherContainer() {
    return (
        <div className="weather-container">
            <WeatherSearchBox />
            <WeatherNotFound />
        </div>
    )
}

export default WeatherContainer;