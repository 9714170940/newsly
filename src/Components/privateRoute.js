import {useEffect, useState} from 'react'
import { getParticularData } from '../utils/localstorage'

const usePrivateRoute = () => {
    const [token, setToken] = useState('')

    const isUserAuth = () => {
        const getToken = getParticularData('token')
        if(getToken){
            setToken(getToken)
        }
    }

    useEffect(()=>{
        isUserAuth()
    },[token])

    return [token]
}

export default usePrivateRoute
