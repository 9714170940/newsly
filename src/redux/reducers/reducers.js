import {userAuthId, user_id} from '../../utils/constant'

let authUserData = {
    isLogged: false,
    verified: '',
    authId: '',
    isLoginSuccess: false,
    user: {}
}

let fireStore = {
    id: '',
    data:{}
}

export const userAuth = (state = authUserData, action) => {
    switch (action.type) {
        case userAuthId:
            return {
                ...state,
                authId: action.payload.id,
                verified: action.payload.authId,
                isLogged: action.payload.logged,
                isLoginSuccess: action.payload.isLoginSuccess,
                user: action.payload.user
            } 
         default: return state
     }
}

export const userData = (state = fireStore, action) => {
    switch (action.type) {
        case user_id:
            return {
                ...state,
                id: action.payload
            }
        default: return state
    }
}