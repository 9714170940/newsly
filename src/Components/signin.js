import {useState} from 'react'
import { customValidation } from '../utils/customValidation'

const initialState = {
    email: '',
    password: '',
}

const useSignIn = () => {

    const [signIn, setSignIn] = useState(initialState)
    const [error, setError] = useState({})

    const handleSignIn = ({target}) => {
        const {name,value} = target
        setSignIn({...signIn,[name]:value})
        setError({...error,[name]:customValidation(name,value)})
    }

    const formData = [
        {
            name:'email',
            value:signIn.email,
            label:"Email Address",
            type: 'email',
            placeholder: 'someone@gmail.xyz'
        },
        {
            name:'password',
            value:signIn.password,
            label:"Password",
            type: 'password',
            placeholder: '************'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('signIn :', signIn)
    }

    return [signIn, handleSignIn, handleSubmit, formData, error]
}

export default useSignIn
