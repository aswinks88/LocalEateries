import {combineReducers} from 'redux'
import itemReducers from './itemReducer'
import AuthReducers from './AuthReducer'
import ErrorReducers from './ErrorReducer'

export default combineReducers({
    item: itemReducers,
    auth: AuthReducers,
    error: ErrorReducers

})