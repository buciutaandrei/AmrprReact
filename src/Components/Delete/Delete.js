import React, { Component } from 'react';
import Media from '../Media/Media.js'
import axios from 'axios';
import {
  Container,
  Button, Card,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import imagine from '../Media/congres.jpg'

class Delete extends  Component {
    constructor(){
        super();
        this.state = {
            idArticol: 0, 
            posts: '',
            loadingPosts: true,
            modal: false,
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'https://react.amrpr.ro/wp/wp-json/wp/v2/posts',
            auth: {
                username: 'admin',
                password: 'pass1234'
              },
            })
            .then(response => response.data)
            .then((data) => {
              this.setState({ posts: data, loadingPosts: false })
             })
    }
    
    componentDidUpdate() {
    	axios({
            method: 'get',
            url: 'https://react.amrpr.ro/wp/wp-json/wp/v2/posts',
            auth: {
                username: 'admin',
                password: 'pass1234'
              },
            })
            .then(response => response.data)
            .then((data) => {
              this.setState({ posts: data, loadingPosts: false })
             })
    }

    buttonClick = (props) => {
    	axios({
            method: 'delete',
            url: `https://react.amrpr.ro/wp/wp-json/wp/v2/posts/${props}`,
            auth: {
                username: 'admin',
                password: 'pass1234'
              },
            })
            .then(response => response.data)
            .then((data) => {
            	console.log(data)
            })

      this.setState({ modal: !this.state.modal, posts: '', loadingPosts: true })

    }
    
    toggleModal = (props) => {
        this.setState({modal: !this.state.modal, idArticol: props})
        console.log(this.state);
    }

    render() {

    	const postari = this.state.posts

    	if (this.state.loadingPosts === false ) {
	    	
	    	return (
	    		<Container className="pa4">


	    			{
						postari.map((info, i) => {					
							let titlu = info.title.rendered;					
							let excerpt = info.excerpt.rendered;
							let id = info.id;				
							return(
								<Card key={'card'+i} className='ma2'>
									<Card>
										<Media className='pa3' key={i} titlu={titlu} continut={excerpt} image={imagine}/>
										<Button onClick={() => this.toggleModal(id)}>Delete</Button>
									</Card>
								</Card>
						)})
					}

						<Modal isOpen={this.state.modal} >
			      	<ModalHeader toggle={this.toggleModal}>
			      		Are you sure?
			      	</ModalHeader>
			      	<ModalBody>
			      		This action cannot be undone.
			      	</ModalBody>
			      	<ModalFooter>
			      		<Button color="primary" onClick={() => this.buttonClick(this.state.idArticol)}> Delete </Button>
			      	  <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
			      	</ModalFooter>
			      </Modal>

			    </Container>

		)} else { return(null) };


    }
}

export default Delete;