import React, { useState,useEffect,useRef } from "react";
import "./Login.css";
import SignInScreen from "../signInScreen/SignInScreen";
import SignUpScreen from "../signUpScreen/SignUpScreen";
const Login: React.FC = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const emailRef=useRef<HTMLDivElement | any>()
  useEffect(()=>{
    
  },[signIn,signUp])

  function signupForm(){
    setSignUp(true);
  }
  return (
    <>
      <div className="login__screen">
        <div className="login__screen__back">
          <div className="page__title">Just Watch</div>
         {!signIn?
        <button
        className="login__screen__btn"
        onClick={() => setSignIn(true)}
      >
        Sign In
      </button>
      :<></> 
        } 
          <div className="loginScreeen_gradiant">
            <div className="login__content">
                {signIn || signUp?(
                 signIn?
                    <SignInScreen  signUp={signUp} setSignUp={setSignUp} signIn={signIn} setSignIn={setSignIn}  />:<SignUpScreen signUp={signUp} setSignUp={setSignUp} signIn={signIn} setSignIn={setSignIn} emailId={emailRef?.current?.value} />
                ):(
                    <>
                    <div className="login__content__title">
                      Subscribe now and start unlimited streaming
                    </div>
                    <div className="login__content__title__sub">
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </div>
                    <form className="login__form" id="signup" onSubmit={()=>signupForm()}>
                      <div className="login__email__btn">
                        <div className="email__inp">
                          <input
                            className="login__email"
                            placeholder="Email Address"
                            type="email"
                            required={true}
                            ref={emailRef}
                          />
                        </div>
                        <div className="btn__login__div">
                          <button
                         form="signup"
                           // onClick={() => setSignIn(true)}
                            className="login__start__btn"
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                    </>
                )}
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
