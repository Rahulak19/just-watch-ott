import React,{useEffect} from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomPage"
import Login from "./pages/login/Login"
import SignUpScreen from "./pages/signInScreen/SignInScreen"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import {login,logout, selectUser} from "./app/reducers/userReducer"

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
       // console.log(userAuth)
       dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
       }))
      }else{
       // console.log("not logged")
        dispatch(logout)
      }
    })
    return unsubscribe
  },[])
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={!user?(<Login />):(<HomePage />)}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUpScreen />}></Route>
        <Route path='/home' element={<HomePage />}></Route> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
