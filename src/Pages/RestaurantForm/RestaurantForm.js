import React, { Component } from 'react'
import './RestaurantForm.css'
class RestaurantForm extends Component {
    render() {
        return (
            <section className='form-container'>
                <div className='form-content'>
                    <div className='row clearfix'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='card'>
                            <div className='form-header'>
                            <h4>Registration form</h4>
                            </div>
                            <div className='body'>
                            <form className='form-rest'>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Name of the restaurant'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Street Address'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Suburb'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='City'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Email'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Phone Number'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Delivery services (eg: online order, uber eats etc)'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Basic charges if you have your own delivery'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Website'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Opening hours'/>
                                        {/* <label className='form-label'>Name of the restaurant</label> */}
                                    </div>
                                </div>
                                <button type='button' className='btn btn-primary m-t-15 waves-effect'>Submit</button>
                            </form>
                            </div>
                    </div>
                        </div>
                    
                    </div>
                </div>
            </section>
           
        )
    }
}
export default RestaurantForm

{/* <section className=' d-flex align-items-center'>

<div className='form-container col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <div className='form-header'>
        <h4>Registration form</h4>
        <input type='text'/>
    </div>
</div>
</section> */}