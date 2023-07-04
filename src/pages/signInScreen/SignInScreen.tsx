import React from "react";
import "./SignInScreen.css"
const SignInScreen:React.FC=()=>{
    return(
        <>
        <div className="signIn__screen">
            <div className="signIn__screen__div">
                
           
            <form className="signIn__screen__form">
                <div className="signIn_title">Sign In</div>
                <input className="signIn__inp" type="email" placeholder="Email" />
                <input className="signIn__inp" type="password" placeholder="Password" />
                <button className="signIn__btn" type="submit">Sign In</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default SignInScreen;