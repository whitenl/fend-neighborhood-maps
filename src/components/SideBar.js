import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';
import '../App.css';


class SideBar extends Component {


  openMarker = venueName => {
    this.props.markers.map(marker => {
      if (marker.title === venueName) {
        window.google.maps.event.trigger(marker, "click")
      }
    })
  }
 
  render () {
    return (
      <Menu className="Side-bar">
      <h3>Coffee spots</h3>
      <input
          type="text"
          name="filter"
          id="location-filter"
          aria-label="filter locations" 
          placeholder="Filter locations..." 
          className="locationsFilter"
          autoFocus
          value={this.props.query}
          onChange={event => this.props.updateQuery(event.target.value)}
       />
      <ol className="venue-list" aria-label="Venue List">
        	{this.props.venues.map(myVenue => (
            <li 
              role="menuitem"
            	className="venue-title"
            	key={myVenue.venue.id}
            	id={myVenue.venue.id}
             	onClick={() => {
                this.openMarker(myVenue.venue.name);
              }}
            	aria-label={myVenue.venue.name}
              tabIndex="0"
            >
              {myVenue.venue.name}
            </li>
          ))}
          
          </ol>
          <p className="fs-disclaimer">*Location data provided by Foursquare</p>
      </Menu>
    );
  }
}

export default SideBar


       