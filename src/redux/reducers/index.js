import {combineReducers} from 'redux'
import {userAuth, userData} from  './reducers'

export const rootReducer = combineReducers({
    userAuth,
    userData
})