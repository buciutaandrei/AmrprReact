import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class MeniuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  toggle = () => {this.setState({ dropdownOpen: !this.state.dropdownOpen });}

  render() {
    return (
    <div>
      <Dropdown nav inNavbar isOpen={this.state.dropdownOpen} onMouseEnter={this.toggle} onMouseLeave={this.toggle} toggle={this.toggle}>
        <DropdownToggle nav caret>
          Evenimente
        </DropdownToggle>
        <DropdownMenu right className='mt0'>
          <DropdownItem header>Actuale</DropdownItem>
          <DropdownItem className='pv2 f5' href='http://congres2019.amrpr.ro'>Congresul AMRPR Targu Mures 2019</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Incheiate</DropdownItem>
          <DropdownItem className='pv2 f5'>Congresul AMRPR Sibiu 2018</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
}


export default MeniuDropdown;