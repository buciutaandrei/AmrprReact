import React from 'react';
import sigla from './sigla.png';
import MeniuDropdown from '../../Components/Dropdown/EvenimenteDropdown.js';
import CAPDropdown from '../../Components/Dropdown/CAPDropdown.js';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
	      <Navbar id='navigationbar' className='fixed-top pv0' color="light" light expand="md">
	        <NavbarBrand style={{ display: 'flex', 'align-items': 'center' }}href="/">
	        	<img src={sigla} height='75px'/>
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
	        <div  style={{'height': '83.6px'}}></div>
	      </div>
	  	)
}}

export default Navigation;
