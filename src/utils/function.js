import { decodeToken } from 'react-jwt'

export const decodeData = (token) => {
    const data = decodeToken(token)
    return data
}

export const isTokenExpired = (token) => {
    const decodedJwt = decodeToken(token)
    if(decodedJwt){
        return decodedJwt.exp * 1000 < Date.now()   
    }else{
        return true
    }
}