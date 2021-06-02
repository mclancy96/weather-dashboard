import React, {Component} from "react";

class Alert extends Component{
    render(){
        const {alerts} = this.props.weatherData; 
        let eventName = alerts.map((alt) => {return<td key={Math.random()+Math.random()}><strong>{alt.event}</strong></td>})
        let office = alerts.map((alt)=>{return<td key={Math.random()+Math.random()}>{alt.sender_name}</td>})            
        let starts = alerts.map((alt)=>{return<td key={Math.random()+Math.random()}>{alt.start}</td>})            
        let ends = alerts.map((alt)=>{return<td key={Math.random()+Math.random()}>{alt.end}</td>})            
        let details = alerts.map((alt)=>{return<td key={Math.random()+Math.random()}><p>{alt.description}</p></td>})            
        return (
            <div>
                <h4 className='text-center'>Weather Alerts</h4> 
                {alerts===null?<p className="text-center">No active weather alerts</p>:
                    <div className="table-responsive">
                        <table className="text-center table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th>Alert</th>
                                    {eventName}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Issuing Office</th>
                                    {office}
                                </tr>
                                <tr>
                                    <th>Starts</th>
                                    {starts}
                                </tr>
                                <tr>
                                    <th>Ends</th>
                                    {ends}
                                </tr>
                                <tr>
                                    <th>Details</th>
                                    {details}
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                }     
            </div>                   

        )
    }
    
}
export default Alert;