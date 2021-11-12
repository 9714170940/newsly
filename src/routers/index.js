import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import OtpLogin from '../presentation/OtpLogin'
import SignIn from '../presentation/Signin'
import Signup from '../presentation/Signup'
import Dashboard from "../presentation/Dashboard";
import Error from '../presentation/Error'

const Routing = () => {

    const routers = [
        {
            path: '/',
            components:Signup
        },
        {
            path: '/dashboard/:uid',
            components:Dashboard
        },
        {
            path: '/signup',
            components:Signup
        },
        {
            path: '/signIn',
            components:SignIn
        },
        {
            path: '/login',
            components:SignIn
        },
        {
            path: '/login-with-otp',
            components:OtpLogin
        }
    ]

    return (
        <Router>
            <Switch>
                {routers.map((data,i)=>{
                    return(
                        <Route exact key={i} path={data.path} component={data.components}/>
                    )
                })}
                <Route path='' component={Error} />
            </Switch>
        </Router>
    )
}

export default Routing
