import React, {Component} from "react";

class Minutely extends Component{
    render(){
        const {minute} = this.props.weatherData
        const endOfDaySet = (time) => {
            if(time==='11:59PM'){
                return 'endOfDay'
            } else {
                return ''
            }
        }
        let mins = minute.map((min) => {return <th key={min.minute} className={endOfDaySet(min.minute)}>{min.minute}</th>})
        let prec = minute.map((min) => {return <td key={Math.random()+Math.random()} className={endOfDaySet(min.minute)}>{min.precip}in</td>})
        return (
            <div>
                <h4 className='text-center'>Precipitation Minute Forecast</h4>
                <div className="table-responsive">
                    <table id="weatherTable" className="text-center table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Time</th>
                                {mins}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Precip</th>
                                {prec}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr></hr> 
            </div>
        )
    }
    
}
export default Minutely;