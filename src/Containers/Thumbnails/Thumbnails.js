import React from 'react';
import './Thumbnails.css';
import 'tachyons';
import { Card } from 'reactstrap';
import SmallCards from '../../Components/Card/Card.js'

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
		<Card className='thumbnailContainer'>
			<div className='container pa4'>
			<div className='row justify-content-md-center'>
				{ 
					lista.map((info, i) => {
						return(
							<SmallCards key={i} titlu={lista[i].titlu} imagine={lista[i].imagine} text={lista[i].text} />
							);
					})
				}
			</div>
			</div>
		</Card>
)}

export default Thumbnails;