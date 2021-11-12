import {addData, userAuthId} from '../../utils/constant'

let initialState = {
    users:[]
}
let authUserData = {}

export const userList = (state = initialState, action) => {
    switch (action.type) {
       case addData:
           return state 
        default: return state
    }
}
export const userAuth = (state = authUserData, action) => {
    switch (action.type) {
        case userAuthId:
            return {...state,authId:action.payload} 
         default: return state
     }
}