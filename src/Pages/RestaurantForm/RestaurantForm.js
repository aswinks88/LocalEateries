import React from 'react'
import useForm from '../../customhooks/useForm'
import './RestaurantForm.css'
import axios from 'axios'
import uid from 'cuid'
import ValidateForm from './ValidateForm'
const uniqueId = uid()
const RestaurantForm =()=> {
    const onSubmit = async (e) => {
       
        console.log(1)
        const restaurantData = {
            name: values.name,
            address: {
                street: values.street,
                suburb: values.suburb,
                city: values.city,
                zip: values.zip
            },
            email: values.email,
            phonenumber: values.phonenumber,
            deliveryservices: values.delivery,
            charges: values.charges,
            contactless: values.contactless,
            website: values.website,
            openinghours: values.openinghours,
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
   
    const {onChange,
        handleSubmit,
        values, errors} = useForm(onSubmit, ValidateForm)
  
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
                            <form onSubmit={handleSubmit} className='form-rest'>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Name of the restaurant'
                                        name='name'
                                        value={values.name}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.name && <p className='error'>{errors.name}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Street Address'
                                        name='street'
                                        value={values.street}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.street && <p className='error'>{errors.street}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Suburb'
                                        name='suburb'
                                        value={values.suburb}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.suburb && <p className='error'>{errors.suburb}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Zip/ Postal code'
                                        name='zip'
                                        value={values.zip}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.zip && <p className='error'>{errors.zip}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='City'
                                        name='city'
                                        value={values.city}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.city && <p className='error'>{errors.city}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Email'
                                        name='email'
                                        value={values.email}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.email&& <p className='error'>{errors.email}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Phone Number'
                                        name='phonenumber'
                                        value={values.phonenumber}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.phonenumber && <p className='error'>{errors.phonenumber}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Delivery services (eg: online order, uber eats etc)'
                                        name='delivery'
                                        value={values.delivery}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.delivery && <p className='error'>{errors.delivery}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Minimum charges if you have your own delivery'
                                        name='charges'
                                        value={values.charges}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.charges && <p className='error'>{errors.charges}</p>}
                                </div>
                                <div className='form-group'>
                                    {/* change this to radio button */}
                                    <div className='form-line focused'>
                                    <input type='text' className='form-control' placeholder='contactless delivery (if available)'
                                        name='contactless'
                                        value={values.contactless}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.contactless && <p className='error'>{errors.contactless}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Website'
                                        name='website'
                                        value={values.website}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.website && <p className='error'>{errors.website}</p>}
                                </div>
                                <div className='form-group'>
                                    <div className='form-line focused'>
                                        <input type='text' className='form-control' placeholder='Opening hours'
                                        name='openinghours'
                                        value={values.openinghours}
                                        onChange={onChange}/>
                                    </div>
                                    {errors.openinghours && <p className='error'>{errors.openinghours}</p>}
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
export default RestaurantForm