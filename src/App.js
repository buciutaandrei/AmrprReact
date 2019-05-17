import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'tachyons';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Containers/Navbar/Navbar.js'
import ImgSlider from './Containers/Carousel/imgSlider.js'
import Thumbnails from "./Containers/Thumbnails/Thumbnails.js";

class App extends Component {

  render () {
  	return (
		<div>
	      <Navbar />
	      <ImgSlider />
	      <Thumbnails />
	    </div>
  )}
}

export default App;
