import React from 'react';
import './BlogArticle.css';
import { Media } from 'reactstrap';


const BlogArticle = ({ titlu, continut, imagine, cssTitle, cssBody }) => {


	return(

		<Media className='flexCenter medialink' style={{flexDirection: 'row'}}>
		  <Media className='pa3 v-top' left>
		    <img src={imagine} alt='' width='150px' height='auto'></img>
		  </Media>
		  <Media body className={`pa3 ${cssBody}`}>
		    <Media heading className={cssTitle} dangerouslySetInnerHTML={{__html: titlu}}>
		    </Media>
		   	<div dangerouslySetInnerHTML={{__html: continut}}></div>
		  </Media>
		</Media>

)}

export default BlogArticle;