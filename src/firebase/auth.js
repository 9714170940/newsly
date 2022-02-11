/* eslint-disable no-unused-vars */
import firebase from './config';

export const captchaVerifier = (id,handleSubmit) => {
    console.log('id :', id)
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                handleSubmit();
                console.log(response);
                console.log('recaptcha verified');
            },
            defaultCountry: 'IN'
        });
}

export const signInPhoneNumber = (data,verifier) => {
    firebase.auth().signInWithPhoneNumber(data, verifier)
    .then((confirmationResult)=>{
        window.confirmationResult = confirmationResult;
        console.log('OTP has been send');
        return true;
    })
    .catch((error) => {
        console.log('error :', error?.message)
        return false;
    })
}

export const auth = firebase.auth()

export const logOut = async() => await auth.signOut()

export const googleAuthProvider = new firebase.auth.GithubAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();