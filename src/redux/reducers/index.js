import {combineReducers} from 'redux'
import {userList, userAuth} from  './reducers'

export const rootReducer = combineReducers({
    userList,
    userAuth
})