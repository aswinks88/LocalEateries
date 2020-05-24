import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import './App.css';
import Header from '../src/component/Header/Header'
import Home from '../src/Pages/Home/Home'
function App() {
  return (
    <div>
      <Header />
      <Home/>
    </div>
  );
}

export default App;
