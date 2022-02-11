import { useState } from "react";
import firebase from "firebase";
import { setUserAuthId } from "../redux/actions/action";
import { customValidation } from "../utils/customValidation";
import { addParticularData } from "../utils/localstorage";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/auth";
import { decodeData } from "../utils/function";
import { storeData } from "../firebase/firestore";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  cPassword: "",
};

const useSignup = () => {
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(initialState);
  const [error, setError] = useState({});

  const handleSignup = ({ target }) => {
    const { name, value } = target;
    setSignup({ ...signup, [name]: value });
    setError({ ...error, [name]: customValidation(name, value) });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { email, password, fullName, cPassword } = signup;
    let errorObject = {};
    const userData = {
      full_name: fullName, 
      email, 
      password: password, 
      confirm_password: cPassword 
    }
    Object.keys(signup).forEach((data) => {
      errorObject[data] = customValidation(data, signup[data]);
    });
    if (!Object.values(errorObject).includes("")) {
      console.log("done :", Object.values(errorObject));
      setError(errorObject);
      return;
    }
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("userCredentials :", response);
      if(response){
        await response.user?.sendEmailVerification({
          url: 'http://localhost:3000/login?confirm_email=true'
        })
        await storeData('Users', response.user?.uid, userData)
      }
      return response;
    } catch (error) {
        console.log('error.code', error.code);
    }
  };

  const formData = [
    {
      name: "fullName",
      value: signup.fullName,
      label: "Full Name",
      type: "text",
      placeholder: "Ronak kapadi",
    },
    {
      name: "email",
      value: signup.email,
      label: "Email Address",
      type: "email",
      placeholder: "someone@gmail.xyz",
    },
    {
      name: "password",
      value: signup.password,
      label: "Password",
      type: "password",
      placeholder: "************",
    },
    {
      name: "cPassword",
      value: signup.cPassword,
      label: "Confirm Password",
      type: "password",
      placeholder: "************",
    },
  ];

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        addParticularData("token", result?.user?.Aa);
        const data = decodeData(result?.user?.Aa);
        const obj = {
          id: data?.user_id,
          authId: data?.user_id,
          logged: data?.user_id ? true : false,
          isLoginSuccess: data?.user_id ? true : false,
          user: data,
        };
        dispatch(setUserAuthId(obj));
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };

  return [
    signup,
    handleSignup,
    formData,
    submitForm,
    handleGoogleSignIn,
    error,
  ];
};

export default useSignup;
