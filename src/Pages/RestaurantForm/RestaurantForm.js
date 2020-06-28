import React, {useState, useEffect} from 'react'
import useForm from '../../customhooks/useForm'
import './RestaurantForm.css'
import axios from 'axios'
import uid from 'cuid'
import ValidateForm from '../ValidateFormField/ValidateForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addItems} from '../../actions/itemActions'
import TimePicker from 'react-bootstrap-time-picker';
import { timeFromInt } from 'time-number'
import moment from 'moment'
// import  {useDropzone} from 'react-dropzone'
const uniqueId = uid()
const businessHours ={
    time:[]
}

const days = {
   time: {
        day: []
        }
}

// const from = []
const RestaurantForm = () => {
    const [time1, setTime1] = useState('12:00 AM');
    const [time2, setTime2] = useState('12:00 AM');
    const  [businessTiming, setbusinessTiming]= useState([])
    const [check, setCheck] = useState()
    const [checkboxValue, setCheckboxValue] = useState(
        {
            Monday:'',
            Tuesday:'',
            Wednesday:'',
            Thursday:'',
            Friday:'',
            Saturday:'',
            Sunday:''
        }
    )
    
    // const [file, setFile] = useState('')
    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //     console.log(acceptedFiles)
    //   }, [])
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    // useEffect(() => {
    //     hoursList() 
    // },[])
    const TimeTable = (props) =>{
    return  props.data.time.map((data,index) => {
                return     <tr key={index}>
                                <td >{data.day}</td>
                                <td>        
                                    {data.time === 'CLOSED' ? 'CLOSED' : data.time.map((time,index) => {
                                        return `${time.from} - ${time.to}`.concat(',\t')
                                    })} &nbsp;
                                </td>   
                                <td><p className='removeRow' onClick={() => removeData(index, data.day)}>Remove</p></td> 
                                <td><p className='closed' onClick={() => closed(data.day)}>Mark as Closed</p></td> 
                            </tr>    
            })     
                     
    }
       
  
    const removeData = (index, day) => {
    const newArray = Object.assign([], businessHours)
    newArray.time.splice(index, 1)
    if(days.time.day.includes(day))
    {
       let dayIndex = days.time.day.indexOf(day)
       days.time.day.splice(dayIndex, 1)
    }
    setbusinessTiming(<TimeTable data={newArray} />)
    }
    const closed = (day) => {
        
        for(let i=0; i< businessHours.time.length; i++){
            if(businessHours.time[i].day === day){
               businessHours.time[i].time = 'CLOSED'
            }
        }
        setbusinessTiming(<TimeTable data={businessHours} />)
    }
    const checkBoxHandler = (e) => {
        setCheck(e.target.checked)
        if(e.target.checked === true){
           setCheckboxValue({
            ...checkboxValue,
               [e.target.name] : e.target.checked
            })
            
            if(!days.time.day.includes(e.target.value)){
                days.time.day.push(e.target.name)
                businessHours.time.push({isChecked: e.target.checked, day: e.target.name})
            } else {
                for(let i = 0; i<businessHours.time.length; i++){
                    if(businessHours.time[i].day === e.target.value){
                        businessHours.time[i].isChecked = e.target.checked
                    }
                }
            }
           
        }
        if(e.target.checked === false)
        {
            setCheckboxValue({
                ...checkboxValue,
                [e.target.name] : e.target.checked})
                if(days.time.day.includes(e.target.value)){
                    for(let i = 0; i<businessHours.time.length; i++){
                        if(businessHours.time[i].day === e.target.value){
                            businessHours.time[i].isChecked = e.target.checked
                        }
                    } 
                }
        }
    }

    const  handleTimeChangeFrom = (time) => {
        setTime1(
            timeFromInt(time, { format: 12 }))
      }
    const handleTimeChangeTo = (time) => {
        setTime2(
            timeFromInt(time, { format: 12 }));
    }
   
   //This function is called when the user clicks Add time button. 
//    Here we are passsing days, from and to as props to TimeTable component
   
    const addBusinessTimeHandler = () => {
        businessHours.time.map((data, index) => {
            if(data.day === 'Monday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:1, from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Monday: !check})
                data.isChecked = false
            }
            if(data.day === 'Tuesday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:2, from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Tuesday:!check})
                data.isChecked = false
            }
            if(data.day === 'Wednesday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:3, from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Wednesday:!check})
                data.isChecked = false
            }
            if(data.day === 'Thursday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:4, from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Thursday:!check})
                data.isChecked = false
            }
            if(data.day === 'Friday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:5, from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Friday:!check})
                data.isChecked = false
            }
            if(data.day === 'Saturday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:6,from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Saturday:!check})
                data.isChecked = false
            }
            if(data.day === 'Sunday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:7,from: time1, to:time2}]
                } 
                else{
                    data.time.push({from: time1, to:time2})
                }
                setCheckboxValue({Sunday:!check})
                data.isChecked = false
            }
            if(data.isChecked === false){
               return data.time
            }
        })
   //sorting days of week before passing it to the TimeTable component as props
      businessHours.time.sort((a, b) => {
            const day1 = a.time[0].id
            const day2 = b.time[0].id
            return (day1 - day2)
        })

                return setbusinessTiming( <TimeTable data={businessHours} />)
    }
    const onSubmit = async (e) => {
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
                            <h3>Restaurant Registration form</h3>
                            </div>
                            <div className='body'>
                            <form onSubmit={handleSubmit}  encType='multipart/form-data' className='form-rest'>
                            <h4 className='form-section'>
                            <i className="fas fa-utensils"></i>
                            Restaurant Address
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
                                <label className='col-md-3 label-control'>Website</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Website'
                                        name='website'
                                        value={values.website}
                                        onChange={onChange}/>
                                    {errors.website && <p className='error'>{errors.website}</p>}
                                    </div>
                                </div>
                                <h4 className='form-section'>
                                <i className="fas fa-business-time"></i>
                                Business Hours
                                </h4>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Day</label>
                                <div className='col-md-9'> 
                                <div>
                                    <label className='checkboxlabel'>
                                    Monday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Monday'
                                        value='Monday'
                                        checked={checkboxValue.Monday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Tuesday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Tuesday'
                                        value='Tuesday'
                                        checked={checkboxValue.Tuesday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Wednesday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Wednesday'
                                        value='Wednesday'
                                        checked={checkboxValue.Wednesday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Thursday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Thursday'
                                        value='Thursday'
                                        checked={checkboxValue.Thursday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Friday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Friday'
                                        value='Friday'
                                        checked={checkboxValue.Friday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Saturday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Saturday'
                                        value='Saturday'
                                        checked={checkboxValue.Saturday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                </div>
                                <div>
                                    <label className='checkboxlabel'>
                                   Sunday
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='Sunday'
                                        value='Sunday'
                                        checked={checkboxValue.Sunday}
                                        onChange={checkBoxHandler}
                                        /> 
                                       <span className='check'></span> 
                                    </label> 
                                    </div> 
                                </div>
                                
                                </div>
                                
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Open From</label>
                                    <div className='col-md-9 time-picker'>
                                    <TimePicker name = 'from' onChange={handleTimeChangeFrom } value={time1} />    
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Closing at</label>
                                    <div className='col-md-9 time-picker'>
                                    <TimePicker id = 'to' onChange={handleTimeChangeTo} value={time2} />    
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'></label>
                                <div className='col-md-9'>
                                <button type='button' onClick={addBusinessTimeHandler} className='btn btn-add'>Add Time</button> 
                                <div className='form-group'>
                                <label className='col-md-3 label-control'></label>
                                    <table className='table table-bordered mb-0'>
                                            {/* <thead>
                                                <tr>
                                                    <th>Day</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead> */}
                                        <tbody>
                                        {businessTiming}
                                        </tbody>
                                    </table>
                                </div>
                               
                                    </div>
                                </div>
                               
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Additional Notes</label>
                                    <div className='col-md-9'>
                                        <textarea className='form-control' placeholder='Eg: closed on public holidays'
                                        name='openinghours'
                                        value={values.openinghours}
                                        onChange={onChange}/>
                                    {errors.openinghours && <p className='error'>{errors.openinghours}</p>}
                                    </div>
                                </div>
                                <h4 className='form-section'>
                                <i className="fas fa-align-justify"></i>
                                About your Restaurant
                                </h4>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>A short description about your restaurant</label>
                                    <div className='col-md-9'>
                                        <textarea className='form-control' placeholder='Tell us about your restaurant'
                                        name='openinghours'
                                        value={values.openinghours}
                                        onChange={onChange}/>
                                    {errors.openinghours && <p className='error'>{errors.openinghours}</p>}
                                    </div>
                                </div>


                                <h4 className='form-section'>
                                <i className="fas fa-concierge-bell"></i>
                                Services
                                </h4>
                                
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Alcohol</label>
                                <div className='col-md-9'> 
                                <div>
                                <label className='radiolabel'>
                                  Yes
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='alcohol'
                                        value='yes'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>     
                                    <label className='radiolabel'>
                                  No
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='alcohol'
                                        value='no'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>   
                                </div>     
                                </div>  
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>BYOD</label>
                                <div className='col-md-9'> 
                                <div>
                                <label className='radiolabel'>
                                  Yes
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='byod'
                                        value='yes'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>     
                                    <label className='radiolabel'>
                                  No
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='byod'
                                        value='no'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>   
                                </div>     
                                </div>  
                                </div>
                                
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Meals</label>
                                <div className='col-md-9'> 
                                
                                <label className='checkboxlabel'>
                                  Breakfast
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='meals'
                                        value='breakfast'
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                   
                                <label className='checkboxlabel'>
                                 Lunch
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='meals'
                                        value='lunch'
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                  
                                   
                                <label className='checkboxlabel'>
                                  Dinner
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='meals'
                                        value='dinner'
                                        /> 
                                       <span className='check'></span> 
                                    </label>    
                                    <label className='checkboxlabel'>
                                  Cafe
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='meals'
                                        value='cafe'
                                        /> 
                                       <span className='check'></span> 
                                    </label>  
                                    <label className='checkboxlabel'>
                                  Dessert
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='meals'
                                        value='dessert'
                                        /> 
                                       <span className='check'></span> 
                                    </label>  
                                  
                                </div>
                                   
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Restaurant Type</label>
                                <div className='col-md-9'> 
                                <label className='checkboxlabel'>
                                  Dine-in
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='resttype'
                                        value='dinein'
                                        /> 
                                       <span className='check'></span> 
                                    </label> 
                                    <label className='checkboxlabel'>
                                  Takeaway
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='resttype'
                                        value='takeaway'
                                        /> 
                                       <span className='check'></span> 
                                    </label> 
                                    <label className='checkboxlabel'>
                                  Drive-thru
                                    <small></small>
                                        <input type='checkbox' className='custom-control-input'
                                        name='resttype'
                                        value='drivethru'
                                        /> 
                                       <span className='check'></span> 
                                    </label> 
                                </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Seating Capacity</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Indoor and Outdoor(if available) seating capacity'
                                        name='delivery'
                                        value={values.delivery}
                                        onChange={onChange}/>
                                    {errors.delivery && <p className='error'>{errors.delivery}</p>}
                                    </div>
                                </div>
                                <h4 className='form-section'>
                                <i className="fas fa-pizza-slice"></i>
                                Type of Cuisine
                                </h4>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Select Cuisine Type</label>
                                    <div className='col-md-9'>
                                        <select className='form-control' placeholder='typer of cuisine'
                                        name='cuisine'
                                        value={values.openinghours}
                                        onChange={onChange}> 
                                        <option value='Asian'>Asian</option>
                                        <option value='American'>American</option>
                                        <option>Indian</option>
                                        <option>Chinese</option>
                                        </select>
                                    {errors.openinghours && <p className='error'>{errors.openinghours}</p>}
                                    </div>
                                </div>
                                <h4 className='form-section'>
                                <i className="fas fa-address-book"></i>
                                Reservation Info
                                </h4>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Is Booking available?</label>
                                <div className='col-md-9'> 
                                <div className='input-group'>
                                <label className='radiolabel'>
                                  Yes
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='booking'
                                        value='yes'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>     
                                    <label className='radiolabel'>
                                  No
                                    <small></small>
                                        <input type='radio' className='custom-control-input'
                                        name='booking'
                                        value='no'
                                        /> 
                                       <span className='radio'></span> 
                                    </label>   
                                </div>     
                                </div>
                                   
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Phone Booking</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Landline or Mobile phone number for SMS booking'
                                        name='delivery'
                                        value={values.delivery}
                                        onChange={onChange}/>
                                    {errors.delivery && <p className='error'>{errors.delivery}</p>}
                                    </div>
                                </div>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Online Booking (if available)</label>
                                    <div className='col-md-9'>
                                        <input type='text' className='form-control' placeholder='Website link for Online booking'
                                        name='delivery'
                                        value={values.delivery}
                                        onChange={onChange}/>
                                    {errors.delivery && <p className='error'>{errors.delivery}</p>}
                                    </div>
                                </div>
                                <h4 className='form-section'>
                                <i className="fas fa-car"></i>
                                 Delivery Service Info
                                </h4>
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
                                <h4 className='form-section'>
                                <i className="fas fa-cloud-upload-alt"></i>
                                Upload Logo and Food images
                                </h4>
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Upload Logo</label>
                                    <div className='col-md-9'>
                                        {/* <FileUpload /> */}
                                        <input type='file' 
                                        className='fileinput' 
                                        onChange={onChange}
                                        />
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
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Upload Food Images</label>
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
                                <div className='form-group row'>
                                <label className='col-md-3 label-control'>Upload Menu</label>
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
const mapStatetoProps = (state) => ({
    item: state.item
})
export default connect(mapStatetoProps, {addItems})(RestaurantForm)