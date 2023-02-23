import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function test(){
    const inputField = document.querySelector('input')
    const weatherContainer = document.querySelector('.weather-container')
    if(inputField.value === ''){
        alert('test');
        return;
    }
    const country = inputField.value;
    const apiKey = '8124c75248bcbb397a816b9bed4e89ce'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`

    fetch(URL)
        .then(response => response.json())
        .then(
            json =>{
                if (json.cod === '404'){
                    alert('404') 
                    weatherContainer.style.height = '500px';
                    return;
                }
                    const windSpeed = json.wind.speed;
                    const humidityLevel = json.main.humidity;
                alert(windSpeed);
                alert(humidityLevel);
            } 
        );
}

function WeatherSearchBox() {
    return (
        <div className="weather-searchbox">
           <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <input type="text" placeholder="Enter your country"></input>
            <button onClick={test}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}

export default WeatherSearchBox
