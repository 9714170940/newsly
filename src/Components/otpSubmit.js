import {useState} from 'react'
import { captchaVerifier, signInPhoneNumber } from '../firebase/auth';
import { customValidation } from '../utils/customValidation';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'
import {setUserAuthId} from '../redux/actions/action'

const initialState = {
    phone: '',
    otpCode: '',
    responseText: 'dfd',
    uid: 'vdd'
}
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/

const useOtpSubmit = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    const [user, setUser] = useState(initialState);
    const [error, setError] = useState({})

    const handleChange = ({target}) => {
        const {name,value} = target;
        setUser({...user, [name]: value})
        setError({...error,[name]:customValidation(name,value)})
        
    }

    const handleOtpChange = (otpCode) => {
        setUser({otpCode})
        if(otpCode.length >= 6) {
            setError({...error,otp:''})
        }
    }

    const onOtpSubmit = (e) => {
        e.preventDefault()
        captchaVerifier('sign-in-button',onOtpSubmit)
        const phoneNumber = ("+91" + user.phone);
        const appVerifier = window.recaptchaVerifier;
        signInPhoneNumber(phoneNumber, appVerifier);
        if(!phoneNumber.match(mobileRegex)){
            setError({...error,phone:'Phone required*'})
        }else{
            setCheck(true);
        }
    }

    const resendOtp = () => {
        const phoneNumber = ("+91" + user.phone);
        const appVerifier = window.recaptchaVerifier;
        signInPhoneNumber(phoneNumber, appVerifier);
    }

    const checkVerifyUser = (e) => {
        e.preventDefault();
        const code = user.otpCode;
        console.log(code);
        if(code.length >= 6){
            window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log('user :', user)
            localStorage.setItem('token',user.Aa)
            dispatch(setUserAuthId(user.Aa))
            setTimeout(() => {
                history.push('/dashboard/'+user.uid)
            }, 1500);

            // ...
            }).catch((error) => {
                console.log('error :', error)
            // User couldn't sign in (bad verification code?)
            // ...
            });
        }else{
            setError({...error,otp:'OTP Required*'})
        }
    }


    return [check,user,handleChange,handleOtpChange,error,onOtpSubmit,checkVerifyUser, resendOtp]
}

export default useOtpSubmit
