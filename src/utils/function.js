import { decodeToken } from 'react-jwt'

export const decodeData = async(token) => {
    const data = await decodeToken(token)
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
