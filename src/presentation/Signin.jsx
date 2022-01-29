import React from 'react'
import { FormGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CustomButton from '../Common/CustomButton'
import CustomForm from '../Common/CustomForm'
import CustomInput from '../Common/CustomInput'
import CustomLabel from '../Common/CustomLabel'
import CustomLine from '../Common/CustomLine'
import useSignIn from '../Components/signin'

const SignIn = () => {

    const [signIn, handleSignIn, handleSubmit, formData, handleGoogleSignIn,error] = useSignIn()

    return (
        <div className='container-fluid signup-page-container'>
            <div className='flex-box' >
            <div className='picture justify-content-center align-content-center'>
                <img alt="signup-img" src='./assets/login_password.svg' />        
            </div>
            <div className='main flex-box'>
                <div className='forms login-height'>
                    <img src='./assets/newsly_logo.svg' alt='newsly_logo'></img>
                    <h1 className='text-center'>Welcome back to Newsly</h1>
                    <div className='details'>
                        <CustomForm onSubmit={handleSubmit} className='form-padding' >
                            {
                                formData.map((data,i)=>{
                                    return(
                                        <FormGroup key={i} controlId={data.name}>
                                            <CustomLabel label={data.label} className='mb-0'>{data.label}</CustomLabel>
                                            <CustomInput className='input-focus' onChange={handleSignIn} type={data.type} placeholder={data.placeholder} value={data.value} name={data.name}/>
                                            <CustomLine className='alert-line' >{error[data.name]}</CustomLine>
                                        </FormGroup>
                                    )
                                })
                            }
                            <FormGroup className='margin-bottom' controlId="socialLogin" style={{ marginTop: '1.25rem' }}>
                                <CustomLabel label='Login With :' className="margin"/>
                                <div className='social-login'>
                                    <img src='./assets/icons8-google.svg' alt='google' onClick={handleGoogleSignIn}/>
                                    <img src='./assets/facebook.svg' alt='facebook'/>
                                </div>
                            </FormGroup>
                            <NavLink className="nav-otp" to="/login-with-otp">Login with OTP ?</NavLink>
                            <CustomButton type="submit" className='btn signup-btn' block >Login</CustomButton>
                            <p className='text-center already-account'>Don't have an account?<NavLink className='nav-already-login' to='/'>Signup</NavLink></p>
                        </CustomForm>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignIn
