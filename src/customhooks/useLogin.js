import {useState, useEffect} from 'react'

const useLogin = (loginSubmit, ValidateLogin) => {
    const [useUser, setUserName] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const [isSubmitting, setisSubmitting] = useState(false)
    const onChange = (e) => { 
        setUserName({
            ...useUser,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handlesubmit')
        //handling errors here
        setErrors(ValidateLogin(useUser))
        setisSubmitting(true)
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            loginSubmit()
            //clears the field after submitting
            setUserName({
                name: '',
                email: '',
                password: ''
            })
            setisSubmitting(false)
        }
        }, [loginSubmit, errors, isSubmitting])

        return {
            onChange,
            handleSubmit,
            useUser, 
            errors
        }
}
export default useLogin