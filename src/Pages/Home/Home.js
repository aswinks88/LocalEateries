import React, { Component } from 'react'
import './Home.css'
import FeatureCard from '../../component/FeatureCard/FeatureCard'
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
                <div className='row justify-content-center locationcount'>
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
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
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

{/* <div className = 'col-xs-12 col-sm-6 col-md-4 food-item'>
                            <div className='food-item-wrap'>
                                <div className='figure-wrap'>
                                    <div className='distance'>
                                        <i className="fas fa-pin"></i>
                                    </div>
                                    <div className='rating fa-pull-left' >
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    </div>
                                    <div className='review pull-right'>
                                    <a href="#">198 reviews</a>
                                    </div>
                                </div>
                                <div className='content'>
                                    <h5>
                                        <a href='#'>Sal's</a>
                                    </h5>
                                    <div className=''>

                                    </div>
                                </div>
                            </div>
                        </div> */}