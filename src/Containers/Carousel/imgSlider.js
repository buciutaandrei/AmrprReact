import React from 'react';
import './imgSlider.css';
import { Container, Button } from 'reactstrap'


const ImgSlider = () => {
	return (
		<Container fluid className= 'imgSlide'>
				<h1 className='f1'>AMRPR</h1>
				<br></br>
				<h2 className='f3 tc'>Asociatia Medicilor Rezidenti in Psihiatrie din Romania</h2>
				<Button className='mt4 ph4 f3 btn btn-success btn-lg'>Inscrie-te</Button>
		</Container>
)}

export default ImgSlider;