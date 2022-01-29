import {useState} from 'react'
import firebase from 'firebase'
import { setUserAuthId } from '../redux/actions/action'
import { customValidation } from '../utils/customValidation'
import { addParticularData } from '../utils/localstorage'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase/auth'
import { useHistory } from 'react-router'
import { decodeData } from '../utils/function'

const initialState = {
    fullName: '',
    email: '',
    password: '',
    cPassword: '',
}

const useSignup = () => {

    const dispatch = useDispatch()
    const history = useHistory()
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

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then((result) => {
            addParticularData('token',result?.user?.Aa)
            const data = decodeData(result?.user?.Aa)
            const obj = {
                id: data?.user_id,
                authId: data?.user_id,
                logged: data?.user_id ? true : false,
                isLoginSuccess: data?.user_id ? true : false,
                user: data
            }
            dispatch(setUserAuthId(obj))
            history.push('/dashboard/'+result?.user?.uid)

        }).catch((error) => {
            console.log('error :', error)
        })
    }

    return [signup, handleSignup, formData, submitForm, handleGoogleSignIn, error]
}

export default useSignup
