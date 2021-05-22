import React from 'react';

const getCurrentWeather = (city, state, country="US") => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=Seattle,WA,${country}&appid=${process.env.APIKEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

function Current(){
    return (
        <p>{getCurrentWeather("Seattle", "WA")}</p>
    )
}
export default Current;