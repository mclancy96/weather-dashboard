import React, {Component} from "react";
import '../App.css'

class Current extends Component{
    render(){    
        const {current, daily} = this.props.weatherData;
        return (
            <div className="">
                <h4 className='text-center'>Current Weather</h4>
                <div className="container text-center align-items-center">
                    <div className="row py-2">
                        <div className="col ">
                            <strong>Temperature</strong> <br></br>
                            {current.temp}°F
                        </div>
                        <div className="col ">
                            <strong>Feels Like</strong> <br></br> 
                            {current.feels_like}°F
                        </div>
                        <div className="col ">
                            <strong>Condition</strong> <br></br> 
                            {current.summary.desc}
                        </div>
                        <div className="col ">
                            <strong>Cloud Cover</strong> <br></br> 
                            {current.clouds}%
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className="col ">
                            <strong>Humidity</strong> <br></br>
                            {current.humidity}%
                        </div>
                        <div className="col ">
                            <strong>Dew Point</strong> <br></br> 
                            {current.dew_point}°F
                        </div>
                        <div className="col ">
                            <strong>Pressure</strong> <br></br> 
                            {current.pressure}hPa
                        </div>
                        <div className="col ">
                            <strong>UV Index</strong> <br></br> 
                            {current.uvi}
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col ">
                            <strong>Visibility</strong> <br></br>
                            {Math.round(current.visibility * 0.000621371)} miles
                        </div>
                        <div className="col ">
                            <strong>Wind Speed</strong> <br></br> 
                            {current.wind_speed}mph
                        </div>
                        <div className="col ">
                            <strong>Wind Gust</strong> <br></br> 
                            {current.wind_gust}mph
                        </div>
                        <div className="col ">
                            <strong>Wind Direction</strong> <br></br> 
                            {current.wind_deg}
                        </div>
                    </div>
                    <div className="row py-2 align-items-center">
                        <div className="col ">
                            <strong>Sunrise</strong> <br></br> 
                            {daily[0].sunrise}
                        </div>
                        <div className="col ">
                            <strong>Sunset</strong> <br></br>
                            {daily[0].sunset}
                        </div>
                        <div className="col ">
                            <strong>Moonrise</strong> <br></br> 
                            {daily[0].moonrise}
                        </div>
                        <div className="col ">
                            <strong>Moonset</strong> <br></br> 
                            {daily[0].moonset}
                        </div>
                        <div className="col ">
                            <strong>Moon Phase</strong> <br></br> 
                            <img src={daily[0].moon_phase_url} alt="Current moon phase"></img><br></br>
                            {daily[0].moon_phase_name} ({daily[0].moon_phase*100}%)<br></br>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}
export default Current;