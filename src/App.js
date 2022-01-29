import React, { useEffect } from "react";
import 'antd/dist/antd.css';
import './App.css';
import Routing from "./routers";
import { getParticularData } from "./utils/localstorage";
import { useDispatch } from "react-redux";
import { decodeData } from "./utils/function";
import { setUserAuthId } from "./redux/actions/action";


function App() {

  const token = getParticularData('token')
  const dispatch = useDispatch()

  useEffect(() => {
    if(token){
      const data =  decodeData(token)
      const object = {
        id: data?.user_id,
        authId: data?.user_id,
        logged: data?.user_id ? true : false,
        isLoginSuccess: data?.user_id ? true : false,
        user: data
    }
      dispatch(setUserAuthId(object))
    }
  },[dispatch, token])

  return (
    <>
      <Routing/>
    </>
  );
}

export default App;
