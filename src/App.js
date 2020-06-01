import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../src/component/Header/Header'
import Home from '../src/Pages/Home/Home'
import Footer from  '../src/component/Footer/Footer'
import Login from '../src/Pages/Login/Login'
import RestaurantForm from '../src/Pages/RestaurantForm/RestaurantForm'
import UserRegistration from '../src/Pages/UserRegistration/UserRegistration'
function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/addrestaurant' exact component={RestaurantForm}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/userregistration' exact component={UserRegistration} />
    </Switch>
    <Footer />
    </Router>
   
  );
}

export default App;
