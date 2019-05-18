import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'tachyons';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Containers/Navbar/Navbar.js';
import ImgSlider from './Containers/Carousel/imgSlider.js';
import Thumbnails from "./Containers/Thumbnails/Thumbnails.js";
import MediaList from './Containers/MediaList/MediaList.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends Component {

  render () {
  	return (
  	<ParallaxProvider>
		<StickyContainer>
				<Navbar />
	      <ImgSlider />
	      <Thumbnails />
	      <MediaList />
	  </StickyContainer>
	  </ParallaxProvider>
  )}
}

export default App;
