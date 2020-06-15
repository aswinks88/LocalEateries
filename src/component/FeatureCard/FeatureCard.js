import React, { Component } from 'react'
import sampleimg from '../../assets/img/MenuCheese.jpg'
import {Link} from 'react-router-dom'
class FeatureCard extends Component {
    constructor(props){
        super(props)
        this.state= {

        }
    }
    render() {
        return (
            
                 <div className='col-md-4 featured-responsive'>
                            <div className='featured-place-wrap'>
                                <Link to='/restaurantdetail'>
                                    <img src={sampleimg} className='img-fluid' alt='#' />
                                    <span className='featured-rating-orange'>4.5</span>
                                    <div className='featured-title'>
                                        <h6>Sal's</h6>
                                        <p>Restaurant</p>
                                        <span>.</span>
                                        <p>50 Reviews</p>
                                        <span> . </span>
                                        <p><span>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </span></p>
                                        <ul>
                                            <li>
                                                <span><i className="fas fa-map-marker-alt"></i></span>
                                                <p>Mt Eden</p>
                                            </li>
                                            <li>
                                            <span><i className="fas fa-phone-volume"></i></span>
                                                <p>+6412358498</p>
                                            </li>
                                            <li>
                                                <span><i className="fas fa-link"></i></span>
                                                <p>www.sals.co.nz</p>
                                            </li>
                                            <li>
                                                <span><i className="fas fa-truck"></i></span>
                                                <p>Online orders, Uber eats, Flamingo, Deliver easy</p>
                                            </li>
                                        </ul>
                                        <div className='bottom-icons'>
                                            <div className='closed-now'>
                                                Open Now
                                            </div>
                                        <span><i className="fas fa-bookmark"></i></span>
                                        <span><i className="fas fa-heart"></i></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
            
        )
    }
}

export default FeatureCard