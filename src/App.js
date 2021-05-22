import './App.css';
// import Current from './components/Current.js';
import React, { Component } from 'react';
import LocationChange from './components/LocationChange';
const { APIKEY }  = process.env;

const initialState = {
  route: 'newLocation',
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

  onRouteChange = (route)  => {
    if (route === 'newLocation'){
      this.setState({initialState})
    } 
    this.setState({route: route})
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
