import React from 'react';
import './Thumbnails.css';
import 'tachyons';
import SmallCards from '../../Components/Card/Card.js';
import { Card } from 'reactstrap';

const lista = [
	{titlu: 'Congrese anuale',
	imagine: 'congres.jpg',
	text: 'Congresul national AMRPR 2019 va avea loc anul acesta la Târgu Mureș Inscrie-te acum!'},

	{titlu: 'Cum devii membru',
	imagine: 'membri.jpg',
	text: 'Cum si, mai ales, de ce sa devii membru. '},

	{titlu: 'CAP',
	imagine: 'cap.jpg',
	text: 'Sectiunea dedicata psihiatriei copilului si adolescentului.'}
]


const Thumbnails = () => {
	return(
		<div className='bigWrapper'>
			<div className='wrapper'>
				{ 
					lista.map((info, i) => {
						return(
							<SmallCards key={i} titlu={lista[i].titlu} imagine={lista[i].imagine} text={lista[i].text} />
							);
					})
				}
				
			</div>
			<iframe 
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famrpr.ro%2F&tabs=timeline&width=450&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="450" height="500" style={{border: 'none', overflow: 'hidden'}} title='iframeFacebook'
				scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media">
			</iframe>
		</div>
)}

export default Thumbnails;