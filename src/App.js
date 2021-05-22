import './App.css';
// import Current from './components/Current.js';
import React, { Component } from 'react';
import LocationChange from './components/LocationChange';
const { APIKEY }  = process.env;

const initialState = {
  state: '',
  city: '',
  country: '',
  lat: '',
  lon: '',
  zip: ''      
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  // setLocation = (city, state, country="US", lat, lon, zip) => {
  //   this.setState({
  //     state: state,
  //     city: city, 
  //     country: country,
  //     lat: lat,
  //     lon: lon,
  //     zip: zip  
  //   })
  // }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onRouteChange = (route)  => {
    if (route === 'newLocation'){
      this.setState({initialState})
    } else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route})
  }

  onButtonSubmit = () => {
    this.setState({
      state: this.state.state,
      city: this.state.city, 
      country: this.state.country,
      zip: this.state.zip 
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
    .catch(err => console.log(err))
  }
  // const [location, setLocation] = useState({
  //   lon: 0,
  //   lat: 0, 
  //   city: '',
  //   state: '',
  //   country: ''
  // }) 
  render(){
    return (
      <div className="App">
        <LocationChange />

        {/* <h1>Hi</h1> */}
        {/* {this.getCurrentWeather("Seattle","WA")} */}
        {/* { route === 'home' ? 
            <div>
              
            </div>:
            (
              route === 'newLocation' ? 
                
            )
          }  */}
      </div>
    );
  }  
}

export default App;
