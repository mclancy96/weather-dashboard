import React, {Component} from "react";

class Hourly extends Component{
    render(){
        const {hour} = this.props.weatherData
        let hours = hour.map((hr) => {return <th key={Math.random()+Math.random()}>{hr.hour}</th>})
        let tmp = hour.map((hour) => {let x = hour.temp; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{hour.temp}°F</td>})
        let fl = hour.map((hour) => {let x = hour.feels_like; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{hour.feels_like}°F</td>})
        let pr = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.pressure}hPa</td>})
        let hum = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.humidity}%</td>})
        let dew = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.dew_point}°F</td>})
        let uvi = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.uvi}</td>})
        let wdsp = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.wind_speed}mph</td>})
        let wdd = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.wind_deg}</td>})
        let wdg = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.wind_gust}mph</td>})
        let vis = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.visibility}miles</td>})
        let cld = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.clouds}%</td>})
        let sum = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.summary[0].description}</td>})
        let icon = hour.map((hour) => {return <td key={Math.random()+Math.random()}><img alt={`${hour.summary[0].description} condition`}src={`http://openweathermap.org/img/wn/${hour.summary[0].icon}.png`}></img></td>})
        let pop = hour.map((hour) => {return <td key={Math.random()+Math.random()}>{hour.pop*100}%</td>})
        return (
            <div>
                <h4 className='text-center'>Hourly Forecast</h4>                
                <div className="table-responsive">
                    <table className="text-center table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Time</th>
                                {hours}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Temperature</th>
                                {tmp}
                            </tr>
                            <tr>
                                <th>Feels Like</th>
                                {fl}
                            </tr>
                            <tr>
                                <th>Pressure</th>
                                {pr}
                            </tr>
                            <tr>
                                <th>Humidity</th>
                                {hum}
                            </tr>
                            <tr>
                                <th>Dew Point</th>
                                {dew}
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                {uvi}
                            </tr>
                            <tr>
                                <th>Wind Speed</th>
                                {wdsp}
                            </tr>
                            <tr>
                                <th>Wind Direction</th>
                                {wdd}
                            </tr>
                            <tr>
                                <th>Wind Gust</th>
                                {wdg}
                            </tr>
                            <tr>
                                <th>Visibility</th>
                                {vis}
                            </tr>
                            <tr>
                                <th>Cloud Coverage</th>
                                {cld}
                            </tr>
                            <tr>
                                <th>Precip Chance</th>
                                {pop}
                            </tr>
                            <tr>
                                <th>Condition</th>
                                {sum}
                            </tr>
                            <tr>
                                <th>Icon</th>
                                {icon}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr></hr> 
            </div>
        )
    }
    
}
export default Hourly;