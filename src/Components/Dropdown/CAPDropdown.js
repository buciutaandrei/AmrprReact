import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class CAPDropdown extends React.Component {
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
          CAP
        </DropdownToggle>
        <DropdownMenu right className='mt0'>
          <DropdownItem className='pv2 f5'>Carti si ghiduri CAP</DropdownItem>
          <DropdownItem className='pv2 f5'>Curricula de pregatire CAP</DropdownItem>
          <DropdownItem className='pv2 f5'>Link-uri utile CAP</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
  }
}


export default CAPDropdown;