import React from 'react';
import imagine from './congres.jpg';
import Media from '../../Components/BlogArticle/BlogArticle.js';
import { Container, Card, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import './Blog.css';


const Blog = ({ parentState, articleSetState, toggleModal }) => {

	const stateArticol = (props) => {
		articleSetState(props);
		toggleModal();
	}

	if ( parentState.loadingPosts === false ) {

		return (
		<Container className='pa3' fluid>
			<Card className='ba b--white'>

				{
					parentState.posts.map((info, i) => {					
						let titlu = info.title.rendered;					
						let excerpt = info.excerpt.rendered;				
						return(
							<Card key={'card'+i} className='ma2 transformMediaCard'>
								<Card onClick={() => stateArticol(i)}>
									<Media parentState={parentState} articleSetState={articleSetState} className='pa3' key={i} titlu={titlu} continut={excerpt} imagine={imagine} />
								</Card>
							</Card>
					)})
				}

			<Modal isOpen={parentState.modal} toggle={toggleModal} size="xl">
	        	<ModalHeader toggle={toggleModal}>
	        		<div dangerouslySetInnerHTML={{__html: parentState.posts[parentState.idArticol].title.rendered}} />
	        	</ModalHeader>
	        	<ModalBody>
	        		<div className='floatImage fl ma3'/>
	        		<div dangerouslySetInnerHTML={{__html: parentState.posts[parentState.idArticol].content.rendered}} />
	        	</ModalBody>
	        	<ModalFooter>
	        	  <Button color="secondary" onClick={toggleModal}>Cancel</Button>
	        	</ModalFooter>
	        </Modal>

			</Card>
		</Container>

	)} else { return(null) }

}

export default Blog;