import React from 'react';
import './Media.css';
import { Media } from 'reactstrap';
import imagine from './congres.jpg'

const MediaItem = ({ titlu, continut, imagine }) => {


	return(
			<Media className='flexCenter medialink' style={{flexDirection: 'row'}}>
			  <Media className='pa3 v-top' left>
			    <img src={imagine} alt='' width='150px' height='auto'></img>
			  </Media>
			  <Media body className='pa3'>
			    <Media heading dangerouslySetInnerHTML={{__html: titlu}}>
			    </Media>
			   	<div dangerouslySetInnerHTML={{__html: continut}}></div>
			  </Media>
			</Media>
)}

export default MediaItem;