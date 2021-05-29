import React, {Component} from "react";

class Alert extends Component{
    render(){
        const {alert} = this.props.weatherData
        return (
            <div>
                {/* <p className="text-white text-center">{current.currentDow}, {current.currentDate} {current.currentTime}</p> */}
            </div>
        )
    }
    
}
export default Alert;