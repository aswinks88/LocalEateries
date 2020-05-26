import React, { Component } from 'react'
import './RestaurantForm.css'
import axios from 'axios'
import uid from 'cuid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const uniqueId = uid()
class RestaurantForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            street: '',
            suburb: '',
            zip: '',
            city: '',
            email: '',
            phonenumber: '',
            delivery: '',
            charges: '',
            contactless:'',
            website:'',
            openinghours:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async onSubmit(e){
        e.preventDefault()
        console.log(1)
        const restaurantData = {
            name: this.state.name,
            address: {
                street: this.state.street,
                suburb: this.state.suburb,
                city: this.state.city,
                zip: this.state.zip
            },
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            deliveryservices: this.state.delivery,
            charges: this.state.charges,
            contactless: this.state.contactless,
            website: this.state.website,
            openinghours: this.state.openinghours,
            uniqueid: uniqueId,
            date: new Date()
        }
            await axios.post('http://localhost:5001/restaurant/add', restaurantData)
            .then(async res => {
                if(res.status === 200){
                    console.log('success')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <section className='form-container'>
                <div className='form-content'>
                    <div className='row clearfix'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='card'>
                            <div className='form-header'>
                            <h3>Registration form</h3>
                            </div>
                            <div className='body'>
                            <form onSubmit={this.onSubmit} className='form-rest'>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Name of the restaurant'
                                        name='name'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Street Address'
                                        name='street'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Suburb'
                                        name='suburb'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Zip/ Postal code'
                                        name='zip'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='City'
                                        name='city'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Email'
                                        name='email'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Phone Number'
                                        name='phonenumber'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Delivery services (eg: online order, uber eats etc)'
                                        name='delivery'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Basic charges if you have your own delivery'
                                        name='charges'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    {/* change this to radio button */}
                                    <div className='form-line focused'>
                                    <input type='text' className='form-control' placeholder='contactless delivery (if available)'
                                        name='contactless'
                                        onChange={this.onChange}/>
                                                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Website'
                                        name='website'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Opening hours'
                                        name='openinghours'
                                        onChange={this.onChange}/>
                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary m-t-15 waves-effect'>Submit</button>
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