import React, { Component } from 'react'
import './Home.css'
import sampleimg from '../../assets/img/MenuCheese.jpg'
 class Home extends Component {
    render() {
        return (
            <div>
            <section className='home-content d-flex align-items-center'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12'>
                        <div className='content-heading'>
                            <div className='row'>
                            <div className='col-md-12'>
                                <div className='slider-content'>
                                    <h1 className='content-name'>Support your local Restaurant business, Go Local</h1>
                                    <h5 className='content-subheading'> Uncover great local eateries near you</h5>
                                </div>
                            </div>
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-md-10'>
                                    <form className='form-wrap mt-4'>
                                        <div className='btn-group' role='group' aria-label='Basic example'>
                                            <input type='text' placeholder='Are you looking for anything specific?' className='btn-group1'/>
                                            <input type='text' placeholder='Any place in your mind?' className='btn-group2'/>
                                            <button type='submit' className='btn-search'>
                                            <i className="icon-magnifier search-icon fas fa-search"></i>
                                                SEARCH
                                                <i className='pe-7s-angle-right'></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
           </section>
           <div className='current-location'>
                <div className='row justify-content-center'>
                    <span>200 local eateries near you: &nbsp;<span className='bg-red'>Mt Eden, Auckland</span></span>
                </div>
           </div>
           <section className='featured-place bg-light'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className='featured-place-heading'>
                                <h2>Featured Local Eateries</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 featured-responsive'>
                            <div className='featured-place-wrap'>
                                <a href='#'>
                                    <img src={sampleimg} className='img-fluid' alt='#' />
                                    <span className='featured-rating-orange'>4.5</span>
                                    <div className='featured-title'>
                                        <h6>Sal's</h6>
                                        <p>Restaurant</p>
                                        <span>.</span>
                                        <p>50 Reviews</p>
                                        <span> . </span>
                                        <p><span>****</span></p>
                                        <ul>
                                            <li>
                                                <span><i className="fas fa-map-marker-alt"></i></span>
                                                <p>Mt Eden</p>
                                            </li>
                                            <li>
                                            <span><i class="fas fa-phone-volume"></i></span>
                                                <p>+6412358498</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-link"></i></span>
                                                <p>www.sals.co.nz</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-truck"></i></span>
                                                <p>Online orders, Uber eats</p>
                                            </li>
                                        </ul>
                                        <div className='bottom-icons'>
                                            <div className='closed-now'>
                                                Closed Now
                                            </div>
                                        <span><i class="fas fa-link"></i></span>
                                        <span><i class="fas fa-bookmark"></i></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 featured-responsive'>
                            <div className='featured-place-wrap'>
                                <a href='#'>
                                    <img src={sampleimg} className='img-fluid' alt='#' />
                                    <span className='featured-rating-orange'>4.5</span>
                                    <div className='featured-title'>
                                        <h6>Sal's</h6>
                                        <p>Restaurant</p>
                                        <span>.</span>
                                        <p>50 Reviews</p>
                                        <span> . </span>
                                        <p><span>****</span></p>
                                        <ul>
                                            <li>
                                                <span><i className="fas fa-map-marker-alt"></i></span>
                                                <p>Mt Eden</p>
                                            </li>
                                            <li>
                                            <span><i class="fas fa-phone-volume"></i></span>
                                                <p>+6412358498</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-link"></i></span>
                                                <p>www.sals.co.nz</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-truck"></i></span>
                                                <p>Online orders, Uber eats</p>
                                            </li>
                                        </ul>
                                        <div className='bottom-icons'>
                                            <div className='closed-now'>
                                                Closed Now
                                            </div>
                                        <span><i class="fas fa-link"></i></span>
                                        <span><i class="fas fa-bookmark"></i></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 featured-responsive'>
                            <div className='featured-place-wrap'>
                                <a href='#'>
                                    <img src={sampleimg} className='img-fluid' alt='#' />
                                    <span className='featured-rating-orange'>4.5</span>
                                    <div className='featured-title'>
                                        <h6>Sal's</h6>
                                        <p>Restaurant</p>
                                        <span>.</span>
                                        <p>50 Reviews</p>
                                        <span> . </span>
                                        <p><span>****</span></p>
                                        <ul>
                                            <li>
                                                <span><i className="fas fa-map-marker-alt"></i></span>
                                                <p>Mt Eden</p>
                                            </li>
                                            <li>
                                            <span><i class="fas fa-phone-volume"></i></span>
                                                <p>+6412358498</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-link"></i></span>
                                                <p>www.sals.co.nz</p>
                                            </li>
                                            <li>
                                                <span><i class="fas fa-truck"></i></span>
                                                <p>Online orders, Uber eats</p>
                                            </li>
                                        </ul>
                                        <div className='bottom-icons'>
                                            <div className='closed-now'>
                                                Closed Now
                                            </div>
                                        <span><i class="fas fa-link"></i></span>
                                        <span><i class="fas fa-bookmark"></i></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row justify-content-center'>
                            <div className='col-md-4'>
                                <div className='featured-btn-wrap'>
                                    <button class='btn btn-danger'>View All</button>
                                </div>
                            </div>  
                        </div>
                </div>
           </section>
            </div>
           
        )
    }
}
export default Home
