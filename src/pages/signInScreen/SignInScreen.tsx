import React, { useEffect, useRef } from "react";
import "./SignInScreen.css"
import {auth} from "../../firebase"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const SignInScreen:React.FC=()=>{
    const emailRef=useRef<HTMLDivElement | any>()
    const passwordRef=useRef<HTMLDivElement | any>()
    const register=(e:React.SyntheticEvent):void=>{
        e.preventDefault();
       // const auth = getAuth();
createUserWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user",userCredential)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
        
    }
    
    const signIn=(e:React.SyntheticEvent)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,emailRef?.current?.value,passwordRef?.current?.value)
        .then((signIn)=>{
            console.log(signIn)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }
    useEffect(()=>{
      
    },[signIn])

    return(
        <>
        <div className="signIn__screen">
            <div className="signIn__screen__div">
                
           
            <form className="signIn__screen__form">
                <div className="signIn_title">Sign In</div>
                <input className="signIn__inp" ref={emailRef} type="email" placeholder="Email" />
                <input className="signIn__inp" ref={passwordRef} type="password" placeholder="Password" />
                <button className="signIn__btn" type="submit" onClick={(e)=>signIn(e)}>Sign In</button>
                <h5>
                    <span className="signup__screen__span"> New to Just Watch?</span>
                  <span className="signup__screen__span__link" onClick={(e)=>register(e)}>Sign Up now.</span> 
                </h5>
            </form>
            </div>
        </div>
        </>
    )
}

export default SignInScreen;