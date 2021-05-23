import './App.css';
// import Current from './components/Current.js';
import React, { Component } from 'react';
import LocationChange from './components/LocationChange';
const SERVER_URL = "http://localhost:3002"

const initialState = {
  route: 'newLocation',
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

  componentDidMount(){
    fetch(SERVER_URL)
    .then(response => console.log('Waking up server: ', response.status))
  }

  onRouteChange = (route)  => {
    if (route === 'newLocation'){
      this.setState({initialState})
    } 
    this.setState({route: route})
    // fetch(`${SERVER_URL}/dashboard`,{
    //   method:'POST',
    //   body: JSON.stringify({
    //     zip: this.state.zip,
    //     country: this.state.county
    //   })
    // }).then(response => {console.log(response.body, "response")})
    
  }

  render(){
    return (
      <div className="App">
        { this.state.route === 'home' ? 
          <div className="container-md">
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
