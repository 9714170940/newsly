import {useState} from 'react'
import { customValidation } from '../utils/customValidation'
const initialState = {
    fullName: '',
    email: '',
    password: '',
    cPassword: '',
}

const useSignup = () => {

    const [signup, setSignup] = useState(initialState)
    const [error, setError] = useState({})

    const handleSignup = ({target}) => {
        const {name, value} = target
        setSignup({...signup,[name]:value})
        setError({...error,[name]:customValidation(name,value)})
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    console.log('error :', error)

    const formData = [
        {
            name:'fullName',
            value:signup.fullName,
            label:"Full Name",
            type: 'text',
            placeholder: 'Ronak kapadi'
        },
        {
            name:'email',
            value:signup.email,
            label:"Email Address",
            type: 'email',
            placeholder: 'someone@gmail.xyz'
        },
        {
            name:'password',
            value:signup.password,
            label:"Password",
            type: 'password',
            placeholder: '************'
        },
        {
            name:'cPassword',
            value:signup.cPassword,
            label:"Confirm Password",
            type: 'password',
            placeholder: '************'
        }
    ]

    return [signup, handleSignup, formData, submitForm, error]
}

export default useSignup
