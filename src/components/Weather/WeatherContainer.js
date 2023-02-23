import React from "react";
import WeatherSearchBox from "./WeatherSearchBox";
import '../../css/Weather/Weather.css'
import WeatherNotFound from "./WeatherNotFound";
import WeatherInfo from "./WeatherInfo"

function WeatherContainer() {
    return (
        <div className="weather-container">
            <WeatherSearchBox />
            <WeatherNotFound />
            <WeatherInfo/>
        </div>
    )
}

export default WeatherContainer;
