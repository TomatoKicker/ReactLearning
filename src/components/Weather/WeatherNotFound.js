import React from "react";

const WeatherNotFound = () => {
    return (
        <div className="weather-notfound">
            <img src={require("../../assets/weather/404.png")} alt='weather not found'></img>
            <p>
                Location not found :(
            </p>
        </div>
    )
};

export default WeatherNotFound;
