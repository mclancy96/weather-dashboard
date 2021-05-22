import { Component } from "react";

class LocationChange extends Component{
    render(){
        return(
            <div id="locationBody">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title mx-auto">Enter Location to Check Weather</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <p className="text-center">Use the fields below to enter the city, state, and country</p>
                                <div className="mb-3 text-start">
                                    <label for="city" className="form-label ">City</label>
                                    <input type="text" className="form-control" id="city" aria-describedby="cityHelp" placeholder="Seattle"></input>
                                    <div id="cityHelp" className="form-text">Please capitalize the first letter of each word</div>
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" aria-describedby="stateHelp" placeholder="WA"></input>
                                    <div id="stateHelp" className="form-text">Please capitalize the first letter of each word</div>
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label" for="country">Country</label>
                                    <input type="text" className="form-control" id="country" aria-describedby="countryHelp" placeholder="US"></input>
                                    <div id="countryHelp" className="form-text">Please use <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">ISO 3166</a> country codes for this field. Capitalize both/all letters. This will default to "US"</div>
                                </div>
                                <hr></hr>
                                <h3 className="text-center text-danger">OR</h3>
                                <p className="text-center">Enter the zipcode below instead. This is the better option as it is more likely to work as not <em>EVERY</em> city will have a forecast</p>
                                <div className="mb-3 text-start">
                                    <label className="form-label" for="zipcode">Zipcode</label>
                                    <input type="text" className="form-control" id="zipcode" aria-describedby="zipHelp" placeholder="98101"></input>
                                    <div id="zipHelp" className="form-text">Five digit zipcode. If this is for a country other than the US, you will need to enter the ISO 3166 code in the country field above</div>
                                </div>
                                <button type="submit" className="btn btn-success mx-auto">Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default LocationChange;