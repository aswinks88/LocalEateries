import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Logout from '../../Pages/Auth/Logout'
 class Header extends Component {
    constructor(props){
        super(props)
       this.window = null
       this.state = {
               checked: false,
               color:'',
               className:'hamburger',
               colorOnNav:''
       }
       this.toggleMenu = this.toggleMenu.bind(this)
       this.changeHamburgerColorHandler = this.changeHamburgerColorHandler.bind(this)
       this.homeHamburgerHandler = this.homeHamburgerHandler.bind(this)
    }
     componentDidMount(){ 

         this.window = document.addEventListener('scroll', e => {
            const scrolled = document.scrollingElement.scrollTop
            if(scrolled >= 200){
               this.setState({
                   color: 'black',
               })
            } else{
                this.setState({
                    color: '',
                    className:'hamburger'
                })
      
            }
        })
        if(window.location.pathname !== '/'){
            this.setState({
                colorOnNav: 'black'
            })    
        }
        console.log(window.location.pathname)
     }
   
     changeHamburgerColorHandler = () => {
        console.log(window.location.pathname)
            this.setState({
                colorOnNav: 'black'
            })    
     }
     homeHamburgerHandler = () => {
        this.setState({
            color: '',
            colorOnNav:''
        })
     }
    toggleMenu = (e) => {
        //using class .toggleham we can set the hamburger menu to its initial state from X when user click on the 
        //nav links or anywhere on the >menu-item
        const hamburger = document.querySelector('.toggleham')
        const checkbox = document.querySelector('.menu-item')
       
        
        checkbox.addEventListener('click', () => {
            checkbox.style.visibility = 'hidden'
            
            this.setState({
                checked: false
            })
        })
        hamburger.addEventListener('click', () => {
            checkbox.style.visibility  = 'visible'
            
        })
        if(e.target.checked === true){
            this.setState({
                checked: true
            })
        } else {
            this.setState({
                checked: false
            })    
        }   
    }
    render() {
        return (
            <div className='menu-wrap' id='menu-wrap'>
            <div className='logo' style={{backgroundColor:this.state.color ? 'black' : this.state.colorOnNav}}>
                    <Link onClick={this.homeHamburgerHandler} to='/'><p>Local Eateries</p></Link>
                </div>
                     <input type='checkbox' id='toggleham' checked= {this.state.checked} onChange={this.toggleMenu}  className='toggleham' />
                        <div style={{backgroundColor: this.state.color ? 'black' : this.state.colorOnNav}} className='hamburger'>
                            <div></div>
                        </div>
                    <div className='menu-item'>
                        <div>
                            <div>
                            <ul className='menu-nav-item'>
                            <li className='menu-nav-link'><Link onClick={this.homeHamburgerHandler} to='/'>Home</Link></li> 
                                <li className='menu-nav-link'><Link onClick={this.changeHamburgerColorHandler} to='/login'>Login</Link></li> 
                                <li className='menu-nav-link'><Link onClick={this.changeHamburgerColorHandler} to='/userregistration'>Signup</Link></li> 
                                <li className='menu-nav-link'><Link onClick={this.changeHamburgerColorHandler} to='/addrestaurant' className='nav-link active'>Register your restaurant</Link></li>
                                <li className='menu-nav-link'> 
                                <Link to='/testpage' className='nav-link active'>Test</Link>
                                </li>
                            </ul>
                            </div>
                        </div>  
                    </div>
                </div>
           
        )
    }
}
export default Header