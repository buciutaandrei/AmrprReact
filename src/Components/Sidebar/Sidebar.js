import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css'

class SideBar extends React.Component {

  render() {
    return (
      <div className='sidebar-container pa4'>
        <div className="sidebar-header">
          <h3>Admin</h3>
        </div>
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <Link to="/admin/add">Add</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/delete">Delete</Link>
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
      </div>
    );
  }
}

export default SideBar;