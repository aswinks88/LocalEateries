import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
 class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark'>
                <Link to='/' className='navbar-brand '>Local Eateries</Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='navbarNavAltMarkup'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link active'>
                            Home
                            </Link>
                        </li>
                        
                        <li className='navbar-item'>
                            <Link to='/addrestaurant' className='nav-link active'>Register your restaurant</Link>
                        </li>
                        
                        <li className='navbar-item'>
                            <Link to='/login' className='nav-link active'>Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}
export default Header
// style={{backgroundColor:'Black', color: 'white'}}
//navbar navbar-expand-lg bg-orange
{/* <header className='header'style={{backgroundColor:'Black', color: 'white'}}>
                <nav className='navbar navbar-dark'>
                    <div className='container'>
                        <button className='navbar-toggler hidden-lg-up collapsed'
                        type='button' data-toggle='collapse' data-target='#mainNavbarCollapse' aria-expanded='false'
                        ></button>
                    <h1 className='navbar-brand'>Header</h1>
                    <div className='navbar-toggleable-md float-lg-right collapse' id='mainNavbarCollapse' aria-expanded='false'>
                        <ul className='nav navbar-nav'>
                            <li className='nav-item'>Home</li>
                            <li className='nav-item'>Search</li>
                            <li className='nav-item'>Restaurants</li>
                            <li className='nav-item'>About</li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header> */}