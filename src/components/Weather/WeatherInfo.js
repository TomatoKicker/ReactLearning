import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { faWind, faWater } from "@fortawesome/free-solid-svg-icons";

function WeatherInfo() {
    return(
        <div className="wearher-info">
            <img src={require('../../assets/weather/clear.png')} alt='Westher Info'/>
            <div className="weather-info-box">
                <div className="weather-info-wind">
                    <div className="weather-info-wind-icon">
                        <FontAwesomeIcon icon={faWind}/>
                    </div>
                    <div className="weather-info-wind-text">
                        <p>Wind Speed</p>
                        <p>Text</p>
                    </div>
                </div>
                <div className="weather-info-humidity">
                    <div className="weather-info-humidity-icon">
                        <FontAwesomeIcon icon={faWater}/>
                    </div>
                    <div className="weather-info-humidity-text">
                        <p>Humidiy Level</p>
                        <p> Text </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;
