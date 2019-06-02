import  React, { Component } from  'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar/Sidebar.js';
import Add from '../../Components/Add/Add.js'
import Delete from '../../Components/Delete/Delete.js'
import './Admin.css';

class Admin extends  Component {
    constructor(){
        super();
        this.state = {
            contacts: [],
        }
    }

    componentDidMount() {
        const url = 'https://react.amrpr.ro/wp/wp-json/wp/v2/posts'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ contacts: data })
         })
      }
    

    render() {
        return (
          <div className='admin-container'>
            <Sidebar />
            <Switch>
              <Route path='/admin/add' component={Add} />
              <Route path='/admin/delete' component={Delete} />
            </Switch>
          </div>
            )}
}

export default Admin;