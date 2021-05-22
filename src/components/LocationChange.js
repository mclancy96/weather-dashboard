import { Component } from "react";

class LocationChange extends Component{
    constructor(props){
        super(props);
        this.state = {
          signInEmail: '',
          signInPassword:''
        }
    }
    
    onCityChange = (event) =>{
        this.setState({city: event.target.value})
    }

    onStateChange = (event) =>{
        this.setState({state: event.target.value})
    }
    onCountryChange = (event) =>{
        this.setState({country: event.target.value})
    }
    onZipChange = (event) =>{
        this.setState({zip: event.target.value})
    }
    
    onButtonSubmit = () => {
        this.setState({
          state: this.state.state,
          city: this.state.city, 
          country: this.state.country,
          zip: this.state.zip, 
        })
        fetch('%PUBLIC_URL%/dashboard',{
          method:'get',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            state: this.state.state,
            city: this.state.city, 
            country: this.state.country,
            zip: this.state.zip 
          })
        })
        .then(response => {
          if (response){
            this.setState({})
          }
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div id="locationBody">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title  mx-auto">Enter Location to Check Weather</h3>
                        </div>
                        <div className="modal-body">
                            <form>
                                <h5 className="text-center">Enter your desired city, state, and country</h5>
                                <div className="mb-3 text-start">
                                    <label htmlFor="city" className="form-label ">City</label>
                                    <input type="text" className="form-control" id="city" aria-describedby="cityHelp" placeholder="Seattle"></input>
                                    <div id="cityHelp" className="form-text">Please capitalize the first letter of each word</div>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" aria-describedby="stateHelp" placeholder="WA"></input>
                                    <div id="stateHelp" className="form-text">Please capitalize the first letter of each word</div>
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <input type="text" className="form-control" id="country" aria-describedby="countryHelp" defaultValue="US" placeholder="US" required></input>
                                    <div id="countryHelp" className="form-text">If you are searching for a location in the US, leave this field as "US". If you would like to search outside of the US, please use <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">ISO 3166</a> country codes for this field. Capitalize both/all letters.</div>
                                </div>
                                <hr></hr>
                                <h3 className="text-center text-danger">OR</h3>
                                <h5 className="text-center">Enter the zipcode below instead</h5>
                                <p className="text-center small">This is the better way to search because some smaller towns and cities may not be in the system</p>
                                <div className="mb-3 text-start">
                                    <label className="form-label" htmlFor="zipcode">Zipcode</label>
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