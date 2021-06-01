import './App.css';
import React, { Component } from 'react';
import LocationChange from './components/LocationChange';
import Current from './components/Current';
import Alert from './components/Alert'
import Minutely from './components/Minutely'
import Hourly from './components/Hourly'
import Daily from './components/Daily'
import Header from './components/Header';

const initialState = {
  route: 'newLocation',
  country: '',
  lat: '',
  lon: '',
  zip: '', 
  city: '',
  weatherData: {}      
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  loadData = (data) => {
    this.setState({
      country: data.locationInfo.country,
      lat: data.locationInfo.lat,
      lon: data.locationInfo.lon,
      zip: data.locationInfo.zip, 
      city: data.locationInfo.name,
      weatherData: data.weatherData
    })
  }
  onRouteChange = (route)  => {
    if (route === 'newLocation'){
      this.setState({initialState})
    } 
    this.setState({route: route})    
  }
  componentDidMount(){
    fetch(process.env.SERVER_URL)
    .then(response => console.log('Waking up server: ', response.status));
  }
  render(){
    return (  
      <div className="App">
        {console.log(process.env.SERVER_URL)}

        { this.state.route === 'home' ? 
          <div >
            <Header weatherData={this.state.weatherData} locInfo={this.state.city} />
            <Current weatherData={this.state.weatherData}/>
            <Minutely weatherData={this.state.weatherData}/>
            <Hourly weatherData={this.state.weatherData}/>
            <Daily weatherData={this.state.weatherData}/>
            <Alert weatherData={this.state.weatherData}/>
          </div>:
          <div>
            <LocationChange onRouteChange={this.onRouteChange} loadData={this.loadData}/>  
          </div>
        }
      </div>
    );
  }  
}

export default App;
