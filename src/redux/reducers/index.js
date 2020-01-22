import { combineReducers } from 'redux';
import login from './login'
import book from './book'

export default combineReducers({
    login,
    book
})