import React from 'react';
import './Hero.css';
import { Button } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';


const Hero = () => {
	return (
		<Parallax className="imgSlide flexCenter" y={[-100, 100]} styleInner={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<h1 className='f1 tc'>AMRPR</h1>
				<br></br>
				<h2 className='f3 tc'>Asociatia Medicilor Rezidenti in Psihiatrie din Romania</h2>
				<Button className='mt4 ph4 f3 btn btn-success btn-lg'>Inscrie-te</Button>
		</Parallax>
)}

export default Hero;