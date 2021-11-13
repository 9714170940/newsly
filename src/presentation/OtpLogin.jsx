import React from 'react'
import { FormGroup } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import OtpInput from 'react-otp-input'
import CustomButton from '../Common/CustomButton'
import CustomForm from '../Common/CustomForm'
import CustomInput from '../Common/CustomInput'
import CustomLabel from '../Common/CustomLabel'
import useOtpSubmit from '../Components/otpSubmit'
import CustomLine from '../Common/CustomLine'

const OtpLogin = () => {

    const [check,user,handleChange,handleOtpChange,error,onOtpSubmit,checkVerifyUser, resendOtp] = useOtpSubmit()

    return (
        <div className='container-fluid signup-page-container'>
            <div className='flex-box' >
                <div className='picture justify-content-center align-content-center'>
                    <img alt="signup-img" src='./assets/otp_mobile.svg' />
                </div>
                <div className='main d-flex justify-content-center align-content-center' >
                    <div className='forms' style={{ height: '700px' }} >
                        <img className='mt-5' alt='logo' src='./assets/newsly_logo.svg' />
                        <h1 className='text-center otp-heading'>Let’s Get Started</h1>
                        <div className='details' >
                            <div className='otpForm' >
                                <h1 className='text-center'>Login with OTP</h1>
                                {check ?
                                    <CustomForm className='mb-3 otp_login' onSubmit={checkVerifyUser}>
                                        <div id='sign-in-button'></div>
                                        <OtpInput
                                            value={user.otpCode}
                                            onChange={handleOtpChange}
                                            numInputs={6}
                                            className='flex-box mb-2'
                                            isInputNum={false}
                                            separator={<span style={{ color: '#EEF2F5' }}>--</span>}
                                            inputStyle={{ width: '40px', height: '40px', border: 'none', borderRadius: '6px' }}
                                        />
                                        <CustomLine className='alert-line' >{error['otp']}</CustomLine>
                                         <NavLink className="mt-3 p-0 nav-otp" onClick={resendOtp} to="/login-with-otp">Resend OTP ?</NavLink>
                                        <CustomButton className='btn signup-btn' type="submit" block >Submit OTP</CustomButton>
                                    </CustomForm> :
                                    <CustomForm className='otp_login_mobile' onSubmit={onOtpSubmit}>
                                        <div id='sign-in-button'></div>
                                        <FormGroup controlId="formBasicName">
                                            <CustomLabel className='mb-0'>Mobile</CustomLabel>
                                            <CustomInput  className='input-focus' onChange={handleChange} type="number" placeholder="Enter mobile number" name="phone" value={user.phone} />
                                            <CustomLine className='alert-line' >{error['phone']}</CustomLine>
                                        </FormGroup>
                                        <CustomButton className='btn signup-btn' disabled={error['phone'] || !user.phone} type="submit" block >Send OTP</CustomButton>
                                    </CustomForm>
                                }
                            </div>
                            <p className='text-center'>Don't have an account?<NavLink className='nav-already-login' to='/'>Signup</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpLogin
