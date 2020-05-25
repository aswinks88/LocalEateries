import React, { Component } from 'react'
import './Footer.css'
 class Footer extends Component {
    render() {
        return (
           <footer className='footer-content bg-pink'> 
               <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='copyright'>
                                <p>Developed by Aswin K.S, Fullstack Developer</p>
                            </div>
                        </div>
                    </div>
               </div>
           </footer>
        )
    }
}
export default Footer
