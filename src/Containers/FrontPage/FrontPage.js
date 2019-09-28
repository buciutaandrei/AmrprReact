import React, { Component } from  'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import { StickyContainer } from 'react-sticky';
import ImgSlider from '../Hero/Hero.js';
import Thumbnails from "../Thumbnails/Thumbnails.js";
import Blog from '../Blog/Blog.js';

class FrontPage extends Component {
    constructor(){
        super();
        this.state = {
            idArticol: 0, 
            posts: '',
            loadingPosts: true,
            modal: false,
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'https://react.amrpr.ro/wp/wp-json/wp/v2/posts',
            config: {
                headers: {
                  'Access-Control-Allow-Origin': '*',
                }
            }
            })
            .then(response => response.data)
            .then((data) => {
              this.setState({ posts: data, loadingPosts: false })
             })
    }
    
    articleSetState = (idArticol) => {
        this.setState({idArticol: idArticol})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
;
	return(
		<ParallaxProvider>
		  	<StickyContainer>
				<Navbar />
				<ImgSlider />
                <Thumbnails />
                <Blog parentState={this.state} articleSetState={this.articleSetState} toggleModal={this.toggleModal}/>
	    	</StickyContainer>
	  	</ParallaxProvider>
		)

}
}

export default FrontPage;