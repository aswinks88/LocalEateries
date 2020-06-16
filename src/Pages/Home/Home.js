import React, { Component } from 'react'
import './Home.css'
import FeatureCard from '../../component/FeatureCard/FeatureCard'
import {connect} from 'react-redux'
import {getItems} from '../../actions/itemActions'
import PropTypes from 'prop-types'
import img from '../../assets/img/MenuCheese.jpg'
import breakfast from '../../assets/illustrations/breakfast.jpg'
import lunch from '../../assets/illustrations/lunch.jpg'
import dinner from '../../assets/illustrations/dinner.jpg'
import dessert from '../../assets/illustrations/dessert.jpg'
import pad from '../../assets/img/pad.jpg'
import noodle from '../../assets/img/noodle.jpg'
import choco from '../../assets/img/choco.jpg'
import eggs from '../../assets/img/eggs.jpeg'
import indian from '../../assets/img/indian.jpg'
import ramen from '../../assets/img/ramen.jpg'
import bao from '../../assets/img/bao.jpg'
 class Home extends Component {
     componentDidMount(){
         console.log(this.props.getItems())
     }
    render() {
        console.log(this.props.item)
        return (
         <div className='container-test'>
            
            <section className='container1'>
             <div className='home-title'>
                    <h1>Uncover great Local Eateries near you</h1>
                    <div className='input-search'>
                <input type='text' name='search' placeholder='Search for your local business'/> 
            </div>
            <div className='button-search'>
                 <button className='btn btn-outline-dark'>Search</button>
            </div>
             </div>
                
           
           </section>
           <section className='section-info'>
                  <div className='card-large'>
                        <div className='card-content'>
                            <h2>Go Local. Support your local restaurant business</h2>
                            <p>The local business needs your support. Let's dine-in or takeaway.</p>
                        </div>
                  </div>      
            </section>
            <section className='section-type'>
                  <div className='card-mini'>
                  <div className='image-container'>
                        <img className='image' src={breakfast} width='100%' height='200px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>BreakFast</h2>
                            <p>Findout which restaurant is best for your morning breakfast</p>
                        </div>
                  </div>    
                  <div className='card-mini'>
                  <div className='image-container'>
                        <img className='image' src={lunch} width='100%' height='200px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Lunch</h2>
                            <p>Findout which restaurant is best for your afternoon Lunch</p>
                        </div>
                  </div>    
                  <div className='card-mini'>
                  <div className='image-container'>
                        <img className='image' src={dinner} width='100%' height='200px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Dinner</h2>
                            <p>Findout which restaurant is best for your dinner</p>
                        </div>
                  </div>    
                  <div className='card-mini'>
                  <div className='image-container'>
                        <img className='image' src={dessert} width='100%' height='200px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Desserts</h2>
                            <p>The best Desserts in town</p>
                        </div>
                  </div>    
            </section>
                <div className='section-title'>
                  <h2>Found 50 local eateries near you: Mt Eden</h2>
                  <div className='button-view-all'>
                        <button className='btn-info-all'>view all</button>
                    </div>
                </div>
           <section className='restaurant-detail'>
               
                <div className='card-mini'>
                        <div className='image-container'>
                        <img className='image' src={img} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Sal's Pizza</h2>
                        <p>this is a restaurant card-content</p>
                            <span>rating</span>
                      
                        </div>
                </div>
                <div className='card-mini'>
                        <div className='image-container'>
                        <img className='image' src={pad} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Thai takeaway</h2>
                        <p>this is a restaurant card-content</p>
                            <span>rating</span>
                      
                        </div>
                </div>
                <div className='card-mini'>
                        <div className='image-container'>
                        <img className='image' src={noodle} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                        <h2>Noodles Doodles</h2>
                        <p>this is a restaurant card-content</p>
                            <span>rating</span>
                      
                        </div>
                </div>
                <div className='card-mini'>
                        <div className='image-container'>
                            <img className='image' src={ramen} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>Japanese Takeaway</h2>
                                <p>this is a restaurant card-content</p>
                                    <span>rating</span>
                        </div>
                    </div>
                
        </section>
                <div className='section-title'>
                  <h2>Best Restaurants in Auckland</h2>
                   <div className='button-view-all'>
                        <button className='btn-info-all'>view all</button>
                    </div>
                </div>
        <section className='restaurant-detail'>
                
                    <div className='card-mini'>
                        <div className='image-container'>
                            <img className='image' src={choco} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>Choco Loco</h2>
                                <p>this is a restaurant card-content</p>
                                    <span>rating</span>
                        </div>
                    </div>
                    <div className='card-mini'>
                        <div className='image-container'>
                            <img className='image' src={eggs} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>Dinner Stunner</h2>
                                <p>this is a restaurant card-content</p>
                                    <span>rating</span>
                        </div>
                    </div>
                    <div className='card-mini'>
                        <div className='image-container'>
                            <img className='image' src={indian} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>Indian Takeaway</h2>
                                <p>this is a restaurant card-content</p>
                                    <span>rating</span>
                        </div>
                    </div>
                    <div className='card-mini'>
                        <div className='image-container'>
                            <img className='image' src={bao} width='100%' height='170px' alt='food' />
                        </div>
                        <div className='card-content'>
                            <h2>Bun Fun</h2>
                                <p>this is a restaurant card-content</p>
                                    <span>rating</span>
                        </div>
                    </div>
                   
        </section>
        </div>      
           
        )
    }
}
Home.propTypes = {
getItems: PropTypes.func.isRequired,
item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {getItems})(Home)