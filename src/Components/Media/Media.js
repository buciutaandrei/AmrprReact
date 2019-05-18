import React from 'react';
import './Media.css';
import { Media, Card } from 'reactstrap';

const MediaItem = ({ titlu, continut, imagine }) => {

	return(
		<Card className='ma2 transformMediaCard'>
			<Media className='flexCenter medialink' style={{flexDirection: 'row'}} href='/'>
			  <Media className='pa3' left href="#">
			    <img src={require(`${imagine}`)} width='150px' height='auto'></img>
			  </Media>
			  <Media body className=''>
			    <Media heading>
			      {titlu}
			    </Media>
			    	{continut}
			  </Media>
			</Media>
		</Card>
)}

export default MediaItem;