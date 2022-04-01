import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import OtpLogin from '../presentation/OtpLogin'
import SignIn from '../presentation/Signin'
import Signup from '../presentation/Signup'
import Dashboard from "../presentation/Dashboard";
import { clearAllData, getParticularData } from '../utils/localstorage'
import { isTokenExpired } from '../utils/function'
import { useSelector } from 'react-redux'

const Routing = ({validate}) => {

    const token = getParticularData('token')
    const isLogin = useSelector(({userAuth}) => userAuth?.isLoginSuccess)

    const validationSession = () => {
        if (isLogin || validate){
            return true
        }else{
            clearAllData()
            return false
        }
    }

    const routers = [
        {
            path: '/',
            components:Signup,
            isAuth: true,
            exact: true,
            redirectUrl: '/dashboard'
        },
        {
            path: '/signup',
            components:Signup,
            isAuth: true,
            exact: true,
            redirectUrl: '/dashboard'
        },
        {
            path: '/signIn',
            components:SignIn,
            isAuth: true,
            exact: true,
            redirectUrl: '/dashboard'
        },
        {
            path: '/login',
            components:SignIn,
            isAuth: true,
            exact: true,
            redirectUrl: '/dashboard'
        },
        {
            path: '/login-with-otp',
            components:OtpLogin,
            isAuth: true,
            exact: true,
            redirectUrl: '/dashboard'
        },
        {
            path: '/dashboard',
            components: Dashboard,
            isAuth: false,
            exact: false,
            redirectUrl: '/login'
        }
    ]

    console.log('isTokenExpired(token)', isTokenExpired(token))

    const SelectComponents = (isAuth, path, redirectUrl, Component, props) => {
        if(isAuth){
            return (!isTokenExpired(token)) || validationSession() ? <Redirect to={`${redirectUrl}`} /> : <Component {...props}/>
        }else{
            return (!isTokenExpired(token)) || validationSession() ? <Component {...props}/> : <Redirect to={`${redirectUrl}`}/>
        }   
    }

    return (
        <Router>
            <Switch>
                {routers.map(({exact, isAuth, path, redirectUrl, components:Component},index)=>{
                    return(
                        <Route exact={exact} {...routers} key={index} path={path} 
                            render={(props) => SelectComponents(isAuth, path, redirectUrl, Component, props)}
                        />
                    )
                })}
                <Redirect to='/dashboard' />
            </Switch>
        </Router>
    )
}

export default Routing
