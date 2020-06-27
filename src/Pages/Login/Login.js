import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'
// import ValidateForm from '../ValidateFormField/ValidateForm'

const Login = () => {
  
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
                                       <span>One Click Login</span> 
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
                                    <p className='card-subtitle line-on-side text-muted text-center font-small-3 mx-4 my-1'>
                                        <span>OR</span>
                                    </p>
                                    <div className='card-body login'>
                                        <form>
                                            <div className='form-group position-relative has-icon-left'>
                                                <input type='text' 
                                                className='form-control-userreg' 
                                                placeholder='Username or Email'
                                                name='name'
                                                />
                                                <div className='form-control-position'>
                                                    <i className='fas fa-user usericon'></i>
                                                </div>
                                            </div>
                                            <div className='form-group position-relative has-icon-left'>
                                                <input type='password' 
                                                className='form-control-userreg' 
                                                placeholder='Password'
                                                />
                                                <div className='form-control-position'>
                                                    <i className='fas fa-key usericon'></i>
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6 col-12 text-center text-sm-left pr-0'>
                                                    <input className='icheckbox_square-blue' type='checkbox'/>
                                                    <label className='label-remember'>Remeber Me</label>
                                                </div>
                                                <div className='col-sm-6 col-12 float-sm-left text-center text-sm-right'>
                                                    <Link to='#'>Forgot Password</Link>
                                                </div>
                                            </div>
                                            <button type='submit' className='btn btn-outline-primary btn-block'>
                                            <i className="fas fa-sign-in-alt"></i>&nbsp;
                                                Login</button> 
                                        </form>
                                        <div className='register-p'>
                                        <p className='card-subtitle line-on-side text-muted text-center font-small-3'>
                                            <span> New to Local Eateries?</span>
                                        </p>
                                        </div>
                                        <div>
                                        <Link to='/userregistration' className='btn btn-outline-danger btn-block mt-2'>
                                        <i className='fas fa-user usericon'></i>
                                       &nbsp; Register
                                        </Link>
                                        </div>
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

export default Login
