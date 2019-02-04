import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import axios from 'axios';
import SideBar from './components/SideBar.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      center: {lat: 47.5500832, lng: -122.3177821},
      zoom: 16,
  }}

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAU-bKT2OZQ1dZs8sSodR9EE1y3pLIgLKA&callback=initMap")
    window.initMap = this.initMap;
  }

  // Creates map centered on Georgetown neightborhood in Seattle with zoom set in state
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), 
    {
      center: this.state.center,
      zoom: this.state.zoom
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
