import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './Add.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class Add extends  Component {
    constructor(){
        super();
        this.state = {
            content: '',
            title: '',
            excerpt: '',
            modal: false,
        }
    }
    
    handleTitleChange = (event) => {
    	this.setState({ [event.target.id]: event.target.value })}
    

    handleChange = (value) => {
	    this.setState({ content: value })
	  }

    buttonClick = () => {
    	axios({
    		method: 'post',
    		url: 'https://react.amrpr.ro/wp/wp-json/wp/v2/posts',
    		auth: {
			    username: 'admin',
			    password: 'pass1234'
			  },
			params: {
				title: this.state.title,
				content: this.state.content,
				excerpt: this.state.excerpt,
				status: 'publish',
			},
    	})
    	.then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

		this.setState({ modal: !this.state.modal,
						content: '',
            			title: '',
            			excerpt: '' });
		console.log('asdasd')
    }
    
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }


    render() {
    	return (
    		<Container className="pa4">
		    	<h2>Add article</h2>
		    	<Form className="form">
		    		<Col>
		    		  <FormGroup>
		    		    <Label>Titlu</Label>
		    		    <Input
		    		      type="text"
		    		      name="titlu"
		    		      id="title"
		    		      placeholder='Titlu'
		    		      value={this.state.title}
		    		      onChange={this.handleTitleChange}
		    		    />
		    		  </FormGroup>
		    		</Col>
		    		<Col>
		    		  <FormGroup>
		    		    <Label for="Descriere">Descriere</Label>
		    		    <Input
		    		      type="text"
		    		      name="excerpt"
		    		      id="excerpt"
		    		      placeholder='Descriere'
		    		      value={this.state.excerpt}
		    		      onChange={this.handleTitleChange}
		    		    />
		    		  </FormGroup>
		    		</Col>
		    		<Col>
		    			<FormGroup>
		    			<Label for='Continut'>Continut</Label>
		    			<ReactQuill theme='snow'
		    						value={this.state.content}
                  					onChange={this.handleChange} />
			            </FormGroup>
		    		</Col>
		    	</Form>
		    	<Button onClick={this.buttonClick}>Submit</Button>

		    	<Modal isOpen={this.state.modal} >
			      	<ModalBody>
			      		Article added.
			      	</ModalBody>
			      	<ModalFooter>
			      	    <Button color="secondary" onClick={this.toggleModal}>OK</Button>
			      	</ModalFooter>
			      </Modal>
		    </Container>

    );
    }
}

export default Add;