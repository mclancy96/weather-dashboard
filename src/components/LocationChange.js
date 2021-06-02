import React, { Component } from "react";

let alertValue = null;

class LocationChange extends Component{
    onCountryChange = (event) =>{
        this.setState({country: event.target.value})
    }
    onZipChange = (event) =>{
        this.setState({zip: event.target.value})
    }
    
    onButtonSubmit =  () => {
        let countryState = '';
        if (this.state.country === "" || this.state.country === undefined){
            countryState = 'US'
        } else {
            countryState = this.state.country;
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}dashboard`, {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            country: countryState,
            zip: this.state.zip
          })
        })
        .then(response => {
            if(response.status === 404){
                alertValue = "The provided ZIP Code or country is invalid"
                this.props.onRouteChange('newLocation')
            } else if (response.status === 400){
                alertValue = "An error occurred getting the weather data, please try again"
                this.props.onRouteChange('newLocation')
            } else if(response.status === 406){
                alertValue = "The ZIP Code field was not filled in properly, please try again"
                this.props.onRouteChange('newLocation')
            } else if(response.status === 200){
                alertValue = '';
                return response.json()
            }
        })
        .then(data => {
            if(data){
                this.props.loadData(data)
                this.props.onRouteChange('home')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div id="locationBody">
                <div className=" shadow p-3 mb-5 bg-body rounded modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title  mx-auto">Enter Location to Check Weather</h3>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center">Enter your desired ZIP code and country</h5>
                            <small className="text-danger text-center"><em>{alertValue}</em></small>
                            <div className="mb-3 text-start">
                                <label className="form-label" htmlFor="zipcode">Zipcode</label>
                                <input type="text" className="form-control" id="zipcode" name="zipcode" aria-describedby="zipHelp" placeholder="98101" maxLength="5" onChange={this.onZipChange} pattern="[0-9]{5}" required></input>
                                <div id="zipHelp" className="form-text">Five digit zipcode. If this is for a country other than the US, you will need to enter the ISO 3166 code in the country field below</div>
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label" htmlFor="country">Country</label>
                                <input type="text" className="form-control" id="country" aria-describedby="countryHelp" placeholder="US" onChange={this.onCountryChange}></input>
                                <div id="countryHelp" className="form-text">If you are searching for a location in the US, leave this field blank. If you would like to search outside of the US, please use <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">ISO 3166</a> country codes for this field. Capitalize both/all letters.</div>
                            </div>
                            <div class="d-grid gap-2">                    
                                <button type="submit" className="btn btn-success mx-auto" onClick={this.onButtonSubmit}>Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationChange;