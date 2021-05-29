import React, {Component} from "react";

class Minutely extends Component{
    render(){
        const {minute} = this.props.weatherData
        return (
            <div>
                {/* <p className="text-white text-center">{current.currentDow}, {current.currentDate} {current.currentTime}</p> */}
            </div>
        )
    }
    
}
export default Minutely;