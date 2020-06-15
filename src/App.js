import React, {Component} from 'react';
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
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import {loadUser} from './actions/Authactions'
import Restaurant from '../src/component/FeatureDetail/FeatureDetail'
import test from './Pages/test/testPage'
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
      <Router>
      {/* <Header /> */}
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/addrestaurant' exact component={RestaurantForm}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/userregistration' exact component={UserRegistration} />
        <Route path='/restaurantdetail' exact component={Restaurant} />
        <Route path='/testpage' exact component={test}/>
      </Switch>
      <Footer />
      </Router>
      </Provider>
      
     
    )
  }

}

export default App;
