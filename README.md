# Neighborhood Map Project

# Table of Contents

* [Overview](#overview)
* [How to run the project](#how-to-run-the-project)
* [Offline use](#offline-use)
* [Dependencies](#dependencies)
* [APIs Used](#apis-used)
* [Resources](#resources)

## Overview

Udacity FEND Nanodegree - Neighborhood map project. Single page map application using React, Google Maps API & Foursquare Places API. Application displays a map of locations in the Seattle Georgetown neightborhood, allows filtering of locations and provides 3rd party data (Foursquare) regarding locations.

## How to run the project

To run the project in the **development mode**, follow the instructions below: 

Download or clone the repository to your computer:
```
$ git clone https://github.com/whitenl
```
Inside of the repository folder install project dependencies using: 
```
npm install axios 
npm install escape-string-regexp
npm install react-burger-menu
```
Start development server with :
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view in your browser.
To run the project in the **build mode**, follow the instructions below.

Run: 
### `npm run build`
This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Offline use
To use the application offline, you must do a **production build**. The **Service Worker** works in **production build** only

## Dependencies 

* React and ReactDOM are dependencies as this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
* [axios](https://github.com/axios/axios), Promise based HTTP client for the browser and node.js
* [react-burger-menu](http://negomi.github.io/react-burger-menu/), An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.
* [Escape RegExp](https://www.npmjs.com/package/escape-string-regexp) Escape RegExp special characters

## APIs used

* Google Maps API for the map.
* Places API by FourSquare, for location information. [Get Venue Recommendations](https://developer.foursquare.com/docs/api/venues/explore), returns list of venues near the requested location based on parameters provided.

## Resources

* The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* [Udacity | Neighborhood Map - Project Explained](https://www.youtube.com/playlist?list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1) by Yahya Elharony. This series of videos was immensely helpful in rendering the map, markers and Foursquare location data. 
* [FEND P7 Walkthrough with Doug Brown](https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be)
Helpful breakdown of the steps used to put together the project.
* Favicon from [favicon.cc](https://www.favicon.cc/?action=icon&file_id=852695)


