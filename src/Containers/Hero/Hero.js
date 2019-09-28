import React, { Component } from 'react';
import './Hero.css';
import { Parallax } from 'react-scroll-parallax';
import { Input, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import axios from 'axios';
import { FormErrors } from './FormErrors';


class Hero extends Component {

	constructor(){
        super();
        this.state = {
			loginModal: false,
			firstName: '',
			lastName: '',
			address: '',
			city: '',
			region: '',
			username: '',
			email: '',
			formErrors: {email: '', username: ''}
        }
	}

	toggleModal = () => {
		this.setState({loginModal: !this.state.loginModal})
	}

	registerUser = () => {
		if (this.state.username !== "" && this.state.email !== "") {
			axios({
				method: 'post',
				url: 'https://react.amrpr.ro/wp/wp-json/wp/v2/users',
				auth: {
					username: 'admin',
					password: 'pass1234'
				},
				params: {
					username: this.state.username,
					first_name: this.state.firstName,
					last_name: this.state.lastName,
					email: this.state.email,
					password: 'pass1234',
				},
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

			this.setState({ loginModal: !this.state.loginModal,
							firstName: '',
							lastName: '',
							email: '' });
			console.log(this.state)
		} 
		else {console.log('asdasda')}
	}
	
	handleChange = (event) => {
		let id = event.target.id;
		let value = event.target.value;
		this.setState({ [id]: value }, () => { this.validateField(id, value) })
		console.log(id)
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let usernameValid = this.state.usernameValid;
	  
		switch(fieldName) {
		  case 'email':
			emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			fieldValidationErrors.email = emailValid ? '' : '-ul nu este valid';
			break;
		  case 'username':
			usernameValid = value.length >= 6;
			fieldValidationErrors.username = usernameValid ? '' : '-ul este prea scurt';
			break;
		  default:
			break;
		}
		this.setState({formErrors: fieldValidationErrors,
						emailValid: emailValid,
						usernameValid: usernameValid
					  }, this.validateForm);
	}
	  
	validateForm() {
		this.setState({formValid: this.state.emailValid && this.state.usernameValid});
	}

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	 }
		
	render() {
		return(
			<div>
				<Parallax className="imgSlide flexCenter" y={[-100, 100]} styleInner={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
						<h1 className='f1 tc'>AMRPR</h1>
						<br></br>
						<h2 className='f3 tc'>Asociatia Medicilor Rezidenti in Psihiatrie din Romania</h2>
						<Button onClick={this.toggleModal} className='mt4 ph4 f3 btn btn-success btn-lg'>Inscrie-te</Button>
				</Parallax>
				<Modal isOpen={this.state.loginModal} toggle={this.toggleModal} size="m">
					<ModalHeader toggle={this.toggleModal}>
						<p>Formular de inscriere</p>
					</ModalHeader>
					<ModalBody>
						<div className='tc ttu tracked red'>
							<FormErrors formErrors={this.state.formErrors} />
						</div>
						<div className='loginForm'>
							<Input
								type="text"
								name="username"
								id="username"
								placeholder='Username'
								onChange={this.handleChange}
								className='mv3'
								required={true}
							/>
							<Input
								type="email"
								name="email"
								id="email"
								placeholder='E-mail'
								onChange={this.handleChange}
								className='mv3'
							/>
							<Input
								type="text"
								name="lastname"
								id="lastname"
								placeholder='Nume'
								onChange={this.handleChange}
								className='mv3'
							/>
							<Input
								type="text"
								name="firstname"
								id="firstname"
								placeholder='Prenume'
								onChange={this.handleChange}
								className='mv3'
							/>
							<Input
								type="text"
								name="city"
								id="city"
								placeholder='Oras'
								onChange={this.handleChange}
								className='mv3'
							/>
							<Input
								type="text"
								name="region"
								id="region"
								placeholder='Judet'
								onChange={this.handleChange}
								className='mv3'
							/>
							<Input
								type="text"
								name="address"
								id="address"
								placeholder='Adresa'
								onChange={this.handleChange}
								className='mv3'
							/>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button color='primary' disabled={!this.state.formValid} onClick={this.registerUser}>Inscrie-te!</Button>
						<Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		)}
}

export default Hero;