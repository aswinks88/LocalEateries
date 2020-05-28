import {useState, useEffect} from 'react'

const useForm = (callbkfn, ValidateForm) => {
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
    openinghours:''})

//error handling
const [errors, setErrors] = useState({})

const [isSubmitting, setisSubmitting] = useState(false)


   const onChange = (e) => {
       console.log(e.target.value)
       setValues({
           ...values,
            [e.target.name]: e.target.value
        })
    }
const handleSubmit = async (e) => {
    e.preventDefault()
    //handling errors here
    setErrors(ValidateForm(values))
    setisSubmitting(true)
}
useEffect(() => {
if(Object.keys(errors).length === 0 && isSubmitting){
callbkfn()
}
}, [callbkfn, errors, isSubmitting])


    return {
        onChange,
        handleSubmit,
        values, 
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