import axios from 'axios'
import {USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL} from '../actions/actionType'
import { returnErrors } from './Erroractions'

//check token and load user
export const loadUser = () => (dispatch, getState) => {
//loading user
dispatch({type: USER_LOADING})

axios.get('http://localhost:5001/auth/user', tokenConfig(getState))
.then(res => {
    dispatch({
        type: USER_LOADED,
        payload: res.data
    })
})
.catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({
        type: AUTH_ERROR
    })
})
}

//Register user
export const register = (data) => {
    console.log(data)
    // const config = {
    //     headers:{
    //     "Content-type": "application/json"
    //     }
    //     }

   //Request body
//    const body = JSON.stringify({name, email, password})
   axios.post('http://localhost:5001/user/add', data)
   .then(res => {
      return({
           type: REGISTER_SUCCESS,
           payload: res.data
       })
   })
   .catch(err =>{
    // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
    //    dispatch({
    //        type:REGISTER_FAIL
    //    })
    return err
   })
}
//logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = getState => {
    //Get token from localstorage
const token = getState().auth.token
//Headers
const config = {
headers:{
"Content-type": "application/json"
}
}
if(token){
    config.headers['x-auth-token'] = token
}
return config
}