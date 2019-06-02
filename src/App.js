import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'tachyons';
import { Route, Switch } from 'react-router-dom';
import Admin from './Containers/Admin/Admin.js';
import FrontPage from './Containers/FrontPage/FrontPage.js';

class App extends Component {

  render () {
  	return (
  		<Switch>
			<Route path='/admin' component={Admin} />
			<Route path='/' component={FrontPage} />
		</Switch>
  )}
}

export default App;
