import React, {Component} from "react";

class Daily extends Component{
    render(){
        const {daily} = this.props.weatherData
        return (
            <div>
                {/* <p className="text-white text-center">{current.currentDow}, {current.currentDate} {current.currentTime}</p> */}
            </div>
        )
    }
    
}
export default Daily;