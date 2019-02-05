import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import axios from 'axios';
import SideBar from './components/SideBar.js';

// Get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key
const GOOGLE_API_KEY = 'AIzaSyAU-bKT2OZQ1dZs8sSodR9EE1y3pLIgLKA'  

// Foursquare parameters 
const FS_CLIENT_ID = "GQAHMGBZEJXYAQ3F3XOSN3K2WY5NBF2JLAG00MBIJNGWLF4P";
const FS_CLIENT_SECRET = "OAC0NNZMJLQQUR1BPGGWZUPXIL13F3ZVBPLHTV2ILIR2V2YQ";
const FS_QUERY = "coffee";
const FS_LL = "47.5500832,-122.3177821";
const FS_V = "20190204";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      center: {lat: 47.5500832, lng: -122.3177821},
      zoom: 16,
      venues: [],
      displayVenues: []
    }
  }

  componentDidMount() {
    this.renderMap();
    this.getVenues();
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  // Creates map centered on Georgetown neightborhood in Seattle with zoom set in state
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: this.state.zoom
      }
    )
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: `${FS_CLIENT_ID}`,
      client_secret: `${FS_CLIENT_SECRET}`,
      query: `${FS_QUERY}`,
      ll: `${FS_LL}`,
      v: `${FS_V}`,
      radius: 500
    }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      console.log(response.data.response.groups[0].items)
      this.setState({
        venues: response.data.response.groups[0].items,
        displayVenues: response.data.response.groups[0].items,
      },)
    })
    .catch(error => {
      alert(`ERROR: Unable to fetch data from Foursquare`)
      console.log("ERROR: " + error)
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <SideBar/>
        <div id="map" aria-label="Map"></div>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}


export default App;
