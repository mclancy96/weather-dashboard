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
        { this.state.route === 'home' ? 
          <div>
            <h1 className="text-white">Hello</h1>
          </div>:
          <div>
            <LocationChange onRouteChange={this.onRouteChange}/>  
          </div>
        }
      </div>
    );
  }  
}

export default App;
