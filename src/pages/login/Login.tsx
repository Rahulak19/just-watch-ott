import React, { useState } from "react";
import "./Login.css"
const Login:React.FC=()=>{
    const [signIn,setSignIn]=useState<Boolean>(false);
    return(
        <>
        <div className="login__screen">
            <div className="login__screen__back">
            <div className="page__title">Just Watch</div>
          <button className="login__screen__btn" onClick={()=>setSignIn(true)}>Sign In</button>
          <div className="loginScreeen_gradiant">
           <div className="login__content">
            <div className="login__content__title">
            Subscribe now and start unlimited streaming
            </div>
            <div className="login__content__title__sub">
            Ready to watch? Enter your email to create or restart your membership.
            </div>
            <form className="login__form">
            <div className="login__email__btn">
                
                <div className="email__inp">
                    <input className="login__email" placeholder="Email Address" type="email" />
                </div>
                <div className="btn__login__div"> <button 
                onClick={()=>setSignIn(true)}
                className="login__start__btn">Get Started</button></div>
                
            </div>
            </form>
           </div>
          </div>
            </div>
        </div>
        </>
    )
}

export default Login;