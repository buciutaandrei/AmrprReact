import React from 'react';
import 'tachyons';
import cap from './cap.jpg';
import membri from './membri.jpg';
import congres from './congres.jpg';
import './Thumbnails.css';

const Thumbnails = () => {
	return (
		<div className="grid pt4">
		    <div className="column">
		      <img src={ congres } alt='congres' className="ui image" />
		      <h1 className='f3'>Congrese anuale</h1>
		      <hr />
		      <p className='ph6 tc f4 pv2'>Congresul national AMRPR 2019 va avea loc anul acesta la Târgu Mureș Inscrie-te acum!</p>
		    	<a href='http://congres2019.amrpr.ro' className='f5 link dim ph3 pv2 mb2 dib white bg-green'>Afla mai multe!</a>
		    </div>
		    <div className="column">
		      <img src={ membri } alt='membri' className="ui image" />
		      <h1 className='f3'>Cum sa devin membru?</h1>
		      <hr />
		      <p className='ph6 tc f4 pv2'>Cum si, mai ales, de ce sa devii membru. </p>
		    	<a href='http://www.amrpr.ro' className='f5 link dim ph3 pv2 mb2 dib white bg-green'>Afla mai multe!</a>
		    </div>
		    <div className="column">
		      <img src={ cap } alt='cap' className="ui image" />
		      <h1 className='f3'>CAP</h1>
		      <hr />
		      <p className='ph6 tc f4 pv2'>Sectiunea dedicata psihiatriei copilului si adolescentului.</p>
		    	<a href='http://www.amrpr.ro' className='f5 link dim ph3 pv2 mb2 dib white bg-green'>Afla mai multe!</a>
		    </div>
		</div>
)}

export default Thumbnails;