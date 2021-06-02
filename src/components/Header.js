import React, {Component} from "react";


class Header extends Component{
    render(){
        const {current} = this.props.weatherData
        return (
            <div className="text-center">
                <h1 className="display-1">Weather Dashboard</h1>
                <h2 className='m-3'>{current.currentDow}, {current.currentDate}, {current.currentTime}</h2>
                <h5>
                    {this.props.locInfo} {current.temp}°F
                    <img alt={`${current.summary.desc} condition`}src={`http://openweathermap.org/img/wn/${current.summary.icon}.png`}></img>{current.summary.main}
                </h5>
                <a href="https://wdash.mikeclancy.me"><button type="button" className='btn btn-outline-light m-3'>New Location</button></a>
            </div>
        )
    }
}
export default Header;