import React, { Component } from 'react'
import useForm from '../../customhooks/useLogin'
import './UserRegistration.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ValidateLogin from '../ValidateFormField/ValidateLogin'
const UserRegistration = ()=>{
    const onSubmit = async () => {
        const  userData = {
            name: useUser.name,
            email: useUser.email,
            password: useUser.password
        }
        console.log(userData)
        await axios.post('http://localhost:5001/user/add', userData)
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
        useUser, errors} = useForm(onSubmit, ValidateLogin)
        return (
            <div className='container'>
            <div className='content-body'>
                <section className='row flexbox-container'>
                    <div className='col-lg-12 d-flex align-items-center justify-content-center'>
                        <div className='col-lg-10 col-md-8 col-sm-10 box-shadow-2 p-0'> 
                            <div className='card border-grey border-lighten-3 px-1 py-1 m-0'>
                                <div className='card-header border-0 pb-0'>
                                    <div className='card-title text-center'>
                                        <h2>Local Eateries</h2>
                                    </div>
                                    <h6 className='card-subtitle line-on-side text-muted text-center font-small-3 pt-2'>
                                       <span>One Click Registration</span> 
                                    </h6>
                                </div>
                                <div className = 'card-content'>
                                    <div className='text-center'>
                                        <a href='#' className='btn btn-social-icon mr-1 mb-1 btn-outline-facebook'>
                                            <span className='fab fa-facebook-f'>
                                            </span>
                                        </a>
                                        <a href='#' className='btn btn-social-icon mr-1 mb-1 btn-outline-twitter'>
                                            <span className='fab fa-twitter'>
                                            </span>
                                        </a>
                                    </div>
                                    <p className='card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1'>
                                        <span>OR</span>
                                    </p>
                                    <div className='card-body'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='form-group position-relative has-icon-left'>
                                                <input type='text'
                                                 className='form-control-userreg' 
                                                 placeholder='Username'
                                                 name = 'name'
                                                 value={useUser.name}
                                                 onChange={onChange}/>
                                                <div className='form-control-position'>
                                                    <i className='fas fa-user usericon'></i>
                                                </div>
                                                {errors.name && <p className='error'>{errors.name}</p>}
                                            </div>
                                            <div className='form-group position-relative has-icon-left'>
                                                <input type='text' 
                                                className='form-control-userreg' 
                                                name = 'email'
                                                placeholder='Your Email Address'
                                                value={useUser.email}
                                                onChange={onChange}/>
                                                <div className='form-control-position'>
                                                    <i className='fas fa-envelope usericon'></i>
                                                </div>
                                                {errors.email && <p className='error'>{errors.email}</p>}
                                            </div>
                                            <div className='form-group position-relative has-icon-left'>
                                                <input type='password' 
                                                className='form-control-userreg'
                                                name = 'password'
                                                placeholder='Password'
                                                value={useUser.password}
                                                onChange={onChange}/>
                                                <div className='form-control-position'>
                                                    <i className='fas fa-key usericon'></i>
                                                </div>
                                                {errors.password && <p className='error'>{errors.password}</p>}
                                            </div>
                                            <button type='submit' className='btn btn-outline-primary btn-block'>
                                            <i className='fas fa-user usericon'></i>&nbsp;
                                                Register</button> 
                                        </form>
                                        <Link className='btn btn-outline-danger btn-block mt-2' to='/login'>
                                        <i className="fas fa-sign-in-alt"></i>
                                       &nbsp; Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
            
        )
    
}

export default UserRegistration