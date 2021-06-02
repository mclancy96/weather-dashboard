import React, {Component} from "react";

class Hourly extends Component{
    render(){
        const {hour} = this.props.weatherData
        const endOfDaySet = (time) => {
            if(time==='11:00PM'){
                return 'endOfDay'
            } else {
                return ''
            }
        }
        let hours = hour.map((hr) => {return <th key={Math.random()+Math.random()} className={endOfDaySet(hr.hour)}>{hr.hour}</th>})
        let tmp = hour.map((hour) => {let x = hour.temp; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?`text-warning ${endOfDaySet(hour.hour)}`:x>89&&x<=99?`text-danger ${endOfDaySet(hour.hour)}`:x>99?`text-purple ${endOfDaySet(hour.hour)}`:x<32?'text-primary':`${endOfDaySet(hour.hour)}`}>{hour.temp}°F</td>})
        let fl = hour.map((hour) => {let x = hour.feels_like; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?`text-warning ${endOfDaySet(hour.hour)}`:x>89&&x<=99?`text-danger ${endOfDaySet(hour.hour)}`:x>99?`text-purple ${endOfDaySet(hour.hour)}`:x<32?'text-primary':`${endOfDaySet(hour.hour)}`}>{hour.feels_like}°F</td>})
        let pr = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.pressure}hPa</td>})
        let hum = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.humidity}%</td>})
        let dew = hour.map((hour) => {let x = hour.dew_point; return <td key={Math.random()+Math.random()} className={x>60&&x<=65?`text-warning ${endOfDaySet(hour.hour)}`:x>65&&x<=70?`text-danger ${endOfDaySet(hour.hour)}`:x>70?`text-purple ${endOfDaySet(hour.hour)}`:`${endOfDaySet(hour.hour)}`}>{hour.dew_point}°F</td>})
        let uvi = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.uvi}</td>})
        let wdsp = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.wind_speed}mph</td>})
        let wdd = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.wind_deg}</td>})
        let wdg = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.wind_gust}mph</td>})
        let vis = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.visibility}miles</td>})
        let cld = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.clouds}%</td>})
        let sum = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{hour.summary[0].description}</td>})
        let icon = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}><img alt={`${hour.summary[0].description} condition`}src={`http://openweathermap.org/img/wn/${hour.summary[0].icon}.png`}></img></td>})
        let pop = hour.map((hour) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(hour.hour)}>{Math.round(hour.pop*100)}%</td>})
        return (
            <div>
                <h4 className='text-center'>Hourly Forecast</h4>                
                <div className="table-responsive">
                    <table className="text-center table table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope='col'>Time</th>
                                {hours}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='col'>Temperature</th>
                                {tmp}
                            </tr>
                            <tr>
                                <th scope='col'>Feels Like</th>
                                {fl}
                            </tr>
                            <tr>
                                <th scope='col'>Pressure</th>
                                {pr}
                            </tr>
                            <tr>
                                <th scope='col'>Humidity</th>
                                {hum}
                            </tr>
                            <tr>
                                <th scope='col'>Dew Point</th>
                                {dew}
                            </tr>
                            <tr>
                                <th scope='col'>UV Index</th>
                                {uvi}
                            </tr>
                            <tr>
                                <th scope='col'>Wind Speed</th>
                                {wdsp}
                            </tr>
                            <tr>
                                <th scope='col'>Wind Direction</th>
                                {wdd}
                            </tr>
                            <tr>
                                <th scope='col'>Wind Gust</th>
                                {wdg}
                            </tr>
                            <tr>
                                <th scope='col'>Visibility</th>
                                {vis}
                            </tr>
                            <tr>
                                <th scope='col'>Cloud Coverage</th>
                                {cld}
                            </tr>
                            <tr>
                                <th scope='col'>Precip Chance</th>
                                {pop}
                            </tr>
                            <tr>
                                <th scope='col'>Condition</th>
                                {sum}
                            </tr>
                            <tr>
                                <th scope='col'>Icon</th>
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