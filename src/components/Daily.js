import React, {Component} from "react";

class Daily extends Component{
    render(){
        const {daily} = this.props.weatherData;        
        let days = daily.map((day) => {return <th key={Math.random()+Math.random()}>{day.dow.slice(0,3)} {day.date.slice(0,day.date.lastIndexOf('/'))}</th>})
        let sr = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.sunrise}</td>})
        let ss = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.sunset}</td>})
        let mr = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.moonrise}</td>})
        let ms = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.moonset}</td>})
        let td = daily.map((day) => {let x = day.temp.day; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.temp.day}°F</td>})
        let tmin = daily.map((day) => {let x = day.temp.min; return <td key={Math.random()+Math.random()} className={`${x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}`}>{day.temp.min}°F</td>})
        let tmax = daily.map((day) => {let x = day.temp.max; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.temp.max}°F</td>})
        let tn = daily.map((day) => {let x = day.temp.night; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.temp.night}°F</td>})
        let te = daily.map((day) => {let x = day.temp.eve; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.temp.eve}°F</td>})
        let tmorn = daily.map((day) => {let x = day.temp.morn; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.temp.morn}°F</td>})
        let fld = daily.map((day) => {let x = day.feels_like.day; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.feels_like.day}°F</td>})
        let fln = daily.map((day) => {let x = day.feels_like.night; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.feels_like.night}°F</td>})
        let fle = daily.map((day) => {let x = day.feels_like.eve; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.feels_like.eve}°F</td>})
        let flm = daily.map((day) => {let x = day.feels_like.morn; return <td key={Math.random()+Math.random()} className={x>80&&x<=90?"text-warning":x>89&&x<=99?'text-danger':x>99?'text-purple':x<32?'text-primary':''}>{day.feels_like.morn}°F</td>})
        let pr = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.pressure}hPa</td>})
        let hum = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.humidity}%</td>})
        let dew = daily.map((day) => {let x = day.dew_point; return <td key={Math.random()+Math.random()} className={x>60&&x<=65?"text-warning":x>65&&x<=70?'text-danger':x>70?'text-purple':''}>{day.dew_point}°F</td>})
        let wdsp = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.wind_speed}mph</td>})
        let wdd = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.wind_deg}</td>})
        let mpn = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.moon_phase_name} <br></br><img src={day.moon_phase_url} alt='Moon phase for day'></img><br></br>({day.moon_phase}%)</td>})
        let wdg = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.wind_gust}mph</td>})
        let cld = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.clouds}%</td>})
        let sum = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.summary.description}</td>})
        let icon = daily.map((day) => {return <td key={Math.random()+Math.random()}><img alt={`${day.summary.description} condition`}src={`http://openweathermap.org/img/wn/${day.summary.icon}.png`}></img></td>})
        let pop = daily.map((day) => {return <td key={Math.random()+Math.random()}>{day.pop*100}%</td>})
        return (
            <div>
                <h4 className='text-center'>Daily Forecast</h4>
                <div className="table-responsive">
                    <table className="text-center table table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                {days}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Morning Temp</th>
                                {tmorn}
                            </tr>
                            <tr>
                                <th>Morning Feels Like</th>
                                {flm}
                            </tr>
                            <tr>
                                <th>Day Temp</th>
                                {td}
                            </tr>
                            <tr>
                                <th>Day Feels Like</th>
                                {fld}
                            </tr>
                            <tr>
                                <th>Max Temp</th>
                                {tmax}
                            </tr>
                            <tr>
                                <th>Evening Temp</th>
                                {te}
                            </tr>
                            <tr>
                                <th>Evening Feels Like</th>
                                {fle}
                            </tr>
                            <tr>
                                <th>Night Temp</th>
                                {tn}
                            </tr>
                            <tr>
                                <th>Night Feels Like</th>
                                {fln}
                            </tr>
                            <tr>
                                <th>Min Temp</th>
                                {tmin}
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
                                <th>Cloud Coverage</th>
                                {cld}
                            </tr>
                            <tr>
                                <th>Condition</th>
                                {sum}
                            </tr>
                            <tr>
                                <th>Precip Chance</th>
                                {pop}
                            </tr>
                            <tr>
                                <th>Icon</th>
                                {icon}
                            </tr>
                            <tr>
                                <th>Sunrise</th>
                                {sr}
                            </tr>
                            <tr>
                                <th>Sunset</th>
                                {ss}
                            </tr>
                            <tr>
                                <th>Moonrise</th>
                                {mr}
                            </tr>
                            <tr>
                                <th>Moon Phase</th>
                                {mpn}
                            </tr>
                            <tr>
                                <th>Moonset</th>
                                {ms}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr></hr> 
            </div>
        )
    }
    
}
export default Daily;