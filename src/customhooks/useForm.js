import {useState, useEffect} from 'react'

const useForm = (callbkfn, ValidateForm) => {
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
    openinghours:''
   })
  
//error handling
const [errors, setErrors] = useState({})

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
callbkfn()
}
}, [callbkfn, errors, isSubmitting])


    return {
        onChange,
        handleSubmit,
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