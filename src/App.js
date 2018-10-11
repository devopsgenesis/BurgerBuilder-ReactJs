import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import FaultRoute from './components/404Case/FaultRoute';
class App extends Component {
  render() {
    return (

      <div className="App">
        
        <Layout>
          <Switch>
          <Route path="/checkout"  component={CheckOut}/>
          <Route path="/Orders" component={Orders}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route component={FaultRoute}/>
          </Switch>
  
    </Layout>
      </div>
    );
  }
}

export default App;
