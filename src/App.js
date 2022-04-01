import React, { useEffect, useState } from "react";
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
  const [validate, setValidate] = useState(false)

  console.log('data', decodeData(token))

  useEffect(() => {
    if(token){
      validation()
    }
  // eslint-disable-next-line
  },[token])

  const validation = async() => {
    try {
      const data =  await decodeData(token)
      const object = {
        id: data?.user_id,
        authId: data?.user_id,
        logged: !!data?.user_id,
        isLoginSuccess: !!data?.user_id,
        user: data
    }
      setValidate(object.isLoginSuccess)
      dispatch(setUserAuthId(object))
    } catch (error) {
      console.log('error :', error)
    }
  }

  return (
    <>
      <Routing {...{validate}} />
    </>
  );
}

export default App;
