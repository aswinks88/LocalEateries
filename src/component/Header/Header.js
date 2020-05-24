import React, { Component } from 'react'
import './Header.css'
 class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark'>
                <a to='/' className='navbar-brand '>Local Eateries</a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='navbarNavAltMarkup'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-item'>
                            <a to='/' className='nav-link active'>Home</a>
                        </li>
                        
                        <li className='navbar-item'>
                            <a to='/create' className='nav-link active'>Search</a>
                        </li>
                        
                        <li className='navbar-item'>
                            <a to='/user' className='nav-link active'>Restaurants</a>
                        </li>
                        <li className='navbar-item'>
                            <a to='/user' className='nav-link active'>About</a>
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