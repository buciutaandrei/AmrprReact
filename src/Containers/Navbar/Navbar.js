import React from 'react';
import './Navbar.css';
import MeniuDropdown from '../../Components/Dropdown/EvenimenteDropdown.js';
import CAPDropdown from '../../Components/Dropdown/CAPDropdown.js';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
	  return (
	  	<div>
	      <Navbar id='navigationbar' className='shadow-3 pv0 fixed-top navigationbar' light expand="md">
	        <NavbarBrand style={{ display: 'flex', 'align-items': 'center' }}href="/">
	        	<img src={require("./sigla.png")} height='75px' alt='sigla'/>
	        </NavbarBrand>
	        <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink href='http://congres2019.amrpr.ro'>Congres 2019</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/">Noutati</NavLink>
	              </NavItem>
	              <MeniuDropdown />
	              <NavItem>
	                <NavLink href="/">Statut</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/">Cum devii membru</NavLink>
	              </NavItem>
	              <CAPDropdown />
	              <NavItem>
	                <NavLink href="/">Link-uri</NavLink>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
	      </div>
	  	)
}}

export default Navigation;
