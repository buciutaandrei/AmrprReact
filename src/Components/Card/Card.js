import React from 'react';
import './card.css'


const Card = ({ titlu, text, imagine}) => {

  const image = `./` + [imagine]
  const Background = require(`${image}`)

  return (
    <a className='cardLink' href='/'>
      <div className="card smallCards shadow-5 br3 ma3" style={{width: '19rem'}}>
        <div className='imageContainer ma1' style={{ backgroundImage: `url(${Background})`, backgroundSize: '300px auto' }}>
        </div>
        <div className="card-body tc pa1 ph4">
          <h5 className="card-title ttu">{titlu}</h5>
          <hr />
          <p className="card-text">{text}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
