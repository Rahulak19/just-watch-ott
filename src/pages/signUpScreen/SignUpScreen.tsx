import React, { Dispatch, SetStateAction, useEffect, useRef,useState } from "react";
import "./SignUpScreen.css"
import {auth} from "../../firebase"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../app/reducers/userReducer";
interface Props{
    signUp:boolean;
    setSignUp:(val: boolean) => void;
    signIn:boolean;
    setSignIn:(val: boolean) => void;
    emailId:string
}
const SignUpScreen:React.FC<Props>=(props:Props)=>{
    const dispatch=useDispatch();
    const emailRef=useRef<HTMLDivElement | any>("msm")
    const passwordRef=useRef<HTMLDivElement | any>()
   // console.log(emailRef)
    const register=async(e:React.SyntheticEvent):Promise<void>=>{
        e.preventDefault();
       // const auth = getAuth();
await createUserWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
  .then(async(userCredential) => {
    // Signed in 
   // const user = userCredential.user;
   // console.log("user",userCredential)
     handleLogout();
    alert("User Created Successfully")
    // ...
  })
  .catch((error) => {
   // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  props.setSignIn(true);
  props.setSignUp(false);
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
     // console.log("logged out")
      props.setSignIn(true);
      props.setSignUp(false);
    }).catch((error) => {
      // An error happened.
     // console.log("error",error)
    });
    dispatch(logout());
        
    }

    return(
        <>
       <div className="signUp__screen">
            <div className="signUp__screen__div">           
            <form className="signUp__screen__form">
                <div className="signUp_title">Sign Up</div>
                <input className="signUp__inp"  type="text" placeholder="Firstname" />
                <input className="signUp__inp" type="text" placeholder="Lastname" />
                <input className="signUp__inp" value={props.emailId} ref={emailRef} type="email" placeholder="Email" />
                <input className="signUp__inp" ref={passwordRef} type="password" placeholder="Password" />
                <button className="signUp__btn" type="submit" onClick={(e)=>register(e)}>Sign Up</button>
            </form>
            </div>
        </div>
        </>
       
    )
}

export default SignUpScreen;