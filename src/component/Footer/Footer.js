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
                                <p>This website can be used as a free advertising plaform for the restaurants in New Zealand</p>
                            </div>
                        </div>
                    </div>
               </div>
           </footer>
        )
    }
}
export default Footer
