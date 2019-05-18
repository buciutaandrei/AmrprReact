import React from 'react';
import listaArticole from './listaArticole.js'
import Media from '../../Components/Media/Media.js'
import { Container, Card } from 'reactstrap';


const MediaList = () => {
	return (
	<Container className='pa3' fluid>
		<Card className='ba b--white'>
		{
			listaArticole.map((info, i) => {
				return(
					<Media className='pa3' key={i} titlu={listaArticole[i].titlu} continut={listaArticole[i].continut} imagine={listaArticole[i].imagine}/>
				)
			})}
		</Card>
	</Container>
)}

export default MediaList;