import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './actionType'
import axios from 'axios'
import {API_URL} from '../../src/config'
export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get(`${API_URL}/all`)
    .then(res => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    })
}
export const addItems = item => {
    console.log(item)
    axios.post(`${API_URL}/add`, item)
    .then(res => {
        // console.log(res.data)
        return{
            type: ADD_ITEM,
            payload: res.data
        }
        // dispatch({
        //     type: ADD_ITEM,
        //     payload: res.data
        // })
    })
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}