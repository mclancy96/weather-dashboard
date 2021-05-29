import React, {Component} from "react";

class Hourly extends Component{
    render(){
        const {hour} = this.props.weatherData
        return (
            <div>
                {/* <p className="text-white text-center">{current.currentDow}, {current.currentDate} {current.currentTime}</p> */}
            </div>
        )
    }
    
}
export default Hourly;