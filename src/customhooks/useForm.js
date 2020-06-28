import React, {useState, useEffect} from 'react'
import { timeFromInt } from 'time-number'
// import { timeFromInt } from 'time-number'
const businessHours ={
    time:[]
}

const days = {
   time: {
        day: []
        }
}
const useForm = (callbkfn, ValidateForm) => {
    const [From, setFrom] = useState('12:00 AM');
    const [To, setTo] = useState('12:00 AM');
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
    
    const [useFile, setFile] = useState({ addfiles: ''})
  
    const [values, setValues] = useState({name: '',
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
    openinghours:'', 
   })
  
//error handling
const [errors, setErrors] = useState({})

//handling for data


//handling business hours
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
        setFrom(
            timeFromInt(time, { format: 12 }))
      }
    const handleTimeChangeTo = (time) => {
        setTo(
            timeFromInt(time, { format: 12 }));
    }
   
   //This function is called when the user clicks Add time button. 
//    Here we are passsing days, from and to as props to TimeTable component
   
    const addBusinessTimeHandler = () => {
        businessHours.time.map((data, index) => {
            if(data.day === 'Monday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:1, from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Monday: !check})
                data.isChecked = false
            }
            if(data.day === 'Tuesday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:2, from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Tuesday:!check})
                data.isChecked = false
            }
            if(data.day === 'Wednesday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:3, from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Wednesday:!check})
                data.isChecked = false
            }
            if(data.day === 'Thursday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:4, from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Thursday:!check})
                data.isChecked = false
            }
            if(data.day === 'Friday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:5, from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Friday:!check})
                data.isChecked = false
            }
            if(data.day === 'Saturday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:6,from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
                }
                setCheckboxValue({Saturday:!check})
                data.isChecked = false
            }
            if(data.day === 'Sunday' && data.isChecked === true){
                if(data.time === undefined || data.time === 'CLOSED'){
                    data.time = [{id:7,from: From, to:To}]
                } 
                else{
                    data.time.push({from: From, to:To})
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


//handling input fields
const [isSubmitting, setisSubmitting] = useState(false)


   const onChange = (e) => {
       setValues({
           ...values,
            [e.target.name]: e.target.value
        })
        setFile({
            ...useFile,
            addfiles: e.target.files
        })
    }
const handleSubmit = async (e) => {
    e.preventDefault()
    //handling errors here
    setErrors(ValidateForm(values, useFile))
    setisSubmitting(true)
}
//this useEffect is called only when there are no errors in the form. This results in calling the callback function which is then 
//submits the form
useEffect(() => {
if(Object.keys(errors).length === 0 && isSubmitting){
    console.log('its true')
callbkfn()
}
}, [callbkfn, errors, isSubmitting])


    return {
        onChange,
        handleSubmit,
        checkBoxHandler,
        handleTimeChangeFrom,
        handleTimeChangeTo,
        addBusinessTimeHandler,
        removeData,
        closed,
        setbusinessTiming,
        businessTiming,
        checkboxValue,
        check,
        From,
        To,
        values,
        useFile, 
        errors
    }
}

export default useForm


// name: '',
//     street: '',
//     suburb: '',
//     zip: '',
//     city: '',
//     email: '',
//     phonenumber: '',
//     delivery: '',
//     charges: '',
//     contactless:'',
//     website:'',
//     openinghours:''