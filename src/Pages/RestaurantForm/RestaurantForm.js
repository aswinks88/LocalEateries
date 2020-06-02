import React,{useCallback, useState} from 'react'
import useForm from '../../customhooks/useForm'
import './RestaurantForm.css'
import axios from 'axios'
import uid from 'cuid'
import ValidateForm from '../ValidateFormField/ValidateForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addItems} from '../../actions/itemActions'
import PropTypes from 'prop-types'
// import  {useDropzone} from 'react-dropzone'
const uniqueId = uid()
const RestaurantForm =()=> {
    // const [file, setFile] = useState('')
    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //     console.log(acceptedFiles)
    //   }, [])
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
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
        addItems(restaurantData)
            // await axios.post('http://localhost:5001/restaurant/add', restaurantData)
            // .then(async res => {
            //     if(res.status === 200){
            //         console.log('success')
            //     }
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            // handling file upload
            const formData = new FormData()
           Object.keys(useFile.addfiles).map((key) => {
               return formData.append('addfiles', useFile.addfiles[key], useFile.addfiles[key].name)
            })
            // console.log(formData.getAll('addfiles'))

           await axios.post('http://localhost:5001/restaurant/fileupload', formData)
            .then(res => {
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
        values, useFile, errors} = useForm(onSubmit, ValidateForm)
  
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
                            <form onSubmit={handleSubmit}  encType='multipart/form-data' className='form-rest'>
                            <h4 className='form-section'>
                            <i className="fas fa-utensils"></i>
                            Business Info
                            </h4>
                                <div className='form-group row'>
                                    <label className='col-md-3 label-control'>Name of the restaurant</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Name of the restaurant'
                                        name='name'
                                        value={values.name}
                                        onChange={onChange}/>
                                    {errors.name && <p className='error'>{errors.name}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Street Address</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Street Address'
                                        name='street'
                                        value={values.street}
                                        onChange={onChange}/>
                                    {errors.street && <p className='error'>{errors.street}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Suburb</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Suburb'
                                        name='suburb'
                                        value={values.suburb}
                                        onChange={onChange}/>
                                    {errors.suburb && <p className='error'>{errors.suburb}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Zip/ Postal code</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Zip/ Postal code'
                                        name='zip'
                                        value={values.zip}
                                        onChange={onChange}/>
                                    {errors.zip && <p className='error'>{errors.zip}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>City</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='City'
                                        name='city'
                                        value={values.city}
                                        onChange={onChange}/>
                                    {errors.city && <p className='error'>{errors.city}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Email</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Email'
                                        name='email'
                                        value={values.email}
                                        onChange={onChange}/>
                                    {errors.email&& <p className='error'>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Phone Number</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Phone Number'
                                        name='phonenumber'
                                        value={values.phonenumber}
                                        onChange={onChange}/>
                                    {errors.phonenumber && <p className='error'>{errors.phonenumber}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Delivery services</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Delivery services (eg: online order, uber eats etc)'
                                        name='delivery'
                                        value={values.delivery}
                                        onChange={onChange}/>
                                    {errors.delivery && <p className='error'>{errors.delivery}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Minimum charges</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Minimum charges if you have your own delivery'
                                        name='charges'
                                        value={values.charges}
                                        onChange={onChange}/>
                                    {errors.charges && <p className='error'>{errors.charges}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    {/* change this to radio button */}
                                <label className='col-md-3 label-control'>contactless delivery</label>
                                    <div className='col-md-9'>
                                    <input type='text' className='form-control' placeholder='contactless delivery (if available)'
                                        name='contactless'
                                        value={values.contactless}
                                        onChange={onChange}/>
                                    {errors.contactless && <p className='error'>{errors.contactless}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Website</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Website'
                                        name='website'
                                        value={values.website}
                                        onChange={onChange}/>
                                    {errors.website && <p className='error'>{errors.website}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Opening hours</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Opening hours'
                                        name='openinghours'
                                        value={values.openinghours}
                                        onChange={onChange}/>
                                    {errors.openinghours && <p className='error'>{errors.openinghours}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Select images</label>
                                    <div className='col-md-9'>
                                        {/* <FileUpload /> */}
                                        <input type='file' 
                                        className='fileinput' 
                                        onChange={onChange}
                                        multiple/>
                                        {/* <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {
                                            isDragActive ?
                                            <p>Drop the files here ...</p> :
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        }
                                        </div> */}
                                    {errors.addfiles && <p className='error'>{errors.addfiles}</p>}
                                    </div>
                                </div>
                                <div className='form-actions row justify-content-center'>
                                <Link to='/' className='btn btn-warning mr-3'>
                                <i className="fas fa-window-close"></i>
                                    Cancel</Link>
                                <button type='submit' className='btn btn-primary'>
                                <i className="fas fa-save"></i>
                                    Submit</button>
                                </div>
                               
                            </form>
                            </div>
                    </div>
                        </div>
                    
                    </div>
                </div>
            </section>
      
            
           
        )  
}
// RestaurantForm.propTypes = {
//     addItems: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired
// }
const mapStatetoProps = (state) => ({
    item: state.item
})
// console.log(mapStatetoProps)
export default connect(mapStatetoProps, {addItems})(RestaurantForm)