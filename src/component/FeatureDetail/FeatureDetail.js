import React, { Component } from 'react'
import './FeatureDetail.css'
import food from '../../assets/img/MenuCheese.jpg'
 class FeatureDetail extends Component {
    render() {
        return (
            <div className='container-detail'>
                <div className='image-container-slider'>
                    {/* <img className='img-fluid'  src={food} alt='rest'/>
                    <img className='img-fluid' src={food} alt='rest' /> */}
                </div>     
                <section className='restaurant-name'>
                    <div className='container'>
                        <div className='row clearfix'>
                            <div className='col-md-6'>
                                <h5>Sal's</h5>
                                <p className='short-description'>New York Pizza</p>
                            </div>
                            <div className='col-md-6'>
                                <div className='rating-container'>
                                    <div className='rating-count'>
                                        <span>4.5</span>
                                    </div>
                                    <div className='review-count'>
                                    <button className='btn btn-outline-danger'>Write a Review</button>
                                        <span>50 Reviews</span>
                                    </div>
                                    {/* <div className='review-button'>
                                        <button>Write a Review</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className='restaurant-detail-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                            <div className='restaurant-wrap'>
                                <div className='restaurant-description'>
                                    <p>Tasty Hand-Pulled Noodles is a 1950s style diner located in Madison, Wisconsin. 
                                        Opened in 1946 by Mickey Weidman, and located just across the street from Camp Randall Stadium, 
                                        it has become a popular game day tradition amongst many Badger fans. 
                                        The diner is well known for its breakfast selections, especially the Scrambler, 
                                        which is a large mound of potatoes, eggs, cheese, gravy, and a patrons’ choice of other toppings.
                                        </p>
                                    <p>more description if needed</p>
                                    <hr />
                                </div>
                                <div className='row'>
                                    <p> street parking, eftpos, online delivery</p>
                                </div>
                            </div>
                     <div className='review-section mt-4'>
                                    <h5>50 Reviews</h5>
                       <hr />
                        <div className='customer-review-wrap'>
                            <div className='user-profile'>
                                <img className='img-fluid' width='78px' height='78px' src={food} alt='rest' /> 
                                        <p>some name</p>
                                        <span>25 reviews</span>
                            </div>
                            <div className='customer-review-content-wrap'>
                                <div className='customer-review-content'>
                                    <div className='customer-review-heading'> 
                                         <h6>Best new york pizza in town</h6>
                                    </div>
                                    <div className='customer-rating'> 
                                     
                                     </div>
                                </div>
                                <p className='review-text'>
                                I love the noodles here but it is so rare that I get to come here. 
                                Tasty Hand-Pulled Noodles is the best type of whole in the wall restaurant. 
                                The staff are really nice, and you should be seated quickly. 
                                I usually get the hand pulled noodles in a soup. 
                                House Special #1 is amazing and the lamb noodles are also great. 
                                If you want your noodles a little chewier, get the knife cut noodles, 
                                which are also amazing. Their dumplings are great dipped in their chili sauce.
                                </p>
                            </div>
                        </div>
                    </div>  
                   
                            </div>
                            <div className='col-md-4'>
                                <div className='contact-info'>
                                <img className='img-fluid' src={food} alt='rest' /> 
                                <div className='address'>
                                <span><i className="fas fa-map-marker-alt"></i></span>
                                                <p>Mt Eden</p>
                                </div>
                                <div className='address'>
                                <span className="fas fa-phone-volume"></span>
                                                <p>+64545655416</p>
                                </div>
                                <div className='address'>
                                <span><i className="fas fa-link"></i></span>
                                                <p>www.sals.co.nz</p>
                                </div>
                                <div className='address'>
                                <span><i className="fas fa-truck"></i></span>
                                    <p>Online orders, Uber eats, Flamingo, Deliver easy</p>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>  
                </section>
            </div>
        )
    }
}
export default FeatureDetail
